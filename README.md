# @retrobrainz/name

![Version](https://img.shields.io/npm/v/@retrobrainz/name)
![Downloads](https://img.shields.io/npm/dw/@retrobrainz/name)

retro game rom name parser

## Install

```bash
npm i -S @retrobrainz/name
```

## Example

```js
import { readFile } from 'node:fs/promises';
import { parse } from '@retrobrainz/name';

const datContent = await readFile('path/to/your.dat', 'utf-8');
const dat = parse(datContent);
```
