FROM node:16.14.2 as base

ENV WORKDIR=/usr/app
WORKDIR ${WORKDIR}

ARG PORT=80

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV


# Add package file
COPY package.json $WORKDIR/package.json
COPY yarn.lock $WORKDIR/yarn.lock
# COPY scripts/dev.sh ./scripts/dev.sh

# Install deps
RUN yarn install

# Copy source
COPY src $WORKDIR/src
COPY tsconfig.json $WORKDIR/tsconfig.json
COPY openapi.json $WORKDIR/openapi.json
COPY nodemon.json $WORKDIR/nodemon.json

# Copy node modules and build directory
# COPY ./node_modules /usr/app/node_modules
COPY . /usr/app/

# Copy static files
# COPY src/public dist/src/public

ENV NODE_PATH=/usr/app/node_modules
VOLUME ${NODE_PATH}

EXPOSE $PORT 30014
CMD ["dist/src/server.js"]
