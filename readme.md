# Ultimate element creator

Create elements by tag-name and optionally attributes...

Usage:
```javascript
import createElement from "https://unpkg.com/@bqardi/ultimate-element-creator@1.0.0/index.js";

// creating a div element without attributes
let myElement = createElement("div");
```

or with attributes:

```javascript
import createElement from "https://unpkg.com/@bqardi/ultimate-element-creator@1.0.0/index.js";

// creating an image element and several of it's attributes (id and src)
let myElement = createElement("img", ["id", "myID"], ["src", "./path/to/file"]);
```