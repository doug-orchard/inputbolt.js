![inputbott.js array](https://raw.githubusercontent.com/doug-orchard/inputbolt.js/master/images/header_inputboltjs.png)

# inputbolt.js
### A jQuery input dropdown/select plugin with mobile mode.

**Current version: 1.0.2**<br/>
Turn a normal input element into a dropdown/select item using either min/max integers or an array of predefined strings. Also includes a small mode making it easier to use with mobile devices.

### js file sizes ( If sizing is an issue ):
    - Unminified Size: 7.01KB,
    - Minified Size: 1.67KB,
    - Gzipped Size: 842 bytes

### Currently supporting evergreen browsers. With possible min IE10 support,<span style="color:red;">**</span>

![inputbott.js min-max](https://raw.githubusercontent.com/doug-orchard/inputbolt.js/master/images/inputbolt_minmax.gif)
![inputbott.js array](https://raw.githubusercontent.com/doug-orchard/inputbolt.js/master/images/inputbolt_array.gif)

Note: This is my first plugin for jQuery, I do welcome any and all suggestions to help and improve this plugin.
<span style="color:red;">**</span> Only Chrome (latest) has been tested.
## Using inputbolt.js
Use the normal input element<span style="color:red;">*</span>.
```shell
<input/>
```

With min and max values
```shell
<input data-min="0" data-max="10"/>
```

With data array
```shell
<input data-array="['one', 'two']/>
```
<span style="color:red;">*</span>Must include either data-min && data-max or data-array="['one', 'two']"

## The script
```shell
$('input').inputbolt();
```


## Options

Enable mobile version
```shell
$('input').inputbolt( { smallmode: true } );
```

Add min-max values.
This will override any attributes on the element.
```shell
$('input').inputbolt( { min: 0, max:10 } );
```

Add items strings via array.
This will override any attributes on the element.
```shell
$('input').inputbolt( { items: [ 'one', 'two', 'three'] } );
```

More options to come...

## License

The MIT License (MIT)

Copyright (c) 2015 Doug Orchard<br/>
https://github.com/doug-orchard/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
