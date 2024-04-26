cd rsyslog

docker build -t registry.deti/gic-asenhoradosaneis/redis-2:v1 -f Dockerfile-redis-2 .
docker push registry.deti/gic-asenhoradosaneis/redis-2:v1

cd ../deployment

kubectl apply -f redis-deployment.yaml -n gic-asenhoradosaneis


