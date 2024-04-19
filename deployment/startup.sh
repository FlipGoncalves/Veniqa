clear

kubectl delete -f deployment.yaml
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

echo -- Management WebClient --
cd /vagrant/management-webclient
docker build -t registry.deti/gic-asenhoradosaneis/management-webclient . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/management-webclient -q
echo ---- Pushed Successfully ----
echo
echo

echo -- Shopping WebClient --
cd /vagrant/shopping-webclient
docker build -t registry.deti/gic-asenhoradosaneis/shopping-webclient . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/shopping-webclient -q
echo ---- Pushed Successfully ----
echo
echo

echo -- Management Server --
cd /vagrant/management-server
docker build -t registry.deti/gic-asenhoradosaneis/management-server . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/management-server -q
echo ---- Pushed Successfully ----
echo
echo

echo -- Shopping Server --
cd /vagrant/shopping-server
docker build -t registry.deti/gic-asenhoradosaneis/shopping-server . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/shopping-server -q
echo ---- Pushed Successfully ----
echo
echo

echo -- Nginx --
cd /vagrant/nginx
docker build -t registry.deti/gic-asenhoradosaneis/nginx -f Dockerfile.nginx . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/nginx -q
echo ---- Pushed Successfully ----
echo
echo

echo -- MongoDB --
cd /vagrant/mongo
docker build -t registry.deti/gic-asenhoradosaneis/mongodb -f Dockerfile-mongo . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/mongodb -q
echo ---- Pushed Successfully ----
echo
echo

echo -- Wordpress --
cd /vagrant/www
docker build -t registry.deti/gic-asenhoradosaneis/wordpress . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/wordpress -q
echo ---- Pushed Successfully ----
echo
echo

cd /vagrant
kubectl apply -f /vagrant/deployment/webclient-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/server-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/redis-server.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/mongodb-server.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/deployment.yaml -n gic-asenhoradosaneis