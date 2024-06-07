#!/bin/bash

clear

echo -- Delete Kubectl --
kubectl delete -f /vagrant/deployment/mongo-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/redis-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/rsyslog-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/servers-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/webclients-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/wordpress-deployment.yaml -n gic-asenhoradosaneis
kubectl delete -f /vagrant/deployment/rsyslog-storage.yaml -n gic-asenhoradosaneis
echo

while getopts d:h: flag
do
    case "${flag}" in
        d) echo -- Delete Docker -- && docker system prune -a --volumes; echo;;
        h) echo Flags: -d       : Clean docker images/containers/volumes;;
    esac
done

echo -- Rsyslog --
cd /vagrant/rsyslog && docker build -t registry.deti/gic-asenhoradosaneis/rsyslog -f Dockerfile-rsyslog . && docker push registry.deti/gic-asenhoradosaneis/rsyslog -q
echo

echo -- Shopping WebClient --
cd /vagrant/shopping-webclient && docker build -t registry.deti/gic-asenhoradosaneis/shopping-webclient . && docker push registry.deti/gic-asenhoradosaneis/shopping-webclient -q
echo

echo -- Management WebClient --
cd /vagrant/management-webclient && docker build -t registry.deti/gic-asenhoradosaneis/management-webclient . && docker push registry.deti/gic-asenhoradosaneis/management-webclient -q
echo

echo -- Management Server --
cd /vagrant/management-server && docker build -t registry.deti/gic-asenhoradosaneis/management-server . && docker push registry.deti/gic-asenhoradosaneis/management-server -q
echo

echo -- Shopping Server --
cd /vagrant/shopping-server && docker build -t registry.deti/gic-asenhoradosaneis/shopping-server . && docker push registry.deti/gic-asenhoradosaneis/shopping-server -q
echo

echo -- MongoDB --
cd /vagrant/mongo && docker build -t registry.deti/gic-asenhoradosaneis/mongodb -f Dockerfile-mongo . && docker push registry.deti/gic-asenhoradosaneis/mongodb -q
echo

echo -- Redis --
cd /vagrant/redis && docker build -t  registry.deti/gic-asenhoradosaneis/redis -f Dockerfile . && docker push registry.deti/gic-asenhoradosaneis/redis -q
echo

echo -- Wordpress --
cd /vagrant/wordpress && docker build -f Dockerfile.app -t registry.deti/gic-asenhoradosaneis/wordpress . && docker push registry.deti/gic-asenhoradosaneis/wordpress -q
echo

echo -- Nginx Management Server --
cd /vagrant/nginx && docker build -f Dockerfile-management -t registry.deti/gic-asenhoradosaneis/nginx-management-server . && docker push registry.deti/gic-asenhoradosaneis/nginx-management-server -q
echo

echo -- Nginx Shopping Server --
cd /vagrant/nginx&& docker build -f Dockerfile-shopping -t registry.deti/gic-asenhoradosaneis/nginx-shopping-server . && docker push registry.deti/gic-asenhoradosaneis/nginx-shopping-server -q
echo

echo -- Nginx Webclient --
cd /vagrant/nginx && docker build -f Dockerfile-webclient -t registry.deti/gic-asenhoradosaneis/nginx-webclient . && docker push registry.deti/gic-asenhoradosaneis/nginx-webclient -q
echo

echo -- Secrets --
chmod 777 /vagrant/deployment/secrets.sh
/vagrant/deployment/secrets.sh
echo

echo -- Apply Kubectl --
kubectl apply -f /vagrant/deployment/rsyslog-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/rsyslog-deployment.yaml -n gic-asenhoradosaneis
sleep 20
kubectl apply -f /vagrant/deployment/mongo-deployment.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/servers-deployment.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/redis-deployment.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/wordpress-deployment.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/webclients-deployment.yaml -n gic-asenhoradosaneis

cd /vagrant/deployment