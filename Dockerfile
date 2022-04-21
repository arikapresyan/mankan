#FROM node:12.8.0-alpine
FROM node

WORKDIR /opt/backend

COPY package.json /opt/backend

RUN npm install

COPY . /opt/backend

EXPOSE 3000
#ENTRYPOINT pm2 start server.js
CMD [ "npm", "start"]
