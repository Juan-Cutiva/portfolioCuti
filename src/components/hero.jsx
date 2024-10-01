import React from 'react';
import Typed from 'typed.js';
import { useTranslations } from '../i18n/utils';

export default function MyComponent(props) {
	// Create reference to store the DOM element containing the animation
	const lang = `${props.lang}`;
	const t = useTranslations(lang);

	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [`Juan Cutiva <br> ${t('typed.text')}`],
			typeSpeed: 50
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div className="font-bold text-White">
			<span ref={el} />
		</div>
	);
}
