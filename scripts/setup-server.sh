#!/usr/bin/env sh

# if Linux server is new, manually setup initial user 'planavsky'
# give permissions to /var/www/: chown planavsky: /var/www

# ssh
ssh-keygen
ssh-copy-id planavsky@192.169.200.149

# bash profile and rc
scp -r ./bash-config/.bashrc planavsky@192.169.200.149:~
scp -r ./bash-config/.bash_profile planavsky@192.169.200.149:~

# nvm
ssh planavsky@192.169.200.149 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ssh planavsky@192.169.200.149 'node -v'

# nginx (setup and create www directories)

# start nginx

# client apps
./deploy.sh

# api
./setup-api.sh

# database
# set up service to run db
# ssh planavsky@192.169.200.149 'cp ./setup-db && ./setup-db'

# populate data
