module.exports = {
  presets: [[
    '@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'usage',
      polyfills: [
        'es.promise',
        'es.symbol'
      ]
    }
  ]]
}
