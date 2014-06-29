Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.request.jquery'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authRequest:jquery', Em.Auth.JqueryAuthRequest, \
      { singleton: true }
      app.inject 'authRequest:jquery', 'auth', 'auth:main'

  application.initializer
    name: 'ember-auth.request.jquery-load'
    after: 'ember-auth-load'

    initialize: (container, app) ->
      # force init() call wth an eager-load
      container.lookup 'authRequest:jquery'
