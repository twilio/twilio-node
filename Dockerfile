FROM node:14

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY index.js .
COPY package* ./

RUN npm install . -g
