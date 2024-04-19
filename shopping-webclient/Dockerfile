FROM node:16-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'shopping-webclient-app' folder the current working directory
# RUN mkdir /shopping-webclient-app
# WORKDIR /shopping-webclient-app
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
# FILIPE
RUN npm remove node-sass axios
RUN npm install sass
RUN npm install
RUN npm install axios 

# copy project files and folders to the current working directory
COPY . .

VOLUME /app

# Start the application
RUN npm run build

# Expose application port
EXPOSE 8080/tcp
# http-server by default launches it on port 8080
CMD ["http-server", "dist"]