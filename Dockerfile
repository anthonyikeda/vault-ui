FROM nginx:1.11.10-alpine

MAINTAINER Anthony Ikeda <anthony.ikeda@gmail.com>

COPY dist /usr/share/nginx/html
