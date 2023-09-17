import { createRoot } from 'react-dom/client';

import './app.css';

import TemplateEditor from '../src/index.jsx';

// Live reloading
new EventSource('http://localhost:3001/esbuild').addEventListener(
	'change',
	() => location.reload(),
);

const root = document.querySelector('#root')!;
const showTemplateButton = document.querySelector('button')!;
// TODO remove
showTemplateButton.style = 'display: none;';

// showTemplateButton.onclick = () => {
const reactRoot = createRoot(root);

const object = { test: 1 };

reactRoot.render(
	<TemplateEditor
		arrVarNames={
			'arrVarNames' in localStorage
				? JSON.parse(localStorage.arrVarNames)
				: ['firstname', 'lastname', 'company', 'position']
		}
		template={
			'template' in localStorage ? JSON.parse(localStorage.template) : null
		}
		callbackSave={() => <div></div>}
		callbackClose={() => reactRoot.unmount()}
	/>,
);
// };
