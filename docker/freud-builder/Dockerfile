FROM node:14.20.0-alpine3.15

USER root


# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Installing Dependencies:
RUN npm install -g nx
RUN npm install -g fantasticon
RUN pip3 install picosvg
