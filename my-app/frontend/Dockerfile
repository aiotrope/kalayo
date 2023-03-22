# First stage
FROM node:16.19-alpine as build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

ENV CI=true

ENV PATH /app/node_modules/.bin:$PATH

ENV NODE_ENV production

RUN yarn install

# Copy app source code
COPY . .

RUN yarn build

# Second Stage: production environment
FROM nginx:stable-alpine

# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static resources
RUN rm -rf ./*

# Copy static assets from nodebuild stage
COPY --from=build /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]