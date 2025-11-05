import type { OpenAPIHono as Hono } from '@hono/zod-openapi'
import type { Context } from 'hono'
import { SwaggerUI } from '@hono/swagger-ui'

function setupSwagger(server: Hono) {
  server.get('/swagger', (c: Context) => {
    return c.html(`
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Custom Swagger" />
          <title>Custom Swagger</title>
          <script>
          </script>
          <style>
          :root {
            --bg-color: #020617;
            --primary-color: #e2e8f0;
            --secondary-color: #94a3b8;
            --highlight-bg-color: transparent;
            --highlight-border-color: #1e293b;
            --button-bg-color: #0f172a;
            --button-text-color: #e2e8f0;
            --method-bg-color: transparent;
            --cancel-border-color: #b91c1c;
            --success-color: #4ade80;
            --select-bg-color: transparent
            --copy-button-bg-color: transparent
            --servers-bg-color: transparent
            --execute-button-bg-color: transparent
          }

      body {
        background-color: var(--bg-color);
        color-scheme: dark;
      }

      * {
        color: var(--primary-color);
      }

      .parameters-col_description input {
        color: var(--button-bg-color) !important;
      }
      
      .execute {
        color: var(--bg-color) !important;
        background-color: var(--primary-color) !important;
        border: transparent 1px solid !important;
      }

      .btn-clear, .btn-clear:hover {
        color: var(--primary-color) !important;
        border: transparent 1px solid !important;
      }

      .btn-clear:hover {
        border: transparent 1px solid !important;
      }
      
      .opblock-summary-method {
        background-color: var(--method-bg-color) !important;
        font-weight: 800 !important
      }

      .opblock-section-header {
        background-color: var(--highlight-bg-color) !important;
      }

      p, td, .tabitem {
        color: var(--secondary-color) !important;
      }

      h1, h2, h3, h4, h5, h6, h7 .active {
        color: var(--primary-color) !important;
      }

      pre .highlight-code, .microlight {
        background-color: var(--highlight-bg-color) !important;
        border: var(--highlight-border-color) solid 1px;
      }

      .try-out__btn {
        color: var(--button-bg-color) !important;
        background-color: var(--primary-color) !important;
        border: transparent 1px solid !important;
      }

      .cancel {
        color: var(--primary-color) !important;
        background-color: var(--highlight-bg-color) !important;
        border-color: var(--secondary-color) !important;
      }

      .download-contents {
        background-color: var(--button-bg-color) !important;
        color: var(--primary-color);
      }

      .copy-to-clipboard {
        background-color: var(--copy-button-bg-color) !important;
        color: var(--button-text-color);
      }

      .highlight-code .copy-to-clipboard {
        background-color: var(--button-bg-color) !important;
        color: var(--button-text-color);
      }

      .servers {
        background-color: var(--servers-bg-color) !important;
      }

      .response-control-media-type__accept-message {
        color: var(--success-color) !important;
      }

      .title small {
        background-color: var(--bg-color) !important;
      }

      .arrow {
        fill: var(--primary-color) !important;
      }

      select {
        background-color: var(--select-bg-color) !important;
        color: var(--primary-color) !important;
        border-color: var(--highlight-border-color) !important;
      }

      .opblock-summary-control {
        outline: none !important;
      }

      .model-box .json-schema-2020-12__title, .json-schema-2020-12-expand-deep-button {
        color: var(--secondary-color) !important;
      }
      .json-schema-2020-12__attribute--primary {
        color: var(--primary-color) !important;
      }
      .json-schema-2020-12-accordion,
      .json-schema-2020-12-expand-deep-button {
        background-color: transparent !important;
      }
      .json-schema-2020-12__title {
        color: #fff !important;
      }
      .scheme-container,
      .modal-ux {
        background: var(--bg-color) !important;
      }
      .parameters-col_description input,
      #auth-bearer-value {
        background: #e2e2f2 !important;
        color: black !important;
      }
      </style>
        </head>
        ${SwaggerUI({ url: '/doc' })}
      </html>
    `)
  })

  server.doc('/doc', {
    info: { title: 'Chinisik API', version: 'v1' },
    openapi: '3.1.0',
    security: [{
      Bearer: [],
    }],
  })
}

export default setupSwagger
