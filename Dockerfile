FROM node:14.18.0-alpine

WORKDIR /opt/frontend

COPY package.json /opt/frontend

RUN npm install
COPY . /opt/frontend

RUN npm install pm2 -g

EXPOSE 8000
ENTRYPOINT pm2 start npm --start
#CMD [ "pm2", "start"]
