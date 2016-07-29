# Lazy Loader

### Usage
Include the path and ratio of your image. For users without javascript enabled, wrap the original image inside a `<noscript>` tag. The div is required to apply the ratio placeholder.

```html
    <div lazy-loader='{
        "alt": "Lazy Loader",
        "sizes": {
            "sm": {
                "src": "../images/galaxy_sm.jpg",
                "ratio": "0.5625"
            },
            "md": {
                "src": "../images/galaxy_md.jpg",
                "ratio": "0.5625"
            },
            "lg": {
                "src": "../images/galaxy.jpg",
                "ratio": "0.5625"
            }
        }
    }'>
        <div></div>
        <noscript><img src="../images/galaxy.jpg"></noscript>
    </div>
```

Run the script on DOM Content loaded:
```javascript
  document.addEventListener('DOMContentLoaded', function () {
      LazyLoader.init({});
  });
```

### Breakpoints
Lazy Loader is using three default breakpoints `sm:<640`, `md:>=640` and `lg:>=1200`.

### Ratio
The ratio is calculated with a simple formula of `height/width`.

### Browser support
Compatible with All Browsers and IE9+.

### Snippets

Atom
```
'.text.html.basic':
  'Lazy Loader':
    'prefix': 'll'
    'body': """
      <div lazy-loader='{
          "alt": "Lazy Loader",
          "sizes": {
            "sm": {
              "src": "../images/",
              "ratio": "(height/width)"
            },
            "md": {
              "src": "../images/",
              "ratio": "(height/width)"
            },
            "lg": {
              "src": "../images/galaxy.jpg",
              "ratio": "0.545"
            }
          }
        }'>
        <div></div>
        <noscript><img src="../images/$1"></noscript>
      </div>
    """
```

Sublime
```json
# Coming soon!
```

### TODO
- Custom breakpoints
- On scroll option
- On resize