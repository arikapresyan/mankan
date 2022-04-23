FROM node 
WORKDIR /opt/cron
COPY package.json /opt/cron

RUN  npm install

COPY . /opt/cron
RUN npm run dev
#RUN npm install pm2 -g
#RUN npm run start:dev 
EXPOSE 8900
#ENTRYPOINT cron.js --start
#ENTRYPOINT "start"
CMD ["npm"]
