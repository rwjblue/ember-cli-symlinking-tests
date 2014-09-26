# bundler tasks
require 'bundler/gem_tasks'

# build dist js files
require 'uglifier'
require 'sprockets'
require 'ember_script'
Sprockets.register_engine '.em', EmberScript::EmberScriptTemplate
desc 'Build distribution js files'
task :dist do
  puts 'Removing existing dist files...'
  Dir['dist/*'].each { |f| File.delete f }
  FileUtils.mkdir_p 'dist'

  puts 'Compiling js distribution...'
  file_name = 'ember-auth-session-cookie'
  env = Sprockets::Environment.new
  env.append_path 'lib'
  env.append_path 'vendor'
  File.write File.join('dist', "#{file_name}.js"), env["#{file_name}.js"].to_s

  puts 'Minifying js distribution...'
  File.write File.join('dist', "#{file_name}.min.js"), \
    Uglifier.compile(File.read(File.join('dist', "#{file_name}.js")))

  puts 'Successfully built ember-auth cookie session adapter at dist/'
end

# appraisal
require 'appraisal'

task :default => [:dist]
