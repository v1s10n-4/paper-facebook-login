# paper-facebook-login
[![Build status][travis-badge]][travis-url] ![Size][size-badge] [![Version][tag-badge]][releases-url] [![Published][webcomponents-badge]][webcomponents-url]

Simple facebook login button

## Installation & usage

Install paper-facebook-login with Bower

```sh
$ bower i v1s10n_4/paper-facebook-login --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/paper-facebook-login/paper-facebook-login.html">
```

Then use paper-facebook-login in your project

```html
<paper-facebook-login></paper-facebook-login>
```

### Polyfills for cross-browser support

paper-facebook-login relies on emerging standards, for full cross-browser support include the [WebComponentsJS](https://github.com/webcomponents/webcomponentsjs) polyfill on your page.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/webcomponents-loader.js"></script>
```

### Transpiling for IE11 support

Web Components like paper-facebook-login are distributed as ES6 classes, which are supported in all evergreen browsers. To support Internet Explorer 11 you should transpile paper-facebook-login to ES5 and use the `webcomponentsjs` `custom-elements-es5-adapter.js` shim. 

The easiest way to do this is by including [polymer-build][polymer-build] in your buildstep of choice. Then just include the ES5 adapter on your page

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/custom-elements-es5-adapter.js"></script>
```

***

MIT © v1s10n_4

[tag-badge]: https://img.shields.io/github/tag/v1s10n_4/paper-facebook-login.svg
[releases-url]: https://github.com/v1s10n_4/paper-facebook-login/releases
[travis-badge]: https://img.shields.io/travis/v1s10n_4/paper-facebook-login.svg
[travis-url]: https://travis-ci.org/v1s10n_4/paper-facebook-login
[size-badge]: http://img.badgesize.io/v1s10n_4/paper-facebook-login/master/props.name .html?compression=gzip&label=size%20%28unminified%29
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/v1s10n_4/paper-facebook-login
[polymer-build]: https://github.com/Polymer/polymer-build
