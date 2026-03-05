FROM node:20

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY src ./src
COPY spec ./spec
COPY examples ./examples
COPY package.json tsconfig.json vitest.config.ts ./

RUN npm install --unsafe-perm true # Needed to run prepublish as root.

RUN npm install . --include=dev
RUN npm install -g .
