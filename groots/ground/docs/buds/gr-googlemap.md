# Google map

Markup default
```html
    <div class="demo-map" id="map" data-title="Globalia"></div>
```

Markup
```html
    <div class="demo-map" id="map" data-maplat="45.502834" data-maplng="-73.513764" data-pin="/dist/img/demo/google-map-pin.png" data-url="https://goo.gl/maps/kFc2hjWsvAP2" data-title="Globalia"></div>
```
Init
```javascript

    var styleArray = [{
        featureType: 'all',
        stylers: [
            { saturation: -80 }
        ]
    },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            { hue: '#00ffee' },
            { saturation: 50 }
        ]
    },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
            { visibility: 'off' }
        ]
    }];

    window.GMap.init({
        map_id: 'map',
        api_key: 'API_KEY',
        url_blank: true,
        map_options: {
            zoom: 13,
            zoomControl: false,
            styles: styleArray,
            scrollwheel: false
        }
    });
```
Inline options

| Data Attributes | Definitions      |
|-----------------|------------------|
| data-maplat     | map latitude     |
| data-maplng     | map longitude    |
| data-url        | pin custom url   |
| data-pin        | pin custom image |
| data-title      | map title        |