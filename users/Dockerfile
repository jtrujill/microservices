FROM node:12.7.0-stretch-slim

WORKDIR /node/users
COPY . .
RUN npm ci --only=production
RUN cp -R node_modules node_modules_prod
RUN npm install
RUN npm run build

FROM node:12.7.0-stretch-slim

WORKDIR /www/users
COPY --from=0 /node/users/dist .
COPY --from=0 /node/users/node_modules_prod ./node_modules

EXPOSE 8081

ENTRYPOINT ["node", "main.js"]