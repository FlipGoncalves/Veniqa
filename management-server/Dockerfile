FROM mhart/alpine-node:8

WORKDIR /management-server-app

COPY package*.json /management-server-app/

RUN npm install

COPY . /management-server-app/

EXPOSE 3000

CMD [ "npm", "run", "deploy" ]

CMD [ "npm", "start" ]