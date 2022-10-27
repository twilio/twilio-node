FROM node:14

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY spec ./spec
COPY examples ./examples
COPY index.js package.json babel.config.js tsconfig.json ./

RUN npm run build; npm pack
RUN npm install -g twilio-*.tgz
RUN npm install . --include=dev
