#!/usr/bin/env sh

# https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
# var compression = require('compression');
# var helmet = require('helmet');
echo 'api ...'
cd ..
cd api
rm -rf node_modules
npm i
echo 'deleting current files ...'
ssh planavsky@192.169.200.149 'rm -rf /var/www/planavsky.com/api'
ssh planavsky@192.169.200.149 'mkdir /var/www/planavsky.com/api'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky@192.169.200.149:/var/www/planavsky.com/api;
done;
