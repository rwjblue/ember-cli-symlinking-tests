## Symlinking Tests

This repo is intended as a testing bed for the ongoing Broccoli speed improvements (mostly focused
on introducing symlinks instead of copying files around).

### Current (ember-cli master as of aa4e696)

Initial build:

```
Build successful - 9256ms.

Slowest Trees                  | Total
-------------------------------+----------------
CustomStaticCompiler           | 3477ms
TreeMerger (appAndDependencies) | 1449ms
TreeMerger (ExternalTree)      | 1411ms
TreeMerger (stylesAndVendor)   | 1406ms
```

Rebuild:

```
file changed app.js

Build successful - 11168ms.

Slowest Trees                  | Total
-------------------------------+----------------
CustomStaticCompiler           | 3511ms
TreeMerger (ExternalTree)      | 2047ms
TreeMerger (stylesAndVendor)   | 1933ms
TreeMerger (appAndDependencies) | 1899ms
```

### With symlinking

Initial build:

```
Build successful - 530ms.

Slowest Trees                  | Total
-------------------------------+----------------
TreeMerger (vendor)            | 125ms
Concat                         | 108ms
ES3SafeFilter                  | 37ms
ES6Concatenator                | 32ms
```

Rebuild:

```
file changed app.js

Build successful - 346ms.

Slowest Trees                  | Total
-------------------------------+----------------
TreeMerger (vendor)            | 122ms
Concat                         | 33ms
TreeMerger (appAndDependencies) | 20ms
```
