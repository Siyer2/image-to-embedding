# image-to-embedding

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Convert an image to embeddings

## Install

```bash
npm install image-to-embedding
```

## Usage

```ts
import { convertFromBuffer } from 'image-to-embedding';

const embedding = await convertFromBuffer(someImageBuffer);
//=> Returns Promise<Embedding>
```

## API

### convertFromBuffer(input): Promise\<Embedding>

#### imageToConvert

Type: `Buffer`

The image to convert in the form of a Buffer. See [this test](https://github.com/Siyer2/image-to-embedding/blob/add-convert/test/index.spec.ts) for an example.

##### Embedding

Type: `number[][]`

See the Embedding type definition [here](https://github.com/Siyer2/image-to-embedding/blob/add-convert/src/types.ts)

Embedding is the return type that is an array of number arrays. There are an array of number arrays because of "contextual embedding" - contextual embeddings aim to capture the meaning of a word or phrase in the context of the surrounding words. This is important because the meaning of a word can change depending on the context in which it is used. For example, the word "bank" could refer to a financial institution, or the edge of a river.

[build-img]: https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/typescript-npm-package-template
[downloads-url]: https://www.npmtrends.com/typescript-npm-package-template
[npm-img]: https://img.shields.io/npm/v/typescript-npm-package-template
[npm-url]: https://www.npmjs.com/package/typescript-npm-package-template
[issues-img]: https://img.shields.io/github/issues/ryansonshine/typescript-npm-package-template
[issues-url]: https://github.com/ryansonshine/typescript-npm-package-template/issues
[codecov-img]: https://codecov.io/gh/ryansonshine/typescript-npm-package-template/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ryansonshine/typescript-npm-package-template
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
