import Vue from 'vue';
import Vuex from 'vuex';

import store from './store'

Vue.use(Vuex);

export default function () {
    const Store = new Vuex.Store({
        modules: {
            store
        },
        strict: process.env.DEV, // Enable strict mode in development
    })

    return Store
}

// import { createStore } from 'vuex'; // Import createStore
// import storeModule from './store'; // Assuming your module is exported as default from 'store.js'

// // No need for Vue.use(Vuex) in Vue 3 with createStore
// // Vue.use(Vuex);

// export default function () {
//     const Store = createStore({ // Use createStore instead of new Vuex.Store
//         modules: {
//             store: storeModule // Assign your module here
//         },
//         strict: process.env.DEV,
//     });

//     return Store;
// }
