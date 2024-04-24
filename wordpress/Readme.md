cd rsyslog

docker build -t registry.deti/gic-asenhoradosaneis/wordpress:v1 .
docker push registry.deti/gic-asenhoradosaneis/wordpress:v1


cd ../deployment/storage
kubectl apply -f wordpress-storage.yaml -n gic-asenhoradosaneis
cd ..
kubectl apply -f wordpress-deployment.yaml -n gic-asenhoradosaneis


