import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import * as getters from './getters';
import * as modules from './modules';

Vue.use(Vuex);

const store = ()=>{
    return new Vuex.Store({
        state,
        getters,
        actions,
        modules,
        mutations,
      });
}

export default store
