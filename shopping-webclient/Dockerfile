FROM node:16-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the '/app' folder the current working directory
RUN mkdir /app
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory
COPY . .

VOLUME /app

# Start the application
RUN npm run build
COPY dist /var/static

# http-server by default launches it on port 8080
CMD ["http-server", "dist"]