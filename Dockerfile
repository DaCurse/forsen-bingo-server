FROM node:lts as base

WORKDIR /app

COPY package.json \
  yarn.lock \
  .yarnclean \
  ./
RUN yarn --prod

FROM base as development

COPY nest-cli.json \
	tsconfig.* \
	./
COPY ./src/ ./src/
RUN yarn
RUN yarn build

FROM node:lts-alpine3.12

ARG NODE_ENV=production
ARG PORT=443

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV SSL_CERT=/ssl/live/forsenbingo.tk/fullchain.pem
ENV SSL_KEY=/ssl/live/forsenbingo.tk/privkey.pem
ENV DB_PATH=/db/data.sqlite

COPY --from=base /app/package.json ./
COPY --from=development /app/dist/ ./dist/
COPY --from=base /app/node_modules/ ./node_modules

EXPOSE ${PORT}

CMD ["yarn", "start:prod"]
