module.exports = {
  mount: {
    // directory name: 'build directory'
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    ['@snowpack/plugin-react-refresh'],
    [
      '@snowpack/plugin-webpack',
      {
        /* see "Plugin Options" below */
      },
    ],
  ],
};