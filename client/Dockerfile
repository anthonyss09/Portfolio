# Stage one container build
# Build from official docker image
FROM node:current-alpine as build
# Set working directory
WORKDIR /app
# Install PM2 globally
RUN npm install --global pm2
# Copy package.json into working directory
COPY package*.json /app/
# Install dependancies
RUN npm install --production
# Copy entire application into container
COPY . .
# Build react app folder for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run container as non-root (unprivileged) user,for security.
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
