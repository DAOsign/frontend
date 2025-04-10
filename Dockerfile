FROM node:16.13-alpine3.14 AS alpine
RUN apk --no-cache --virtual build-dependencies add \
    bash \
    git \
    openssh \
    python3 \
    make \
    g++
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

ARG NEXT_PUBLIC_REST_ENDPOINT
ARG NEXT_PUBLIC_GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_PINATA_GATEWAY

ENV NEXT_PUBLIC_REST_ENDPOINT=$NEXT_PUBLIC_REST_ENDPOINT
ENV NEXT_PUBLIC_GRAPHQL_ENDPOINT=$NEXT_PUBLIC_GRAPHQL_ENDPOINT
ENV NEXT_PUBLIC_PINATA_GATEWAY=$NEXT_PUBLIC_PINATA_GATEWAY

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
