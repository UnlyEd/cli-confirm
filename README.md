# cli-confirm

Rework of https://github.com/jmtoball/cli-confirm

Basically a script that you can call from the cli itself, or within other NPM scripts to confirm an action.
Comes handy when you want to add manual confirmation before doing something dangerous.

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

`yarn add -D @unly/cli-confirm`

## Usage

Example of **package.json**
```
[…]
  "scripts" {
    "self-destruct-servers": "cli-confirm \"Do you really want to blow up the servers?\" && yarn destroy:servers",
    "destroy:servers": "echo 'servers decommissioned permanently'"
  }
[…]
```

Which would produce the following output:
```
$ yarn self-destruct-server
Do you really want to blow up the servers? n

$ yarn self-destruct-server
Do you really want to blow up the servers? y
servers decommissioned permanently
```

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn lint
```

### Test

```
yarn test # Run a manual test which calls our src/index.js
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT

---
## Why a fork?

The script itself hasn't changed, license was updated from ISC to MIT.
As it is a bad practice to rely on software that isn't maintained, nor should be updated, we made our own `cli-confirm`.
It's safer as we don't know who could update the original https://github.com/jmtoball/cli-confirm with a 
