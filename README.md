# GitHub Dark Theme for [Hyper](https://hyper.is/) <img width='32' alt='Hyper GitHub Theme' src='https://cloud.githubusercontent.com/assets/10454741/21241774/9172ddb6-c311-11e6-91ee-e4225ab9560a.gif'>

Based on the official [GitHub Theme for VS Code](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)

## Install

### via Hyper's CLI

1. Run `$ hyper install hyper-github-dark` in your command line
2. Reload Hyper: **View -> Full Reload** or **Cmd + Shift + R**

### manually

1. Edit your `~/.hyper.js` file (**Hyper > Preferences...**)
2. Add `hyper-github-dark` to your plugins list:
```js
plugins: [
  ...
  'hyper-github-dark'
]
```
1. Reload Hyper: **View -> Full Reload** or **Cmd + Shift + R**

## Customize (optional)

Some of Hyper's customizable properties will override the ones specified by the GitHub Theme's default configurations:

```js
{
  config: {
    cursorColor: '',
    padding: '',
    foregroundColor: ''
    termCss: ''
    css: ''
  }
}
```
