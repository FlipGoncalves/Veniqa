#!/bin/bash

kubectl create secret generic shopping-server-secret \
    --from-literal=NODE_ENV=production \
    --from-literal=VENIQA_ENV=local \
    --from-literal=VENIQA_MONGODB_DB=veniqa-prod-db \
    --from-literal=VENIQA_MONGODB_URL=mongodb://mongodb.gic-asenhoradosaneis:27017/veniqa-prod-db \
    --from-literal=VENIQA_REDIS_HOST=redis://redis-primary.gic-asenhoradosaneis \
    --from-literal=VENIQA_REDIS_PORT=6379 \
    --from-literal=VENIQA_REDIS_PASSWORD=SOME_PASSWORD \
    --from-literal=VENIQA_REDIS_DB_NUMBER=0 \
    --from-literal=VENIQA_SESSION_SECRET_KEY=SECRET_KEY \
    --from-literal=VENIQA_CRYPTO_SECRET_KEY=CRYPTO_SECRET \
    -n gic-asenhoradosaneis

kubectl create secret generic management-server-secret \
    --from-literal=NODE_ENV=development \
    --from-literal=VENIQA_ENV=local \
    --from-literal=VENIQA_MONGODB_DB=veniqa-prod-db \
    --from-literal=VENIQA_MONGODB_URL=mongodb://mongodb.gic-asenhoradosaneis:27017/veniqa-prod-db \
    --from-literal=VENIQA_REDIS_HOST=redis://redis-primary.gic-asenhoradosaneis \
    --from-literal=VENIQA_REDIS_PORT=6379 \
    --from-literal=VENIQA_REDIS_PASSWORD=SOME_PASSWORD \
    --from-literal=VENIQA_REDIS_DB_NUMBER=1 \
    --from-literal=VENIQA_SESSION_SECRET_KEY=SECRET_KEY \
    --from-literal=VENIQA_CRYPTO_SECRET_KEY=CRYPTO_SECRET \
    -n gic-asenhoradosaneis

kubectl create secret generic redis-secret \
    --from-literal=REDIS_REPLICATION_MODE_PRIMARY=master \
    --from-literal=REDIS_REPLICATION_MODE_REPLICA=replica \
    --from-literal=REDIS_MASTER_HOST=redis-primary.gic-asenhoradosaneis \
    -n gic-asenhoradosaneis