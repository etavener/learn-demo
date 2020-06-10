"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
    }
};
