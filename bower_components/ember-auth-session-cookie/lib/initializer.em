Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.session.cookie'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authSession:cookie', Em.Auth.CookieAuthSession, \
      { singleton: true }
      app.inject 'authSession:cookie', 'auth', 'auth:main'

  application.initializer
    name: 'ember-auth.session.cookie-load'
    after: 'ember-auth-load'

    initialize: (container, app) ->
      # force init() call wth an eager-load
      container.lookup 'authSession:cookie'
