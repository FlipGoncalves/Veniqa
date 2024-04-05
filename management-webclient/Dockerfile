FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm remove node-sass axios
RUN npm install sass
RUN npm install
RUN npm install axios 

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD npm start

# http-server by default launches it on port 8080
CMD [ "http-server", "dist" ]