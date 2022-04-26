FROM node

WORKDIR /opt/cron

COPY package.json /opt/cron

RUN  npm install

COPY . /opt/cron

EXPOSE 8900

CMD ["npm", "start"]
