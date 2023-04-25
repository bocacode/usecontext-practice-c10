# useContext Practice

## Site
[bocacode.github.io/usecontext-practice-c10](https://bocacode.github.io/usecontext-practice-c10)

<br>

## Question.
In App.js why is the context object `UserStatus` (which we created) capitlized, unlike other variables created using `const`?
```
Line 7: export const UserStatus = createContext(null);
```

> It's a convention to capitalize the first letter of constants that hold context objects, so that it's clear they are special objects that have a significant role in the application's architecture. This helps make it easier for other developers to understand the code and to work with the context object in their own components.
