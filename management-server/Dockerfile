FROM mhart/alpine-node

WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN npm install

# copy project files and folders to the current working directory
COPY . .

VOLUME /app

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]