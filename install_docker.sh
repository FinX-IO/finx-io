#!/bin/bash
# install docker && docker compose on base amazon ubuntu 18
sudo apt update && sudo apt -y upgrade
sudo apt -y install build-essential software-properties-common
sudo apt update && sudo apt -y upgrade
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent0
sudo apt update && sudo apt -y upgrade
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt update && sudo apt -y upgrade
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
sudo apt-get update && sudo apt -y upgrade
sudo apt install -y py-pip, python3-dev, libffi-dev, openssl-dev, gcc, libc-dev, rust, cargo and make
sudo apt-get update && sudo apt -y upgrade
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo apt-get update && sudo apt -y upgrade
sudo chmod +x /usr/local/bin/docker-compose
