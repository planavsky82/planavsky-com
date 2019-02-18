# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin

export PATH

function search() {
  grep -rnw $1 -e $2;
}
# example: search '/etc/nginx' '80'

function write_permission() {
  chmod 755 $1;
}

function folder_details() {
  ls -l $1;
}

function vs-set-permission() {
  chown planavsky_ftp: $1 && sudo chmod u+w $1 && service vsftpd restart;
}

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh