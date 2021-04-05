sudo su
fdisk -l
fdisk [drive_name]
- n for new
- p for primary
- accept defaults
mkfs.ext4 [partition_name]

exit sudo
cd ~/
mkdir data
chmod a+rwx data
sudo su
mount [partition_name] data
nano /etc/fstab
`[partition_name] data  ext4  defaults  0 0`

sudo service docker stop
sudo touch /etc/docker/daemon.json

{
   "data-root": "/home/ubuntu/data"
}

sudo rsync -aP /var/lib/docker/ /home/ubuntu/data/
sudo mv /var/lib/docker /var/lib/docker.old
sudo service docker start
