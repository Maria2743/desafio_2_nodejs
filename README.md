# Desafío número #02 - Fecha: 12-04-2024 - Día 4 Introducción a Node.js
Contarás con el siguiente array de servicios:
```js
export const services = [
  {
    name: "Web Development",
    description: "We create web applications with the latest technologies.",
    url: "/services/web-development",
  },
  {
    name: "Mobile Development",
    description: "We create mobile applications with the latest technologies.",
    url: "/services/mobile-development",
  },
  {
    name: "DevOps",
    description: "We create CI/CD pipelines with the latest technologies.",
    url: "/services/devops",
  },
  {
    name: "QA",
    description: "We create test cases with the latest technologies.",
    url: "/services/qa",
  },
  {
    name: "UX/UI",
    description: "We create designs with the latest technologies.",
    url: "/services/ux-ui",
  },
  {
    name: "Training",
    description: "We create training with the latest technologies.",
    url: "/services/training",
  },
  {
    name: "Consulting",
    description: "We create consulting with the latest technologies.",
    url: "/services/consulting",
  },
  {
    name: "Outsourcing",
    description: "We create outsourcing with the latest technologies.",
    url: "/services/outsourcing",
  },
];
```
1. Crea un servidor con Express utilizando el motor de plantillas Handlebars. (2 puntos)
2. Crea dos partials, uno para el navbar y otro para el footer. (2 puntos)
3. Crea una página de servicios con un listado de servicios, debes utilizar el array de servicios proporcionado previamente. (2 puntos)
4. Crea una página de servicio con la descripción del servicio seleccionado. (2 puntos)
5. Crea una página de error 404 en caso de que el servicio no exista. (2 puntos)


# Desarrollo del desafio.

1. Instalar lo siguiente en el terminal

```Crear archivo package.json
`$ npm init -y`
 ```

```Instala express
`$ npm install express`
 ```

 ```Instala express-handlebars
`$ npm install express-handlebars`
 ```

 2. Crear archivo `.gitignore`

 3. Crear carpetas `views` y dentro de ella se crea otra carpeta `layouts`

.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

Cada una contendra su propio archivo, tal cual muestra la imagen.

Acceder a las carpetas

node_modules\bootstrap\dist\css\bootstrap.min.css
node_modules\bootstrap\dist\js\bootstrap.min.js
node_modules\jquery\dist\jquery.min.js