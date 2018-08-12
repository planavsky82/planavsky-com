#!/usr/bin/env sh

# echo 'Cloning planavsky-com ...'
rm -rf planavsky-com-deploy
git clone https://github.com/planavsky82/planavsky-com.git planavsky-com-deploy
cd planavsky-com-deploy
echo 'npm install ...'
npm i

# planavsky-com ...
echo 'planavsky-com ...'
npm run build:planavsky
cd dist/planavsky-com
echo 'deleting current files ...'
ssh planavsky_ftp@192.169.200.149 'cd planavsky.com/public_html && rm -rf *'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www/planavsky.com/public_html;
done;
cd ..
cd ..

# ultimate list demo
echo 'ultimate list demo ...'
npm run build:ul-demo
cd dist/ultimate-list-demo
echo 'replace main image path ...'
sed -i "" "s|/./assets|./assets|" main.*
echo 'make new ultimate list directory ...'
ssh planavsky_ftp@192.169.200.149 'mkdir planavsky.com/public_html/ultimate-list'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www/planavsky.com/public_html/ultimate-list;
done;
cd ..
cd ..

# mffr
echo 'mffr ...'
npm run build:mffr
cd dist/mffr
echo 'deleting current files ...'
ssh planavsky_ftp@192.169.200.149 'cd myfantasyfootballrankings.com/public_html && rm -rf *'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www/myfantasyfootballrankings.com/public_html;
done;
cd ..
cd ..
