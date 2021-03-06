# react-dropdown

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/react-dropdown/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/react-dropdown.svg?style=flat)](https://www.npmjs.com/package/@bscop/react-dropdown)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/react-dropdown.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/react-dropdown)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/react-dropdown)](https://app.codecov.io/gh/brunoscopelliti/react-dropdown/)

Accessible dropdown (in React).

## Install

```
npm i @bscop/react-dropdown
```

## Usage

```js
import Dropdown from "@bscop/react-dropdown";

function App () {
  return (
    <Dropdown 
      label="Menu"
      role="menu"
    >
      <a role="menuitem" href="#">Account</a>
      <a role="menuitem" href="#">Messages</a>
      <a role="menuitem" href="#">Settings</a>
      <hr />
      <a role="menuitem" href="#logout">Logout</a>
    </Dropdown>
  );
}
```

### CSS Custom properties

You can set the following CSS Custom properties to customize the look of the dropdown component:

```css
:root {
  --main-color: black;
  --main-bg-color: white;
  --dropdown-border-color: #bababa;
}
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
