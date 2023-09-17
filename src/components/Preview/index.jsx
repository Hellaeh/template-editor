import Button from '../Button';

import { preview } from './index.module.css';

/**
 * @param { PreviewProps } props
 */
const Preview = ({ callbackClose }) => {
	return (
		<div className={preview}>
			<Button onClick={callbackClose}>Hello</Button>
		</div>
	);
};

export default Preview;

/**
 * @typedef { object } PreviewProps
 * @property { import('../..').Callback } callbackClose
 */
