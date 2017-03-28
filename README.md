# Simple PO files loader for webpack via gettext-parser

## Installation

```
npm install po-gettext-loader
```

or

```
yarn add po-gettext-loader
```


## Usage

```javascript
rules: {
  test: /\.po$/,
  use: [
    { loader: "json-loader" },
    { loader: "po-gettext-loader" }
  ]
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)