#!/usr/bin/env sh

echo 'FINALIZE DEPLOYMENT...';
echo 'xxxxxxxxxxxxxxx';
echo $TRAVIS_PULL_REQUEST_BRANCH;
if [$TRAVIS_PULL_REQUEST_BRANCH -eq '']
  then
	echo "RUN VERSION UPDATE."
	git status
	git remote rm origin
	git remote add origin https://planavsky82:${GH_TOKEN_2}@github.com/planavsky82/planavsky-com.git
	git config --global user.email "travis"
	git config --global user.name "travis"
	git fetch
	git checkout staging --force
	git status
  echo "STATUS COMPLETE."
  ls
  echo "BUMP PATCH."
	npm version patch -m "Upgrade to %s + patch for next version [ci skip]"
	git status
	git show --name-only
  echo "START PUSH."
  git add package.json
  git commit -m "Bump patch for next version [ci skip]"
	git push -f -q origin staging
  git push -q origin --tags
	#echo 'START SERVER DEPLOYMENT.';
	#npm run build:ultimate-list-demo -- --prod
  #cd dist/ultimate-list
  #ls
  #for i in $(ls); 
  #do curl --ftp-create-dirs -Q "DELE $i" -u $FTP_USER_TCI:$FTP_PWD_TCI ftp://192.169.200.149/temp-dir/
  #done;
  #cd images
  #for i in $(ls); 
  #do curl --upload-file "$i" -u $FTP_USER_TCI:$FTP_PWD_TCI ftp://192.169.200.149/temp-dir/images/
  #done;
  #cd ..
  #for i in $(ls); 
  #do curl --upload-file "$i" -u $FTP_USER_TCI:$FTP_PWD_TCI ftp://192.169.200.149/temp-dir/
  #done;
fi  

echo 'CI Process Complete.';
