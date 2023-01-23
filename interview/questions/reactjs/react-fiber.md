# What is React Fiber?

Fiber is the new _reconciliation_ engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

## What is the main goal of React Fiber?

The goal of _React Fiber_ is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

Its main goals are:
1.  Ability to split interruptible work in chunks.
2.  Ability to prioritize, rebase and reuse work in progress.
3.  Ability to yield back and forth between parents and children to support layout in React.
4.  Ability to return multiple elements from render().
5.  Better support for error boundaries.