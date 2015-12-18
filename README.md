# inputbolt.js
### A jQuery dropdown/select plugin inspired input with mobile version.
**Current version: 1.0.0**<br/>
Turn a input element into a dropdown/select. Includes a small mode making it easier to use with mobile devices.

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
