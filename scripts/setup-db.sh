#!/usr/bin/env sh

#https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/

# 1
#vi /etc/yum.repos.d/mongodb-org-4.0.repo

# 2
#[mongodb-org-4.0]
#name=MongoDB Repository
#baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
#gpgcheck=1
#enabled=1
#gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

# 3 
#yum install -y mongodb-org

# 4
#mkdir -p /data/db

# service mongod start

mongo




