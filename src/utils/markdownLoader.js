// Utility function to parse frontmatter from markdown content
function parseFrontmatter(content) {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);

	if (!match) {
		return { frontmatter: {}, content: content };
	}

	const frontmatterStr = match[1];
	const markdownContent = match[2];

	// Parse YAML-like frontmatter
	const frontmatter = {};
	const lines = frontmatterStr.split('\n');

	lines.forEach(line => {
		const colonIndex = line.indexOf(':');
		if (colonIndex > 0) {
			const key = line.substring(0, colonIndex).trim();
			let value = line.substring(colonIndex + 1).trim();

			// Remove quotes if present
			if ((value.startsWith('"') && value.endsWith('"')) ||
				(value.startsWith("'") && value.endsWith("'"))) {
				value = value.slice(1, -1);
			}

			// Handle arrays (keywords)
			if (value.startsWith('[') && value.endsWith(']')) {
				value = value.slice(1, -1)
					.split(',')
					.map(item => item.trim().replace(/^["']|["']$/g, ''));
			}

			frontmatter[key] = value;
		}
	});

	return { frontmatter, content: markdownContent };
}

// Import markdown files and create article objects
async function loadMarkdownArticle(markdownContent, index) {
	const { frontmatter, content } = parseFrontmatter(markdownContent);

	return () => ({
		date: frontmatter.date || '',
		title: frontmatter.title || '',
		description: frontmatter.description || '',
		keywords: frontmatter.keywords || [],
		style: '', // We'll handle styling through CSS classes instead
		body: content, // This will be the raw markdown content
		isMarkdown: true // Flag to identify markdown articles
	});
}

export { parseFrontmatter, loadMarkdownArticle };