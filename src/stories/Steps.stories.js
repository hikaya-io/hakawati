import BasicSteps from '../components/steps/BasicSteps.vue';

export default { title: 'Steps' }

export const basicSteps = () => ({
    components: { BasicSteps },
    data () {
        return {
          steps: [
              'Wake up',
              'Drink Coffee',
              'Code',
              'Be awesome'
          ]
        }
      },
    template: `
    <div>
    Default
    <basic-steps />
    <br>
    Passing array of steps
    <basic-steps :steps="steps"/>
    </div>`
})
