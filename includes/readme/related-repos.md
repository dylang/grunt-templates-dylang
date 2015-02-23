## About the Author

Hi! Thanks for checking out this project! My name is **Dylan Greene**. When not overwhelmed with my two young kids I enjoy contributing
to the open source community. I'm also a tech lead at [Opower](http://opower.com). [![@dylang](https://img.shields.io/badge/github-dylang-green.svg)](https://github.com/dylang) [![@dylang](https://img.shields.io/badge/twitter-dylang-blue.svg)](https://twitter.com/dylang)

Here's some of my other Node projects:

| Name | Description | npm&nbsp;Downloads |
|---|---|---|{% _.each(repos, function(repo) {%}
| [`{%= repo.name.replace(/-/g, '‑') %}`]({%= repo.url
%}) | {%= repo.description
%} | [![{%= repo.name %}](https://img.shields.io/npm/dm/{%= repo.name %}.svg?style=flat-square)](https://www.npmjs.org/package/{%= repo.name %}) |{% }); %}

_This list was generated using [anthology](https://github.com/dylang/anthology)._