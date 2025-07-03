### Component composition in React

Component composition is a pattern in React where you combine smaller, reusable components to build more complex user interfaces. It follows React's core principle: **"Compose components instead of building monolithic structures."** By leveraging composition, you can create flexible and maintainable applications.

##### How Component Composition Works

- Nesting Components:
    - A parent component can include child components in its JSX.
    - The parent controls the layout or structure, while child components handle specific responsibilities.
```js

function Header() {
  return <h1>Welcome to my website</h1>;
}

function Footer() {
  return <footer>© 2024 My Website</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <p>This is the main content of the page.</p>
      <Footer />
    </div>
  );
}

```

##### Passing Props for Customization:

- Parent components can pass data (via props) to child components, enabling dynamic rendering.
```js

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");
  return <Button label="Click Me" onClick={handleClick} />;
}

```

##### Using children Prop for Flexibility:

- React's children prop allows you to pass JSX or components as children, enabling highly flexible layouts.
```js

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is content inside the card.</p>
    </Card>
  );
}

```

##### Why Use Component Composition?

- Reusability: Build once, use across multiple parts of the app.
- Separation of Concerns: Divide responsibilities into smaller, focused components.
- Flexibility: Compose components in different ways to meet various design needs.
- Scalability: Simplifies managing large applications by structuring them hierarchically.

**Component Composition vs. Inheritance**

React emphasizes composition over inheritance. Instead of relying on class inheritance for code reuse, React uses composition to combine components and behaviors.
Example:

Instead of creating a base class for shared functionality:

```js
class BaseComponent extends React.Component {
  render() {
    return <div>Shared behavior here</div>;
  }
}
```
You use composition to reuse the functionality:
```js
function SharedComponent() {
  return <div>Shared behavior here</div>;
}

function ParentComponent() {
  return (
    <div>
      <SharedComponent />
    </div>
  );
}
```
**Key Takeaways**

- Component composition is a powerful React concept for building reusable and scalable UI.
- It encourages a modular design, making code easier to read, test, and maintain.
- Use props and children for customization and flexibility.
- Prefer composition over inheritance for combining behaviors.

### Component composition with children

When designing React components, one of the most important properties developers tend to overlook is the children prop. The children prop which is a special property all components have, is the foundation for the React powerful composition model.

There are two main features that enable component composition; containment and specialization.

### Containment

Containment is when a component is designed to "contain" other components or elements. It focuses on how components encapsulate children without dictating their layout or behavior. This is commonly achieved using the children prop.
Example of Containment
A Generic Container Component:

```js
function Container({ children }) {
  return <div className="container">{children}</div>;
}
```

Using the Container:
```js
function App() {
  return (
    <Container>
      <h1>Welcome to My App</h1>
      <p>This is a paragraph inside the container.</p>
    </Container>
  );
}
```


**Key Points of Containment**:

- Flexibility: Parent components decide what to render inside the container.
- Use Case: Wrapping elements, like modal dialogs, cards, or layout components.

### Specialization

Specialization is when a more specific component is created by building on a generic component. It focuses on extending or customizing a generic component to create specialized versions for specific use cases.
Example of Specialization
A Generic Button Component:
```js
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

**Specialized Components:**

```js
function PrimaryButton(props) {
  return <Button {...props} style={{ backgroundColor: "blue", color: "white" }} />;
}

function DangerButton(props) {
  return <Button {...props} style={{ backgroundColor: "red", color: "white" }} />;
}
```
**Using Specialized Components:**

```js
function App() {
  return (
    <div>
      <PrimaryButton label="Save" onClick={() => alert("Saved!")} />
      <DangerButton label="Delete" onClick={() => alert("Deleted!")} />
    </div>
  );
}
```
**Key Points of Specialization:**

- Extensibility: Creates components tailored for specific tasks by reusing logic and structure from a generic component.
- Use Case: Customizing behavior, appearance, or additional logic.

### Combining Containment and Specialization

Often, Containment and Specialization are used together to create complex UIs.
Example: A Dialog Component

**Generic Dialog (Containment):**
```js
function Dialog({ children, title }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```
**Specialized Dialogs:**

```js
function AlertDialog({ message }) {
  return (
    <Dialog title="Alert">
      <p>{message}</p>
    </Dialog>
  );
}

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <Dialog title="Confirmation">
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </Dialog>
  );
}
```
**Using the Dialogs:**

```js
function App() {
  return (
    <div>
      <AlertDialog message="This is an alert message." />
      <ConfirmDialog 
        message="Are you sure you want to delete?" 
        onConfirm={() => alert("Deleted!")} 
        onCancel={() => alert("Canceled!")} 
      />
    </div>
  );
}
```

**Differences between Containment and Specialization**

| Aspect	| Containment	| Specialization |
|----------|---------|--------|
| Purpose | Encapsulates child components.	| Extends or customizes a generic component.|
| Focus	| Layout or wrapping other elements.	| Adding specific functionality or appearance.|
| Implementation |	Uses children prop for flexibility. |	Builds on a base component with additional props or logic. |
| Example Use Case |	Cards, modals, or containers.	| Buttons, alerts, or dialog variations. |

By using Containment and Specialization, you can create modular, scalable, and readable components that align with React's compositional philosophy.

