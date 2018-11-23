import { createStore, GenericStoreEnhancer } from 'redux';
import rootReducer from './index';

export default (enhancer: GenericStoreEnhancer) => {
	return createStore(rootReducer, enhancer);
};
