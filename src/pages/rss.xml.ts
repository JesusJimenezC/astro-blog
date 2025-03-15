import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogPost = await getCollection('blog');

  return rss({
    // `<title>` field in output xml
    title: 'Jesus’s Blog',
    // `<description>` field in output xml
    description: 'A simple blog about me and my adventures with Astro',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPost.map(({ data, slug }) => ({
      title: data.title,
      description: data.description,
      link: `/posts/${slug}/`,
      pubDate: data.date,
      // (optional) custom data to include in the item
      customData: `<author>${data.author}</author>`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // Styles news feed
    // stylesheet: '/styles/rss.xsl',
  });
};
