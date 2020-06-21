import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
//import { getDelayAngularPlugin } from '@flowaccount/scully-plugin-angular-delay';
import { getGoogleAnalyticsPlugin } from '@flowaccount/scully-plugin-google-analytics';
import { MinifyHtml } from 'scully-plugin-minify-html';

const http404Plugin = getHttp404Plugin();

const postRenderers = [
  getGoogleAnalyticsPlugin({
    gaTrackingId: 'UA-142214199-2'
  }),
  // getDelayAngularPlugin({
  //   delayMilliseconds: 1500
  // }),
  MinifyHtml,
  http404Plugin
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
