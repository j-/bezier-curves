import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/create';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(devToolsEnhancer({}));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
