Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.response.json'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authResponse:json', Em.Auth.JsonAuthResponse, \
      { singleton: true }
      app.inject 'authResponse:json', 'auth', 'auth:main'

  application.initializer
    name: 'ember-auth.response.json-load'
    after: 'ember-auth-load'

    initialize: (container, app) ->
      # force init() call wth an eager-load
      container.lookup 'authResponse:json'
