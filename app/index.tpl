<!DOCTYPE html>
<html{% if (o.htmlWebpackPlugin.files.manifest) { %} manifest="{%= o.htmlWebpackPlugin.files.manifest %}" {% } %}>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{%= o.htmlWebpackPlugin.options.title || 'Title missing'%}</title>
    {% for (var css in o.htmlWebpackPlugin.files.css) { %}
    <link href="{%= o.htmlWebpackPlugin.files.css[css] %}" rel="stylesheet">
    {% } %}
  </head>
  <body>
    <main id="app"></main>

    {% for (var chunk in o.htmlWebpackPlugin.files.chunks) { %}
    <script src="{%= o.htmlWebpackPlugin.files.chunks[chunk].entry %}"></script>
    {% } %}
  </body>
</html>
