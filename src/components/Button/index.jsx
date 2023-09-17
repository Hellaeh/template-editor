import { classNames } from '../../utils';

import { button } from './index.module.css';

/**
 * Generic button component
 *
 * @param { import("react").ComponentPropsWithoutRef<'button'> } ButtonProps
 */
const Button = ({ className, children, ...rest }) => (
	<button className={classNames(className, button)} {...rest}>
		{children}
	</button>
);

export default Button;
