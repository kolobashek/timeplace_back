FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:debug" ]