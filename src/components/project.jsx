import React from 'react';
import { Fragment } from 'react';
import '../css/projects.css';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = 'es';
const t = useTranslations(lang);

const projects = [
	{
		id: 1,
		name: 'F1 News',
		img: 'https://i.postimg.cc/Njmf3rCg/f1.webp',
		pImg: 'one',
		pText: 'two',
		description: t('projects.f1News')
	},
	{
		id: 2,
		name: 'Platzi Travel',
		img: 'https://i.postimg.cc/rpTFMF75/travel.webp',
		pImg: 'two',
		pText: 'one',
		description: t('projects.platziTravel')
	},
	{
		id: 3,
		name: 'Yard Sale',
		img: 'https://i.postimg.cc/gJSYVyjK/yard.webp',
		pImg: 'one',
		pText: 'two',
		description: t('projects.yard')
	},
	{
		id: 4,
		name: 'Platzi Food',
		img: 'https://i.postimg.cc/Gpj32n1V/food.webp',
		pImg: 'two',
		pText: 'one',
		description: t('projects.food')
	}
];

export default function project() {
	return (
		<>
			<div>
				{projects.map((item) => {
					var one;
					var two;
					function as() {
						if (window.innerWidth <= 1280) {
							one = 'two';
							two = 'one';
						} else {
							one = item.pImg;
							two = item.pText;
						}
					}
					as();

					return (
						<div id="parent" className="grid" key={item.id}>
							<div className="flex w-full flex-col items-center justify-center rounded-xl" id={one}>
								<img src={item.img} alt="img" className="w-full rounded-lg" />
							</div>
							<div
								className="prose-md h-fit w-full rounded-lg bg-[#ffffff17] p-8 text-center font-medium backdrop-blur-md xl:h-[16.5rem]"
								id={two}
							>
								<h2 className="mb-2 text-center text-4xl font-semibold text-yellow-400 dark:text-yellow-500">
									{item.name}
								</h2>
								<p>{item.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
