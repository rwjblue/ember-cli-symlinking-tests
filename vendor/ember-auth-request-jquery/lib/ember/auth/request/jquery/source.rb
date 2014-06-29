module Ember
  module Auth
    module Request
      module Jquery
        module Source
          def self.bundled_path
            path = File.join '..', '..', '..', '..', '..', '..', \
              'dist', 'ember-auth-request-jquery.js'
            File.expand_path path, __FILE__
          end
        end
      end
    end
  end
end
