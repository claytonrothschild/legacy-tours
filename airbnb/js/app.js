//ENTRY PAGE
var launchElement = document.getElementById( 'launch-page' );
var enterElement = document.getElementById( 'enter-button' );
var logoElement = document.getElementById( 'logo' );
var panorama, panorama_video, viewer, container, infospot;
var maskElement = document.getElementById( 'progress-container-mask' );

var hoverSeeMore = document.getElementById('hoverSeeMore');
var hoverViewSpecialOffer = document.getElementById('hoverViewSpecialOffer');
var hoverGoHome = document.getElementById('hoverGoHome');
var hoverGoToNextRoom = document.getElementById('hoverGoToNextRoom');

 var audio = new Audio('https://bigdatahomes.azureedge.net/assets/demos/airbnb/1.mp3');
 audio.loop = true;




maskElement.classList.add( 'ready' );
// set up container
container = document.querySelector( '#container' );

enterElement.addEventListener( 'mouseenter', function() {

  // SOUND_OVER && SOUND_OVER.play();

}, true );

enterElement.addEventListener( 'mouseleave', function() {

  // SOUND_OVER && SOUND_OVER.stop();

}, true );

logoElement.addEventListener( 'click', function() {

	viewer.setPanorama(panorama);


}, true );

enterElement.addEventListener( 'click', function(){

  if (!launchElement.classList.contains( 'hide' ) ) {
    // SOUND_CLICK.play();
    launchElement.classList.add( 'hide' );
    setTimeout(function(){
      panorama;
    }, 1500);
audio.play();

  }

}, false );




// set up initial pano
panorama = new PANOLENS.EmptyPanorama();
panorama1 = new PANOLENS.ImagePanorama('https://bigdatahomes.azureedge.net/assets/demos/airbnb/1.jpg');
// initial view for pano1
panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2017.5, -277.09, 4562.29), 0 );
} );
panorama2 = new PANOLENS.ImagePanorama('https://bigdatahomes.azureedge.net/assets/demos/airbnb/2.jpg');
// initial view for pano2
panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4678.04, -33.31, -1742.66), 0 );
} );
panorama3 = new PANOLENS.ImagePanorama('https://bigdatahomes.azureedge.net/assets/demos/airbnb/3.jpg');
panorama4 = new PANOLENS.ImagePanorama('https://bigdatahomes.azureedge.net/assets/demos/airbnb/4.jpg');

var scene1Infospot = new PANOLENS.Infospot(0, 'https://bigdatahomes.azureedge.net/assets/demos/airbnb/thumb1.png');
scene1Infospot.position.set(775, 26.18, -700.12);
scene1Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama1 );
} );

var scene2Infospot = new PANOLENS.Infospot(0, 'https://bigdatahomes.azureedge.net/assets/demos/airbnb/thumb2.png');
scene2Infospot.position.set(265, 26.18, -765.12);
scene2Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

var scene3Infospot = new PANOLENS.Infospot(0, 'https://bigdatahomes.azureedge.net/assets/demos/airbnb/thumb3.png');
scene3Infospot.position.set(-265, 26.18, -792.12);
scene3Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama3 );
} );

var scene4Infospot = new PANOLENS.Infospot(0, 'https://bigdatahomes.azureedge.net/assets/demos/airbnb/thumb4.png');
scene4Infospot.position.set(-775, 26.18, -792.12);
scene4Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama4 );
} );

var instructionsInfospot = new PANOLENS.Infospot(700, 'https://bigdatahomes.azureedge.net/assets/demos/airbnb/instructions.png');
instructionsInfospot.position.set(220.09, -1658.37, -4664.48);
instructionsInfospot.scaleFactor = 1;


// Intrascene infospots

var goToScene1Infospot = new PANOLENS.Infospot(450, PANOLENS.DataImage.Arrow);
goToScene1Infospot.position.set(4550.69, -650.52, 1949.96);
goToScene1Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama1 );
} );
goToScene1Infospot.addHoverText( "Go to Kitchen and Dining", 40 );

var goToScene2Infospot = new PANOLENS.Infospot(450, PANOLENS.DataImage.Arrow);
goToScene2Infospot.position.set(-4971.16, -494.43, -25.55);
goToScene2Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );
goToScene2Infospot.addHoverText( "Go to Living Room", 40 );

var goToScene3Infospot = new PANOLENS.Infospot(450, PANOLENS.DataImage.Arrow);
goToScene3Infospot.position.set(-4207.66, -283.36, -2668.17);
goToScene3Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama3 );
} );
goToScene3Infospot.addHoverText( "Go to Family Room", 40 );

var goToScene4Infospot = new PANOLENS.Infospot(450, PANOLENS.DataImage.Arrow);
goToScene4Infospot.position.set(3801.86, -510.03, -3192.72);
goToScene4Infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama4 );
} );
goToScene4Infospot.addHoverText( "Go to Bedroom", 40 );

// Add Infospots to all panoramas
AddInfospotsToPanoramas()

panorama.add(scene1Infospot,scene2Infospot,scene3Infospot,scene4Infospot, instructionsInfospot );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter(  new THREE.Vector3(100.66, -50.56, -1045.44), 0 );
} );

// set up a viewer, and add the panos to the viewer
viewer = new PANOLENS.Viewer( { container: container, controlBar: true, controlButtons: [], autoHideInfospot: false, horizontalView: false, output: 'console'} );
viewer.add(panorama,panorama1,panorama2,panorama3,panorama4 );
viewer.camera.fov = 87;
//this is unnacceptably hacky. 
// viewerFullFov = new PANOLENS.Viewer( { container: container, controlBar: true, controlButtons: [], autoHideInfospot: false, horizontalView: false, output: 'console'} );
// viewerFullFov.add(panorama,panorama1,panorama2,panorama3,panorama4 );


// Modal
(function() {
  /* Opening modal window function */
  function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName('jsModalTrigger');

      /* Set onclick event handler for all trigger elements */
      for(var i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            var target = this.getAttribute('href').substr(1);
            var modalWindow = document.getElementById(target);
            console.log("opened modal");
            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
  }

  function closeModal(){
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   

    /* Set onclick event handler for modal overlay */
      for(var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          var modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
}());

viewer.addEventListener( 'panolens-dual-eye-effect', function() {
              var sidebar = document.getElementById('sidenav');
              sidebar.classList.add( 'hide' );
              sidebar.style.display = 'none';

              if (event.mode === PANOLENS.Modes.NORMAL){
                sidebar.classList.remove( 'hide' );
                  sidebar.style.display = 'block';
              };
}, true );

function ToggleMenu(x) {
    x.classList.toggle("change");
    var sidebar = document.getElementById('sidenav');
    sidebar.classList.toggle("open");
    if (vr) {
    viewer.camera.fov = viewer.camera.fov / 1.10;
    viewer.disableEffect();  
    sidebar.classList.toggle("vr");
    vr = false;
        document.getElementsByClassName('menuCollapseButton')[0].classList.toggle("vr");
  }
}

var vr = false;      
var vrTrigger = document.getElementsByClassName('vrTrigger');

vrTrigger[0].addEventListener( 'click', function(){ 
    
    viewer.camera.fov = viewer.camera.fov * 1.10;
    viewer.enableEffect( PANOLENS.Modes.CARDBOARD );
    
        ToggleMenu(document.getElementsByClassName('menuCollapseButton')[0]);
                var sidebar = document.getElementById('sidenav');
    sidebar.classList.toggle("vr");
    vr = true;
    document.getElementsByClassName('menuCollapseButton')[0].classList.toggle("vr");
    })

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    viewer.enableControl( PANOLENS.Controls.DEVICEORIENTATION );
}

function AddInfospotsToPanoramas() {
  panorama1.add(goToScene2Infospot );
  panorama2.add(goToScene3Infospot );
  panorama3.add(goToScene4Infospot );
  panorama4.add(goToScene1Infospot );
}

function setPanorama(panorama){
  viewer.setPanorama(panorama);
  var modalWindow = document.getElementById('jsModal');
  modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

  //style add color: #f1f1f1;
}

var playing = true;
var audioBtn = document.getElementsByClassName("audioButton")[0];
  audioBtn.addEventListener( 'click', function(){
  
    if (playing == true) {
      audio.pause()
      playing = false;
    document.getElementsByClassName("audioOn")[0].style.display = 'none';
      document.getElementsByClassName("audioOff")[0].style.display = 'inline';}
      else {audio.play()
        playing = true;
    document.getElementsByClassName("audioOn")[0].style.display = 'inline';
      document.getElementsByClassName("audioOff")[0].style.display = 'none';}

});










// junk

// placesOfInterestPanorama = new PANOLENS.GoogleStreetviewPanorama( '4oAEzCG8UKYNY1djKOATdw' );
// placesOfInterestPanorama.position.set( 0, 0, 0 );

// var houstonInfospot = new PANOLENS.Infospot(500,'5.jpg');
// houstonInfospot.position.set(800, 0, -1000);
// houstonInfospot.addEventListener( 'click', function(){
//   viewer.setPanorama( placesOfInterestPanorama );
// } );

// // Places of Interest infospots
// riceInfoSpot = new PANOLENS.Infospot( 350, '' );
//       riceInfoSpot.position.set( -3720.82, -1006.57, -224.71 );
//       riceInfoSpot.addHoverElement( document.getElementsByClassName( 'modal__container' )[0], 200 );

// placesOfInterestPanorama.add(riceInfoSpot );
