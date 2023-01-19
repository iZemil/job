# What are tilde(~) and caret(^) in package.json?

-   `~version` - Approximately equivalent to version, i.e., only accept new **patch** versions
-   `^version` - Compatible with version, i.e., accept new **minor and patch** versions
-   `version` - Must match version exactly
-   `>version` - Must be greater than version (same logic with `>=version`, `<version`, `<=version`)
-   `1.2.x` - 1.2.0, 1.2.1, etc., but not 1.3.0
-   `*` - Matches any version
-   `latest` - Obtains latest release
