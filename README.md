# Webcomponents Starter ts-lit-snowpack
This repo aims to provide a minimal starter project structure to get started with creating webapps using standard webcomponents.

# Main considerations
* use Snowpack to get rid of the bundler during development
* set up Typescript correctly to work with snowpack and strict settings enabled
* preconfigure Snowpack to support older browsers without esmodules support
* provide npm scripts to get going fast
* work on linux, mac os, windows out of the box

# Steps to get started
1. npm i
1. npm run build:watch

# If you are using VSCode, here some plugin recommendations:
* lit-html
* EditorConfig for VS Code

# For publishing your app
1. npm run clean
1. npm run build:publish
