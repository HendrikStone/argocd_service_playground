FROM node:18 as builder
LABEL org.opencontainers.image.description "Sample backend service for argoCD playground"
WORKDIR /home/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM node:18-alpine

WORKDIR /home/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --prod --network-timeout 1000000
COPY --from=builder /home/app/dist/ ./dist/

CMD ["node", "dist/main.js"]
