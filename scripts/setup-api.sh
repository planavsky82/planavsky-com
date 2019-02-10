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
cd ..
chmod -R 755 api
cd api
echo 'deleting current files ...'
ssh planavsky_ftp@192.169.200.149 'rm -rf api'
ssh planavsky_ftp@192.169.200.149 'mkdir api'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www;
done;
