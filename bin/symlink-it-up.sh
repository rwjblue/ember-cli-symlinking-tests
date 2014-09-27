#!/bin/bash

PWD="`pwd`"

function npmLinkAll {
  for i in `find -L node_modules -name "$1" -type d -or -name "$1" -type l `;
  do
    echo $i
    rm -r "$i";
    ln -s $PWD/"${2:-$1}" "$i";
  done;
}

function linkPackages {
  npmLinkAll ember-cli
  npmLinkAll broccoli-filter
  npmLinkAll broccoli-static-compiler
  npmLinkAll broccoli-merge-trees
  npmLinkAll broccoli-file-remover
  npmLinkAll broccoli-file-mover
  npmLinkAll walk-sync node-walk-sync
}

# preparation
rm -rf node-walk-sync broccoli-filter broccoli-static-compiler broccoli-merge-trees broccoli-file-remover broccoli-file-mover ember-cli node_modules
npm cache clear
npm install

# walk-sync
git clone git@github.com:joliss/node-walk-sync.git
cd node-walk-sync
npm install
cd ..

# broccoli-filter
git clone git@github.com:sebastianseilund/broccoli-filter
cd broccoli-filter
git checkout make-it-so
npm install
linkPackages
cd ..

# broccoli-static-compiler
git clone git@github.com:joliss/broccoli-static-compiler
cd broccoli-static-compiler
npm install
cd ..

# broccoli-merge-trees
git clone git@github.com:broccolijs/broccoli-merge-trees
cd broccoli-merge-trees
npm install
cd ..

# broccoli-file-remover
git clone git@github.com:rwjblue/broccoli-file-remover
cd broccoli-file-remover
npm install
linkPackages
cd ..

# broccoli-file-mover
git clone git@github.com:rwjblue/broccoli-file-mover
cd broccoli-file-mover
npm install
cd ..

# ember-cli
git clone git@github.com:stefanpenner/ember-cli
cd ember-cli
npm install
linkPackages
cd ..

linkPackages
