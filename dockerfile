#Utilizar imagen base de node.js
FROM node:lts


#crea y cambia el directorio actual a /app
WORKDIR /app 

#copiamos archivo de dependencias
COPY ./package*.json /app/

#intalar las dependencias
RUN npm install

#copiamos el contenido del proyecto a
COPY . /app/

#exponer puerto 80
EXPOSE 80

#iniciar aplicacion
CMD ["node", "app.js"]

