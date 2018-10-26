# Make sure that all partials are rendered without a layout
page "/partials/*", :layout => false

###
# Page options, layouts, aliases and proxies
###
set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'

###
# Helpers
###
activate :livereload
activate :directory_indexes
activate :automatic_image_sizes
activate :bower
activate :syntax, :line_numbers => false

# Build-specific configuration
configure :build do

  # Use relative URLs
  activate :relative_assets

  # all js is bundled into application.js
  ignore 'assets/_bower/*'

  # partials and layouts not needed in build
  ignore 'layouts/*'
  ignore 'partials/*'

  activate :minify_css
  activate :minify_javascript
end
