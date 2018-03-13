import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import prg from "react-intl/locale-data/prg";
import messages from "./languaje";
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
//import { flattenMessages } from "./languaje/utils";

const store = configureStore();
let locale = 'es';

ReactDOM.render(
    <IntlProvider locale={locale} messages={locale}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' component={App} />
                </Switch>
            </Router>
        </Provider>
    </IntlProvider >,
    document.getElementById('root')
);
registerServiceWorker();
