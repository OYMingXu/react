 const { override, fixBabelImports,addLessLoader,addBabelPlugins } = require('customize-cra');

 module.exports = override(
    fixBabelImports('import', {
     libraryName: 'antd',
    libraryDirectory: 'es',
     style: true,
     }),
     addLessLoader({
        javascriptEnabled: true,
         modifyVars: { '@primary-color': '#FFBFA7' },
     }),
     addBabelPlugins( // 支持装饰器
      [
          '@babel/plugin-proposal-decorators',
          {
              legacy: true
          }
      ]
  ),
 );