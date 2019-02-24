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
  scp -r ./bash-config/.bashrc root@192.169.200.149:~
  scp -r ./bash-config/.bash_profile root@192.169.200.149:~
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

# start nginx
# ssh root@192.169.200.149 'nx-start' from .bashrc

# client apps
if [ $1 = "client" ] || [ $1 = "" ]; then 
  ./deploy.sh
fi

# api
if [ $1 = "api" ] || [ $1 = "" ]; then
  ./setup-api.sh
fi

# database
# set up service to run db
# ssh root@192.169.200.149 'cp ./setup-db && ./setup-db'

# populate data
