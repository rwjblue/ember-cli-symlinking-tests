# jquery request adapter for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-request-jquery.png)](http://travis-ci.org/heartsentwined/ember-auth-request-jquery)
[![Gem Version](https://badge.fury.io/rb/ember-auth-request-jquery-source.png)](http://badge.fury.io/rb/ember-auth-request-jquery-source)
[![NPM version](https://badge.fury.io/js/ember-auth-request-jquery.png)](http://badge.fury.io/js/ember-auth-request-jquery)

Send server requests via `jQuery.ajax`.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  request: 'jquery'
```

## Usage

```coffeescript
@auth.get 'jqxhr' # access the jqxhr object from last request
```

License
=======

MIT
