import BasicCard from '../components/card/BasicCard.vue'

// This is required for each story
export default { title: 'Card' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicCard = () => ({
  components: { BasicCard },
  template: `
  <basic-card>
    <div slot="title" class="body-2-bold">
        <span>Title</span>
    </div>
    <div slot="items" v-for="o in 4" :key="o" class="text item" class="body-reg">
        {{'List item ' + o }}
    </div>
  </basic-card>
    `
})
