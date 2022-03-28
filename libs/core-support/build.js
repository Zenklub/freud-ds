const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'size/object', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  matcher: function(token) {
    if (token.path.includes('shadow')) {
      return false;
    }
    return token.value.toString()?.includes('px') || token.value.toString()?.includes('%');
  },
  transformer: function(token, options) {
    var val = parseFloat(token.value);
    if (isNaN(val)) throwSizeError(token.name, token.value, "object");

    return token.value.toString()?.includes('px') ? val : val / 100;
  }
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');