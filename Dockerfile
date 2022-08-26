# base image ubuntu
FROM node:16.17.0 as build

ENV NPM_CONFIG_LOGLEVEL debug
ENV NODE_VERSION 16.17.0
ENV NODE_ENV production

# yarn install
# RUN npm install -g yarn

# work dir create
WORKDIR /app

# copy all source
COPY . .

# build
RUN rm -rf package-lock.json
RUN rm -rf yarn.lock
RUN rm -rf node_modules
RUN yarn cache clean
RUN yarn install
RUN yarn run build

FROM nginx:1.23.1-alpine as deploy

LABEL Name="docker_chatbus_homepage Version=0.0.1"
LABEL maintainer="Jiam Seo <jams7777@gmail.com>"

#RUN apk --no-cache add bash=~5.0

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx
COPY --from=build /app/public ./html

