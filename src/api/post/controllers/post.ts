import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async preview(ctx) {
    const { secret, slug, locale } = ctx.query as { secret?: string; slug?: string; locale?: string };
    if (!secret || secret !== process.env.PREVIEW_SECRET) return ctx.unauthorized('Invalid preview secret');
    if (!slug) return ctx.badRequest('Missing slug');

    const query = {
      filters: { slug: { $eq: slug } },
      publicationState: 'preview',
      populate: ['seo', 'authors', 'contributors', 'categories', 'tags', 'hero_image', 'related_posts'],
      locale: locale || undefined,
    };

    const found = await strapi.entityService.findMany('api::post.post', query as any);
    if (!found || !found.length) return ctx.notFound('Post not found');

    const base = process.env.PREVIEW_BASE_URL || 'http://localhost:3000';
    const url = `${base}/api/preview?slug=${encodeURIComponent(slug)}${locale ? `&locale=${locale}` : ''}`;
    return (ctx.body = { preview: true, url });
  },
}));