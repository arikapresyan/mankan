#FROM node:12.8.0-alpine
#WORKDIR /opt/frontend1
#COPY ./package.json /opt/frontend1
#RUN npm install
#COPY . /opt/frontend1
#EXPOSE 8000
#ENTRYPOINT pm2 start npm -- start
#CMD ["build","start"]
FROM node:12.8.0-alpine
## Install dependencies in the root of the Container
COPY package.json yarn.lock ./
RUN npm
# Add project files to /app route in Container
ADD . /app
# Set working dir to /app
WORKDIR /app
# expose port 3000
EXPOSE 8000
CMD ["build","start"]
