import { configure } from '@storybook/vue';

import Vue from 'vue';
import ElementUI from 'element-ui';
import '../src/theme/index.css'

// Install Vue plugins.
Vue.use(ElementUI);

configure(require.context('../src', true, /\.stories\.js$/), module);
