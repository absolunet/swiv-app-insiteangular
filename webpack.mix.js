const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

require('laravel-mix-eslint');

const distFolderName = 'dist';
const distFileName = `${__dirname.split(path.sep).pop()}${mix.inProduction() ? '.min' : ''}.js`;
const coreName = 'swiv-core';
const mapperName = 'swiv-map-insite';

mix.setPublicPath(distFolderName)
    .webpackConfig({
        resolve: {
            alias: {
                [coreName]: path.resolve(__dirname, '..', coreName),
                [mapperName]: path.resolve(__dirname, '..', mapperName)
            }
        }
    })
    .eslint()
    .js('index.js', distFileName)
    .then(() => {
        const manifestPath = path.resolve(__dirname, distFolderName, 'mix-manifest.json');
        if (fs.existsSync(manifestPath)) {
            fs.unlink(manifestPath, () => {});
        }
    });
