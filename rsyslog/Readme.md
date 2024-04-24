cd rsyslog

docker build -t registry.deti/gic-asenhoradosaneis/rsyslog:v1 -f Dockerfile-rsyslog .
docker push registry.deti/gic-asenhoradosaneis/rsyslog:v1

cd ../deployment

kubectl apply -f rsyslog-deployment.yaml -n gic-asenhoradosaneis


