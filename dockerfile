FROM node:12

WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5032

EXPOSE 5032

CMD ["npm", "run", "start"]