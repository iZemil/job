# What is the diff between Presentational vs Container components?

**Presentational components** are concerned with how things look. They generally receive data and callbacks exclusively via props. These components rarely have their own state, but when they do, it generally concerns UI state, as opposed to data state.

> When your component just receives props and renders them to the page, this is a `stateless component`, for which a pure function can be used. These are also called dumb components or presentational components.

Examples: _Page, Sidebar, Story, UserInfo, List._

**Container components** are more concerned with how things work. These components provide the data and behavior to presentational or other container components. They define actions and provide these as callbacks to the presentational components. They are also often stateful as they serve as data sources.

Examples: _UserPage, FollowersSidebar, StoryContainer, FollowedUserList._