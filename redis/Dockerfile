# Use the official Redis image from the Docker Hub
FROM redis:latest

# Copy custom entrypoint script
RUN mkdir -p /usr/local/bin/
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN sed -i 's/\r//g' /usr/local/bin/entrypoint.sh

# Install rsyslog and necessary dependencies
RUN apt-get update && \
    apt-get install -y rsyslog && \
    apt-get install -y rsyslog-relp && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Expose the Redis port
EXPOSE 6379 26379 20514

# Set the entrypoint to the custom script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]