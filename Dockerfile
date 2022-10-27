FROM node:14

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY spec ./spec
COPY examples ./examples
COPY index.js package.json babel.config.js ./

RUN npm install . -g && npm install . --include=dev
