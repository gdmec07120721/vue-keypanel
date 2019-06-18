import Keypanel from './src/keypanel.vue';

Keypanel.install = function(Vue) {
  Vue.component(Keypanel.name, Keypanel);
};

export {Keypanel};