# choose base image
FROM node:22-alpine

# create proj directory
WORKDIR /app
# RUN mkdir /app
# RUN cd /app

# initialize project
COPY package*.json /app

# Install dependencies
RUN npm install

# copy src
COPY src src

# expose the port
EXPOSE 8080

# Run the application
CMD ["node", "src/index.js"]
