# What is the role of the package-lock.json?

It stores and guarantees the exact same version of every package.

-   `npm install` re-generates the lock file with installing updates
-   `npm ci` installs locked dependencies
