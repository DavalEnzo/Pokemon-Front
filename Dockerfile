FROM node:18.15.0-alpine3.17

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .
