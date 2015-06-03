import './stylesheets/main.css';
import 'bootstrap/less/bootstrap.less';

import React from 'react';
import App from './components/App';

function main() {
  React.render(<App />, document.getElementById('app'));
}

main();
