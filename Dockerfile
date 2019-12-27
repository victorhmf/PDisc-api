FROM node:12.14-alpine

WORKDIR /app

COPY . /app

RUN yarn install

CMD yarn start

EXPOSE 3000