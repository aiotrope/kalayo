FROM node:16.19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

ENV CI=true

ENV NODE_ENV development

# Copy app source code
COPY . .

RUN yarn install && yarn build

#Expose port and start application
EXPOSE 3000

CMD ["yarn", "start"]