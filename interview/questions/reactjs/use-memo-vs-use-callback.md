# What is the diff between `useMemo` vs `useCallback` hooks?

-   `useCallback` gives you referential equality between renders for functions. And `useMemo` gives you referential equality between renders for values.
-   `useCallback` and `useMemo` both expect a function and an array of dependencies. The difference is that `useCallback` returns its function when the dependencies change while `useMemo` calls its function and returns the result.
-   `useCallback` returns its function uncalled so you can call it later, while `useMemo` calls its function and returns the result