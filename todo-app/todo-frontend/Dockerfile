FROM node:16.19-alpine as nodebuild

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

ENV CI=true

ENV PATH /app/node_modules/.bin:$PATH

ENV NODE_ENV production

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

RUN npm run test

# production environment
FROM nginx:stable-alpine

# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static resources
RUN rm -rf ./*

# Copy static assets from nodebuild stage
COPY --from=nodebuild /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]