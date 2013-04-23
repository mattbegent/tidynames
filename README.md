# tidynames

A simple command line application to tidy up file names in the current directory.

## What it does

It renames files to be lowercase, replaces spaces with hyphens and underscores with hyphens. See below for more options.

## Installation

`npm install -g tidynames`

## Usage

Simply cd to the directory with the files names that you want to tidy in and run `tidynames`.

## Options

    tidynames --help

    Options:
    -h, --help              output usage information
    -V, --version           output the version number
    -l, --nolowercase       disable lowercase transformation
    -u, --underscores       use underscores instead of hyphens