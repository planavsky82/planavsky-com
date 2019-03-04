#!/usr/bin/env sh

# if Linux server is new, configure root for ssh
# vi /etc/ssh/sshd_config
# PermitRootLogin yes
# reboot

# ssh
if [ $1 = "ssh" ] || [ $1 = "" ]; then 
  ssh-keygen
  ssh-copy-id root@192.169.200.149
fi

# bash profile and rc
if [ $1 = "bash" ] || [ $1 = "" ]; then 
  scp -r ./config/.bashrc root@192.169.200.149:~
  scp -r ./config/.bash_profile root@192.169.200.149:~
fi

# nvm
if [ $1 = "nvm" ] || [ $1 = "" ]; then 
  ssh root@192.169.200.149 'rm -rf ~/.nvm'
  ssh root@192.169.200.149 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash'
  ssh root@192.169.200.149 'nvm install node'
  ssh root@192.169.200.149 'node -v'
fi

# nginx (setup and create www directories)
if [ $1 = "nginx" ] || [ $1 = "" ]; then 
  ssh root@192.169.200.149 'yum install epel-release'
  ssh root@192.169.200.149 'yum install nginx'
fi

# configure nginx 
# move config files to server

# client apps
if [ $1 = "client" ] || [ $1 = "" ]; then 
  ./deploy.sh
fi

# setup api
if [ $1 = "api" ] || [ $1 = "" ]; then
  ./setup-api.sh
fi

# start api
if [ $1 = "start-api" ] || [ $1 = "" ]; then
  ssh root@192.169.200.149 'npm install -g pm2'
  ssh root@192.169.200.149 'pm2 start /var/www/planavsky.com/api/server.js'
  ssh root@192.169.200.149 'pm2 list'
fi

# database
# set up service to run db
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
if [ $1 = "db" ] || [ $1 = "" ]; then
  scp -r ./config/mongodb-org-4.0.repo root@192.169.200.149:/etc/yum.repos.d/
  ssh root@192.169.200.149 'yum install -y mongodb-org'
  ssh root@192.169.200.149 'mkdir -p /data/db'
  ssh root@192.169.200.149 'service mongod start'
fi

# populate data
if [ $1 = "generate-api" ] || [ $1 = "" ]; then
  ssh root@192.169.200.149 'npm install -g pm2'
  ssh root@192.169.200.149 'pm2 start /var/www/planavsky.com/api/server.js'
  ssh root@192.169.200.149 'pm2 list'
fi

# start nginx and mongodb
# ssh root@192.169.200.149 'nx-start' from .bashrc
if [ $1 = "start" ] || [ $1 = "" ]; then 
  ssh root@192.169.200.149 'fuser -k 80/tcp && service httpd stop | true && service nginx start && service mongod stop && service mongod start'
fi
