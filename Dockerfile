#FROM node:12.8.0-alpine
WORKDIR /opt
COPY package.json /opt
RUN npm install
COPY . /opt
EXPOSE 8000
ENTRYPOINT pm2 start npm -- start
#CMD ["build","start"]
