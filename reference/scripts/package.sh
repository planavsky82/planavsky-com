#!/usr/bin/env sh

echo $TRAVIS_PULL_REQUEST_BRANCH;
if [$TRAVIS_PULL_REQUEST_BRANCH -eq '']
  then
	echo "RUN NPM PUBLISHING."
	npm run packagr
	cd dist
	npm pack 
	ls
fi

echo 'Package Build Complete.';
