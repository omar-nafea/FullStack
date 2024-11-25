### Render and transform lists with keys in React. 

Inside the DessertsList  component, remove the null and instead return a ul element that contains a list of li elements, where each li text is a dessert with the following format: ${dessertName} - ${dessertCalories} cal.

The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded. For that you have to use a combination of map, filter and sort array operators.
```js
// App file
import DessertsList from "./DessertsList";
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}
export default App;
```

Solution: Create a basic List component

There are three types of operations you need to apply to the list of desserts: filtering, sorting and mapping. 

Although the order of the operations is not that important, it’s recommended to leave the final projection (mapping) to the end, since that final projection may skip some of the data needed for the filtering and sorting criteria.
Important note

If your browser doesn't automatically reload with the updates, please remember to manually refresh your browser to view the changes after modifying DessertsList.js.

##### Filtering

The first requirement is to display desserts that have less than 500 calories. That means Cheesecake, which has 600 cal, should be omitted. When you need to eliminate elements from your lists based on a certain condition or set of conditions, you need to use the filter() method.

The filter method creates a copy of the array, filtered down to just the elements from the original array that pass the test. In order words, it will return a new list with just the elements that fulfil the condition.

Each dessert from the list has a property called calories, which is an integer representing the number of calories. Therefore, the condition to be implemented should be as follows:

`lowCaloriesDessert` variable will then hold a list of three desserts, without Cheesecake.

##### Sorting

The second requirement you have to implement is sorting the list by calories, from low to high or in ascending order. For that, arrays in JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided. The return value from that comparison function determines how the sorting is performed:

| compareFn(a, b) return value | sort order                                          |
|------------------------------|-----------------------------------------------------|
| &gt; 0                       | sort&nbsp;a after&nbsp;b                            |
| &lt; 0                       | sort&nbsp;a&nbsp; before&nbsp;b&nbsp;               |
| === 0                        | keep original order of&nbsp;a&nbsp;and&nbsp;b&nbsp; |
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```
Use the same trick to sort an array descending:
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a}); 
```
You can chain one operation after another. Recall that filter returns the new array with the filtered down elements, so sort can be chained right after that The compare function makes sure the sorting occurs in ascending order, according to the table above.

##### The Compare Function

The purpose of the compare function is to define an alternative sort order.  
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.  
If the result is negative, a is sorted before b.  
If the result is positive, b is sorted before a.  
If the result is 0, no changes are done with the sort order of the two values.  
Example:  
The compare function compares all the values in the array, two values at a time (a, b).  
When comparing 40 and 100, the sort() method calls the compare function(40, 100).  
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

##### Mapping

Finally, to apply the desired projection and display the information as requested, you can chain the map operator at the end and return a <li> item with the dessert name and its calories, both separated by a dash character, and the word “cal” at the end.

```js
const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal 
       </li> 
     ); 
   }); 
 return <ul>{lowCaloriesDesserts}</ul>; 

}
export default DessertsList; 
```
React supports a key attribute. What are keys? Keys are identifier's that help React to determine which items have changed or added or are removed. They also instruct how to treat a specific element when an update occurs and whether its internal state should be preserved or not. 
To illustrate, adding a key to the last example can make the tree conversion efficient. That's because react now knows that the element with the key cider is the new one and the elements with the keys, beer and wine have just moved. The general rule of thumb with keys is to use a stable identifier that is unique among its siblings. 
This allows React to reuse as many elements from the list as possible, avoiding unnecessary recreations, especially when their content is exactly the same and the only thing that has changed is their position in the list. The key used most often is a unique ID that comes from your data. Those IDs typically mirror a database ID, which has an ID given to an item in a database that by nature is guaranteed to be unique. 

### Differences between controlled and uncontrolled React components. 

### Create a controlled form component in React. 

### Share component state by lifting state up to the closest common ancestor. 

### Share global state using React Context