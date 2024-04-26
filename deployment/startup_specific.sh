clear

# kubectl delete -f deployment.yaml
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

# echo -- Management WebClient --
# cd /vagrant/management-webclient
# docker build -t registry.deti/gic-asenhoradosaneis/management-webclient .
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/management-webclient
# echo ---- Pushed Successfully ----
# echo
# echo

# echo -- Shopping WebClient --
# cd /vagrant/shopping-webclient
# docker build -t registry.deti/gic-asenhoradosaneis/shopping-webclient . -q
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/shopping-webclient -q
# echo ---- Pushed Successfully ----
# echo
# echo

# echo -- Management Server --
# cd /vagrant/management-server
# docker build -t registry.deti/gic-asenhoradosaneis/management-server .
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/management-server -q
# echo ---- Pushed Successfully ----
# echo
# echo

# echo -- Shopping Server --
# cd /vagrant/shopping-server
# docker build -t registry.deti/gic-asenhoradosaneis/shopping-server .
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/shopping-server -q
# echo ---- Pushed Successfully ----
# echo
# echo

echo -- Redis --
cd /vagrant/redis
docker build -t registry.deti/gic-asenhoradosaneis/redis:v2 -f Dockerfile-redis . -q
echo ---- Built Successfully ----
docker push registry.deti/gic-asenhoradosaneis/redis:v2  -q
echo ---- Pushed Successfully ----
echo
echo

# echo -- Nginx --
# cd /vagrant/nginx
# docker build -t registry.deti/gic-asenhoradosaneis/nginx -f Dockerfile.nginx . -q
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/nginx -q
# echo ---- Pushed Successfully ----
# echo
# echo

# echo -- MongoDB --
# cd /vagrant/mongo
# docker build -t registry.deti/gic-asenhoradosaneis/mongodb -f Dockerfile-mongo . -q
# echo ---- Built Successfully ----
# docker push registry.deti/gic-asenhoradosaneis/mongodb -q
# echo ---- Pushed Successfully ----
# echo
# echo

# kubectl apply -f /vagrant/deployment/webclient-storage.yaml -n gic-asenhoradosaneis
# kubectl apply -f /vagrant/deployment/server-storage.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/storage/redis-storage.yaml -n gic-asenhoradosaneis
# kubectl apply -f /vagrant/deployment/mongodb-server.yaml -n gic-asenhoradosaneis
kubectl apply -f /vagrant/deployment/redis-deployment.yaml -n gic-asenhoradosaneis

# echo
# cd /vagrant/deployment/secrets
# ./secrets.sh

cd /vagrant/deployment
