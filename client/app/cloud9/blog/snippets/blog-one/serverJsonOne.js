export const serverJsonSnippet = ` "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon server.js --ignore client",
    "client": "npm start --prefix ../client",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
    "start": "node server.js"
  },`;
