<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/cli-confirm/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/cli-confirm?targetFile=package.json)

# cli-confirm

Rework of https://github.com/jmtoball/cli-confirm

Basically a script that you can call from the cli itself, or within other NPM scripts to confirm an action.
Comes handy when you want to add manual confirmation before doing something dangerous.

<!-- toc -->

- [Getting started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)
- [Why a fork?](#why-a-fork)
- [Vulnerability disclosure](#vulnerability-disclosure)
- [Contributors and maintainers](#contributors-and-maintainers)
- [**[ABOUT UNLY]**](#about-unly-)


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

$ yarn self-destruct-server
Do you really want to blow up the servers? yes
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

The script itself hasn't changed much (additionally allows `yes` as well as `y` input), license was updated from ISC to MIT.
As it is a bad practice to rely on software that isn't maintained, nor should be updated, we made our own `cli-confirm`.
It's basically safer as we don't know who could update the original https://github.com/jmtoball/cli-confirm with additional code.

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education. 
> Unly is committed to making education more inclusive, through responsible funding for students. 
We provide technological solutions to help students find the necessary funding for their studies. 

We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit : 
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL
