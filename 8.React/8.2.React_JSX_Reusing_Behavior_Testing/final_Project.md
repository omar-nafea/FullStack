- Did the header have external links that take you to different social apps?

- Did the header have internal links that, when clicked, will smoothly scroll into their corresponding section?

- Was the landing section filled with an avatar, name and a short bio?

- Did the project section display a 2x2 grid with each project rendered in a card widget?

- Was the Contact Me form business logic implemented as per the requirements?

- Was the header hidden/shown depending on the scroll direction? Did it happen with a smooth transition animation?

- Can you suggest any improvements for the portfolio app?


### Chakra UI
```js
<HStack spacing=”16px”>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</HStack>
```
### Formik and Yup

```js
import * as Yup from 'yup';
import { useFormik } from 'formik';

// The below code would go inside a React component
const {
  values,
  errors,
  touched,
getFieldProps,
handleSubmit,
} = useFormik({
intialValues: {
    comment: "",
  },
onSubmit: (values) => {
    // Handle form submission
  },
validationSchema: Yup.object({
    comment: Yup.string().required("Required"),
  }),
});
```

The `useFormik` hook takes an object as an argument with the following properties:

- `initialValues`: An object with the initial values of the form fields 

- `onSubmit`: A function that will be called when the form is submitted, with the form values as an argument. In that example you could access the message via `values.comment`.

- `validationSchema`: A Yup schema that will be used to validate the form fields. In that example, the message is a field with a string value that is required. As you can see the rules are human-readable and easy to understand. 

The hook returns an object with the following properties:

- `values`: An object with the current values of the form fields. In that example you could access the message via `values.comment`.

- `errors`: An object with the current errors of the form fields. If validation fails for the "comment" field, which would be the case if the input has been touched and its value is empty, according to the validation schema, you could access the message error via `errors.comment`. In that particular case, the message error would be "Required". If the field is valid though, the value will be undefined. 

- `touched`: An object with the current touched state of the form fields. You can use this to determine if a field has been touched (focused at least once) or not. In that example, you could access the comment state via `touched.comment`. If the field has been touched, the value will be true, otherwise it will be false. 

- `getFieldProps`: A function that takes a field name as an argument and returns an object with the following properties: 

    - `name`: The field name.
    - `value`: The current value of the field.
    - `onChange`: The `handleChange` function.
    - `onBlur`: A function that will be called when the field is blurred. It updates the corresponding field in the touched object. 


The way you would use this function is by spreading the returned object into the input element. For example, if you had an input element with the name "comment", you would do something like this:
```js
<input {...getFieldProps("comment")} />
```

- `handleSubmit:` A function that will be called when the form is submitted. It takes an event as an argument and calls the `onSubmit` function with the values object as an argument. You should hook this function to the form `onSubmit` event. 


**Conclusion**

In this reading, you have learned about three of the most popular libraries that can save you precious time during your app development. Their main goal is to take care of mundane and repetitive tasks and let you focus on the stuff that matters.

You were introduced to Chakra UI as a way to leverage well designed components that you can put together to build more complex interfaces.

Finally, you gained knowledge about an open-source library called Formik
 and its perfect companion, Yup
, to create complex React forms with ease.