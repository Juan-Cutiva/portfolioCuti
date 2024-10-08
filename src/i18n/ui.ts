import { age } from '../scripts/age';

export const languages = {
	es: 'Español',
	en: 'English'
};

export const defaultLang = 'es';

export const ui = {
	es: {
		'layout.description':'Portafolio Juan Cutiva Donde podrás conocer más de mi.',
		'nav.home': 'Inicio',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',
		'nav.about': 'Sobre Mí',
		'typed.text': 'Un desarrollador Front-End el cual quiere descubrir sus límites',
		'about.title': 'Sobre Mí',
		'about.text':
			'Mi nombre es Juan Cutiva, actualmente tengo ' +
			age +
			' años, estudio de manera autodidacta. Soy un desarrollador Front-End apasionado por el mundo de la programación. Me gusta estar en constante aprendizaje y encontrar las mejores soluciones. Tengo experiencia en tecnologías como TailWindCSS, Astro, HTML, CSS, JavaScript, React JS, Git y GitHub',
		'about.contact': 'Contáctame',
		'skills.title': 'Mis Habilidades',
		'skills.and': 'Y',
		'projects.title': 'Mis Proyectos',
		'projects.platziTravel':
			'Platzi Travel es una landing page donde podrás ver diferentes destinos a los que viajar. Esta web no tiene ninguna funcionalidad en si, lo que se buscaba en esta era aprender y especializarse en TailWind. Esta web fue realizada con TailWindCSS, Astro, JavaScript, HTML y CSS.',
		'projects.f1News':
			'F1 News es una web en la que podrás conocer cómo va el campeonato de pilotos y constructores, quiénes son los pilotos actuales y sus equipos. Esta web se ha realizado con React JS, JavaScript, Astro, TailWindCSS, JSON, HTML y CSS.',
		'projects.yard':
			'Yard Sale es un sitio web en el que puedes mostrarle a un cliente cómo se vería su sitio web en diferentes dispositivos. Este sitio web no tiene ninguna funcionalidad en sí, el objetivo aquí era aprender diseño responsivo y cómo trabajar con Mobile First. Este sitio web se creó con React JS, TailWindCSS, Astro, JavaScript, HTML y CSS.',
		'projects.food':
			'Platzi Food es una landing page donde podrás ver el menú del restaurante Platzi Food. Esta web no tiene ninguna funcionalidad en sí, lo que se buscaba aquí era aprender y especializarse en TailWind. Esta web fue creada con TailWindCSS, Astro, JavaScript, HTML y CSS.',
		'projects.live': 'En vivo',
		'contact.title': 'Contáctame',
		'contact.name': 'Nombre',
		'contact.email': 'Correo',
		'contact.affair': 'Asunto',
		'contact.comment': 'Comentarios',
		'contact.send': 'Enviar',
		'404.title':'No encontrada',
		'404.text': "No podemos encontrar esa página.",
		'404.button':'Regresar a casa'
	},
	en: {
		'layout.description':'Portfolio Juan Cutiva Where you can learn more about me.',
		'nav.home': 'Home',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'nav.about': 'About Me',
		'typed.text': 'A developer Front-End who wants to discover his limits',
		'about.title': 'About Me',
		'about.text':
			'My name is Juan Cutiva, I am currently ' +
			age +
			' years old, I am studying self-taught. I am a Front-End developer passionate about the world of programming. I like to be constantly learning and finding the best solutions. I have experience in technologies such as TailWindCSS, Astro, HTML, CSS, JavaScript, React JS, Git and GitHub',
		'about.contact': 'Contact Me',
		'skills.title': 'My Skills',
		'skills.and': 'And',
		'projects.title': 'My Projects',
		'projects.platziTravel':
			'Platzi Travel is a landing page where you can see different destinations to travel to. This website has no functionality in itself, what was sought in this was to learn and specialize TailWind. This website was made with TailWindCSS, Astro, JavaScript, HTML and CSS.',
		'projects.f1News':
			"F1 News is a website where you can find out how the drivers' and constructors' championship is going, who the current drivers are and their teams. This website was made with React JS, JavaScript, Astro, TailWindCSS, JSON, HTML and CSS.",
		'projects.yard':
			'Yard Sale is a website where you can show a client how their website would look on different devices. This website does not have any functionality per se, the goal here was to learn responsive design and how to work with Mobile First. This website was made with React JS, TailWindCSS, Astro, JavaScript, HTML, and CSS.',
		'projects.food':
			'Platzi Food is a landing page where you can see the menu of the Platzi Food restaurant. This website does not have any functionality per se, what was sought here was to learn and specialize in TailWind. This website was created with TailWindCSS, Astro, JavaScript, HTML and CSS.',
		'projects.live': 'Live',
		'contact.title': 'Contact Me',
		'contact.name': 'Name',
		'contact.email': 'E-Mail',
		'contact.affair': 'Affair',
		'contact.comment': 'Comment',
		'contact.send': 'Send',
		'404.title':'Not Found',
		'404.text': "We can't find that page.",
		'404.button':'Go Back Home'
	}
} as const;
