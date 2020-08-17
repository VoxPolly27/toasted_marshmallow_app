import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { LoadingElement } from './App';
import { Suspense, lazy } from 'react';
import ToastedLoader from 'components/shared/loaders/toasted-loader/toasted-loader-view';

const App = lazy(() => import('./App'));

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <Suspense fallback={<ToastedLoader data_width={window.outerWidth} data_height={window.innerHeight} />}>
            <App/>
        </Suspense>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();


//<Suspense fallback={<ToastedLoader width={window.outerWidth} height={window.innerHeight} />}>
//    <App />
//</Suspense>

