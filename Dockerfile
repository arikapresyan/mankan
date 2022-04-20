FROM node:12.8.0-alpine

WORKDIR /opt/cron

COPY package.json /opt/cron

RUN npm install

COPY . /opt/cron

EXPOSE 8900
ENTRYPOINT pm2 start cron.js
