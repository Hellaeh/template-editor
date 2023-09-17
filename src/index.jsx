import { memo, useEffect, useRef, useState } from 'react';

import Button from './components/Button';
import Preview from './components/Preview';
import SplitTextArea from './components/SplitTextArea';
import VarButtons from './components/VarButtons';

import { controls, editor, title } from './index.module.css';

/**
 * Template Editor
 *
 * @param { TemplateEditorProps } props
 */
const TemplateEditor = memo(
	/** @param { TemplateEditorProps } props */
	({ arrVarNames, callbackClose, callbackSave, template }) => {
		const [visiblePreview, setVisiblePreview] = useState(false);
		// const [template] = useState(temp || {});
		const state = useRef('');

		return (
			<>
				{visiblePreview && (
					<Preview callbackClose={() => setVisiblePreview(false)} />
				)}

				<div className={editor}>
					<b className={title}>Message Template Editor</b>

					<VarButtons names={arrVarNames} />

					<SplitTextArea />

					<div className={controls}>
						<Button onClick={() => setVisiblePreview(true)}>Preview</Button>
						{callbackSave && (
							<Button onClick={() => callbackSave(template)}>Save</Button>
						)}
						{callbackClose && <Button onClick={callbackClose}>Close</Button>}
					</div>
				</div>
			</>
		);
	},
	(prev, next) => {
		for (const key in prev) {
			if (!Object.is(prev[key], next[key])) {
				// TODO this
				throw new Error('todo');
			}
		}

		if (prev.arrVarNames.length !== next.arrVarNames.length) {
			return false;
		}

		for (let i = 0; i < prev.arrVarNames.length; ++i) {
			if (prev.arrVarNames[i] !== next.arrVarNames[i]) {
				return false;
			}
		}

		return true;
	},
);

export default TemplateEditor;

/**
 * @typedef { object } TemplateEditorProps
 * @property { VarNames } arrVarNames - Array of variable names used in template
 * @property { Callback } [callbackClose] - Callback to close a widget (if no callback passed, you have to manage widget lifetime yourself)
 * @property { (template: Template) => void } callbackSave - Callback to save a template
 * @property { Template } [template]
 *
 * @typedef { import('./template.js').Template } Template
 *
 * @typedef { () => void } Callback - generic callback function
 *
 * @typedef { string[] } VarNames - internal type for props
 */
