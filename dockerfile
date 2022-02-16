FROM node:14.19-alpine3.15

RUN mkdir -p /var/www/html
COPY /source /var/www/html
RUN cd /var/www/html \
    npm install \
    npm run build

EXPOSE 3030