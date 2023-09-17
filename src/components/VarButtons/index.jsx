import { useState } from 'react';

import Button from '../Button';
import VarButton from './VarButton';

import { array } from './index.module.css';

/**
 * Creates a
 *
 * @param { VarButtonsProps } props
 */
function VarButtons({ names: propsNames }) {
	const [names, setNames] = useState(propsNames);

	return (
		<div className={array}>
			{names.map((name) => (
				<VarButton key={name}>{name}</VarButton>
			))}
			<Button onClick={() => {}}>+</Button>
		</div>
	);
}

export default VarButtons;

/**
 * @typedef { object } VarButtonsProps
 * @property { import("../..").VarNames } names
 */
