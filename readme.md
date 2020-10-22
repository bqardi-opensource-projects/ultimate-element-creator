# Ultimate element creator

Create elements by tag-name and optionally attributes...

Important!
If attributes are needed, you MUST pass in an array with **exactly two** items in it, where the first is the **attribute name** and the second is the **attributes value**: `["class", "myClass"]`.

This way, you can create as many attributes as you like.

#### To import into your project:
Place this line of code at the top of your JavaScript file:
```javascript
import createElement from "https://unpkg.com/ultimate-element-creator@1.0.0/index.js";
```

Then you can call the function `createElement()` when you need it:

#### Example usage:
```javascript
// creating a div element without attributes
let myElement = createElement("div");
```

#### With attributes:

```javascript
// creating an image element and several of its attributes (id, src and alt)
let myElement = createElement("img", ["id", "myID"], ["src", "./path/to/file"], ["alt", "This is my image"]);
```