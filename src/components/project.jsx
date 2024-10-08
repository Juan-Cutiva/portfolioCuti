import React from 'react';
import { Fragment } from 'react';
import '../css/projects.css';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = document.querySelector('html').lang;
const t = useTranslations(lang);

const projects = [
	{
		id: 1,
		name: 'F1 News',
		img: '/f1.webp',
		pImg: 'one',
		pText: 'two',
		description: t('projects.f1News'),
		live: 'https://f1newscuti.netlify.app/',
		repo: 'https://github.com/Juan-Cutiva/CursoCSSGridPractico'
	},
	{
		id: 2,
		name: 'Platzi Travel',
		img: '/travel.webp',
		pImg: 'two',
		pText: 'one',
		description: t('projects.platziTravel'),
		live: 'https://cursotailwind2-3cuti.netlify.app/',
		repo: 'https://github.com/Juan-Cutiva/cursoTailWind2-3'
	},
	{
		id: 3,
		name: 'Yard Sale',
		img: '/yard.webp',
		pImg: 'one',
		pText: 'two',
		description: t('projects.yard'),
		live: 'https://yardsalecuti.netlify.app/',
		repo: 'https://github.com/Juan-Cutiva/cursoFrontend'
	},
	{
		id: 4,
		name: 'Platzi Food',
		img: '/food.webp',
		pImg: 'two',
		pText: 'one',
		description: t('projects.food'),
		live: 'https://platzifoodcuti.netlify.app/',
		repo: 'https://github.com/Juan-Cutiva/cursoTailWind1'
	}
];

export default function project() {
	return (
		<>
			<div>
				{projects.map((item) => {
					var one;
					var two;
					function changeSize() {
						if (window.innerWidth <= 1280) {
							one = 'two';
							two = 'one';
						} else {
							one = item.pImg;
							two = item.pText;
						}
					}
					changeSize();

					return (
						<div
							id="parent"
							className="grid border-[3px] border-yellow-400 p-4 backdrop-blur-sm dark:border-yellow-500 rounded-2xl"
							key={item.id}
						>
							<div className="flex w-full flex-col items-end justify-end rounded-xl" id={one}>
								<img src={item.img} alt="img" className="w-full rounded-lg" />
								<div className="absolute flex h-10 w-[75vw] items-end justify-around gap-40 md:w-[70vw] xl:w-[34vw] mx-auto">
									<a href={item.live} target="_blank" rel="noopener noreferrer" className="button">
										{t('projects.live')}
									</a>
									<a href={item.repo} target="_blank" rel="noopener noreferrer" className="button">
										Repo
									</a>
								</div>
							</div>
							<div
								className="prose-md h-fit w-full rounded-lg bg-[#ffffff17] p-8 text-center font-medium backdrop-blur-md xl:min-h-[16.5rem]"
								id={two}
							>
								<h2 className="mb-2 text-center text-4xl font-semibold text-yellow-400 dark:text-yellow-500">
									{item.name}
								</h2>
								<p className="text-White">{item.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
