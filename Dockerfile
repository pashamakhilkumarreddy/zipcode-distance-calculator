ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production

ENV PORT=5000

WORKDIR /app

COPY package.json .

RUN npm i --only=prod

RUN npm prune --production

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "prod"]
