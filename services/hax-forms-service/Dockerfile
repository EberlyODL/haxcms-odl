FROM heymp/hax-forms-service:v0.1.0 as base

FROM node:10

COPY --from=base package.json package.json
RUN npm install

COPY --from=base /home/node/app .

CMD [ "npm", "start" ]