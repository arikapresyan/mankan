require('dotenv').config();

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withFonts = require('./fonts-loader');


const config = {
  ...withFonts(withCSS(
    withLess(
      {
        enableSvg: true,
        webpack(conf) {
          conf.module.rules.push({
            test: /\.(png|jpg|gif|svg)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                fallback: {
                  loader: 'file-loader',
                  options: { publicPath: '/_next/static/images', outputPath: 'static/images' },
                },
              },
            },
          });
          conf.module.rules.push({
            test: /\.less$/,
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: { '@primary-color': '#C40A04' },
            },
          });

          return conf;
        },
        cssModules: false,

      },
    ),

  )),
  env: {
    REACT_APP_URL: process.env.APP_URL,
  },
  // distDir: 'build',
};

module.exports = config;
