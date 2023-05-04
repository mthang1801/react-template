FROM node:16 as builder 
WORKDIR /usr/src/app
COPY package.json . 
COPY package-lock.json . 
RUN npm install 
COPY . . 
RUN npm run build 

FROM nginx:latest as runner 
WORKDIR /usr/src/app 
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.confg /etc/nginx/conf.d/default.conf
EXPOSE 80 
ENTRYPOINT [ "nginx", "-g", "daemon off;"]