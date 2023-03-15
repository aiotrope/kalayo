FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["yarn", "start"]