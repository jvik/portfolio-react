FROM node:10.14.1

# Create app directory
RUN mkdir -p /app
WORKDIR /app
# Bundle app source
COPY package*.json ./
RUN npm install

COPY . /app

CMD ["npm", "start"]