# Desafio 8
## Requerimientos :books:
* Gestión del Repositorio Git.
    *  Código del proyecto (subido al repositorio de GitHub).
    
    R: [Repositorio desafio 8](https://github.com/SoteloPereira/desafio_m8)
* Configuración de la API con Docker.

    R: [Dockerfile del poryecto](https://github.com/SoteloPereira/desafio_m8/blob/main/dockerfile)

* Pipeline de Jenkins.
    * Capturas de pantalla del pipeline configurado en Jenkins y los reportes
    generados.

    R: [Pipeline](https://github.com/SoteloPereira/desafio_m8/blob/main/public/img/jenkins%20pipeline.jpg "Resultado Pipeline")


* Reporte y Documentación.
    * Archivo  REPORT.md con la explicación de las configuraciones realizadas.

    *  app.js: API básica con rutas /tasks y /tasks/:id

        `app.js`

    ```javascript
        const express = require('express'); 
        const app = express(); 
        app.use(express.json()); 
        const PORT = 3000;

        const list = [{id:"1", name:"Emmanuel"},
                    {id:"2", name:"Andres"},
                    {id:"3", name:"Francisco"}]

        app.get('/task', (req, res) => { 

            res.status(200).json({list})
        }); 

        app.put('/task/:id', (req, res) => {
            const { id }= req.params;  
            const { name } = req.body;           
            const item = list.find(item => item.id == id);
        
            if (!item) {
            res.status(404).send('ID no encontrado');
            }
            else {
            item.name = name;
            res.status(201).json({"message":"Item updated"});
            }
        });
        

        
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`)); 
        module.exports = app
    ```

    *  tests/app.test.js: Pruebas unitarias para verificar la funcionalidad   de la API.

        R: 

    [Valor origina GET](https://github.com/SoteloPereira/desafio_m8/blob/main/public/img/get%20-%20valor%20origina.jpg)

    [Actualizando Valor PUT](https://github.com/SoteloPereira/desafio_m8/blob/main/public/img/put%20-%20actualizar%20valor.jpg)

    [Valor actualizado GET](https://github.com/SoteloPereira/desafio_m8/blob/main/public/img/get%20-%20valor%20actualizado.jpg)

    * package.json: Configuración del proyecto Node.js con dependencias
    necesarias.

    R: 

    `package.json`

    ```
    {
        "name": "desafio8",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
            "start": "node app.js",
            "test": "jest --coverage --forceExit"
        },
        "author": "",
        "license": "ISC",
        "description": "",
        "dependencies": {
        "express": "^4.21.2",
        "jest": "^29.7.0",
        "supertest": "^7.1.0"
        }
    }
    ```


    * Dockerfile: Archivo para contenerizar la API.

    R: 

     `Dockerfile`

    ```
    # Imagen base de Node.js 
    FROM node:20
    # Establecer directorio de trabajo en el contenedor 
    WORKDIR /dasafio8
    # Copiar archivos del proyecto 
    COPY package.json package-lock.json ./ 
    RUN npm install 
    # Copiar el resto del código.
    COPY  .  . 
    # Exponer el puerto 3000 
    EXPOSE 3000 
    # Comando para iniciar la aplicación 
    CMD ["node", "app.js"] 
    ```
    * README.md:Descripción del proyecto y las instrucciones básicas.

        R: Este Docu



