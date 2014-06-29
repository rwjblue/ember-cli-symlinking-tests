require 'securerandom'
require 'fileutils'

times = 100
path  = "vendor/fake_files"

FileUtils.mkdir_p(path)

times.times do |time|
  File.write("#{path}/#{time}_sample.txt", SecureRandom.random_bytes(1_500_000))
end
