class Em.Auth.EmberDataAuthModule
  init: ->
    @auth._config 'emberData', @_defaultConfig
    @config? || (@config = @auth._config 'emberData')
    @patch()

    @auth.reopen
      user: Em.computed.alias 'module.emberData.user'

    @auth.addHandler 'signInSuccess',  @findUser.bind(@)
    @auth.addHandler 'signInError',    @clearUser.bind(@)
    @auth.addHandler 'signOutSuccess', @clearUser.bind(@)

  _defaultConfig:
    # [string|false] enable auto-loading user model by setting this to a
    #   model type, as in store.find(userModel, id);
    #   or false to disable auto-loading user model
    userModel: false

  # @property [DS.Model|null] current signed in user, if signed in and
  #   enabled auto-find user; otherwise null
  user: null

  # find the current signed in user
  findUser: ->
    return unless @auth.userId? && @config.userModel
    @store.find(@config.userModel, @auth.userId).then (user) => @user = user

  # clear any current signed in user
  clearUser: ->
    @user = null

  patch: ->
    self = this
    DS.RESTAdapter.reopen
      ajax: (url, type, settings) ->
        super url, type, self.auth._strategy.serialize(settings || {})
