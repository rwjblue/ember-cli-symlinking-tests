module Ember
  module Auth
    module Strategy
      module Token
        module Source
          def self.bundled_path
            path = File.join '..', '..', '..', '..', '..', '..', \
              'dist', 'ember-auth-strategy-token.js'
            File.expand_path path, __FILE__
          end
        end
      end
    end
  end
end
