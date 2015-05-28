require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
# http_path = "/"
# css_dir = "stylesheets"
# sass_dir = "sass"
# images_dir = "images"
# javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass



sass_dir = '<%= yeoman.app %>/styles',
css_dir  = '.tmp/styles',
generated_images_dir = '.tmp/images/generated',
images_dir= '<%= yeoman.app %>/images',
javascripts_dir= '<%= yeoman.app %>/scripts',
fonts_dir= '<%= yeoman.app %>/styles/fonts',
additional_import_paths= './bower_components',
http_images_path= '/images',
http_generated_images_path= '/images/generated',
http_fonts_path= '/styles/fonts',
relative_assets= false,
asset_cache_buster= false,
