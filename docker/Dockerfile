FROM node:16-alpine
COPY . /opt/
COPY docker/server.js /opt/
RUN echo $(ls -1 /opt/)
WORKDIR /opt/
RUN npm i
RUN npm run build
EXPOSE 3000
CMD [ "node", "server.js" ]