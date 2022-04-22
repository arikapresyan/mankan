FROM node:14.18.0-alpine

WORKDIR /opt/cron

COPY package.json /opt/cron

RUN npm install

COPY . /opt/cron

RUN npm install pm2 -g

EXPOSE 8900
#ENTRYPOINT cron.js --start
#ENTRYPOINT "start"
CMD ["pm2", "start", "cron.js"]

