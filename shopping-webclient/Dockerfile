FROM node:lts-alpine

# make the 'shopping-webclient-app' folder the current working directory
WORKDIR /shopping-webclient-app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /shopping-webclient-app
# copy project files and folders to the current working directory
COPY . /shopping-webclient-app

# install simple http server for serving static content
RUN npm install -g http-server

# install project dependencies
# FILIPE
RUN npm remove node-sass axios
RUN npm install sass
RUN npm install
RUN npm install axios 

# Expose application port
EXPOSE 8080/tcp

# Start the application
CMD ["npm", "run", "deploy"]

# http-server by default launches it on port 8080
CMD ["http-server", "dist"]