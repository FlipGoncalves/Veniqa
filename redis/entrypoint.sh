#!/bin/bash

# Set default Redis password if not provided
REDIS_PASSWORD="SOME_PASSWORD"
FILENAME="/usr/local/bin/sentinel.conf"

# Set up Redis Sentinel
echo "port 26379" > /usr/local/bin/sentinel.conf
echo "sentinel resolve-hostnames yes" >> $FILENAME
echo "sentinel monitor mymaster $REDIS_MASTER_HOST 6379 2" >> $FILENAME
echo "sentinel down-after-milliseconds mymaster 5000" >> $FILENAME
echo "sentinel failover-timeout mymaster 10000" >> $FILENAME
echo "sentinel parallel-syncs mymaster 1" >> $FILENAME

# Set up Redis server
if [ "$REDIS_REPLICATION_MODE" == "master" ]; then
    echo "Starting Redis as master..."
    redis-server &
elif [ "$REDIS_REPLICATION_MODE" == "replica" ]; then
    echo "Starting Redis as replica..."
    if [ -z "$REDIS_MASTER_HOST" ]; then
        echo "Error: REDIS_MASTER_HOST environment variable is not set."
        exit 1
    fi
    redis-server --replicaof $REDIS_MASTER_HOST 6379 &
else
    echo "Error: Invalid REDIS_REPLICATION_MODE. Must be 'master' or 'replica'."
    exit 1
fi

# Wait for the Redis master to be available
if [ "$REDIS_REPLICATION_MODE" == "replica" ]; then
    echo "Waiting for Redis master to be available..."
    until redis-cli -h $REDIS_MASTER_HOST -a $REDIS_PASSWORD -p 6379 ping | grep PONG; do
        echo "Redis master is not available yet, sleeping..."
        sleep 2
    done
    echo "Redis master is available!"
fi

exec redis-sentinel $FILENAME