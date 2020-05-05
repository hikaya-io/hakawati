import { configure } from '@storybook/vue';

import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/tailwind.scss'
import '@/styles/element-variables.scss'


// Install Vue plugins.
Vue.use(ElementUI, { locale });

configure(require.context('../src', true, /\.stories\.js$/), module);
