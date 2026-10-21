import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";


export default defineConfig({

    plugins: [

        tailwindcss(),

    ],


    server: {

        proxy: {

            "/digikala-api": {

                target: "https://api.digikala.com",

                changeOrigin: true,

                rewrite: (path) =>
                    path.replace(
                        /^\/digikala-api/,
                        ""
                    ),

            },

        },

    },

});