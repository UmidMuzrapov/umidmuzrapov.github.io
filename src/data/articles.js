// Define articles with markdown content directly
// In a production environment, you might want to use a build tool to automate this

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description: "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: ["The Benefits of Cloud Computing", "Tharindu", "Tharindu N", "Tharindu Nayanajith"],
		style: "",
		body: `# The Benefits of Cloud Computing

Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.

## Cost Savings

One of the primary advantages of cloud computing is the significant cost savings it can provide to businesses of all sizes.

## Increased Flexibility

Cloud computing allows businesses to scale their operations up or down quickly and efficiently.

![Random Image](https://picsum.photos/200/300)

## Conclusion

Content of article 1 - businesses are increasingly turning to cloud computing for its numerous benefits.`,
		isMarkdown: true
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description: "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		keywords: ["Artificial Intelligence in Healthcare", "Tharindu", "Tharindu N", "Tharindu Nayanajith"],
		style: "",
		body: `# Artificial Intelligence in Healthcare

AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.

## Patient Outcomes

Artificial intelligence is revolutionizing how healthcare providers diagnose and treat patients.

## Streamlined Operations

AI technology helps healthcare facilities optimize their workflows and reduce administrative burden.

## Latest Applications

From medical imaging to drug discovery, AI is making significant strides across various healthcare domains.`,
		isMarkdown: true
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
