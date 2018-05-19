#Deployment

The prod for this site lives on a digitalocean droplet:
prod.tourrhino.com

This droplet runs nginx and has two serverblocks: app.tourrhino.com and view.tourrhino.com

To deploy, add a remote branch:
git remote add prod ssh://rhinoadmin@prod.tourrhino.com/var/repo/view.tourhino.com.git

then push to that branch
git push prod master

on the server, our working directories look like this
/var/repo
/var/www

/var/repo contains a bare .git repo for our app. It has a post-receive hook to copy files to our www nginx directory.
/var/www contains the html files for our application. The app is in /var/www/view.tourrhino.com


