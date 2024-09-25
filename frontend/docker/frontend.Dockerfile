FROM node:20.11.0-alpine3.18

RUN apk update

RUN mkdir /opt/node_app && chown node:node /opt/node_app

COPY package.json ./
RUN yarn install --force
ENV PATH /opt/node_app/node_modules/.bin$PATH

COPY . /opt/node_app

EXPOSE 9010