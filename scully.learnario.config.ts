import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { getDelayAngularPlugin } from '@flowaccount/scully-plugin-angular-delay';
import { MinifyHtml } from 'scully-plugin-minify-html';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://learnario.com'
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'learnario',
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
  defaultPostRenderers: [
    MinifyHtml,
    getDelayAngularPlugin({
      delayMilliseconds: 1500,
      tsConfigPath: 'tsconfig.json'
    })
  ]
};
