# What is abstract class and its purpose?

#TODO: diff with interface

It is a class that cannot be instantiated directly, and that is intended to be used as a base class for one or more derived classes. Abstract classes are used to define the common behavior and the shared structure of a group of related classes, and they provide a way to implement inheritance and polymorphism in TypeScript.

An abstract class is defined using the `abstract` keyword, and it can contain both abstract and concrete members. Abstract members are members that are declared but not implemented, and they must be implemented by the derived classes. Concrete members are members that are declared and implemented, and they can be used directly by the derived classes.