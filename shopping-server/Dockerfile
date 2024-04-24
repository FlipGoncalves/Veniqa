FROM mhart/alpine-node:8

WORKDIR /shopping-server-app

COPY package*.json /shopping-server-app/

RUN npm install

COPY . /shopping-server-app/

EXPOSE 3000

CMD [ "npm", "run", "deploy" ]

CMD [ "npm", "start" ]