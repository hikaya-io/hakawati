import HCard from '../components/card/HCard.vue'

export default {
  component: HCard,
  title: '1.0/Card',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = (arg, { argTypes }) => {
  return {
    components: { HCard },
    props: Object.keys(argTypes),
    computed: {
      getWidth () {
        return `width:${this.sampleWidth}rem`
      }
    },
    template: `
      <h-card :style="getWidth" :plain="plain">
        <div slot="title" class="body-3-bold">
            <h3 class="body-2-bold">{{ title }}</h3>
        </div>
        <div slot="items">
          <p><i class="el-icon-user" /> amos</p>
          <p><i class="el-icon-date" /> 2022-05-06</p>
          <p><i class="el-icon-connection" /> csv</p>
          <p>200 rows</p>
        </div>
      </h-card>
    `
  }
}

export const Main = Template.bind({})
Main.args = { title: 'Card Title', sampleWidth: 25 }
