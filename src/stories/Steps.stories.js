import BasicSteps from '../components/steps/BasicSteps.vue'
import StepsWithDescription from '../components/steps/StepsWithDescription.vue'

export default { title: 'Steps' }

export const basicSteps = () => ({
  components: { BasicSteps },
  data () {
    return {
      active: 0,
      steps: [
        'Wake up',
        'Drink cofee',
        'Be awesome',
        'Sleep'
      ]
    }
  },
  methods: {
    next () {
      if (this.active++ >= this.steps.length) this.active = 0
    }
  },
  template: `
    <div>
    Default
        <basic-steps
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <basic-steps
            :steps="steps"
            :active="active"
            class="body-reg"
        />
    <br>
    Change direction to horizontal
        <basic-steps
            :steps="steps"
            direction="vertical"
            :active="active"
            class="body-reg"
        />
    <br>
    Simple Step bar
        <basic-steps
            :steps="steps"
            :isSimple="true"
            orientation="vertical"
            :active="active"
            class="body-reg"
        />
    <br>
        <el-button
            style="margin-top: 12px;"
            @click="next"
        >
        Next step
        </el-button>
    </div>`
})

export const stepsWithDescription = () => ({
  components: { StepsWithDescription },
  methods: {
    next () {
      if (this.active++ >= this.steps.length) this.active = 0
    }
  },
  data () {
    return {
      active: 0,
      steps: [
        {
          title: 'Wakeup'
        },
        {
          title: 'Drink Coffee'
        },
        {
          title: 'Be awesome'

        },
        {
          title: 'Sleep'
        }
      ],
      stepsWithDesc: [
        {
          title: 'Alarm rings',
          description: 'Time to wakeup'
        },
        {
          title: 'Coffee has boiled',
          description: 'Drink Coffee'
        },
        {
          title: 'Be awesome',
          description: 'Write some code'
        },
        {
          title: 'Sleep',
          description: 'Get some rest'
        }
      ]
    }
  },
  template: `
    <div>Vertical step bar
    Default
        <steps-with-description 
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <steps-with-description
            :steps="stepsWithDesc"
            :active="active"
            class="body-reg"
        />
        <el-button
            style="margin-top: 12px;"
            @click="next"
        >
        Next step
        </el-button>
    </div>
    `
})
