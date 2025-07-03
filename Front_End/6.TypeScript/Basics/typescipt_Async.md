# fetch data in typescript

[JavaScript Async concept](../../javaScript/7.5_JavaScriptConcepts.md)

## Promises

A Promise is a JavaScript object that represents “a value that might not be available *yet*.” It can be in one of three states:

- Pending (not yet resolved or rejected)
- Fulfilled (resolved with a value)
- Rejected (failed with an error)

You can attach callbacks:
```ts
somePromise
  .then(value => { /* runs if fulfilled, with `value` */ })
  .catch(err => { /* runs if rejected, with `err` */ })
```

## fetch returns a Promise

The browser’s built‑in fetch(url) does an HTTP request and returns a `Promise<Response>`.
```ts
fetch('https://…/users')      // => Promise<Response>
  .then(res => res.json())    // res.json() also returns Promise<any>
  .then(data => { /* data is the parsed JSON */ })
```

## async / await sugar

Instead of chaining `.then()`, you can write asynchronous code more like synchronous code:
```ts
// Marking a function `async` means it will always return a Promise:
const foo = async (): Promise<number> => {
  return 42;            // actually returns Promise.resolve(42)
}

// Inside an `async` function you can `await` a Promise:
const bar = async () => {
  const x = await foo() // pauses until foo()’s promise resolves, then x = 42
  console.log(x)
}
```
- `async` on a function:
    - Ensures the function returns a Promise.
    - Lets you use await inside.
- `await` before a Promise:
    - “Pause” until it settles.
    - If it fulfills, you get its value.
    - If it rejects, it throws an exception you can catch with try/catch.

## Walking through the code
```ts
interface User {
  id: number
  name: string
  username: string
  email: string
}

const fetchUsers = async (): Promise<User[]> => {
  // 1. Call fetch() → Promise<Response>, then await it:
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  // 2. Once the response arrives, call .json() → Promise<any>, so we await again:
    .then(res => res.json())
    .catch(err => {
      // 3. If fetch() or res.json() throws, we catch it here:
      if (err instanceof Error) console.log(err.message)
      // Note: returning nothing here makes data possibly undefined
    })

  // 4. Return the parsed JSON as an array of User
  return data
}
```
What actually happens at runtime:

- You call `fetchUsers()`.
- Because it’s `async`, you immediately get back a `Promise<User[]>`.
- Inside, await fetch(...).then(...).catch(...)
    - The code waits for the HTTP response, then waits for the JSON parse.
    - If anything goes wrong, you log the error and data becomes undefined.
- You return data (ideally an array of users).

## Better error handling and cleaner async/await

Mixing await with `.then()` is a bit confusing. A more idiomatic pattern is:
```ts
const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }
    // Tell TS what shape to expect:
    const users: User[] = await res.json()
    return users
  } catch (err) {
    console.error('Failed to load users:', err)
    return []   // or re‑throw, or handle however makes sense
  }
}
```
- try { … } catch { … } around your awaits handles any rejection.
- Checking `res.ok` guards against 404/500 responses.
- Explicitly typing `const users: User[]` helps TS verify the JSON matches your User interface.

**Using the result**
```ts
fetchUsers().then(users => {
  console.log('Loaded users:', users)
})
// — or, inside another async function — 
(async () => {
  const users = await fetchUsers()
  console.log(users)
})()
```

**The derived‐type trick: Awaited<ReturnType<…>>**
```ts
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
```
- `ReturnType<typeof fetchUsers>`
    - Extracts the return type of fetchUsers, which is Promise<User[]>.

- `Awaited<Promise<User[]>>`
    - Unwraps the promise to give you User[].

So `FetchUsersReturnType` is exactly `User[]`. This can be handy when you want to infer the shape of data some other function returns, without hard‑coding it.

**Summary**

- `Promise` = an eventual value or error.
- `async` = marks a function that always returns a Promise.
- `await` = pause until a Promise settles, then give you its value (or throw on error).
- Use `try/catch` for clearer error handling with await.
- TypeScript’s `ReturnType` and `Awaited` let you programmatically pull out the type inside a Promise.

### simple explaination 

```ts
const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}
```

1. `fetch()` sends a network request to get user data from a server. This takes time (maybe seconds), so rather than freezing your program, `fetch()` immediately returns a Promise.
2. This `Promise` represents the future response. Your program can continue doing other things while waiting.
3. The `await` keyword pauses only the execution of the `fetchUsers` function until that `Promise` "resolves" (success). The rest of your program can still run.
4. Once the response arrives, the function continues execution.
5. `.then()` takes the response and calls its `.json()` method, which also returns a `Promise` (because parsing JSON can take time for large data).
6. `.catch()` handles any errors that might occur during fetching or parsing.
7. The final result is assigned to data and returned from the function.
8. Because the function is marked `async`, **this return value is automatically wrapped in a Promise**.

### Real-World Analogy
Think of it like ordering food delivery:

* Making a request with `fetch()` is like placing your order
* Getting a Promise back is like getting a confirmation with a tracking number
* The `.then()` is like saying "when the food arrives, I'll eat it"
* `await` is like saying "I won't do anything else until my food arrives"
* `async` functions are like setting aside a special room where you're allowed to wait for deliveries

This approach lets your program handle long-running operations without freezing everything else while waiting.