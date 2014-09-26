# ember-data integration module for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-module-ember-data.png)](http://travis-ci.org/heartsentwined/ember-auth-module-ember-data)
[![Gem Version](https://badge.fury.io/rb/ember-auth-module-ember_data-source.png)](http://badge.fury.io/rb/ember-auth-module-ember_data-source)
[![NPM version](https://badge.fury.io/js/ember-auth-module-ember-data.png)](http://badge.fury.io/js/ember-auth-module-ember-data)

1. injects signed in session data (if any) to all ember-data server requests
2. optional: auto-loads an ember-data user model upon sign in

## Config

```coffeescript
App.Auth = Em.Auth.extend
  modules: ['emberData']

  emberData:
    # [string|false] enable auto-loading user model by setting this to a
    #   model type, as in store.find(userModel, id);
    #   or false to disable auto-loading user model
    userModel: false
```

## Usage

```coffeescript
@auth.user # access the auto-loaded user model
```
