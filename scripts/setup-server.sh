#!/usr/bin/env sh

# if Linux server is new, configure root for ssh
# vi /etc/ssh/sshd_config
# PermitRootLogin yes
# reboot

# ssh
ssh-keygen
ssh-copy-id root@192.169.200.149

# bash profile and rc
scp -r ./bash-config/.bashrc root@192.169.200.149:~
scp -r ./bash-config/.bash_profile root@192.169.200.149:~

# nvm
ssh root@192.169.200.149 'rm -rf ~/.nvm'
ssh root@192.169.200.149 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash'
ssh root@192.169.200.149 'nvm install node'
ssh root@192.169.200.149 'node -v'

# nginx (setup and create www directories)

# start nginx
# ssh root@192.169.200.149 'nx-start'

# client apps
./deploy.sh

# api
./setup-api.sh

# database
# set up service to run db
# ssh root@192.169.200.149 'cp ./setup-db && ./setup-db'

# populate data
