/* global require, module */
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

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

app.import('vendor/pubnub/web/pubnub.js');
app.import('vendor/js-md5/js/md5.js');
app.import('vendor/siftjs/sift.js');
app.import('vendor/jquery-fittext.js/jquery.fittext.js');
app.import('vendor/moment/moment.js');
app.import('vendor/typeahead.js/dist/typeahead.js');
app.import('vendor/ember-typeahead/dist/ember-typeahead.js');
app.import('vendor/esprima/esprima.js');
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/jquery-mutate/js/events.js');
app.import('vendor/jquery-mutate/js/mutate.js');
app.import('vendor/lodash/dist/lodash.compat.js');
app.import('vendor/validator-js/validator.js');
 
 
//Ember Table Deps
app.import('vendor/jquery-ui/ui/jquery.ui.core.js');
app.import('vendor/jquery-ui/ui/jquery.ui.widget.js');
app.import('vendor/jquery-ui/ui/jquery.ui.mouse.js');
app.import('vendor/jquery-ui/ui/jquery.ui.resizable.js');
app.import('vendor/jquery-ui/ui/jquery.ui.sortable.js');
app.import('vendor/jquery-ui/themes/base/jquery-ui.css');
 
app.import('vendor/antiscroll/antiscroll.js');
app.import('vendor/antiscroll/antiscroll.css');
 
app.import('vendor/jquery-mousewheel/jquery.mousewheel.js');
// Ember Table
app.import('vendor/ember-table/dist/ember-table.js');
app.import('vendor/ember-table/dist/ember-table.css');
 
//ACE
app.import('vendor/ace-builds/src-noconflict/ace.js');
app.import('vendor/ace-builds/src-noconflict/ext-language_tools.js');
app.import('vendor/ace-builds/src-noconflict/mode-javascript.js');
app.import('vendor/ace-builds/src-noconflict/mode-json.js');
app.import('vendor/ace-builds/src-noconflict/mode-html.js');
app.import('vendor/ace-builds/src-noconflict/worker-javascript.js');
app.import('vendor/ace-builds/src-noconflict/worker-json.js');
app.import('vendor/ace-builds/src-noconflict/worker-html.js');
app.import('vendor/ace-builds/src-noconflict/theme-chrome.js');
 
app.import('vendor/tether/tether.js');
app.import('vendor/ember-list-view/list-view.js');
app.import('vendor/ember-list-view/list-view.js');
 
app.import('vendor/datetimepicker/jquery.datetimepicker.js');
app.import('vendor/datetimepicker/jquery.datetimepicker.css');
app.import('vendor/faker/dist/faker.js');
 
app.import('vendor/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.eot');
app.import('vendor/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.svg');
app.import('vendor/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf');
app.import('vendor/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.woff');
 
app.import('vendor/ember-simple-auth/ember-simple-auth.js');
app.import('vendor/ember-uploader/dist/ember-uploader.js');
 
// Testing
mocha = pickFiles('vendor/mocha', {
  srcDir: '/',
  files: [ 'mocha.js', 'mocha.css' ],
  destDir: '/assets'
});
chai = pickFiles('vendor/chai', {
  srcDir: '/',
  files: [ 'chai.js' ],
  destDir: '/assets'
});
 
module.exports = mergeTrees([app.toTree(), mocha, chai]);
