FROM --platform=linux/amd64 node:21.3.0

WORKDIR /usr/src/container2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]