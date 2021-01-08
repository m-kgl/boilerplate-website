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


**Used DevDependencies**    

`autoprefixer`: to use vendor prefixes for css ( https://www.npmjs.com/package/autoprefixer )  
`clean-webpack-plugin`: to clean old files on build/dev ( https://www.npmjs.com/package/clean-webpack-plugin )  
`copy-webpack-plugin`: to copy files from src to dist ( https://www.npmjs.com/package/copy-webpack-plugin )  
`css-loader`: to interpret imports in css ( https://www.npmjs.com/package/css-loader )  
`mini-css-extract-plugin`: to extract the bundled css into separate files ( https://www.npmjs.com/package/mini-css-extract-plugin )  
`postcss`: to use autoprefixer ( https://www.npmjs.com/package/postcss )  
`postcss-loader`: to process css with postcss and autoprefixer ( https://www.npmjs.com/package/postcss-loader )  
`sass`: to compile scss to css  ( https://www.npmjs.com/package/sass )  
`sass-loader`: to load sass to compile scss to css ( https://www.npmjs.com/package/sass-loader )  
`ts-loader`: to process ts-files ( )  
`typescript`: to use typescript ( https://www.npmjs.com/package/typescript )  
`webpack`: to bundle the coded files ( https://www.npmjs.com/package/ts-loader )  
`webpack-bundle-analyzer`: to analyze the finished bundle ( https://www.npmjs.com/package/webpack-bundle-analyzer )  
`webpack-cli`: to use webpack commandline ( https://www.npmjs.com/package/webpack-cli )  
`webpack-dev-server`: to create a webserver for testing purposes ( https://www.npmjs.com/package/webpack-dev-server )  
`webpack-merge`: to merge different webpack files together ( https://www.npmjs.com/package/webpack-merge )  
