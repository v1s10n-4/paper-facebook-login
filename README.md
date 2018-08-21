# &lt;paper-facebook-button&gt;
[![Build status](https://travis-ci.org/vision-4/paper-facebook-button.svg?branch=master)](https://travis-ci.org/vision-4/paper-facebook-button)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vision-4/facebook-login-button)

Simple facebook login button

<!--
```
<custom-element-demo>
  <template>
    <script src="c"></script>
        <link rel="import" href="../../polymer/polymer.html">
        <link rel="import" href="../paper-facebook-login.html">
    <style is="custom-style">
        #container {
            display: flex;
        }
    </style>
    <dom-bind>
        <template is="dom-bind">
            <paper-facebook-login appid="479069922240685" user="{{user}}"></paper-facebook-login>
            <div style="margin-top: 20px">
                <img src="[[user.picture.data.url]]">
                <div>[[user.first_name]] [[user.last_name]]</div>
                <div>[[user.birthday]]</div>
                <div>[[user.email]]</div>
            </div>
        </template>
    </dom-bind>
    <div id="container">
        <next-code-block></next-code-block>
    </div>
  </template>
</custom-element-demo>
```
-->
```html
<paper-facebook-login app-id="479069922240685"></paper-facebook-login>
```

## Installation & usage

Install paper-facebook-login with Bower

```sh
$ bower i vision-4/paper-facebook-login --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/paper-facebook-login/paper-facebook-login.html">
```

Then use paper-facebook-login in your project

```html
<paper-facebook-login app-id="[[yourAppId]]"></paper-facebook-login>
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

[tag-badge]: https://img.shields.io/github/tag/vision-4/paper-facebook-login.svg
[releases-url]: https://github.com/vision-4/paper-facebook-login/releases
[travis-badge]: https://img.shields.io/travis/vision-4/paper-facebook-login.svg
[travis-url]: https://travis-ci.org/vision-4/paper-facebook-login