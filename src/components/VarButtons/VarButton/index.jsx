import { useState } from 'react';

import { classNames } from '../../../utils';

import Button from '../../Button';

import {
	container,
	hidden,
	visible as styleVisible,
	// TS doesn't support this yet, hence LSP goes ham
	// https://github.com/microsoft/TypeScript/issues/40594
	// TODO remove above comment, if there's no errors below
	'button-edit' as buttonEdit,
	'button-delete' as buttonDelete,
	button
} from './index.module.css';

/**
 * @param { import('react').PropsWithChildren } props
 */
function VarButton({ children }) {
	const [visible, setVisible] = useState(false);

	return (
		<span onMouseLeave={() => setVisible(false)} className={container}>
			<span className={classNames(hidden, visible && styleVisible)}>
				<Button className={buttonEdit}>v</Button>
				<Button className={buttonDelete}>x</Button>
			</span>

			<Button className={button} onMouseEnter={() => setVisible(true)}>
				{'{ ' + children + ' }'}
			</Button>
		</span>
	);
}

export default VarButton;
