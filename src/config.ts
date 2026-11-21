export const site = {
	title: "四通八達",
	subtitle: "Fred's Blog",
	author: "Frederick Chen",
	description: "Student / ex-OIer / Blogger / Developer / Rail Lover",
	website: "https://www.ooowl.net/",
	navLinks: [
		{ name: "Posts", href: "https://www.ooowl.net/" },
		{ name: "Archive", href: "https://www.ooowl.net/archive/" },
		{ name: "Categories", href: "https://www.ooowl.net/categories/" },
		{ name: "Friends", href: "https://www.ooowl.net/friends/" },
		{ name: "About", href: "https://www.ooowl.net/about/" }
	],
	socialLinks: [
		{ name: "github", href: "https://github.com/fenychn0206" },
		{ name: "rss", href: "https://www.ooowl.net/atom.xml" },
		{ name: "mail", href: "mailto:hey@ohdragonboi.cn" }
	],
	footer: [
		'© %year <a target="_blank" href="%website">%author</a>',
		'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>'
	]
};

export const appearance = {
	/** `system` follows the OS, `light` / `dark` force a mode. */
	theme: "system" as "system" | "light" | "dark"
};
