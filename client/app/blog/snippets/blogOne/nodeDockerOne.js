export const nodeDockerSnippet = `
## Build from official docker image
FROM node:current-alpine
RUN mkdir -p /app
## Set working directory
WORKDIR /app
## Copy pagckage.json
COPY package*.json ./
## Install dependancies
RUN npm install --silent
## Copy entire application into container
COPY . .
## Expose port 8080 where server listens
EXPOSE 8080
## Run node server
CMD ["node", "server.js"]`;
