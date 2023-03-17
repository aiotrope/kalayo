FROM node:16.19

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci 

COPY --chown=node:node . .

ENV PORT=8080

ENV DEBUG=todo-express-backend:*

EXPOSE 8080

USER node

CMD ["npm", "start"]