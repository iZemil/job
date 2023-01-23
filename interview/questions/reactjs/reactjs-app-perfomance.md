# How can you optimize performance in a ReactJS app?

-   One way is to use the `shouldComponentUpdate` lifecycle method to prevent unnecessary re-renders of a component.
-   Another way is to use the `PureComponent` class, which implements `shouldComponentUpdate` with a shallow comparison of props and state.
-   Additionally, using the `React.memo` higher-order component can optimize the performance of functional components.