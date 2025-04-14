## useEffect

The Effect Hook lets you perform side effects in function components.

### What are Effects?

Common examples for (side) effects are data fetching, setting up a subscription, and manually changing the DOM in React components.

There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do. We'll look into the distinction later on in our examples, but first let's see how the interface looks like.

If you want to run an effect and clean it up only once (on mount and unmount), use React.useEffect with an empty dependency array [].