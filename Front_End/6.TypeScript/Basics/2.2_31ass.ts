// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName(): string
}

// Do Not Edit The Code Below
let userass: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

userass.id = 200;
userass.id = "200"; // Type 'string' is not assignable to type 'number'
userass.state = false; // Cannot assign to 'state' because it is a read-only property


// Create Interface Here

interface Client {
  id: number,
  username: string,
  active: boolean,
  discount: number,
  getPrice(price: number): number
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}%`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);


// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man, Bird{
    bodyType: string,
    origin: string
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

console.log(creature)


