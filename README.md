# Trostsville Primary School Website

A modern, responsive school website for Trostsville Primary School built with the Hugo static site generator.

## Features

- Modern, responsive design using Tailwind CSS
- Fast-loading static site built with Hugo
- School information pages
- Blog functionality
- Contact form
- Donation form with PDF guide
- Staff directory
- Grade information

## Accessing the Live Site

Once deployed, the site will be available at:
- **GitHub Pages URL**: `https://[your-github-username].github.io/trostsville-primary-school/`

For example, if your GitHub username is "schooladmin", the site would be at:
`https://schooladmin.github.io/trostsville-primary-school/`

To set up a custom domain:
1. Purchase your domain (e.g., trotsvilleprimaryschool.co.za)
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Add the appropriate DNS records with your domain provider

## Local Development

To run this site locally:

1. Clone this repository
2. Ensure you have [Hugo](https://gohugo.io/installation/) installed
3. Run `hugo server` to start the development server
4. Visit http://localhost:1313 in your browser

## Deployment Process

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment workflow:

1. Automatically builds the site using Hugo
2. Publishes the generated files to GitHub Pages
3. Makes them available at your GitHub Pages URL

To deploy manually:
1. Run `hugo --minify` to build the site
2. The site will be generated in the `public/` directory
3. Push these changes to your GitHub repository

## License

MIT License