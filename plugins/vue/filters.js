import Vue from 'vue';
import * as filters from '~/filters/index';

Object.entries(filters).forEach(([name, filter]) => {
  Vue.filter(name, filter);
})
