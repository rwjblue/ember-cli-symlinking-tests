EMBER_VERSIONS = %w(
1.0.0
)

EMBER_AUTH_VERSIONS = %w(
9.0.0
)

EMBER_VERSIONS.each do |ember|
  EMBER_AUTH_VERSIONS.each do |ember_auth|
    appraise "ember-#{ember}-ember-auth-#{ember_auth}" do
      gem 'ember-source', ember
      gem 'ember-auth-source', ember_auth
    end
  end
end
