FROM node:14.15.5

WORKDIR /opt/backend

COPY package.json /opt/backend
#RUN npm install npm@6.14.11 -g
RUN npm install

COPY . /opt/backend

EXPOSE 3000

# RUN npm install pm2 -g
# ENTRYPOINT pm2 start server.js -- start
#CMD ["node", "server.js"]
