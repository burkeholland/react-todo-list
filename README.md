# React Todo List Application

This is a simple todo list application built with React.

## Project Structure

```
react-todo-list
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── App.js
│   ├── index.js
│   ├── components
│   │   ├── TodoList.js
│   │   ├── TodoItem.js
│   │   └── AddTodo.js
│   └── styles
│       ├── App.css
│       ├── TodoList.css
│       ├── TodoItem.css
│       └── AddTodo.css
├── package.json
└── README.md
```

## Files

- `public/index.html`: This file is the HTML template for the application. It includes the root element for the React app and links to the favicon.

- `public/favicon.ico`: This file is the icon for the application.

- `src/App.js`: This file exports a class `App` which is the root component of the React app. It renders the `TodoList` component and the `AddTodo` component.

- `src/index.js`: This file is the entry point of the React app. It renders the `App` component to the root element of the HTML template.

- `src/components/TodoList.js`: This file exports a class `TodoList` which is a stateful component that renders a list of `TodoItem` components. It receives an array of todo items as a prop and passes them down to the `TodoItem` components.

- `src/components/TodoItem.js`: This file exports a class `TodoItem` which is a stateless component that renders a single todo item. It receives a todo item object as a prop and displays its title and completion status. It also has a checkbox input that toggles the completion status of the todo item.

- `src/components/AddTodo.js`: This file exports a class `AddTodo` which is a stateful component that renders a form to add a new todo item. It has an input field for the title of the todo item and a submit button that adds the new todo item to the list.

- `src/styles/App.css`: This file contains the CSS styles for the `App` component.

- `src/styles/TodoList.css`: This file contains the CSS styles for the `TodoList` component.

- `src/styles/TodoItem.css`: This file contains the CSS styles for the `TodoItem` component.

- `src/styles/AddTodo.css`: This file contains the CSS styles for the `AddTodo` component.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

- `README.md`: This file contains the documentation for the project.