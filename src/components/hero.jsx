import React from 'react';
import Typed from 'typed.js';
import '../css/heroTyped.css';
import { useTranslations } from '../i18n/utils';

export default function MyComponent(props) {
	const lang = `${props.lang}`;
	const t = useTranslations(lang);

	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				`<span class="text-5xl lg:text-6xl text-yellow-400 dark:text-yellow-500">Juan Cutiva</span> <span class="text-xl font-semibold">${t('typed.text')}</span><span class="text-xl font-semibold text-yellow-400 dark:text-yellow-500">.</span>`
			],
			typeSpeed: 50
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div
			className="w-[19rem] text-center font-bold text-White md:text-start lg:w-[23rem]"
			id="typed"
		>
			<span ref={el} />
		</div>
	);
}
