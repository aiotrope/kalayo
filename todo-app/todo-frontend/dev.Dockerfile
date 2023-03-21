FROM node:16.19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

ENV CI=true

ENV NODE_ENV development

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

RUN npm run test

#Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]
