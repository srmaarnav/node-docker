# choose base image
FROM node:22-alpine

# create proj directory
WORKDIR /app

# initialize project
COPY . /app

# Install dependencies
RUN npm install

# expose the port
EXPOSE 8080

# Run the application
CMD ["node", "src/index.js"]
