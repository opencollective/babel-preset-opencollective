
var plugins = [
  "babel-plugin-add-module-exports",
  "babel-plugin-check-es2015-constants",
	"babel-plugin-import-glob",
  "babel-plugin-syntax-jsx",
  "babel-plugin-syntax-async-functions",
  "babel-plugin-syntax-trailing-function-commas",
  "babel-plugin-transform-decorators-legacy",
	"babel-plugin-transform-function-bind",
  "babel-plugin-transform-class-properties",
  "babel-plugin-transform-es2015-arrow-functions",
  "babel-plugin-transform-es2015-block-scoped-functions",
  "babel-plugin-transform-es2015-block-scoping",
  "babel-plugin-transform-es2015-classes",
  "babel-plugin-transform-es2015-computed-properties",
  "babel-plugin-transform-es2015-destructuring",
  "babel-plugin-transform-es2015-for-of",
  "babel-plugin-transform-es2015-function-name",
  "babel-plugin-transform-es2015-literals",
  //"babel-plugin-transform-es2015-modules-commonjs",
  "babel-plugin-transform-es2015-object-super",
  "babel-plugin-transform-es2015-parameters",
  "babel-plugin-transform-es2015-shorthand-properties",
  "babel-plugin-transform-es2015-spread",
  "babel-plugin-transform-es2015-sticky-regex",
  "babel-plugin-transform-es2015-template-literals",
  "babel-plugin-transform-es2015-typeof-symbol",
  "babel-plugin-transform-es2015-unicode-regex",
  "babel-plugin-transform-export-extensions",
  "babel-plugin-transform-object-rest-spread",
  "babel-plugin-transform-react-display-name",
  "babel-plugin-transform-react-jsx",
  "babel-plugin-transform-react-jsx-source",
	"babel-plugin-transform-async-to-generator",
  "babel-plugin-transform-regenerator",
  "babel-plugin-transform-runtime",
  "babel-plugin-transform-strict-mode",
  "babel-plugin-transform-builtin-extend",
  "babel-plugin-lodash"
]

module.exports = {
	plugins: plugins.map(function(p){
		var plugin = typeof p === 'string' ? require(p) : p
		return plugin.default ? plugin.default : plugin
	})
}
