# inputbolt.js
### A jQuery dropdown/select plugin inspired input with mobile version.
**Current version: 1.0.0**<br/>
Turn a input element into a dropdown/select. Includes a small mode making it easier to use with mobile devices.

### js file sizes:
    - Unminified Size: 4.9KB,
    - Minified Size: 1.25KB,
    - Gzipped Size: 677 bytes

![inputbott.js min-max](https://raw.githubusercontent.com/doug-orchard/inputbolt.js/master/images/inputbolt_minmax.gif)

![inputbott.js array](https://raw.githubusercontent.com/doug-orchard/inputbolt.js/master/images/inputbolt_array.gif)

Note: This is my first plugin for jQuery, welcome any suggestions and or help to improve this.

## Using inputbold.js
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

Add mobile version
```shell
$('input').inputbolt({ smallmode: true });
```

More options to come...

## License

The MIT License (MIT)

Copyright (c) 2015 Doug Orchard
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
