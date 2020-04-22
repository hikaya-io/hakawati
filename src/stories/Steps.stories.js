import BasicSteps from '../components/steps/BasicSteps.vue';

export default { title: 'Steps' }

export const basicSteps = () => ({
    components: { BasicSteps },
    data() {
        return {
            steps: [
                {
                    title: 'Alarm rings',

                },
                {
                    title: 'Drink cofee',

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
    <basic-steps />
    
    Passing array of steps
    <basic-steps :steps="steps"/>

    Passing array of steps with descriptions
    <basic-steps :steps="stepsWithDesc"/>
    </div>`
})
