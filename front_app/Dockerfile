FROM node:alpine
#copy source
RUN mkdir /front

WORKDIR /front

COPY . /front

RUN cd /front &&  npm install

RUN npm run build
ENTRYPOINT [ "npm", "run", "start" ]