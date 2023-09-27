import * as React from 'react';
import * as ReactDOM from 'react-dom';

import StarMatch from '../components/StarMatch';

import '../styles/index.css';

ReactDOM.hydrate(
  <StarMatch initialData={window.__R_DATA.initialData} />,
  document.getElementById('root'),
);
