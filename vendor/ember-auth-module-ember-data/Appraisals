EMBER_VERSIONS = %w(
1.0.0
)

EMBER_DATA_VERSIONS = %w(
1.0.0.beta.2 1.0.0.beta.1
)

EMBER_AUTH_VERSIONS = %w(
9.0.0
)

EMBER_VERSIONS.each do |ember|
  EMBER_DATA_VERSIONS.each do |ember_data|
    EMBER_AUTH_VERSIONS.each do |ember_auth|
      appraise "ember-#{ember}-ember-data-#{ember_data}-ember-auth-#{ember_auth}" do
        gem 'ember-source', ember
        gem 'ember-data-source', ember_data
        gem 'ember-auth-source', ember_auth
      end
    end
  end
end
