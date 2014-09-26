Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.module.ember-data'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authModule:emberData', Em.Auth.EmberDataAuthModule, \
      { singleton: true }
      app.inject 'authModule:emberData', 'auth', 'auth:main'
      app.inject 'authModule:emberData', 'store', 'store:main'

  application.initializer
    name: 'ember-auth.module.ember-data-load'
    after: 'ember-auth-load'

    initialize: (container, app) ->
      # force init() call wth an eager-load
      container.lookup 'authModule:emberData'
