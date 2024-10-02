import React from 'react';
import Typed from 'typed.js';
import '../css/heroTyped.css';
import { useTranslations } from '../i18n/utils';

export default function MyComponent(props) {
	// Create reference to store the DOM element containing the animation
	const lang = `${props.lang}`;
	const t = useTranslations(lang);

	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				`<span class="text-6xl text-yellow-400 dark:text-yellow-500">Juan Cutiva</span> <span class="text-xl font-semibold">${t('typed.text')}</span><span class="text-xl font-semibold text-yellow-400 dark:text-yellow-500">.</span>`
			],
			typeSpeed: 50
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div className="w-[23rem] text-center font-bold text-White md:text-start" id="typed">
			<span ref={el} />
		</div>
	);
}
