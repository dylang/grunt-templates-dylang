## About the Author

Dylan is a senior JavaScript developer and tech lead at [Opower](http://opower.com), co-creator of [Doodle or Die](http://doodleordie.com), and father of two awesome kids.

Here are some other Node modules Dylan has created:

| Name | Description | Github Stars | Npm Installs |
|---|---|--:|--:|{% _.each(repos, function(repo) {
%} {%= n %} | [{%= repo.name %}]({%= repo.url
%}) | {%= repo.description
%} | {%= repo.stars > 10 ? commaIt(repo.stars) : '_New!_'
%} | {%= repo.stars > 0 ? commaIt(repo.downloads)  : '_TBD_'
%} |{% }); %}

_Data collected on {%= grunt.template.date("fullDate") %} using [anthology](https://github.com/dylang/anthology)._