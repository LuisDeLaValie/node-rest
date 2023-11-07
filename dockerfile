FROM node:20.9.0-alpine3.18

WORKDIR /app


COPY package*.json /app

RUN npm install


COPY . /app


EXPOSE 80

CMD [ "node","app.js" ]