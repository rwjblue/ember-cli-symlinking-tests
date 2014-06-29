module Ember
  module Auth
    module Session
      module Cookie
        module Source
          def self.bundled_path
            path = File.join '..', '..', '..', '..', '..', '..', \
              'dist', 'ember-auth-session-cookie.js'
            File.expand_path path, __FILE__
          end
        end
      end
    end
  end
end
