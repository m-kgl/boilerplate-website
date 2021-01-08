# Starterpack for Websites with Webpack, Typescript and SCSS

This boilerplate for creating websites with the bundler webpack uses typescript and 
SCSS for developing.

**Usage**

`npm run start`: starts a developing server on port 8080. it runs the bundled css/js files from memory.
`npm run build`: build the project.


**Info**

`styles.scss`: this file serves as the main styling point, in which all other styling files should be included.
`app.ts`: serves as main file for all typescript.

It is possible to include other entry points, but to use those two was the intention of this repository.

`index.html`: this file is located in the dist folder as the main html file and includes a favicon and the two bundled scripts.
