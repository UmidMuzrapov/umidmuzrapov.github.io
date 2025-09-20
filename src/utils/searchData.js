import myArticles from "../data/articles";
import INFO from "../data/user";

// Generate search data for all content types
const generateSearchData = () => {
	const searchData = [];

	// Add articles to search data
	myArticles.forEach((articleFunc, index) => {
		const article = articleFunc();
		searchData.push({
			type: 'article',
			title: article.title,
			description: article.description,
			keywords: article.keywords,
			content: typeof article.body === 'string' ? article.body : '',
			date: article.date,
			link: `/article/${index + 1}`
		});
	});

	// Add projects to search data
	if (INFO.projects) {
		INFO.projects.forEach((project) => {
			searchData.push({
				type: 'project',
				title: project.title,
				description: project.description,
				keywords: [project.title, 'project', 'software', 'development'],
				content: project.description,
				link: project.link
			});
		});
	}

	// Add main pages to search data
	searchData.push(
		{
			type: 'page',
			title: 'Home',
			description: INFO.homepage.description,
			keywords: ['home', 'about', INFO.main.name, 'software engineer'],
			content: `${INFO.homepage.title} ${INFO.homepage.description}`,
			link: '/'
		},
		{
			type: 'page',
			title: 'About',
			description: INFO.about.description,
			keywords: ['about', 'biography', INFO.main.name, 'education', 'experience'],
			content: `${INFO.about.title} ${INFO.about.description}`,
			link: '/about'
		},
		{
			type: 'page',
			title: 'Projects',
			description: 'View all my software development projects and contributions',
			keywords: ['projects', 'portfolio', 'software', 'development', 'programming'],
			content: 'Projects portfolio software development programming',
			link: '/projects'
		},
		{
			type: 'page',
			title: 'Articles',
			description: INFO.articles.description,
			keywords: ['articles', 'blog', 'writing', 'thoughts', 'programming'],
			content: `${INFO.articles.title} ${INFO.articles.description}`,
			link: '/articles'
		},
		{
			type: 'page',
			title: 'Contact',
			description: `Get in touch with ${INFO.main.name}`,
			keywords: ['contact', 'email', 'reach out', 'connect'],
			content: `Contact ${INFO.main.name} ${INFO.main.email}`,
			link: '/contact'
		}
	);

	return searchData;
};

export default generateSearchData;