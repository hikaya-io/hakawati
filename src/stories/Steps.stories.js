import BasicSteps from '../components/steps/BasicSteps.vue';
import BasicStepsWithDescription from '../components/steps/BasicStepsWithDescription.vue';

export default { title: 'Steps' }

export const basicSteps = () => ({
    components: { BasicSteps },
    data() {
        return {
            steps: [
                'Wake up',
                'Drink cofee',
                'Be awesome',
                'Sleep'
            ]
        }
    },
    template: `
    <div>
    Default
    <basic-steps />
    <br>
    Passing array of steps
    <basic-steps :steps="steps" />
    <br>
    Simple Step bar
    <basic-steps :steps="steps" isSimple="true" />

    </div>`
})

export const withDescription = () => ({
    components: { BasicStepsWithDescription },
    data() {
        return {
            steps: [
                {
                    title: 'Wakeup'
                },
                {
                    title: 'Drink Coffee'
                },
                {
                    title: 'Be awesome',
                  
                },
                {
                    title: 'Sleep',
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
    <div>

    Default
    <basic-steps-with-description />
    
    Passing array of steps
    <basic-steps-with-description :steps="stepsWithDesc" />

    </div>
    `
})