# What is the package.json?

package.json is a file that is used to define the properties of a Node.js package. It is typically located in the root directory of a project, and it contains information such as the package's name, version, dependencies, scripts, and other metadata.

The package.json file serves several purposes:

-   It helps other developers understand what your package does, how it is structured, and how to use it.
-   It allows you to specify the dependencies that your package needs in order to function. When someone installs your package, npm (the Node.js package manager) will automatically install all of the dependencies listed in package.json.
-   It allows you to specify scripts that can be run to perform various tasks, such as testing, building, or deploying your package.

To create empty package.json you can use `npm init -y`
