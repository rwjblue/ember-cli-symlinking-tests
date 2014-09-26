# token strategy adapter for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-strategy-token.png)](http://travis-ci.org/heartsentwined/ember-auth-strategy-token)
[![Gem Version](https://badge.fury.io/rb/ember-auth-strategy-token-source.png)](http://badge.fury.io/rb/ember-auth-strategy-token-source)
[![NPM version](https://badge.fury.io/js/ember-auth-strategy-token.png)](http://badge.fury.io/js/ember-auth-strategy-token)

Token authentication for ember-auth.

## Config

```coffeescript
App.Auth = Em.Auth.reopen
  strategy: 'token'

  # [string] key for auth token, used in both server requests and
  #   response payloads
  tokenKey: null

  # [string|null] (opt) key for user id, used in both server requests and
  #   response payloads;
  #   null to indicate no user id;
  #   default: null
  tokenIdKey: null

  # [string] (opt) 'param', 'authHeader', or 'customHeader';
  #   default: 'param'
  #   - 'param': send the auth token via a key-value pair in params / data
  #       `(tokenKey)=(auth token)`
  #   - 'authHeader': send the auth token via an Authorization header
  #       `Authorization: (tokenHeaderKey) (auth token)`
  #   - 'customHeader': send the auth token via a custom header
  #       `(tokenHeaderKey): (auth token)`
  tokenLocation: 'param'

  # [string|null] (opt) used in complement when `tokenLocation` is
  #   'authHeader' or 'customHeader' - see doc for `tokenLocation`;
  #   default: null
  tokenHeaderKey: null
```

## Usage

```coffeescript
@auth.authToken # access the auth token
```
