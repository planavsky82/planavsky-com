#!/usr/bin/env sh

echo 'Cloning planavsky-com ...'
rm -rf planavsky-com-deploy
git clone https://github.com/planavsky82/planavsky-com.git planavsky-com-deploy
cd planavsky-com-deploy
ls
echo 'npm install ...'
npm i

ultimate list demo
echo 'ultimate list demo ...'
npm run build:ul-demo
cd dist/ultimate-list-demo
echo 'deleting current files ...'
ssh planavsky_ftp@192.169.200.149 'cd planavsky.com/public_html/ultimate-list && rm -rf *'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www/planavsky.com/public_html/ultimate-list;
done;