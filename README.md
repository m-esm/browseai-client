## Description

A command-line interface for BrowseAI API

### Functionality:

- Setting API key
- Selecting a robot
- Creating a task with custom parameters for a robot

![Cli gif](https://github.com/m-esm/browseai-client/blob/main/browser-cli.gif?raw=true)

### Missing functionality:

- Running the CLI with args

### Config:

- `.browser-ai.json` is created on app start in the current working directory where the app is executed.
  - `apiKey` is BrowseAI API key, more info at https://dashboard.browse.ai/teams/personal/api
  - `robot` is the last selected robot by user while working with interactive CLI

### Technologies used:

- Ink and it's components: Rendering CLI applications just like react
- NestJS: modular, reusable structure,
- Nest-commander: To run CLI with arguments

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start:dev



# production mode
$ npm run build
$ npm start

# OR
$ bash run.sh
```
