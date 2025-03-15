import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

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
    items: blogPost.map(({ data, slug, body }) => ({
      title: data.title,
      description: data.description,
      link: `/posts/${slug}/`,
      pubDate: data.date,

      content: sanitizeHtml(parser.render(body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      customData: `<media:content
        type="image/${data.image.format === 'jpg' ? 'jpeg' : 'png'}"
        width="${data.image.width}"
        height="${data.image.height}"
        medium="image"
        url="${site + data.image.src}" />`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // Styles news feed
    // stylesheet: '/styles/rss.xsl',
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
  });
};
