FROM node:16.19

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY --chown=node:node . .

ENV PORT=8080

ENV DEBUG=backend:*

ENV NODE_ENV production

EXPOSE 8080

USER node

CMD ["yarn", "run", "start"]