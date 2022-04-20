FROM node:12

WORKDIR /opt/frontend

COPY package.json /opt/frontend

RUN npm install

COPY . /opt/frontend

EXPOSE 8000

CMD ["node", "server.js"]
