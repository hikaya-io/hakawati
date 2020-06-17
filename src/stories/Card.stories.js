import HCard from '../components/card/HCard.vue'

// This is required for each story
export default { title: 'Card' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hCard = () => ({
  components: { HCard },
  template: `
  <h-card class="h-card">
    <div slot="title"
      class="body-3-bold"
    >
        <span>Title</span>
    </div>
    <div slot="items"
      v-for="o in 4"
      :key="o"
      class="body-reg"
    >
        {{'List item ' + o }}
    </div>
  </h-card>
    `
})

export const hPlainCard = () => ({
  components: { HCard },
  template: `
  <h-card class="h-plain-card">
    <div slot="title"
      class="body-3-bold"
    >
        <span>Title</span>
    </div>
    <div slot="items"
      v-for="o in 4"
      :key="o"
      class="body-reg"
    >
        {{'List item ' + o }}
    </div>
  </h-card>
    `
})
