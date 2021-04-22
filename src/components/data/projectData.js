import sundbaatenPhoto from '../static/sundbaaten.jpeg';
import coronaPhoto from '../static/corona.png';
import ikmatPhoto from '../static/ikmat.png';
import intoproPhoto from '../static/intopro.png';

const projectData = [
	{
		title: 'Abyss Aquaservice',
		description:
			"Information system custom built for Abyss' employees and customers. Order handling, statistics, reports etc. Built with VueJS + Quasar and NodeJS.",
		developedAt: 'Supernode',
	},
	{
		title: 'Isopiloten QA System',
		description:
			'Lightweight Quality Assurance system made for Iso-Piloten made by Supernode. NodeJS REST API and VueJS + Quasar front end.',
		image: ikmatPhoto,
		developedAt: 'Supernode',
	},
	{
		title: 'Intopro',
		description:
			'E-learning platform for food safety built with NodeJS backend and VueJS frontend. Startup developed by Supernode, Eggedosis and ISO-Piloten.',
		image: intoproPhoto,
		developedAt: 'Supernode',
	},
	{
		title: 'Domeneshop DynamicDNS',
		description:
			'Node application that checks if your external IP has changed. If it has changed it will attempt to update your DNS record using the domeneshop API.',
		githubUrl: 'https://github.com/jvik/domeneshop-dynamicdns',
	},
	{
		title: 'Sundbåten Departures',
		description:
			"PWA made with VueJS fetching departures from entur's open GraphQL API and presentin the upcoming departures.",
		demoUrl: 'https://sundbaat.jvik.no',
		githubUrl: 'https://github.com/jvik/sundbaaten-webapp',
		image: sundbaatenPhoto,
	},
	{
		title: 'COVID-19 Stats',
		description:
			'PWA made with VueJS fetching statistics from various sources regarding COVID-19 infection rates in Norway.',
		demoUrl: 'https://sundbaat.jvik.no',
		githubUrl: 'https://github.com/jvik/sundbaaten-webapp',
		image: coronaPhoto,
	},

	{
		title: 'Sundbåten Slackbot',
		description:
			'Slackbot I built to learn how to scrape webpages in NodeJS. Fetches departure tablesfor Sundebåten in Kristiansund, and has some simple commands to get info printed out on a slack server',
		githubUrl: 'https://github.com/jvik/sundbaaten',
		image: sundbaatenPhoto,
	},
];

export default projectData;
