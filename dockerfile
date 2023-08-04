# build stage
FROM node:16-alpine as build-stage
LABEL stage=intermediate-wallet-lite

WORKDIR /app
#COPY package*.json ./
COPY package.json package-lock.json ./
RUN npm install
# RUN yarn

COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
