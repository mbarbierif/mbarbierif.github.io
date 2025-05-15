# README.md - Personal Blog with GitHub Pages

This repository contains a personal blog website built with GitHub Pages using vanilla HTML, CSS, and JavaScript. The blog features a glass-effect UI with a dynamic content loading system.

## Features

- 🏗️ Built with plain HTML, CSS, and JavaScript (no frameworks required)
- 🔍 Dynamic content loading with URL-based navigation
- 🏷️ Tag filtering and search functionality
- 💎 Modern glass morphism UI design
- 📱 Fully responsive for all devices
- 📝 Markdown support for blog posts
- 🔗 SEO-friendly with proper URL handling

## Repository Structure

```
/
├── index.html              # Main page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── blog.js             # Main JavaScript file
├── blog/
│   ├── index.json          # Blog posts index
│   ├── post-slug-1/
│   │   ├── meta.json       # Post metadata
│   │   ├── content.md      # Post content in Markdown
│   │   └── image.jpg       # Post featured image
│   ├── post-slug-2/
│   │   ├── meta.json
│   │   ├── content.md
│   │   └── image.jpg
│   └── ...
└── README.md               # This file
```

## How It Works

1. The `index.html` file contains the structure of the website with a blog grid and post overlay.
2. The `blog.js` file loads posts from `blog/index.json` and creates preview cards for each post.
3. When a card is clicked, the JavaScript fetches the corresponding Markdown content from the post's folder and displays it in an overlay.
4. The URL is updated using the History API to enable direct linking to posts and proper browser navigation.

## Adding a New Blog Post

To add a new blog post:

1. Create a new folder in the `blog/` directory with a slug name (e.g., `my-new-post`).
2. Add the following files to the folder:
   - `meta.json` - Contains post metadata (title, description, date, tags)
   - `content.md` - The post content in Markdown format
   - `image.jpg` - Featured image for the post
3. Add the post information to `blog/index.json`

Example `meta.json`:
```json
{
  "title": "My New Post",
  "description": "A short description of the post.",
  "date": "2025-06-01",
  "tags": ["tag1", "tag2"],
  "image": "image.jpg"
}
```

## Customization

- Edit `styles.css` to change the visual appearance
- Modify `index.html` to update the site structure and header/footer
- Adjust `blog.js` to modify the filtering, sorting, or display behavior

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Marked.js](https://marked.js.org/) for Markdown parsing
- GitHub Pages for hosting