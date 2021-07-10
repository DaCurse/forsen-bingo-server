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
ARG PORT=80

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV DB_PATH=/data/db.sqlite

COPY --from=base /app/package.json ./
COPY --from=development /app/dist/ ./dist/
COPY --from=base /app/node_modules/ ./node_modules

EXPOSE ${PORT}

CMD ["yarn", "start:prod"]
