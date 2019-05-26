# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias t='top'
alias br='vi ~/.bashrc'
alias bp='vi ~/.bash_profile'

# nginx
# https://www.godaddy.com/garage/how-to-install-and-configure-nginx-on-centos-7/
alias nx='cd /etc/nginx'
alias nx-config='cd /etc/nginx/conf.d && vi default.conf'
alias nx-start='service httpd stop | true && service nginx start && service mongod stop && service mongod start'
alias nx-www='cd /usr/share/nginx/html'
alias nx-public-html='cd /var/www'
alias nx-global-site-config='vi /etc/nginx/nginx.conf'

# vsftpd
alias vs='cd /etc/vsftpd/'
alias vs-config='vi /etc/vsftpd/vsftpd.conf'
# set up new system user and apply to vsftpd: http://linux-hacks.blogspot.com/2008/09/adding-new-users-to-vsftpd.html
# - kill -9 $process-id
# - usermod --home /var/www/ username
# user permission: https://askubuntu.com/questions/487527/give-specific-user-permission-to-write-to-a-folder-using-w-notation

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi