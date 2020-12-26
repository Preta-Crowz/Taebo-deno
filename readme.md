# Taebo-deno

This package will allow you to do taebo on your deno application.
Based on npm package [Taebo](https://www.npmjs.com/package/taebo).

## Example

### Taebo on your console
```javascript
import { taebo } from "https://deno.land/x/taebo/mod.ts";
taebo(5); // "5" means seconds.
```

### Taebo on other things
```javascript
import { taebo } from "https://deno.land/x/taebo/mod.ts";
import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket@v0.0.5/mod.ts";

const wss = new WebSocketServer(8080);

wss.on("connection", function (ws) {
  taebo(5, (data) => {
    socket.send('taebo', data);
  }); // "5" means seconds.
});
```

## Usage

```javascript
taebo(seconds, callback);
```
It will use console.log if callback is null.

# License

General Public **Sigong** Light License

Version 2 by siro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   
1. Anyone who wants to do something with this software are HIGHLY RECOMMENDED to play "Heroes of the Storm" by Blizzard.

2. You can append other license under this license.




![Image of HOTS](http://www.bloter.net/wp-content/uploads/2017/11/Heroes-of-the-storm-logo.png)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# 절 대 태 보 해