# bme-utils

bme-utils is a TypeScript library for utilities required for your next daily projects.

[![https://nodei.co/npm/bme-utils.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/bme-utils.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/bme-utils)

## Installation

Use the package manager [npm](https://nodejs.org/en/) or [yarn](http://yarnpkg.com)  to install bme-utils.

```bash
npm i bme-utils
```

```bash
yarn add bme-utis
```

## Utilities

### Clamp
Returns trimmed value from the provided range. If the minimum value will be larger than the maximum value function will throw an error.

#### Usage

```typescript
import { clamp } from 'bme-utils';

clamp(8, 21, 66); // 21 — min
clamp(88, 21, 66); // 88 — max
clamp(37, 21, 66); // 37 — value
```

Where:
* `value` is value to be clamped
* `min` is minimum allowed value
* `max` is maximum allowed value

### Compare objects
Returns boolean results of comparing two objects. It simply compares JSONed objects. Values can be in any format that can be transformed to JSON string.

#### Usage

```typescript
import { compareObjects } from 'bme-utils';

const objectA = { manufacturer: 'Mercedes-Benz', model: 'A-Class', engine: 'A45s' };
const objectB = { manufacturer: 'Mercedes-Benz', model: 'A-Class', engine: 'A200' };

compareObjects(objectA, objectB); // false
compareObjects(objectA, objectA); // true
compareObjects(objectA, { manufacturer: 'Mercedes-Benz', model: 'A-Class', engine: 'A45s' }); // true
```

Where:
* `objectA` is any value (Preferred: object)
* `objectB` is any value (Preferred: object)

### Debounce
**WORK IN PROGRESS, DEFAULT VALUES MIGHT CHANGE IN FUTURE**
Debounce function allows to "group" calls in time sequences to execute it only once. Imagine that you are in the elevator where doors are closing. When someone from the outside press the button it will open doors and the elevator would not go up until doors are closed.

#### Usage

```typescript
import { debounce } from 'bme-utils';

const callback = () => console.debug('Hello world');
const wait = 450;

debounce(callback, wait); // 'Hello world
```

Where:
* `callback` is function
* `wait` is value in millisecond to wait until execute code (or start elevator) (Default: 450)

### Detect device
Returns device type. It can be used to detect if the user is using mobile device or desktop.

#### Usage

```typescript
import { detectDevice } from 'bme-utils';

detectDevice();
```

#### Response types
```typescript
export type DeviceType = 'desktop' | 'mobile' | 'tablet';
export type Browser = 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'IE' | 'unknown';
export type OS = 'iOS' | 'Android' | 'Windows' | 'macOS' | 'Linux' | 'unknown';

interface Response { 
  type: DeviceType; 
  browser: Browser; 
  os: OS 
}
```

### First element
Returns the first element of an array or null value. Might be useful if you enforce the no magic numbers rule.

#### Usage

```typescript
import { firstElement } from 'bme-utils';

const list = ['First', 'Second', 'Third'];
const listB = [];

firstElement(list); // 'First'
firstElement(listB); // null
```

Where:
* `list` is array of any

### Is empty
Returns a boolean value. The input value can be an array of any, string, number, object, null or undefined.  For array and object, it checks if there's more than or equal to 1 entry. For string, it checks if there's more than or equal to 1 character. For number, it checks if it's not equal to NaN or 0. For null and undefined it always returns false.

#### Usage

```typescript
import { isEmpty } from 'bme-utils';

const value = ['First', 'Second', 'Third'];
const valueB = [];
const valueC = 0;
const valueD = 100;
const valueE = NaN;
const valueF = 'First';
const valueG = '';
const valueH = {};
const valueI = { manufacturer: 'Mercedes-Benz' };

isEmpty(value); // false
isEmpty(valueB); // true
isEmpty(valueC); // true
isEmpty(valueD); // false
isEmpty(valueE); // true
isEmpty(valueF); // false
isEmpty(valueG); // true
isEmpty(valueH); // true
isEmpty(valueI); // false
```

Where:
* `value` is array of any, string, number, object, null or undefined

### Max index
Returns a maximum index value. The input value can be an array of any or string. For array it will return last element index and for string it will return last letter index. If input will be empty it will return null.

#### Usage

```typescript
import { maxIndex } from 'bme-utils';

const elements = ['First', 'Second', 'Third'];
const elementsB = [];
const elementsC = 'First';
const elementsD = '';

maxIndex(elements); // 2
maxIndex(elementsB); // null
maxIndex(elementsC); // 4
maxIndex(elementsD); // null
```

Where:
* `elements` is array of any or string.

### Random boolean
Returns a random boolean value. Optionally you can set trueChance.

#### Usage

```typescript
import { randomBoolean } from 'bme-utils';

const trueChance = 0.66;

randomBoolean(trueChance); // true | false
```

Where:
* `trueChance` is an optional number value in the range of 0 to 1. (Default: 0.5)

### Random element
Returns a random element of array. The input value can be an array of any. If array will be empty it will return null.

#### Usage

```typescript
import { randomElement } from 'bme-utils';

const elements = ['First', 'Second', 'Third'];
const elementsB = [];

maxIndex(elements); // 2
maxIndex(elementsB); // null
```

Where:
* `elements` is array of any or string.

### Random number
Returns a random number value from provided range values. The minimum value is set to 0 by default.

#### Usage

```typescript
import { randomNumber } from 'bme-utils';

const max = 100;
const min = 66;

randomNumber(max, min); // number
```

Where:
* `max` is a maximum value
* `min` is an optional minimum value. (Default: 0)

### To rgba
**EXPERIMENTAL**
Transform RGB or hex value to RGBA value.

#### Usage

```typescript
import { toRgba } from 'bme-utils';

const colour = '#300032';
const colourB = 'rgb(48, 0, 50)';
const opacity = 0.33;

toRgba(colour, opacity); // rgba(48, 0, 50, 0.33)
toRgba(colourB, opacity); // rgba(48, 0, 50, 0.33)
```

Where:
* `colour` is a string value with HEX or RGB colour
* `opacity` is a number value of demanded opacity 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
