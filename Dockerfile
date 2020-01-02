FROM node:12.14-alpine

RUN apk add --update netcat-openbsd && rm -rf /var/cache/apk/*

WORKDIR /app

COPY ./apps/api /app

RUN mkdir /scripts
COPY ./wait-for.sh /scripts

RUN chmod +x /scripts/wait-for.sh

RUN yarn install

EXPOSE 3000