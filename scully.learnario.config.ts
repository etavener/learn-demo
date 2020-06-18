import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { getDelayAngularPlugin } from '@flowaccount/scully-plugin-angular-delay';

const postRenderers = [
  getDelayAngularPlugin({
    delayMilliseconds: 1500
  })
];

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://learnario.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  ignoredRoutes: ['/404']
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "learnario",
  outDir: './dist/static',
  routes: {
    '/:post-slug': {
      type: 'json',
      'post-slug': {
        url: 'https://wp.learnario.com/wp-json/wp/v2/posts?per_page=100',
        property: 'slug'
      }
    }
  },
  defaultPostRenderers: postRenderers
};
