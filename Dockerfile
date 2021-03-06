FROM node:latest

RUN mkdir -p /srv/app/node-server

WORKDIR /srv/app/node-server

COPY package*.json /srv/app/node-server/

RUN npm install -g nodemon --only=production

RUN npm install --silent --only=production

COPY . /srv/app/node-server

CMD [ "npm", "run", "dev" ]