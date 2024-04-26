clear

kubectl delete -f /vagrant/deployment/deployment.yaml -n gic-asenhoradosaneis
echo
echo

while getopts d:h: flag
do
    case "${flag}" in
        d) docker system prune -a --volumes;;
        h) echo Flags: -d       : Clean docker images/containers/volumes;;
    esac
done
echo
echo

echo -- Shopping WebClient --
cd /vagrant/shopping-webclient && docker build -t registry.deti/gic-asenhoradosaneis/shopping-webclient . && docker push registry.deti/gic-asenhoradosaneis/shopping-webclient -q

echo -- Management WebClient --
cd /vagrant/management-webclient && docker build -t registry.deti/gic-asenhoradosaneis/management-webclient . && docker push registry.deti/gic-asenhoradosaneis/management-webclient -q

echo -- Management Server --
cd /vagrant/management-server && docker build -t registry.deti/gic-asenhoradosaneis/management-server . && docker push registry.deti/gic-asenhoradosaneis/management-server -q

echo -- Shopping Server --
cd /vagrant/shopping-server && docker build -t registry.deti/gic-asenhoradosaneis/shopping-server . && docker push registry.deti/gic-asenhoradosaneis/shopping-server -q

echo -- MongoDB --
cd /vagrant/mongo && docker build -t registry.deti/gic-asenhoradosaneis/mongodb -f Dockerfile-mongo . && docker push registry.deti/gic-asenhoradosaneis/mongodb -q

echo -- Wordpress --
cd /vagrant/wordpress && docker build -f Dockerfile.app -t registry.deti/gic-asenhoradosaneis/wordpress . && docker push registry.deti/gic-asenhoradosaneis/wordpress -q

echo -- Rsyslog --
cd /vagrant/rsyslog && docker build -t registry.deti/gic-asenhoradosaneis/rsyslog:v1 -f Dockerfile-rsyslog . && docker push registry.deti/gic-asenhoradosaneis/rsyslog:v1 -q

# kubectl apply -f /vagrant/deployment/storage/webclient-storage.yaml -n gic-asenhoradosaneis
# kubectl apply -f /vagrant/deployment/storage/server-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/storage/rsyslog-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/storage/redis-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/storage/mongodb-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/deployment.yaml -n gic-asenhoradosaneis

echo
cd /vagrant/deployment/secrets
./secrets.sh