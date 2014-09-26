module Ember
  module Auth
    module Response
      module Json
        module Source
          def self.bundled_path
            path = File.join '..', '..', '..', '..', '..', '..', \
              'dist', 'ember-auth-response-json.js'
            File.expand_path path, __FILE__
          end
        end
      end
    end
  end
end
