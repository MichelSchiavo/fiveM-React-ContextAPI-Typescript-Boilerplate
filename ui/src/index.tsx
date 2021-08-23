import ReactDOM from 'react-dom';
import { EventListener } from './utils/EventListener';
import App from './App';

import { OppenedContextProvider } from './contexts/OppenedContext';

ReactDOM.render(
  <>
    <OppenedContextProvider>
      <EventListener />
      <App />
    </OppenedContextProvider>
  </>,
  document.getElementById('root')
)