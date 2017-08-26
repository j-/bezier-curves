import { createStore, GenericStoreEnhancer } from 'redux';
import rootReducer from './root';

export default (enhancer: GenericStoreEnhancer) => {
	return createStore(rootReducer, enhancer);
};
