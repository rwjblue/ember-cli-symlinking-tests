/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import({
  development: 'vendor/ember-data/ember-data.js',
  production:  'vendor/ember-data/ember-data.prod.js'
}, {
  'ember-data': [
    'default'
  ]
});

app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

app.import('vendor/ember-auth/dist/ember-auth.js');
app.import('vendor/ember-auth-module-ember-data/dist/ember-auth-module-ember-data.js');
app.import('vendor/ember-auth-module-rememberable/dist/ember-auth-module-rememberable.js');
app.import('vendor/ember-auth-request-jquery/dist/ember-auth-request-jquery.js');
app.import('vendor/ember-auth-response-json/dist/ember-auth-response-json.js');
app.import('vendor/ember-auth-strategy-token/dist/ember-auth-strategy-token.js');
app.import('vendor/ember-auth-session-cookie/dist/ember-auth-session-cookie.js');

//adding in bootstrap
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');
 
//adding in quilljs wysiwyg editor
app.import('vendor/quill/dist/quill.js');
app.import('vendor/quill/dist/themes/quill.snow.css');
 
//adding in summernote wysiwyg editor
app.import('vendor/summernote/dist/summernote.min.js');
app.import('vendor/summernote/dist/summernote.css');

module.exports = app.toTree();
