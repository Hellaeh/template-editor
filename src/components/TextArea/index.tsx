import { useEffect, useRef } from 'react';

import { classNames } from '../../utils';

import { textarea } from './index.module.css';

/**
 * Callback to resize `textarea` to fit content
 *
 * @param { React.FormEvent<HTMLTextAreaElement> & { target: HTMLTextAreaElement } } event
 */
const resize = ({ target }) => {
	if (target.value.length === 0) {
		// min-height is set in css
		target.style.height = '0px';
		return;
	}

	if (target.clientHeight !== target.scrollHeight) {
		target.style.height = target.scrollHeight + 'px';
	}
};

/**
 * @param { import('react').ComponentPropsWithoutRef<'textarea'> } props
 */
const TextArea = ({ onChange, className }) => {
	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textarea = ref.current!;

		const listener = (e: Event & { target: HTMLTextAreaElement }) => {
			console.log(e.target.selectionStart);

			textarea.oninput = (e) => console.log(e.target.value);
		};

		textarea.addEventListener('selectionchange', listener);
		return () => textarea.removeEventListener('selectionchange', listener);
	}, []);

	return (
		<textarea
			ref={ref}
			onChange={(e) => (resize(e), onChange?.(e))}
			className={classNames(textarea, className)}
			spellCheck
		/>
	);
};

export default TextArea;
