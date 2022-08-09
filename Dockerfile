FROM node:12.17

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY spec ./spec
COPY index.js .
COPY package* ./

RUN npm install . -g
RUN npm install jasmine -g
