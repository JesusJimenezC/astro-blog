# Astro Blog

## Overview and Objectives

This project is a modern, fast blog platform built with Astro. It focuses on delivering a seamless reading experience with optimized performance through static site generation.

**Objectives:**
- Create a responsive, accessible blog platform
- Implement content organization with authors and categories
- Provide optimized image loading and formatting
- Ensure fast loading times and good SEO practices
- Support Markdown and MDX for rich content creation

## Features & Technologies

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build/) | Framework for building fast, content-focused websites with less JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework for rapid UI development |
| [MDX](https://mdxjs.com/) | Markdown extension that allows embedding JSX components in content |
| [Bun](https://bun.sh/) | JavaScript runtime and package manager for faster development and execution |
| [TypeScript](https://www.typescriptlang.org/) | Static typing for better code quality and developer experience |
| [Image Optimization](https://docs.astro.build/en/guides/images/) | Automatic image optimization using Astro's built-in image processing |
| [Content Collections](https://docs.astro.build/en/guides/content-collections/) | Type-safe content management system for blog posts and authors |

## Project Structure

```
/
├── public/           # Static assets served as-is
├── src/              # Source code
│   ├── assets/       # Images and other assets processed by Astro
│   ├── components/   # Reusable UI components
│   ├── config/       # Configuration files for the application
│   ├── content/      # Content collections (blog posts, authors)
│   │   ├── author/   # Author information 
│   │   └── blog/     # Blog posts in Markdown/MDX
│   ├── layouts/      # Page layouts and templates
│   ├── pages/        # Route definition files
│   ├── styles/       # Global stylesheets
│   └── utils/        # Utility functions and helpers
├── astro.config.mjs  # Astro configuration
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Commands and Initialization

To get started with this project, follow these commands:

```bash
# Install dependencies
bun install

# Start the development server
bun dev

# Build the production site
bun build

# Preview the production build locally
bun preview

# Run Astro CLI commands
bun astro [command]
```

The development server will start at `http://localhost:4321`, where you can view the blog.

### Content Management

- Add new blog posts by creating Markdown or MDX files in `src/content/blog/`
- Add new authors by creating entries in `src/content/author/`
- Configure content schemas in `src/content/config.ts`

---

## Contact

Your Name - [jesus.jimenez.mx@proton.me](mailto:jesus.jimenez.mx@proton.me)

Project Link: [JournalApp - Demo](https://jourapp.vercel.app/)

Built with ❤️ using [Astro](https://astro.build) and [Bun](https://bun.sh)
