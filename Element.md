#### Setting up Element UI demo components. 

For this example, we'll use the basic table from [here](https://element.eleme.io/#/en-US/component/table).

The first thing we need to do is create a `.vue` for our new component, so let's add `BasicTable.vue`
under `src/components`.

Next, we'll copy the example code for the basic table into our newly created file. Remember, to check the example code for
both `<template>....</template>` tags and `<script>...</script>`. If we wanted to customize the component, we would 
add `<style></style>` tags as well.

Once we've copied the example code for our component, we need create a story file for our component. In the `stories` 
directory, create a `Table.stories.js` if it doesn't exist already. Since `Table.stories.js` will contain stories for
multiple Table components, we are giving it a general name of `Table` instead of `BasicTable`.

Paste the following contents into the file:
```javascript
import BasicTable from '../components/BasicTable.vue'
// Import other components

// This is required for each story file
export default { title: 'Table' }

// Register the story for the file
export const basicTable = () => ({
  components: { BasicTable },
  template: '<basic-table />'
})
```
There are two sections to take note of.
1. Import statement: `import BasicTable from '../components/BasicTable.vue'` We always need to make sure that 
we've imported the right component
2. Registration: `export const basicTable = .....` Here, we are registering our component with storybook. The name of
the variable should always be the `camelCase` version of the component name.

Now we can run storybook with `yarn storybook` or `npm run storybook` and view our new component.


   
