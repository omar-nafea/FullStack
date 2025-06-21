// Utility Types 

// Partial 

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}
// it essensially make all keys optional
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 })) // Object { studentId: "compsci123", title: "Final Project", grade: 95 }
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly 
// required is opposite to partial it makes all the properties required even If some of them are optional
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc. 
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }
// NOTE: assignVerified won't work with recordAssignment!
// Object literal may only specify known properties, and 'recordAssignment' does not exist in type 'Readonly<Assignment>'.ts(2353)
// (property) recordAssignment: (assign: Required<Assignment>) => Assignment

recordAssignment({ ...assignGraded, verified: true })

// Record 
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}

// Pick and Omit are opposite

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}

// Exclude and Extract 

type adjustedGrade = Exclude<LetterGrades, "U"> // type adjustedGrade = "A" | "B" | "C" | "D"


type highGrades = Extract<LetterGrades, "A" | "B"> // type highGrades = "A" | "B"


// Nonnullable it exclude both null and undefined from our all possible grades type

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades> // type NamesOnly = "Dave" | "John"

// ReturnType 

type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number): newAssign => {
    return { title, points }
}
/*
the problem is if we change createNewAssign function then we also need to change newAssign type so what if we didn't have the `newAssigne` return value from the createNewAssign function. 

we could create this `createNewAssign` function and then after we create the function then we could say 
*/
const createNewAssign2 = (title: string, points: number) => {
    return { title, points }
}

type NewAssign2 = ReturnType<typeof createNewAssign2>
/*
type NewAssign2 = {
    title: string;
    points: number;
}
     but now if we change createNewAssign2 it's always going to update our return type `NewAssign2`
*/
const tsAssign: NewAssign2 = createNewAssign2("Utility Types", 100)
console.log(tsAssign) // Object { title: "Utility Types", points: 100 }

// Parameters 
// parameters derive a type from the parameters of the function instead, if we look at the AssignParams it's a tuple and it has the title string and points number

type AssignParams = Parameters<typeof createNewAssign2>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign2 = createNewAssign2(...assignArgs)
console.log(tsAssign2) // Object { title: "Generics", points: 100 }

// Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}


// Async Function: This declares an async function called fetchUsers that returns a Promise containing an array of User objects (Promise<User[]>). The async keyword enables the use of await inside the function and automatically wraps the return value in a Promise.
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
/*
- the fetch API to make a request to the jsonplaceholder API
- await pauses execution until the fetch completes
- .then() takes the response and converts it to JSON
- .catch() handles any errors by checking if the error is an instance of the Error class and logging the message
- The result is stored in the data variable
*/

// Advanced Type Usage
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
/*
This creates a new type using some advanced TypeScript utility types:

- typeof fetchUsers refers to the type of the fetchUsers function
- ReturnType<...> extracts the return type from a function type (in this case Promise<User[]>)
- Awaited<...> unwraps the Promise, giving you just User[]

So FetchUsersReturnType is equivalent to User[]. This pattern is useful when you want to reference the return type of a function elsewhere without duplicating the type definition.
*/

fetchUsers().then(users => console.log(users)) 
/*
This calls the fetchUsers function and uses .then() to handle the Promise it returns. When the Promise resolves, it logs the array of users to the console.
*/

