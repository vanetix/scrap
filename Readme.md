# scrap.js
A simple view manager for Backbone. Provides garbage collection for view creation, event bindings, and intervals.

## Example
```javascript
var View = Scrap.Base.extend({
  initialize: function() {
    this.bindTo($('.widget'), 'event', this.render, this);
  },

  render: function() {
    this.$el.html($('<div>Hello from scrap!</div>'));
    return this;
  }
});

var parent = new View();
var child = parent.create(View);

$('body').append(parent.render().el);
$('body').append(child.render().el);

// Trash the view and all children
// which equates to parent and child
view = view.dispose();
```

## License (MIT)
Copyright (c) 2013 Matt McFarland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.