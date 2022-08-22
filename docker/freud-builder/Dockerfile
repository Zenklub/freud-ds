FROM node:14.20.0-alpine3.15

RUN apk add --no-cache bash

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN apk add ruby

# Installing Dependencies:
RUN npm install -g nx
RUN npm install -g fantasticon
RUN npm install -g term-size-cli
RUN npm install -g node-sass
RUN pip3 install picosvg
RUN gem install xcodeproj

# Expose global node path
ENV NODE_PATH=/usr/local/lib/node_modules
