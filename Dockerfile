#node:version
FROM node:14

#directory to store image
WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

# expose your servie port
EXPOSE 8085

# cmd to run your server
CMD ["npm", "dev"]
