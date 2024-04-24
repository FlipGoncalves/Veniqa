FROM node:14-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the '/app/management' folder the current working directory
RUN mkdir /app
RUN mkdir /app/management
WORKDIR /app/management

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory
COPY . .

VOLUME /app/management

# Start the application
RUN npm run build

# Expose application port
EXPOSE 8082/tcp
# http-server by default launches it on port 8080
CMD ["http-server", "dist"]