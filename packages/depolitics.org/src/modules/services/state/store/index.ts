import environment from '../environment';

import storeProduction from './store.production';
import storeDevelopment from './store.development';



const store = environment.production
    ? storeProduction
    : storeDevelopment;


export default store;
