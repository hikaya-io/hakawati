import HSteps from '../components/steps/HSteps.vue'

export default { title: 'Steps' }

export const basicSteps = () => ({
  components: { HSteps },
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
        <h-steps
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <h-steps
            :steps="steps"
            :active="active"
            class="body-reg"
        />
    <br>
    Change direction to horizontal
        <h-steps
            :steps="steps"
            direction="vertical"
            :active="active"
            class="body-reg"
        />
    <br>
    Simple Step bar
        <h-steps
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
            dark-text
        >
        Next step
        </el-button>
    </div>`
})

export const stepsWithDescription = () => ({
  components: { HSteps },
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
        <h-steps 
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <h-steps
            :steps="stepsWithDesc"
            :active="active"
            class="body-reg"
        />
        <el-button
            style="margin-top: 12px;"
            @click="next"
            dark-text
        >
        Next step
        </el-button>
    </div>
    `
})
