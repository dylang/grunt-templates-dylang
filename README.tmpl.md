<!---

This file was automatically generated.

Use `grunt readme` to regenerate.

--->
{%= _.include('readme/header.md') %}

{%= _.doc('readme/screenshots.md') %}

{% if (_.contains(name, 'grunt')) { %}
{%= _.include('readme/getting-started-grunt.md') %}
{% } %}

{%= _.doc(name + '.md') %}

{%= _.include('readme/related-repos.md') %}

{%= _.include('readme/footer.md') %}

<!---

This file was automatically generated.

Use `grunt readme` to regenerate.

--->