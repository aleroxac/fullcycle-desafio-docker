FROM node:18.13.0-alpine3.17 AS base


ARG NODE_ENV=production


FROM base as build
WORKDIR /build
COPY package.json package-lock.json /build/
RUN npm install --production && \
    wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && \
    node-prune && \
    npm prune --production


FROM gcr.io/distroless/nodejs18-debian11:latest as main
WORKDIR /app
COPY --from=build /build/ /app/
COPY *.js /app

CMD [ "index.js" ]
EXPOSE 8080
HEALTHCHECK \
    --interval=5s \
    --retries=6 \
    CMD [ "/nodejs/bin/node", "healthz.js" ]
