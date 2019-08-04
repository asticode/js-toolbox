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

# Astimodaler

In the `<head>` of your HTML, reference the location of both `.css` and `.js` files:

```html
<link rel="stylesheet" href="path/to/astimodaler.css"/>
<script src="path/to/astimodaler.js"></script>
```

Then call the `.init()` method:

```javascript
asticode.modaler.init()
```

Here are the available methods:

```javascript
asticode.modaler.setContent(content) // Set content of the modal. Must be a valid Node.
asticode.modaler.show() // Shows the modal
asticode.modaler.hide() // Hides the modal
asticode.modaler.close() // Executes the asticode.modaler.onclose closure if exists, then hides the modal
asticode.modaler.newForm() // Create a form
```

Here's an example of how to create a form:

```javascript
let f = asticode.modaler.newForm()

// Add title
f.addTitle("My Title")

// Add error
f.addError()

// Add first field
f.addField({
    label: "First field",
    name: "first-field",
    required: true,
    type: "email",
})

// Add second field
f.addField({
    label: "Second field",
    name: "second-field",
    required: true,
    type: "textarea",
})

// Add button
f.addField({
    className: "btn-success",
    label: "Send",
    success: function(fields) {
        // TODO Your logic
    },
    type: "submit",
})
```

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