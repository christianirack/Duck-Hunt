module.exports = {
  plugins: [
  require('postcss-autoreset')({
    reset: {
      margin: 0,
      padding: 0,
      borderRadius: 0,
      border: 0
    }
  }),
    require('autoprefixer')({
    	"autoprefixer": {
	        "browsers": "> 5%"
		}
	  }
    ),
    require('postcss-utilities'),
    require('postcss-assets')({
      basePath: './dist', //Default  .
      loadPaths: ['./images','./assets'], //Specific directories to look
    	cachebuster: true //MSodification date
    }),
    require('postcss-font-awesome') 
  ]
}