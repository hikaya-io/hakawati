import Steps from '../components/steps/Steps.vue'
import HSteps from '../components/steps/HSteps.vue'

import HButton from '../components/button/HButton.vue'

import { action } from '@storybook/addon-actions'

export default { title: 'Steps' }

export const layerSteps = () => ({
  components: { HSteps, HButton },
  methods: {
    next () {
      if (this.active++ >= this.steps.length) this.active = 0
    },
    action: action('click')
  },
  data () {
    return {
      active: 0,
      steps: [
        {
          title: 'Value column'
        },
        {
          title: 'Location column'
        },
        {
          title: 'Tooltip description'

        }
      ]
    }
  },
  template: `
    <div> Layer steps
        <h-steps 
            :steps="steps"
            :active="active"
            :clickStep="action"
        />
    <br>
        <h-button
            style="margin-top: 12px;"
            type="primary"
            @click="next"
        >
        Next step
        </h-button>
    </div>
    `
})

export const basicSteps = () => ({
  components: { Steps, HButton },
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
        <steps
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <steps
            :steps="steps"
            :active="active"
            class="body-reg"
        />
    <br>
    Change direction to horizontal
        <steps
            :steps="steps"
            direction="vertical"
            :active="active"
            class="body-reg"
        />
    <br>
    Simple Step bar
        <steps
            :steps="steps"
            :isSimple="true"
            orientation="vertical"
            :active="active"
            class="body-reg"
        />
    <br>
        <h-button
            style="margin-top: 12px;"
            type="primary"
            @click="next"
        >
        Next step
        </h-button>
    </div>`
})

export const stepsWithDescription = () => ({
  components: { Steps, HButton },
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
        <steps 
            :active="active"
            class="body-reg"
        />
    <br>
    Passing array of steps
        <steps
            :steps="stepsWithDesc"
            :active="active"
            class="body-reg"
        />
        <h-button
            style="margin-top: 12px;"
            type="primary"
            @click="next"
        >
        Next step
        </h-button>
    </div>
    `
})
