FROM node:13.8.0

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3333

CMD [ "yarn", "dev" ]
