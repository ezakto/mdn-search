mdn-search
==========

Quick tool for search in [Mozilla Developer Network](http://developer.mozilla.org/) from command line, built with nodejs.

## Install
```bash
npm install -g mdn-search
```
## Usage
```bash
mdn [options] [command] <query>
```
### Commands:
* `open` opens the first search result in the browser. If open is not specified, results are listed.

### Options
* `-o`, `--open` same as `mdn open`.
* `-p`, `--page` result's page. Defaults to 1.
* `-l`, `--limit` results per page. Defaults to 5.
* `-t`, `--topic` filter to apply (ie. js). Defaults to none.

## Examples
List a few results:
```bash
mdn concat
```
List a few results with topic=js:
```bash
mdn -t js string
```
Open the first result:
```bash
mdn open css transitions
```
