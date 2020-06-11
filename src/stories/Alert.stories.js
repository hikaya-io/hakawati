import HAlert from '../components/alert/HAlert.vue'

// This is required for each story
export default { title: 'Alert' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hAlert = () => ({
  components: { HAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Success alert"
        type="success"
        center
        closable
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Info alert"
        type="info"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Warning alert"
        type="warning"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Error alert"
        type="error"
      />
    </div>
  </div>
    `
})

export const iconAlert = () => ({
  components: { HAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Success alert"
        type="success"
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Info alert"
        type="info"
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Warning alert"
        type="warning"
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        title="Error alert"
        type="error"
        show-icon
      />
    </div>
  </div>
    `
})

export const descriptionAlert = () => ({
  components: { HAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <h-alert
        type="success"
        title="Alert title"
        description="Add description here"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        type="info"
        title="Info alert"
        description="Add description here"
      />
    </div>
    <div style='margin-bottom:15px'>
    <h-alert
        type="warning"
        title="Warning alert"
        description="Add description here"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert
        type="error"
        title="Error alert"
        description="Add description here"
      />
    </div>
  </div>
      `
})

export const usingSlot = () => ({
  components: { HAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <h-alert
        type="success"
      >
        <slot name="title">
          <div>
            The title can also be passed as a slot
          </div>
        </slot>
        <slot name="description">
          <div>
           Something desctipion here you can use any kind of html <i>here </i>
          </div>
        </slot>
      </h-alert>
    </div>
    <div style='margin-bottom:15px'>
    <h-alert
      type="info"
    >
      <slot name="title">
        <div>
          The title can also be passed as a slot
        </div>
      </slot>
      <slot name="description">
        <div>
         Something desctipion here you can use any kind of html <i>here </i>
        </div>
      </slot>
    </h-alert>
  </div>
  <div style='margin-bottom:15px'>
  <h-alert
    type="error"
  >
    <slot name="title">
      <div>
        The title can also be passed as a slot
      </div>
    </slot>
    <slot name="description">
      <div>
       Something desctipion here you can use any kind of html <i>here </i>
      </div>
    </slot>
  </h-alert>
</div>
  </div>
      `
})
