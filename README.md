jQuery.pad
==========

jQuery plugin for string padding

<code>
// time = 01:05
</code>

<code>
$.lpad((new Date()).getHours(), 2, '0'); // 01
</code>

<code>
$.lpad((new Date()).getMinutes(), 2, '0'); // 05
</code>

<code>
$.rpad('Hello world!', 14, '!'); // Hello world!!!
</code>

<code>
$.pad('337', 4, '1', 'left'); // 1337
</code>

<code>
console.log("This:          will,\nBe:            nicely formatted!");
</code>
<pre>
This:          will,
Be:            nicely formatted!
</pre>
