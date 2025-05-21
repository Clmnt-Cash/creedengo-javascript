# Use single quotes ('') instead of double quotes ("") for static strings

## Why is this an issue ? 

Using single quotes for string literals that do **not** require interpolation is more efficient. Double quotes (and backticks) can trigger additional parsing logic to check for variable interpolation, even if none is present.

### ✅ Examples of correct code

```js
const message = 'Hello world';
```

### ❌ Examples of incorrect code
```js
const message = "Hello world";
``` 