#!/usr/bin/env sh


# ng-step
echo 'ng-step ...'
rm -rf ng-step
git clone https://github.com/planavsky82/ng-step-build.git ng-step
cd ng-step
echo 'make new ng-step directory ...'
ssh planavsky_ftp@192.169.200.149 'mkdir planavsky.com/public_html/ng-step'
echo 'copying new files ...'
for i in $(ls); 
do scp -r $i planavsky_ftp@192.169.200.149:/var/www/planavsky.com/public_html/ng-step;
done;
cd ..
cd ..
