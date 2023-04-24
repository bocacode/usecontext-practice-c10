# useContext Practice

## Question.

In App.js Why is the context object capitlized?
```
export const UserStatus = createContext(null);
```

> It's a convention to capitalize the first letter of constants that hold context objects, so that it's clear they are special objects that have a significant role in the application's architecture. This helps make it easier for other developers to understand the code and to work with the context object in their own components.