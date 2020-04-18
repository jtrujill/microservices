FROM node:12.7.0-stretch-slim

WORKDIR /node/books
COPY . .
RUN npm ci --only=production
RUN cp -R node_modules node_modules_prod
RUN npm install
RUN npm run build

FROM node:12.7.0-stretch-slim

WORKDIR /www/books
COPY --from=0 /node/books/dist .
COPY --from=0 /node/books/node_modules_prod ./node_modules

EXPOSE 8080

ENTRYPOINT ["node", "main.js"]