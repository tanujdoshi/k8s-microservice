FROM --platform=linux/amd64 node:21.3.0

WORKDIR /usr/src/k8s-container1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]