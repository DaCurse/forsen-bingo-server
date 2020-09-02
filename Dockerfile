FROM node:lts-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ARG NODE_ENV=production
ARG PORT=443

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV SSL_CERT=/ssl/live/forsenbingo.tk/fullchain.pem
ENV SSL_KEY=/ssl/live/forsenbingo.tk/privkey.pem
ENV DB_PATH=/db/data.sqlite

CMD ["npm", "start"]
