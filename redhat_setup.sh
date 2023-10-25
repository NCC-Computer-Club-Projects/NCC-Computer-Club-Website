#!/bin/bash
# Check line 34 to line 43 for http.conf
# Check line 58 to line 64 for ssl.conf
if [ $EUID ! = "0" ] 
    then echo "Run Script with sudo. Do: sudo ./redhat_setup"
    exit
fi

# Necessary update and installing Apache, 

yum update -y # Installs necessary package updates
yum install httpd -y # Installs Apache
yum install mod_ssl -y # Installs mod_ssl (Strong Cryptography module for Apache)
yum install firewalld -y # Installs Firewalld

# Setting up Firewalld (Closes all port by default)

systemctl start firewalld
systemctl enable firewalld
firewall-cmd --set-log-denied=all # Logs all denied packets
firewall-cmd --permanent --add-service=ssh # Opens port 22
firewall-cmd --permanent --add-service=https # Opens port 443
firewall-cmd --reload # Reloads the firewall to emplement all new rules

# Setting up Apache through sed

echo "Before running this, check the /etc/httpd/conf directory and see which file is present, select the proper one"
echo "1 httpd.conf"
echo "2 ssl.conf"
read -r $response
    case $response in

        1)
            config_file_httpd="/etc/httpd/conf/httpd.conf"
                if [ -f "$config_file_httpd" ]; then
                    sed -i '/#LoadModule ssl_module modules\/mod_ssl.so/a\LoadModule ssl_module modules/mod_ssl.so' "$config_file_httpd" # Inserts LoadModule line
                    sed -i '/<VirtualHost \*:443>/a\
                    # INSERT SERVER NAME # # INSERT DOMAIN.com #\
                    DocumentRoot /var/www/html\
                    \\n\
                    SSLEngine on\
                    SSLCertificate # INSERT PATH TO SSL CERTIFICATE #\
                    SSLCertificateKeyFile # INSERT PATH TO SSL PRIVATE KEY #\
                    SSLCertificateChainFile # INSERT SSL CERTIFICATE BUNDLE #\
                    ' "$config_file_httpd"
                    echo "Lines add to $config_file_httpd"
                    systemctl restart httpd
                else
                    echo "Error: $config_file_htppd does not exist"
                fi
                ;;
            
            2)
                config_file_ssl="/etc/httpd/conf/ssl.conf"
                if [ -f "$config_file_ssl" ]; then
                    sed -i '/#LoadModule ssl_module modules\/mod_ssl.so/a\LoadModule ssl_module modules/mod_ssl.so' "$config_file_ssl" # Inserts LoadModule line
                    sed -i '/<VirtualHost \*:443>/a\
                    # INSERT SERVER NAME # # INSERT DOMAIN.com #\
                    DocumentRoot /var/www/html\
                    \n\
                    SSLEngine on\
                    SSLCertificate # INSERT PATH TO SSL CERTIFICATE #\
                    SSLCertificateKeyFile # INSERT PATH TO SSL PRIVATE KEY #\
                    SSLCertificateChainFile # INSERT SSL CERTIFICATE BUNDLE #\
                    ' "$config_file_ssl"
                    echo "Lines add to $config_file_ssl"
                    systemctl restart httpd
                else
                    echo "Error: $config_file_ssl does not exist"
                fi
                ;;
            
            *)
                echo "Invalid option"
                exit
                ;;

    esac
