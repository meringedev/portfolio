import {createRoot} from 'react-dom/client';
import {Main} from './portfolio_sections';

const domNode = document.getElementById('main');
const root = createRoot(domNode);
root.render(<Main />);