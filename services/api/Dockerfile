FROM node:12

WORKDIR /home/node/app

COPY package.json ./
RUN yarn install

COPY . .

RUN mkdir /haxcms
RUN chown -R node:node /haxcms

CMD [ "yarn", "start" ]