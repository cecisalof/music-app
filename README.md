## Musi-app

Accesible desde (añadir el link de la web)
Atribuciones: (si hay que hacer algún atribución de recursos)


A continuación, se detallan los pasos necesarios para poner en marcha el proyecto music-app en un entorno virtual, además de cómo instalar las herramientas necesarias para levantar el proyecto.

### Resumen del Proyecto - Sitio web de música

El objetivo de este proyecto es desarrollar un sitio web de un grupo de música (indicar qué grupo) utilizando Node.js, así como pre o postprocesadores de CSS, JavaScript o HTML con Parcel. El sitio web debe ser responsive y se debe poder visualizar correctamente desde cualquier dispositivo moderno (teléfono, tableta, ordenador ...). 

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
npx parcel index.html
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

Se ha configurado un script para iniciar el servidor de desarrollo:

```"start": "npm-run-all clean parcel:dev" ``` usando el comando ```yarn start``` o ```npm start``` 

y otro para para construir la aplicación en producción:

 ```"build": "npm-run-all clean parcel:build"``` usando el comando ```yarn build``` o ```npm run build```.


Por último, también se ha declarado la entrada -desde donde Parcel comienza a construir el código fuente- en el campo source  ```"source": "index.html"```, para no tener que duplicarlas en cada comando parcel.


## 4. Soporte para navegadores antiguos:

Para asegurar la compatibilidad con los navegadores soportados, se declaran los navegadores soportados por el sitio web en el campo browserslist: 

´´´
 "browserslist": "> 0.5%, last 2 versions, not dead",
´´´

El comando anterior dará soporte a: 
- versiones de navegadores seleccionadas por las estadísticas globales de uso > 0.5%.
- las 2 últimas versiones para cada navegador.
- navegadores con soporte oficial o actualizaciones durante 24 meses.

## 5. Gestión de dependencia: 



## 6. Creación del repositorio Git


## 7. Adecuación a la temática y estructura de la práctica.

## 8. Diseño responsive, complejidad y estética

## 9. Semántica y accesibilidad
