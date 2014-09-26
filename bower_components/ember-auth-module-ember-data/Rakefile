# bundler tasks
require 'bundler/gem_tasks'

# jasmine
begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end

# jasmine-headless-webkit
require 'jasmine-headless-webkit'

Jasmine::Headless::Task.new('jasmine:headless') do |t|
  t.colors = true
  t.keep_on_error = true
  t.jasmine_config = 'spec/javascripts/support/jasmine.yml'
end

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
  file_name = 'ember-auth-module-ember-data'
  env = Sprockets::Environment.new
  env.append_path 'lib'
  env.append_path 'vendor'
  File.write File.join('dist', "#{file_name}.js"), env["#{file_name}.js"].to_s

  puts 'Minifying js distribution...'
  File.write File.join('dist', "#{file_name}.min.js"), \
    Uglifier.compile(File.read(File.join('dist', "#{file_name}.js")))

  puts 'Successfully built ember-auth ember data integration module at dist/'
end

# appraisal
require 'appraisal'

task :default => [:dist]
