import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './portfolio_assets.js';

const domNode = document.getElementById('main');
const root = createRoot(domNode);
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>);