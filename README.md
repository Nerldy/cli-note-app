# CLI Note APP

A simple CRUD CLI note app created in Node.

## Getting Started

### Prerequisites

Make sure you have [Node installed](https://nodejs.org/en/).

### Installation

-   Clone the app `git clone https://github.com/Nerldy/cli-note-app.git`

-   Go into the **_cli-note-app_** folder then run `npm install`

-   To run the app `node index.js [commands](#Commands)`

## Commands

There are four commands for this app, [add](###add), [list](###list), [read](###read), and [remove](###remove).

For more info, in the terminal run `node index.js --help` and it will print out the [commands](##Commands) documentation.

### add

Adds a new note. You have to provide the **title** and **body** as arguments

For example:

`node index.js add --title 'Title 1' --body 'Body of the note'`

### list

Lists all notes. if none, it will print an empty list `[]`

For example:

`node index.js list`

### read

Use this command to read a note. You must provide the note's **title**

For example:

`node index.js read --title 'Title 1'`

### remove

Use this command to remove/delete a note. You must provide the note's **title**.

For example:

`node index.js remove --remove --title 'Title 1'`

## Built With

-   [Node JS](https://nodejs.org/en/).

-   [yargs](https://github.com/yargs/yargs)
