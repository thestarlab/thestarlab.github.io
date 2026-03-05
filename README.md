# thestarlab.github.io

Website source for STAR Lab (Jekyll-based).

## Local development

1. Install Ruby gems:
   `bundle install`
2. Run the site locally:
   `bundle exec jekyll serve --livereload`
3. Open:
   `http://127.0.0.1:4000`

If Bundler version mismatch occurs, install the locked version first (from `Gemfile.lock`), then run `bundle install`.

## Structure

- `_layouts/`: page layouts
- `_includes/`: shared page partials (header/nav/footer)
- `styles/`: LESS stylesheets
- `_data/`: structured content data (e.g., people list)
- `_posts/`: news posts
