# rememberable module for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-module-rememberable.png)](http://travis-ci.org/heartsentwined/ember-auth-module-rememberable)
[![Gem Version](https://badge.fury.io/rb/ember-auth-module-rememberable-source.png)](http://badge.fury.io/rb/ember-auth-module-rememberable-source)
[![NPM version](https://badge.fury.io/js/ember-auth-module-rememberable.png)](http://badge.fury.io/js/ember-auth-module-rememberable)

"Remember me" feature for ember-auth.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  modules: ['rememberable']

  rememberable:
    # [string] key for the remember token in server requests and payloads
    tokenKey: null

    # [number] (opt) valid period (days) for the remember token;
    #   default: 14
    period: 14

    # [bool] (opt) whether to auto-recall a remembered session;
    #   default: true
    autoRecall: true

    # [string|null] (opt) a different end point for sign in requests
    #   from rememberable
    endPoint: null
```

## Usage

```coffeescript
# call _super() and follow the promise pattern
# if you override Ember.Route.beforeModel()
App.FooRoute = Ember.Route.extend
  beforeModel: ->
    @_super.apply(this, arguments).then -> doSomething()
  # or
  beforeModel: ->
    doSomething()
    @_super.apply(this, arguments) # already returns promise
```

```coffeescript
# low level methods for manual use

# try to recall a remembered session, if any
#
# @param opts [object] (opt) jquery.ajax(settings) -style options object,
#   default: {}
#
# @return [Em.RSVP.Promise]
#   if there is no active signed in session,
#     and if a remembered session is found,
#     returns the auth.signIn() promise;
#   else returns a resolved empty promise
@auth.get('module.rememberable').recall(opts)

# clear any existing remembered session,
# then extract any rememberable session info from sign in payload
#
# @param data [object] the `canonicalize`d data object
@auth.get('module.rememberable').remember(data)

# clear any existing remembered session
@auth.get('module.rememberable').forget()
```

License
=======

MIT
