class Em.Auth.RememberableAuthModule
  init: ->
    @auth._config 'rememberable', @_defaultConfig
    @config? || (@config = @auth._config 'rememberable')
    @patch()

    @auth.addHandler 'signInSuccess',  @remember.bind(@)
    @auth.addHandler 'signInError',    @forget.bind(@)
    @auth.addHandler 'signOutSuccess', @forget.bind(@)

  _defaultConfig:
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
  recall: (opts = {}) ->
    if !@auth.signedIn && (token = @retrieveToken())
      @fromRecall = true # see doc at remember()
      opts.data ||= {}
      opts.data[@config.tokenKey] = token
      if @config.endPoint?
        @auth.signIn @config.endPoint, opts
      else
        @auth.signIn opts
    else
      new Em.RSVP.resolve

  # clear any existing remembered session,
  # then extract any rememberable session info from sign in payload
  #
  # @param data [object] the `canonicalize`d data object
  remember: (data) ->
    # clear any existing remembered session first
    # but if we come from recall, then don't clear anything -
    # that remembered session is supposed to be still valid
    # regardless of whether server echoes back the remember token
    @forget() unless @fromRecall

    @fromRecall = false

    if token = data[@config.tokenKey]
      @storeToken(token) unless token == @retrieveToken()

  # clear any existing remembered session
  forget: ->
    @removeToken()

  # retreive the rememberable token from session storage
  #
  # @return [string|null|undefined] the rememberable token, or null/undef
  retrieveToken: ->
    @auth._session.retrieve 'ember-auth-rememberable'

  # store the rememberable token into session storage
  #
  # @param token [string] the rememberable token
  storeToken: (token) ->
    @auth._session.store 'ember-auth-rememberable', token,
      expires: @config.period

  # remove any rememberable token from session storage
  removeToken: ->
    @auth._session.remove 'ember-auth-rememberable'

  patch: ->
    self = this
    Em.Route.reopen
      beforeModel: ->
        self.auth._ensurePromise(super.apply this, arguments).then =>
          return unless self.config.autoRecall && !self.auth.signedIn
          self.recall()
