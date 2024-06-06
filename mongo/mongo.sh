#!/bin/bash

# Initialize a mongo data folder and logfile
mkdir -p /data/db
touch /var/log/mongodb.log
chmod +x /var/log/mongodb.log

docker-entrypoint.sh mongod --config /config/mongod.conf &

rsyslogd

# Wait until mongo logs that it's ready (or timeout after 60s)
COUNTER=0
grep -q 'waiting for connections on port' /var/log/mongodb.log
while [[ $? -ne 0 && $COUNTER -lt 60 ]] ; do
    sleep 2
    let COUNTER+=2
    echo "Waiting for mongo to initialize... ($COUNTER seconds so far)"
    grep -q 'waiting for connections on port' /var/log/mongodb.log
done

# Keep container running
tail -f /dev/null