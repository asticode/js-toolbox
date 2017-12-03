`js-toolbox` is a set of components and methods to ease HTML/CSS/JS developments.

# Astiloader

In the `<head>` of your HTML, reference the location of both `.css` and `.js` files:

```html
<link rel="stylesheet" href="path/to/astiloader.css"/>
<script src="path/to/astiloader.js"></script>
```

Then call the `.init()` method:

```javascript
asticode.loader.init()
```

When you want to show the loader call the `.show()` method, when you want to hide it call the `.hide()` method:

```javascript
asticode.loader.show()
asticode.loader.hide()
```

It requires [fontAwesome](http://fontawesome.io).

# Astimodaler

In the `<head>` of your HTML, reference the location of both `.css` and `.js` files:

```html
<link rel="stylesheet" href="path/to/astimodaler.css"/>
<script src="path/to/astimodaler.js"></script>
```

Then call the `.init()` method:

```javascript
asticode.astimodaler.init()
```

Here are the available methods:

```javascript
asticode.astimodaler.setContent(content) // Set content of the modal. Must be a valid Node.
asticode.astimodaler.show() // Shows the modal
asticode.astimodaler.hide() // Hides the modal
asticode.astimodaler.close() // Executes the asticode.astimodaler.onclose closure if exists, then hides the modal
```

It requires [fontAwesome](http://fontawesome.io).

# Astinotifier

In the `<head>` of your HTML, reference the location of both `.css` and `.js` files:

```html
<link rel="stylesheet" href="path/to/astinotifier.css"/>
<script src="path/to/astinotifier.js"></script>
```

Then call the `.init()` method:

```javascript
asticode.notifier.init()
```

When you want to notify the user call one of the following:

```javascript
asticode.notifier.error("this is an error");
asticode.notifier.info("this is an info");
asticode.notifier.success("this is a success");
asticode.notifier.warning("this is a warning");
```

It requires [fontAwesome](http://fontawesome.io).