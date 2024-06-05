# Use the official Redis image from the Docker Hub
FROM redis:latest

# Copy custom entrypoint script
RUN mkdir -p /usr/local/bin/
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN sed -i 's/\r//g' /usr/local/bin/entrypoint.sh

# Expose the Redis port
EXPOSE 6379 26379

# Set the entrypoint to the custom script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]