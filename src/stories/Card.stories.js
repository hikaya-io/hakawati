import BasicCard from '../components/card/BasicCard.vue'

// This is required for each story
export default { title: 'Card' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicCard = () => ({
  components: { BasicCard },
  template: `
  <basic-card>
    <div slot="title" class="clearfix">
        <span>Card name</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
    </div>
    <div slot="items" v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
    </div>
  </basic-card>
    `
})
