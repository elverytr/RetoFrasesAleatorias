# Frases Aleatorias

Proyecto desarrollado con React que permite la visualización de distintas frases celebres con su respectivo autor, varios elementos como el fondo y fuente cambian a un color aleatorio cada vez que se pulsa en el botón para continuar con la siguiente frase.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
node js
```
```
react
```
```
styled-components
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

```
Descargar e instalar Node js https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi
```
```
npm i
```

```
yarn add styled-components
```
```
yarn add react
```
## Probar la app

```
yarn run start
```

## Despliegue 📦

Para desplegar en GitHub Pages necesitarás lo siguiente

```
yarn add gh-pages
```
#### Crear un repositorio en GitHub

#### Remover este remote si usaste ** git clone ** , usando el comando:
```
git remote rm origin
```
#### Agregar tu nuevo repositorio con el comando:

```
git add origin https://github.com/<tu_usuario>/<nombre_de_tu_repositorio>.git
```
#### Agregar al package.json
```
{
"homepage": "https://<tu_usuario>.github.io/<nombre_de_tu_repositorio>"

},

"scripts":{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```

### Publicar

```
yarn run build
```

```
yarn run deploy
```

## Construido con React🛠️

* [React](https://es.reactjs.org/) - Framework del front
* [styled-components](https://styled-components.com/) - Librería de estilos
* [gh-pages](https://www.npmjs.com/package/gh-pages) - Dependencia utilizada para publicar el sito web
* [npm](https://www.npmjs.com/) - Adminitrador de paquetes
* [yarn](https://yarnpkg.com/) - Administrador de paquetes

## Autor ✒️

* **Elver Tobo** - *Desarrollo y documentación* - [elverytr](https://github.com/elverytr)

