import { configure } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/element-variables.scss'


// Install Vue plugins.
Vue.use(ElementUI, { locale });

configure(require.context('../src', true, /\.stories\.js$/), module);

export  const parameters = {
  viewPort: INITIAL_VIEWPORTS
}
