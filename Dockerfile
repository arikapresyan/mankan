FROM node:12.8.0-alpine

WORKDIR /opt/frontend

COPY package.json /opt/frontend

RUN npm install

COPY . /opt/frontend

EXPOSE 8000
ENTRYPOINT pm2 start npm -- start
