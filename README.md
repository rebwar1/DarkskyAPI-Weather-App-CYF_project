to instal all module is better to use npm ci rather than use npm i
———————————————————————————————————————————
npm init

— — — — — — — — — — — — — — — — — — — — — — — — —

npm i -D webpack webpack-cli

——————————————————————————————————
css-loader

npm install --save-dev style-loader

npm install --save-dev css-loader

module: {
rules: [
{
test: /\.css$/i,
use: ["style-loader", "css-loader"], < pip line from the right side >
},
],
},

/\.css$/i ==> \ means the . is dote > $ means ended with .css opposite ^

— — — — — — — — — — — — — — — — — — — — — — — — —
sass-loader

npm install sass-loader sass webpack --save-dev

{
test: /\.s[ac]ss$/i,
use: [
// Creates `style` nodes from JS strings
"style-loader",
// Translates CSS into CommonJS
"css-loader",
// Compiles Sass to CSS
"sass-loader",
],
},

— — — — — — — — — — — — — — — — — — — — — — — — —

file-loader for img

npm install file-loader --save-dev

{
test: /\.(png|jpe?g|gif)$/i,
use: [
{
loader: 'file-loader',
},
],
},

Options to prevent chang img name to hash

options: {
name: '[name].[ext]',
},

outputPath to make a folder name images inside src

outputPath: 'images',

— — — — — — — — — — — — — — — — — — — — — — — — —

MiniCssExtractPlugin PLUGINS
for separate js and CSS from each other and make a new folder main.css inside the src folder

npm install --save-dev mini-css-extract-plugin

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

plugins: [new MiniCssExtractPlugin()], <put in the webpack config file>
delete style-loader and add MiniCssExtractPlugin.loader

MiniCssExtractPlugin.loader

<add this link to html file>
 link rel="stylesheet" href="build/main.css" />

— — — — — — — — — — — — — — — — — — — — — — — — —

BABEL

npm install --save-dev babel-loader @babel/core

{
test: /\.m?js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
options: {
presets: ['@babel/preset-env']
}
}
}

npm install @babel/preset-env --save-dev

— — — — — — — — — — — — — — — — — — — — — — — — —

cache

filename: "bundle.[hash].js", //add [hash] //// [hash] is a placeholder for a unique hash value for each build (to avoid browser caching)

new MiniCssExtractPlugin({
filename: "[name].[hash].css", // [name] is a placeholder for the name of the entry point (e.g. main) (to avoid browser caching)
chunkFilename: "[id].css", // [id] is a placeholder for the id of the chunk (e.g. 0) (to avoid browser caching)
}), //add filename and chunkFilename

filename: "bundle.[contenthash].js”

for every new chang change hrf or sorc in HTML as well

— — — — — — — — — — — — — — — — — — — — — — — — —

clean-webpack-plugin ⇪ this plugin find in npm not in webpack

npm install --save-dev clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

new CleanWebpackPlugin(), // add to the webpack config inside PLUGIN

// clean the build folder before each build⇪

— — — — — — — — — — — — — — — — — — — — — — — — —

HtmlWebpackPlugin

npm install --save-dev html-webpack-plugin

var HtmlWebpackPlugin = require('html-webpack-plugin');

new HtmlWebpackPlugin() // add to the webpack config inside PLUGIN

new HtmlWebpackPlugin({ // Also generate a test.html
template: 'src/assets/test.html'
})

— — — — — — — — — — — — — — — — — — — — — — — — —

webpack-dev-server

npm install webpack-dev-server --save-dev

"start": "webpack serve"
//write it in package.json ⇪ to start automatically
