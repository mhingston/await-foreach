# await-foreach

Awaitable Array.forEach

## Installation

```
npm install mhingston/await-foreach
```

## Example

```javascript
const forEach = require('await-foreach')();

const main = async () =>
{
    const collection = [1, 2, 3];
    await forEach(collection, (i) =>
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                console.log(i);
                resolve(i);
            }, 0);
        });
    });
    console.log('done');
}

main();
```

## Example (Monkey patching Array.forEach)

```javascript
require('await-foreach')({monkeyPatch: true});

const main = async () =>
{
    const collection = [1, 2, 3];
    await collection.forEach((i) =>
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                console.log(i);
                resolve(i);
            }, 0);
        });
    });
    console.log('done');
}

main();
```