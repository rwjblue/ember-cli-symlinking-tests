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
  development: 'bower_components/ember-data/ember-data.js',
  production:  'bower_components/ember-data/ember-data.prod.js'
}, {
  'ember-data': [
    'default'
  ]
});

app.import('bower_components/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

app.import('bower_components/ember-auth/dist/ember-auth.js');
app.import('bower_components/ember-auth-module-ember-data/dist/ember-auth-module-ember-data.js');
app.import('bower_components/ember-auth-module-rememberable/dist/ember-auth-module-rememberable.js');
app.import('bower_components/ember-auth-request-jquery/dist/ember-auth-request-jquery.js');
app.import('bower_components/ember-auth-response-json/dist/ember-auth-response-json.js');
app.import('bower_components/ember-auth-strategy-token/dist/ember-auth-strategy-token.js');
app.import('bower_components/ember-auth-session-cookie/dist/ember-auth-session-cookie.js');

//adding in bootstrap
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
 
//adding in quilljs wysiwyg editor
app.import('bower_components/quill/dist/quill.js');
app.import('bower_components/quill/dist/themes/quill.snow.css');
 
//adding in summernote wysiwyg editor
app.import('bower_components/summernote/dist/summernote.min.js');
app.import('bower_components/summernote/dist/summernote.css');

app.import('bower_components/pubnub/web/pubnub.js');
app.import('bower_components/js-md5/js/md5.js');
app.import('bower_components/siftjs/sift.js');
app.import('bower_components/jquery-fittext.js/jquery.fittext.js');
app.import('bower_components/moment/moment.js');
app.import('bower_components/typeahead.js/dist/typeahead.js');
app.import('bower_components/ember-typeahead/dist/ember-typeahead.js');
app.import('bower_components/esprima/esprima.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/jquery-mutate/js/events.js');
app.import('bower_components/jquery-mutate/js/mutate.js');
app.import('bower_components/lodash/dist/lodash.compat.js');
app.import('bower_components/validator-js/validator.js');
 
 
//Ember Table Deps
app.import('bower_components/jquery-ui/ui/jquery.ui.core.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.widget.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.mouse.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.resizable.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.sortable.js');
app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');
 
app.import('bower_components/antiscroll/antiscroll.js');
app.import('bower_components/antiscroll/antiscroll.css');
 
app.import('bower_components/jquery-mousewheel/jquery.mousewheel.js');
// Ember Table
app.import('bower_components/ember-table/dist/ember-table.js');
app.import('bower_components/ember-table/dist/ember-table.css');
 
//ACE
app.import('bower_components/ace-builds/src-noconflict/ace.js');
app.import('bower_components/ace-builds/src-noconflict/ext-language_tools.js');
app.import('bower_components/ace-builds/src-noconflict/mode-javascript.js');
app.import('bower_components/ace-builds/src-noconflict/mode-json.js');
app.import('bower_components/ace-builds/src-noconflict/mode-html.js');
app.import('bower_components/ace-builds/src-noconflict/worker-javascript.js');
app.import('bower_components/ace-builds/src-noconflict/worker-json.js');
app.import('bower_components/ace-builds/src-noconflict/worker-html.js');
app.import('bower_components/ace-builds/src-noconflict/theme-chrome.js');
 
app.import('bower_components/tether/tether.js');
app.import('bower_components/ember-list-view/list-view.js');
app.import('bower_components/ember-list-view/list-view.js');
 
app.import('bower_components/datetimepicker/jquery.datetimepicker.js');
app.import('bower_components/datetimepicker/jquery.datetimepicker.css');
app.import('bower_components/faker/dist/faker.js');
 
app.import('bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.eot');
app.import('bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.svg');
app.import('bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf');
app.import('bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.woff');
 
app.import('bower_components/ember-simple-auth/ember-simple-auth.js');
app.import('bower_components/ember-uploader/dist/ember-uploader.js');
 
module.exports = app.toTree();
