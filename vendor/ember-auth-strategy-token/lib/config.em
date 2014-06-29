Em.Auth.reopen
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
