FROM node:14

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY spec ./spec
COPY examples ./examples
COPY index.js package.json babel.config.js tsconfig.json ./

RUN npm install . --include=dev

RUN npm run build || true # tsc completes but with errors that need to be addressed.
RUN npm install -g .
