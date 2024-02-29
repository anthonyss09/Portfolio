export const composeSnippet = `
## Define services in services
services:
## Define a service for backend Node server & map it from port 8080 to port 8080
  ws1:
    image: node-server
    ports:
      - "8080:8080"
## Define a service for front end React server & map from port 3000 to port 80 where nginx will be listening and ready to proxy requests. 
  frontend:
    image: nginx-react-app
    ports:
      - "3000:80"
    depends_on:
      - ws1`;
