module.exports = {
  server: {
    baseDir: './',
    index: 'demo/index.html',
    routes: {
      '/': './bower_components'
    }
  },
  files: ['*.html', 'demo/index.html'],
  open: false,
  notify: false
};