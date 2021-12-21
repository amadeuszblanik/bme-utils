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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
