// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

    site: "https://eldoriaworld.site",

    integrations: [

        sitemap()

    ],

    compressHTML: true

});