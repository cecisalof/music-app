## Music web site

- Accesible desde: https://cecisalof.github.io/music-app/

- Atribuciones: 
1. Contenido para prensa: https://snarkypuppy.com/press/
2. Imagenes: 
- https://imgur.com/4dhoxmJ
- https://imgur.com/Hf7JxHP
- https://imgur.com/4OUdN7l
- https://www.last.fm/es/music/Snarky+Puppy/+images/44900cf7d5144da9cd04dfeda0eba4fd
3. Íconos:
- "https://www.freepik.com/search" > Icons by Freepik



A continuación, se detallan los pasos necesarios para poner en marcha el proyecto music-app en un entorno virtual, además de cómo instalar las herramientas necesarias para levantar el proyecto.

### Resumen del Proyecto - Sitio web de música

El objetivo de este proyecto es desarrollar un sitio web del grupo de música Snarky Puppy utilizando Node.js, así como pre o postprocesadores de CSS, JavaScript o HTML con Parcel. El sitio web debe ser responsive y se debe poder visualizar correctamente desde cualquier dispositivo moderno (teléfono, tableta, ordenador ...). 

### Requisitos previos

Asegúrate de tener instalado una versión de Node.js superior a 18.x en tu sistema antes de comenzar. Puedes descargarlo desde el sitio web oficial de Node.js (https://nodejs.org/en/download/) y seguir las instrucciones de instalación específicas para tu sistema operativo.

Atención: si usas Windows y has instalado el subsistema de Windows para Linux, NO debes instalar la versión para Windows, sino la versión adecuada a la distribución de Linux que hayas instalado, según las instrucciones de esta página: https://nodejs.org/en/download/package-manager/.


### 1. Instalar las dependencias

Dentro del entorno de desarrollo, instala las dependencias necesarias para el proyecto usando ```npm``` o ```yarn```:

```
npm install 
o
yarn install
```

### 2. Ejecutar el servidor local

Parcel tiene un servidor de desarrollo integrado, que reconstruye automáticamente la aplicación a medida que se realizan cambios. Para iniciarlo, ejecuta el paquete CLI apuntando a su archivo de entrada:

```
yarn parcel index.html
```

o si usas npm ejecuta:

```
npm parcel index.html
```

Ahora abre http://localhost:1234/ en tu navegador para ver el proyecto de web terminado.


## 3. Scripts de paquetes:

```
"scripts": {
    "start": "npm-run-all clean parcel:dev",
    "build": "npm-run-all clean parcel:build",
    "parcel:dev": "parcel", 
    "parcel:build": "parcel build", 
    "clean": "rimraf dist .parcel-cache"
  }
```


- DESARROLLO:

Se ha configurado un script para iniciar el servidor de desarrollo, que elimina archivos o directorios temporales e inicia el servidor de desarrollo usando Parcel bundler.

```"start": "npm-run-all clean parcel:dev"```

Esta secuencia asegura que cualquier operación de limpieza necesaria se realice antes de iniciar el servidor de desarrollo.

Para iniciarlo usa el comando:

```yarn start``` 
o 
```npm start``` 



- PRODUCCIÓN: 

Para construir la aplicación en producción, se ha configirado un script que limpiará el proyecto, y luego lo construirá utilizando Parcel bundler para el despliegue en producción: 

```"build": "npm-run-all clean parcel:build"```

Para construir la aplicación usa el comando:

```yarn build```
o
```npm run build```


Por último, también se ha declarado la entrada desde donde Parcel comienzará a construir el código fuente, en el campo source para no tener que duplicarlas en cada comando parcel: ```"source": "index.html"```.


## 4. Soporte para navegadores antiguos:

Para asegurar la compatibilidad con los navegadores soportados, se declaran los navegadores soportados por el sitio web en el campo browserslist: 

```
 "browserslist": "> 0.5%, last 2 versions, not dead",
```

El comando anterior dará soporte a: 
- versiones de navegadores seleccionadas por las estadísticas globales de uso > 0.5%.
- las 2 últimas versiones para cada navegador.
- navegadores con soporte oficial o actualizaciones durante 24 meses.


## 5. Gestión de dependencias: pre- o postprocesadores y dependencias adicionales:

Para este proyecto se hace uso de PostCss y Autofixer con Parcel, por lo que no es necesario instalar dichos paquetes. Cuando se compila el proyecto para producción, se genera la carpeta ```/dist``` que incluye el archivo ```index.css``` con los prefijos y cambios pertinentes basados en el soporte para navegadores indicados en el ```package.json```.

Además se ha instalado ```posthtml-include``` para insertar el elemento ```<header>``` del archivo ```header.html``` como componente en todas las páginas de la web. 

## 6. Creación del repositorio Git

El repositorio de git fue creado con el comando ```git init``` y puede consultarse en: https://github.com/cecisalof/music-app.git

Posteriormente desde GitHub, fue creado un repositorio, mismo que ha sido vinculado al repositorio local del proyecto con el comando ```git remote add origin https://github.com/cecisalof/music-app.git```.

Para mantener el repositorio remoto sincronizado con el repositorio local del proyecto, se han hecho los commits correspondientes, añadiendo los cambios al área de preparación  y ejecutando el siguiente comando: 

 ```git add .  ```
 ```git commit -m "Texto identificativo del commit" ```

Después se han subido los cambios al repositorio remoto en GitHub ejecutando  ```git push -u origin master ```.


## 7. Estructura:

- Página Home: (Portada) Presenta el contenido, con una barra de navegación con enlaces al resto de páginas. También incluye secciones que enlazan al resto de las páginas.

- Snarky´s World: (Categoría) Esta página ofrece un listado de elementos relacionados con la temática general: discografía con enlaces a spotify y al detalle del disco, así como videos de la banda. La discografía enlaza a la página de detalle, misma que está relacionada con la o las noticias del disco.

- Snarky´s World/ Empire Central: (Página de detalle): A manera de blog se presenta un artículo sobre el disco Empire Central que la banda lanzó en 2022. 

- About: (Presentación) En esta página se habla de forma más detalladamente de la banda. La página inlcuye elementos multimedia como imágenes o videos y enlaces a los diferentes portales desde donde se puede escuchar la discografía de Snarky puppy.

- Enlaces Una página con documentación y enlaces a las fuentes de las que se ha sacado el contenido y atribuciones a los derechos copyleft cuando sea necesario.


## 8. Estética
 Para la estética de la web de Snarky Puppy se visitó la [weboficial](https://snarkypuppy.com/ "Snarky Puppy") y se trabajaron colores y recursos que se adecuaban a la estética de la banda. Los recursos trabajados pueden verse en el archivo [Figma](https://www.figma.com/file/jFwPOTiTwjiiLe7mmI25H0/Snarky-Project?type=design&node-id=0%3A1&mode=design&t=3Uo8EeMNLMhu9cJX-1 "Snarky Puppy") propio de este proyecto. 

 La propuesta busca mantener un estética limpia con información clara de cara al usuario.

