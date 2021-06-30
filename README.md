# autoMaxHeight.js
The function finds the element with the longest height and brings all other elements to this height parameter

> Works without connecting jQuery

> Unminified file size ~ 749 B

> Minified file size ~ 510 B

## Function parameters
* @param    {String}    selector        To which DOM element do we apply the function

## Example
```html
  <div class="items">
      <div class="item">
          <p>1</p>
          <p>2</p>
      </div>
      <div class="item">
          <p>3</p>
      </div>
      <div class="item">
          <p>4</p>
          <p>5</p>
          <p>6</p>
      </div>
  </div>
  <div class="items">
      <div class="item">
          <p>7</p>
      </div>
      <div class="item">
          <p>8</p>
          <p>9</p>
          <p>10</p>
      </div>
  </div>

  <script src="autoMaxHeight.min.js"></script>
  <script>
    autoMaxHeight('.items > .item');
  </script>
```

## Example jsFiddle
[https://jsfiddle.net/ehoop1337/krq5wLpe/](https://jsfiddle.net/ehoop1337/krq5wLpe/)
