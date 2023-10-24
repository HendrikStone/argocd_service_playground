FROM node:18 as builder

WORKDIR /home/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM node:18-alpine

WORKDIR /home/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --prod
COPY --from=builder /home/app/dist/ ./dist/

CMD ["node", "dist/main.js"]
