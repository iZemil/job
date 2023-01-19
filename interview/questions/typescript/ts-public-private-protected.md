# Tell about public vs private vs protected

In TypeScript, there are three access modifiers that can be used to control the visibility and accessibility of class members (fields and methods):

1.  `public`: Members that are marked as `public` are visible and accessible from anywhere within the class, as well as from outside the class. `public` is the default access modifier for class members, and it is not necessary to explicitly specify it.
2.  `private`: Members that are marked as `private` are visible and accessible only within the class where they are defined. They are not visible or accessible from outside the class.
3.  `protected`: Members that are marked as `protected` are visible and accessible within the class where they are defined, and they are also visible and accessible to derived classes (classes that inherit from the class where the members are defined).

Access modifiers in TypeScript can help to control the visibility and accessibility of class members, and they can help to make the code more modular, maintainable, and secure. It is important to use access modifiers appropriately to ensure that the code is organized and easy to understand, and to prevent unintended access to sensitive or private data.
