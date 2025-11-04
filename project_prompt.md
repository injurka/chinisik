== Project Prompt ==
Generated: 2025-11-04T19:04:24.398Z
Source Directory: /home/evai/my/chinisik-root/chinisik
Included Files: 270
Total Size: 434.04 KB
Format: structured
====================

=== Project File Structure ===
├── app
│   ├── components
│   │   ├── 02.shared
│   │   │   ├── background-effects
│   │   │   │   ├── ui
│   │   │   │   │   ├── background-effects.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── dialog-with-close
│   │   │   │   ├── ui
│   │   │   │   │   ├── dialog-with-close.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── footer
│   │   │   │   ├── ui
│   │   │   │   │   ├── footer.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── hanzi-drawing-board
│   │   │   │   ├── types
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ui
│   │   │   │   │   ├── hanzi-drawing-board.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── header
│   │   │   │   ├── ui
│   │   │   │   │   ├── dialog
│   │   │   │   │   │   ├── drawing-control.vue
│   │   │   │   │   │   └── settings-control.vue
│   │   │   │   │   ├── header.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── header-menu-drawer
│   │   │   │   ├── ui
│   │   │   │   │   ├── header-menu-drawer.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── header-profile-drawer
│   │   │   │   ├── ui
│   │   │   │   │   ├── header-profile-drawer.vue
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── markdown-content
│   │   │   │   ├── lib
│   │   │   │   │   ├── create-markdown-renderer.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ui
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── markdown-content.vue
│   │   │   │   └── index.ts
│   │   │   └── page-loader
│   │   │       ├── ui
│   │   │       │   ├── index.ts
│   │   │       │   └── page-loader.vue
│   │   │       └── index.ts
│   │   ├── 03.domain
│   │   │   ├── haotic-lines
│   │   │   │   ├── ui
│   │   │   │   │   ├── index.vue
│   │   │   │   │   └── wrapper.vue
│   │   │   │   └── index.ts
│   │   │   ├── hieroglyph-word
│   │   │   │   ├── store
│   │   │   │   │   └── index.ts
│   │   │   │   ├── types
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── props.ts
│   │   │   │   ├── ui
│   │   │   │   │   └── index.scss
│   │   │   │   └── index.ts
│   │   │   ├── iframe-viewer
│   │   │   │   ├── ui
│   │   │   │   │   └── index.vue
│   │   │   │   └── index.ts
│   │   │   ├── json-to-dom
│   │   │   │   ├── types
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ui
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── json-to-dom.vue
│   │   │   │   └── index.ts
│   │   │   ├── pinyin-text
│   │   │   │   ├── lib
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── parse-pinyin.ts
│   │   │   │   ├── store
│   │   │   │   │   └── index.ts
│   │   │   │   ├── types
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── props.ts
│   │   │   │   ├── ui
│   │   │   │   │   └── index.vue
│   │   │   │   └── index.ts
│   │   │   └── thematic-dictionary
│   │   │       ├── thematic-dictionary-breadcrumbs
│   │   │       │   ├── ui
│   │   │       │   │   └── breadcrumbs.vue
│   │   │       │   └── index.ts
│   │   │       └── thematic-dictionary-card
│   │   │           ├── ui
│   │   │           │   └── card.vue
│   │   │           └── index.ts
│   │   └── 05.modules
│   │       ├── glossary-sysname-lab
│   │       │   ├── ui
│   │       │   │   ├── sections
│   │       │   │   │   ├── lab-settings.vue
│   │       │   │   │   └── lab-test.vue
│   │       │   │   ├── glossary-sysname-lab-content.vue
│   │       │   │   └── index.ts
│   │       │   └── index.ts
│   │       ├── hsk
│   │       │   ├── about
│   │       │   │   ├── ui
│   │       │   │   │   └── index.vue
│   │       │   │   └── index.ts
│   │       │   ├── lab
│   │       │   │   ├── composables
│   │       │   │   │   ├── card-queue.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   └── swipe-handler.ts
│   │       │   │   ├── ui
│   │       │   │   │   ├── hsk-lab.vue
│   │       │   │   │   └── index.vue
│   │       │   │   └── index.ts
│   │       │   ├── words
│   │       │   │   ├── composables
│   │       │   │   │   ├── hsk-controls.ts
│   │       │   │   │   ├── hsk-words.ts
│   │       │   │   │   ├── index.ts
│   │       │   │   │   └── pinyin-formatter.ts
│   │       │   │   ├── ui
│   │       │   │   │   ├── hsk-words-control.vue
│   │       │   │   │   └── index.vue
│   │       │   │   └── index.ts
│   │       │   └── index.ts
│   │       ├── keys
│   │       │   ├── store
│   │       │   │   └── keys.store.ts
│   │       │   ├── ui
│   │       │   │   ├── key-control
│   │       │   │   │   └── key-hieroglyph-control.vue
│   │       │   │   ├── keys-list
│   │       │   │   │   ├── dialog
│   │       │   │   │   │   └── key-hieroglyph-info.vue
│   │       │   │   │   ├── key-hieroglyph-list.vue
│   │       │   │   │   └── key-hieroglyph.vue
│   │       │   │   └── keys-practice
│   │       │   │       ├── keys-practice-draw
│   │       │   │       │   └── keys-practice-draw.vue
│   │       │   │       ├── keys-practice-quize
│   │       │   │       │   ├── composables
│   │       │   │       │   │   ├── card-queue.ts
│   │       │   │       │   │   ├── index.ts
│   │       │   │       │   │   └── swipe-handler.ts
│   │       │   │       │   └── key-practice-quize.vue
│   │       │   │       └── keys-practice.vue
│   │       │   └── index.ts
│   │       ├── linguistic-analysis
│   │       │   ├── composable
│   │       │   │   ├── index.ts
│   │       │   │   └── linguistic-analysis-content.ts
│   │       │   ├── constant
│   │       │   │   ├── index.ts
│   │       │   │   ├── meta.ts
│   │       │   │   ├── position-translations.ts
│   │       │   │   └── role-translations.ts
│   │       │   ├── ui
│   │       │   │   ├── sections
│   │       │   │   │   ├── analysis-viewer-md.vue
│   │       │   │   │   ├── analysis-viewer.vue
│   │       │   │   │   ├── control.vue
│   │       │   │   │   └── example-btn.vue
│   │       │   │   ├── index.ts
│   │       │   │   └── linguistic-analysis.vue
│   │       │   └── index.ts
│   │       ├── linguistic-analysis-history
│   │       │   ├── composable
│   │       │   │   ├── index.ts
│   │       │   │   └── linguistic-analysis-list.ts
│   │       │   ├── ui
│   │       │   │   ├── index.ts
│   │       │   │   └── linguistic-analysis-history.vue
│   │       │   └── index.ts
│   │       ├── pinyin
│   │       │   ├── store
│   │       │   │   └── pinyin.store.ts
│   │       │   ├── ui
│   │       │   │   ├── dialog
│   │       │   │   │   └── pinyin-info.vue
│   │       │   │   └── pinyin-table.vue
│   │       │   └── index.ts
│   │       ├── thematic-dictionary
│   │       │   ├── thematic-dictionary-catalog
│   │       │   │   ├── ui
│   │       │   │   │   └── catalog.vue
│   │       │   │   └── index.ts
│   │       │   ├── thematic-dictionary-category
│   │       │   │   ├── composables
│   │       │   │   │   ├── controls.ts
│   │       │   │   │   └── index.ts
│   │       │   │   ├── ui
│   │       │   │   │   ├── dialog
│   │       │   │   │   │   └── drawing-control.vue
│   │       │   │   │   ├── category.vue
│   │       │   │   │   └── control.vue
│   │       │   │   └── index.ts
│   │       │   └── thematic-dictionary-section
│   │       │       ├── composables
│   │       │       │   ├── controls.ts
│   │       │       │   └── index.ts
│   │       │       ├── ui
│   │       │       │   └── section.vue
│   │       │       └── index.ts
│   │       └── toon
│   │           ├── toon-manual
│   │           │   ├── composables
│   │           │   │   ├── index.ts
│   │           │   │   ├── use-image-selection.ts
│   │           │   │   └── use-translate-controls.ts
│   │           │   ├── store
│   │           │   │   └── index.ts
│   │           │   ├── types
│   │           │   │   └── index.ts
│   │           │   ├── ui
│   │           │   │   ├── sections
│   │           │   │   │   ├── image-editor.vue
│   │           │   │   │   ├── image-uploader.vue
│   │           │   │   │   ├── translation-control.vue
│   │           │   │   │   └── translation-results.vue
│   │           │   │   └── index.vue
│   │           │   └── index.ts
│   │           └── toon-reader
│   │               ├── composables
│   │               │   └── use-toon-reader.ts
│   │               ├── types
│   │               │   └── index.ts
│   │               ├── ui
│   │               │   └── index.vue
│   │               └── index.ts
│   ├── layouts
│   │   ├── base-with-effects.vue
│   │   └── glossary-sysname.vue
│   ├── middleware
│   │   └── auth.ts
│   ├── pages
│   │   ├── about
│   │   │   └── index.vue
│   │   ├── auth
│   │   │   ├── callback.vue
│   │   │   ├── forgot-password.vue
│   │   │   ├── sign-in.vue
│   │   │   └── sign-up.vue
│   │   ├── glossary
│   │   │   ├── [sysname]
│   │   │   │   ├── brief.vue
│   │   │   │   ├── lab.vue
│   │   │   │   └── topic.vue
│   │   │   └── index.vue
│   │   ├── hsk
│   │   │   └── index.vue
│   │   ├── keys
│   │   │   └── index.vue
│   │   ├── linguistic-analysis
│   │   │   ├── history.vue
│   │   │   └── index.vue
│   │   ├── thematic-dictionary
│   │   │   ├── [section]
│   │   │   │   ├── [category]
│   │   │   │   │   └── index.vue
│   │   │   │   └── index.vue
│   │   │   └── index.vue
│   │   ├── toon
│   │   │   ├── [sysname].vue
│   │   │   └── manually.vue
│   │   ├── [...all].vue
│   │   ├── error.vue
│   │   └── pinyin.vue
│   ├── plugins
│   │   ├── 01.api.ts
│   │   └── 02.session-restore.ts
│   ├── service-worker
│   │   ├── notification.ts
│   │   ├── share-target.ts
│   │   ├── sw.ts
│   │   ├── tsconfig.json
│   │   └── web-push-notifications.ts
│   ├── shared
│   │   ├── api
│   │   │   ├── collections
│   │   │   │   ├── auth
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── cms
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── hsk
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── keys
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── linguistic-analysis
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── llm
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── pinyin
│   │   │   │   │   ├── handlers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── v1.ts
│   │   │   │   │   │   └── v1.types.ts
│   │   │   │   │   ├── combine.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── helpers
│   │   │   │   ├── create-api.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── instance.ts
│   │   │   ├── types
│   │   │   │   ├── api.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── shared.ts
│   │   │   └── index.ts
│   │   ├── composables
│   │   │   ├── change-font-cn.ts
│   │   │   ├── change-theme.ts
│   │   │   ├── combine-stores.ts
│   │   │   ├── index.ts
│   │   │   └── render.ts
│   │   ├── constant
│   │   │   ├── cookie-key.ts
│   │   │   ├── index.ts
│   │   │   └── pinyin-tone.ts
│   │   ├── lib
│   │   │   ├── analyze-pinyin-tones.ts
│   │   │   └── index.ts
│   │   ├── store
│   │   │   ├── auth.store.ts
│   │   │   └── index.ts
│   │   └── types
│   │       ├── dts
│   │       │   ├── env.d.ts
│   │       │   ├── fetch.d.ts
│   │       │   └── global.d.ts
│   │       ├── models
│   │       │   ├── hiroglyph
│   │       │   │   ├── hiroglyph-hsk.ts
│   │       │   │   ├── hiroglyph-key.ts
│   │       │   │   ├── hiroglyph.ts
│   │       │   │   └── index.ts
│   │       │   ├── llm
│   │       │   │   ├── i-to-t.ts
│   │       │   │   ├── index.ts
│   │       │   │   └── pinyin-hieroglyphs.ts
│   │       │   ├── auth.ts
│   │       │   ├── index.ts
│   │       │   ├── linguistic-analysis.ts
│   │       │   ├── pinyin.ts
│   │       │   ├── quiz.ts
│   │       │   ├── thematic-dictionary.ts
│   │       │   └── user.ts
│   │       ├── shared
│   │       │   ├── api.ts
│   │       │   ├── index.ts
│   │       │   └── pagination.ts
│   │       ├── index.ts
│   │       └── routes.ts
│   ├── app.config.ts
│   ├── app.vue
│   └── error.vue
├── modules
│   └── 1.api
│       ├── runtime
│       │   ├── composables
│       │   │   ├── use-api.ts
│       │   │   └── use-request.ts
│       │   ├── store
│       │   │   └── request-wrapper.store.ts
│       │   └── plugin.ts
│       ├── types
│       │   ├── composables.ts
│       │   ├── index.ts
│       │   └── store.ts
│       └── index.ts
├── server
│   ├── api
│   │   └── v1
│   │       ├── cms
│   │       │   └── description
│   │       │       └── [sysname].get.ts
│   │       ├── keys
│   │       │   └── index.get.ts
│   │       └── pinyin
│   │           └── index.get.ts
│   ├── utils
│   │   ├── handler.ts
│   │   ├── index.ts
│   │   └── sleep.ts
│   └── tsconfig.json
├── eslint.config.ts
├── nuxt.config.ts
├── package.json
├── prompt-gen.config.json
└── tsconfig.json
============================

=== File List ===
- app/app.config.ts (1.77 KB)
- app/app.vue (0.86 KB)
- app/components/02.shared/background-effects/index.ts (0.02 KB)
- app/components/02.shared/background-effects/ui/background-effects.vue (1.65 KB)
- app/components/02.shared/background-effects/ui/index.ts (0.08 KB)
- app/components/02.shared/dialog-with-close/index.ts (0.02 KB)
- app/components/02.shared/dialog-with-close/ui/dialog-with-close.vue (0.97 KB)
- app/components/02.shared/dialog-with-close/ui/index.ts (0.08 KB)
- app/components/02.shared/footer/index.ts (0.02 KB)
- app/components/02.shared/footer/ui/footer.vue (1.11 KB)
- app/components/02.shared/footer/ui/index.ts (0.05 KB)
- app/components/02.shared/hanzi-drawing-board/index.ts (0.04 KB)
- app/components/02.shared/hanzi-drawing-board/types/index.ts (0.34 KB)
- app/components/02.shared/hanzi-drawing-board/ui/hanzi-drawing-board.vue (9.41 KB)
- app/components/02.shared/hanzi-drawing-board/ui/index.ts (0.09 KB)
- app/components/02.shared/header-menu-drawer/index.ts (0.02 KB)
- app/components/02.shared/header-menu-drawer/ui/header-menu-drawer.vue (6.21 KB)
- app/components/02.shared/header-menu-drawer/ui/index.ts (0.08 KB)
- app/components/02.shared/header-profile-drawer/index.ts (0.02 KB)
- app/components/02.shared/header-profile-drawer/ui/header-profile-drawer.vue (3.88 KB)
- app/components/02.shared/header-profile-drawer/ui/index.ts (0.09 KB)
- app/components/02.shared/header/index.ts (0.02 KB)
- app/components/02.shared/header/ui/dialog/drawing-control.vue (1.78 KB)
- app/components/02.shared/header/ui/dialog/settings-control.vue (7.97 KB)
- app/components/02.shared/header/ui/header.vue (6.17 KB)
- app/components/02.shared/header/ui/index.ts (0.05 KB)
- app/components/02.shared/markdown-content/index.ts (0.02 KB)
- app/components/02.shared/markdown-content/lib/create-markdown-renderer.ts (1.79 KB)
- app/components/02.shared/markdown-content/lib/index.ts (0.04 KB)
- app/components/02.shared/markdown-content/ui/index.ts (0.08 KB)
- app/components/02.shared/markdown-content/ui/markdown-content.vue (6.12 KB)
- app/components/02.shared/page-loader/index.ts (0.02 KB)
- app/components/02.shared/page-loader/ui/index.ts (0.06 KB)
- app/components/02.shared/page-loader/ui/page-loader.vue (0.33 KB)
- app/components/03.domain/haotic-lines/index.ts (0.10 KB)
- app/components/03.domain/haotic-lines/ui/index.vue (4.48 KB)
- app/components/03.domain/haotic-lines/ui/wrapper.vue (0.70 KB)
- app/components/03.domain/hieroglyph-word/index.ts (0.19 KB)
- app/components/03.domain/hieroglyph-word/store/index.ts (0.57 KB)
- app/components/03.domain/hieroglyph-word/types/index.ts (0.18 KB)
- app/components/03.domain/hieroglyph-word/types/props.ts (0.33 KB)
- app/components/03.domain/hieroglyph-word/ui/index.scss (3.17 KB)
- app/components/03.domain/iframe-viewer/index.ts (0.10 KB)
- app/components/03.domain/iframe-viewer/ui/index.vue (1.73 KB)
- app/components/03.domain/json-to-dom/index.ts (0.21 KB)
- app/components/03.domain/json-to-dom/types/index.ts (0.33 KB)
- app/components/03.domain/json-to-dom/ui/index.ts (0.98 KB)
- app/components/03.domain/json-to-dom/ui/json-to-dom.vue (0.97 KB)
- app/components/03.domain/pinyin-text/index.ts (0.26 KB)
- app/components/03.domain/pinyin-text/lib/index.ts (0.03 KB)
- app/components/03.domain/pinyin-text/lib/parse-pinyin.ts (1.07 KB)
- app/components/03.domain/pinyin-text/store/index.ts (0.51 KB)
- app/components/03.domain/pinyin-text/types/index.ts (0.02 KB)
- app/components/03.domain/pinyin-text/types/props.ts (0.23 KB)
- app/components/03.domain/pinyin-text/ui/index.vue (1.89 KB)
- app/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs/index.ts (0.10 KB)
- app/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs/ui/breadcrumbs.vue (0.48 KB)
- app/components/03.domain/thematic-dictionary/thematic-dictionary-card/index.ts (0.08 KB)
- app/components/03.domain/thematic-dictionary/thematic-dictionary-card/ui/card.vue (1.65 KB)
- app/components/05.modules/glossary-sysname-lab/index.ts (0.02 KB)
- app/components/05.modules/glossary-sysname-lab/ui/glossary-sysname-lab-content.vue (2.53 KB)
- app/components/05.modules/glossary-sysname-lab/ui/index.ts (0.11 KB)
- app/components/05.modules/glossary-sysname-lab/ui/sections/lab-settings.vue (1.56 KB)
- app/components/05.modules/glossary-sysname-lab/ui/sections/lab-test.vue (8.05 KB)
- app/components/05.modules/hsk/about/index.ts (0.06 KB)
- app/components/05.modules/hsk/about/ui/index.vue (14.52 KB)
- app/components/05.modules/hsk/index.ts (0.07 KB)
- app/components/05.modules/hsk/lab/composables/card-queue.ts (0.88 KB)
- app/components/05.modules/hsk/lab/composables/index.ts (0.06 KB)
- app/components/05.modules/hsk/lab/composables/swipe-handler.ts (2.73 KB)
- app/components/05.modules/hsk/lab/index.ts (0.05 KB)
- app/components/05.modules/hsk/lab/ui/hsk-lab.vue (8.40 KB)
- app/components/05.modules/hsk/lab/ui/index.vue (0.46 KB)
- app/components/05.modules/hsk/words/composables/hsk-controls.ts (0.68 KB)
- app/components/05.modules/hsk/words/composables/hsk-words.ts (1.38 KB)
- app/components/05.modules/hsk/words/composables/index.ts (0.09 KB)
- app/components/05.modules/hsk/words/composables/pinyin-formatter.ts (0.64 KB)
- app/components/05.modules/hsk/words/index.ts (0.06 KB)
- app/components/05.modules/hsk/words/ui/hsk-words-control.vue (3.03 KB)
- app/components/05.modules/hsk/words/ui/index.vue (4.04 KB)
- app/components/05.modules/keys/index.ts (0.42 KB)
- app/components/05.modules/keys/store/keys.store.ts (1.56 KB)
- app/components/05.modules/keys/ui/key-control/key-hieroglyph-control.vue (2.13 KB)
- app/components/05.modules/keys/ui/keys-list/dialog/key-hieroglyph-info.vue (7.40 KB)
- app/components/05.modules/keys/ui/keys-list/key-hieroglyph-list.vue (1.04 KB)
- app/components/05.modules/keys/ui/keys-list/key-hieroglyph.vue (5.63 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice-draw/keys-practice-draw.vue (10.84 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/card-queue.ts (0.88 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/index.ts (0.06 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/swipe-handler.ts (2.73 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/key-practice-quize.vue (8.32 KB)
- app/components/05.modules/keys/ui/keys-practice/keys-practice.vue (2.47 KB)
- app/components/05.modules/linguistic-analysis-history/composable/index.ts (0.04 KB)
- app/components/05.modules/linguistic-analysis-history/composable/linguistic-analysis-list.ts (1.33 KB)
- app/components/05.modules/linguistic-analysis-history/index.ts (0.02 KB)
- app/components/05.modules/linguistic-analysis-history/ui/index.ts (0.11 KB)
- app/components/05.modules/linguistic-analysis-history/ui/linguistic-analysis-history.vue (3.50 KB)
- app/components/05.modules/linguistic-analysis/composable/index.ts (0.04 KB)
- app/components/05.modules/linguistic-analysis/composable/linguistic-analysis-content.ts (2.23 KB)
- app/components/05.modules/linguistic-analysis/constant/index.ts (0.10 KB)
- app/components/05.modules/linguistic-analysis/constant/meta.ts (0.28 KB)
- app/components/05.modules/linguistic-analysis/constant/position-translations.ts (0.78 KB)
- app/components/05.modules/linguistic-analysis/constant/role-translations.ts (0.91 KB)
- app/components/05.modules/linguistic-analysis/index.ts (0.02 KB)
- app/components/05.modules/linguistic-analysis/ui/index.ts (0.09 KB)
- app/components/05.modules/linguistic-analysis/ui/linguistic-analysis.vue (2.21 KB)
- app/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer-md.vue (0.36 KB)
- app/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer.vue (22.29 KB)
- app/components/05.modules/linguistic-analysis/ui/sections/control.vue (5.30 KB)
- app/components/05.modules/linguistic-analysis/ui/sections/example-btn.vue (0.86 KB)
- app/components/05.modules/pinyin/index.ts (0.22 KB)
- app/components/05.modules/pinyin/store/pinyin.store.ts (1.44 KB)
- app/components/05.modules/pinyin/ui/dialog/pinyin-info.vue (8.34 KB)
- app/components/05.modules/pinyin/ui/pinyin-table.vue (4.93 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-catalog/index.ts (0.09 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-catalog/ui/catalog.vue (1.38 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/composables/controls.ts (0.87 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/composables/index.ts (0.03 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/index.ts (0.10 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/category.vue (6.74 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/control.vue (3.03 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/dialog/drawing-control.vue (11.95 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-section/composables/controls.ts (0.87 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-section/composables/index.ts (0.03 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-section/index.ts (0.09 KB)
- app/components/05.modules/thematic-dictionary/thematic-dictionary-section/ui/section.vue (5.37 KB)
- app/components/05.modules/toon/toon-manual/composables/index.ts (0.08 KB)
- app/components/05.modules/toon/toon-manual/composables/use-image-selection.ts (10.16 KB)
- app/components/05.modules/toon/toon-manual/composables/use-translate-controls.ts (0.89 KB)
- app/components/05.modules/toon/toon-manual/index.ts (0.16 KB)
- app/components/05.modules/toon/toon-manual/store/index.ts (5.45 KB)
- app/components/05.modules/toon/toon-manual/types/index.ts (0.66 KB)
- app/components/05.modules/toon/toon-manual/ui/index.vue (2.31 KB)
- app/components/05.modules/toon/toon-manual/ui/sections/image-editor.vue (6.88 KB)
- app/components/05.modules/toon/toon-manual/ui/sections/image-uploader.vue (5.48 KB)
- app/components/05.modules/toon/toon-manual/ui/sections/translation-control.vue (3.67 KB)
- app/components/05.modules/toon/toon-manual/ui/sections/translation-results.vue (8.41 KB)
- app/components/05.modules/toon/toon-reader/composables/use-toon-reader.ts (16.82 KB)
- app/components/05.modules/toon/toon-reader/index.ts (0.17 KB)
- app/components/05.modules/toon/toon-reader/types/index.ts (6.27 KB)
- app/components/05.modules/toon/toon-reader/ui/index.vue (8.54 KB)
- app/error.vue (0.07 KB)
- app/layouts/base-with-effects.vue (1.11 KB)
- app/layouts/glossary-sysname.vue (3.97 KB)
- app/middleware/auth.ts (0.27 KB)
- app/pages/[...all].vue (0.16 KB)
- app/pages/about/index.vue (5.09 KB)
- app/pages/auth/callback.vue (1.78 KB)
- app/pages/auth/forgot-password.vue (0.58 KB)
- app/pages/auth/sign-in.vue (8.69 KB)
- app/pages/auth/sign-up.vue (0.61 KB)
- app/pages/error.vue (0.11 KB)
- app/pages/glossary/[sysname]/brief.vue (2.02 KB)
- app/pages/glossary/[sysname]/lab.vue (1.69 KB)
- app/pages/glossary/[sysname]/topic.vue (1.71 KB)
- app/pages/glossary/index.vue (2.01 KB)
- app/pages/hsk/index.vue (3.25 KB)
- app/pages/keys/index.vue (3.52 KB)
- app/pages/linguistic-analysis/history.vue (0.51 KB)
- app/pages/linguistic-analysis/index.vue (1.28 KB)
- app/pages/pinyin.vue (1.01 KB)
- app/pages/thematic-dictionary/[section]/[category]/index.vue (1.53 KB)
- app/pages/thematic-dictionary/[section]/index.vue (0.97 KB)
- app/pages/thematic-dictionary/index.vue (0.73 KB)
- app/pages/toon/[sysname].vue (6.45 KB)
- app/pages/toon/manually.vue (1.09 KB)
- app/plugins/01.api.ts (1.00 KB)
- app/plugins/02.session-restore.ts (1.87 KB)
- app/service-worker/notification.ts (0.00 KB)
- app/service-worker/share-target.ts (2.20 KB)
- app/service-worker/sw.ts (5.66 KB)
- app/service-worker/tsconfig.json (0.22 KB)
- app/service-worker/web-push-notifications.ts (1.56 KB)
- app/shared/api/collections/auth/combine.ts (0.42 KB)
- app/shared/api/collections/auth/handlers/index.ts (0.06 KB)
- app/shared/api/collections/auth/handlers/v1.ts (0.86 KB)
- app/shared/api/collections/auth/handlers/v1.types.ts (0.40 KB)
- app/shared/api/collections/auth/index.ts (0.03 KB)
- app/shared/api/collections/cms/combine.ts (0.41 KB)
- app/shared/api/collections/cms/handlers/index.ts (0.06 KB)
- app/shared/api/collections/cms/handlers/v1.ts (0.33 KB)
- app/shared/api/collections/cms/handlers/v1.types.ts (0.21 KB)
- app/shared/api/collections/cms/index.ts (0.03 KB)
- app/shared/api/collections/hsk/combine.ts (0.41 KB)
- app/shared/api/collections/hsk/handlers/index.ts (0.06 KB)
- app/shared/api/collections/hsk/handlers/v1.ts (0.58 KB)
- app/shared/api/collections/hsk/handlers/v1.types.ts (0.40 KB)
- app/shared/api/collections/hsk/index.ts (0.03 KB)
- app/shared/api/collections/index.ts (0.17 KB)
- app/shared/api/collections/keys/combine.ts (0.42 KB)
- app/shared/api/collections/keys/handlers/index.ts (0.06 KB)
- app/shared/api/collections/keys/handlers/v1.ts (0.24 KB)
- app/shared/api/collections/keys/handlers/v1.types.ts (0.07 KB)
- app/shared/api/collections/keys/index.ts (0.03 KB)
- app/shared/api/collections/linguistic-analysis/combine.ts (0.46 KB)
- app/shared/api/collections/linguistic-analysis/handlers/index.ts (0.06 KB)
- app/shared/api/collections/linguistic-analysis/handlers/v1.ts (0.37 KB)
- app/shared/api/collections/linguistic-analysis/handlers/v1.types.ts (0.44 KB)
- app/shared/api/collections/linguistic-analysis/index.ts (0.03 KB)
- app/shared/api/collections/llm/combine.ts (0.41 KB)
- app/shared/api/collections/llm/handlers/index.ts (0.06 KB)
- app/shared/api/collections/llm/handlers/v1.ts (1.58 KB)
- app/shared/api/collections/llm/handlers/v1.types.ts (0.77 KB)
- app/shared/api/collections/llm/index.ts (0.03 KB)
- app/shared/api/collections/pinyin/combine.ts (0.42 KB)
- app/shared/api/collections/pinyin/handlers/index.ts (0.06 KB)
- app/shared/api/collections/pinyin/handlers/v1.ts (0.25 KB)
- app/shared/api/collections/pinyin/handlers/v1.types.ts (0.14 KB)
- app/shared/api/collections/pinyin/index.ts (0.03 KB)
- app/shared/api/helpers/create-api.ts (1.15 KB)
- app/shared/api/helpers/index.ts (0.05 KB)
- app/shared/api/helpers/instance.ts (1.91 KB)
- app/shared/api/index.ts (0.08 KB)
- app/shared/api/types/api.ts (0.79 KB)
- app/shared/api/types/index.ts (0.05 KB)
- app/shared/api/types/shared.ts (0.17 KB)
- app/shared/composables/change-font-cn.ts (0.74 KB)
- app/shared/composables/change-theme.ts (0.76 KB)
- app/shared/composables/combine-stores.ts (1.50 KB)
- app/shared/composables/index.ts (0.12 KB)
- app/shared/composables/render.ts (0.34 KB)
- app/shared/constant/cookie-key.ts (0.26 KB)
- app/shared/constant/index.ts (0.06 KB)
- app/shared/constant/pinyin-tone.ts (0.06 KB)
- app/shared/lib/analyze-pinyin-tones.ts (1.41 KB)
- app/shared/lib/index.ts (0.04 KB)
- app/shared/store/auth.store.ts (3.90 KB)
- app/shared/store/index.ts (0.03 KB)
- app/shared/types/dts/env.d.ts (0.14 KB)
- app/shared/types/dts/fetch.d.ts (0.39 KB)
- app/shared/types/dts/global.d.ts (0.02 KB)
- app/shared/types/index.ts (0.07 KB)
- app/shared/types/models/auth.ts (0.18 KB)
- app/shared/types/models/hiroglyph/hiroglyph-hsk.ts (0.22 KB)
- app/shared/types/models/hiroglyph/hiroglyph-key.ts (0.26 KB)
- app/shared/types/models/hiroglyph/hiroglyph.ts (0.23 KB)
- app/shared/types/models/hiroglyph/index.ts (0.09 KB)
- app/shared/types/models/index.ts (0.21 KB)
- app/shared/types/models/linguistic-analysis.ts (2.04 KB)
- app/shared/types/models/llm/i-to-t.ts (0.13 KB)
- app/shared/types/models/llm/index.ts (0.06 KB)
- app/shared/types/models/llm/pinyin-hieroglyphs.ts (0.38 KB)
- app/shared/types/models/pinyin.ts (0.43 KB)
- app/shared/types/models/quiz.ts (0.07 KB)
- app/shared/types/models/thematic-dictionary.ts (0.59 KB)
- app/shared/types/models/user.ts (0.32 KB)
- app/shared/types/routes.ts (1.41 KB)
- app/shared/types/shared/api.ts (0.35 KB)
- app/shared/types/shared/index.ts (0.05 KB)
- app/shared/types/shared/pagination.ts (0.27 KB)
- eslint.config.ts (0.30 KB)
- modules/1.api/index.ts (0.79 KB)
- modules/1.api/runtime/composables/use-api.ts (0.53 KB)
- modules/1.api/runtime/composables/use-request.ts (0.70 KB)
- modules/1.api/runtime/plugin.ts (1.07 KB)
- modules/1.api/runtime/store/request-wrapper.store.ts (3.28 KB)
- modules/1.api/types/composables.ts (0.88 KB)
- modules/1.api/types/index.ts (0.05 KB)
- modules/1.api/types/store.ts (0.96 KB)
- nuxt.config.ts (0.47 KB)
- package.json (2.52 KB)
- prompt-gen.config.json (0.40 KB)
- server/api/v1/cms/description/[sysname].get.ts (0.15 KB)
- server/api/v1/keys/index.get.ts (0.07 KB)
- server/api/v1/pinyin/index.get.ts (0.15 KB)
- server/tsconfig.json (0.05 KB)
- server/utils/handler.ts (0.49 KB)
- server/utils/index.ts (0.05 KB)
- server/utils/sleep.ts (0.10 KB)
- tsconfig.json (0.10 KB)
=================

=== File Contents ===

--- File: app/app.config.ts ---

export default defineAppConfig({
  titleTemplate: '%s',
  name: 'chinisik',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut_icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  ],
  meta: [
    { name: 'viewport', content: 'viewport-fit=cover, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'title', content: 'chinisik' },
    { hid: 'description', name: 'description', content: 'chinisik' },
    { property: 'og:title', content: 'Чайнизик' },
    { property: 'og:description', content: 'Место для возносения до уровня ТанСана! Познай мир иероглифов чтобы уверено сказать - нихао ни женгуо рен ма!' },
    { property: 'twitter:title', content: 'Чайнизик' },
    { property: 'twitter:description', content: 'Место для возносения до уровня ТанСана! Познай мир иероглифов чтобы уверено сказать - нихао ни женгуо рен ма!' },
    { property: 'twitter:image', content: 'https://chinisik.vercel.app/open-graph.png' },
    { property: 'og:url', content: 'https://chinisik.vercel.app' },
    { property: 'og:image', content: 'https://chinisik.vercel.app/open-graph.png' },
    { property: 'og:image:width', content: '400' },
    { property: 'og:image:height', content: '400' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'og:locale', content: 'ru_RU' },
    { name: 'twitter:locale', content: 'ru' },
  ],
})

--- File: app/app.vue ---

<script lang="ts" setup>
const app = useAppConfig()
const { $pwa } = useNuxtApp()
const { theme, getHeadThemeColor } = useChangeTheme()
const fontFamilyCookie = useCookie(FONT_FAMILY_CN, { default: () => 'base', sameSite: 'lax' })

useHead({
  ...app,
  htmlAttrs: {
    'lang': 'ru',
    'data-cn': fontFamilyCookie.value,
  },
  meta: [
    { name: 'theme-color', content: getHeadThemeColor() },
  ],
})

watch(
  () => theme.value,
  () => {
    useHead({
      ...app,
      meta: [
        { name: 'theme-color', content: getHeadThemeColor() },
      ],
    })
  },
)

onMounted(() => {
  if ($pwa?.offlineReady) {
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
  }
})
</script>

<template>
  <NuxtLoadingIndicator color="var(--border-accent-color)" />
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

--- File: app/components/02.shared/background-effects/index.ts ---

export * from './ui'

--- File: app/components/02.shared/background-effects/ui/background-effects.vue ---

<script lang="ts" setup>
function getRandomChar() {
  const rangeStart = 0x4E00
  const rangeEnd = 0x62FF

  return String.fromCodePoint(
    Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart),
  )
}

const symbols = Array.from({ length: 40 }, () => ({
  char: getRandomChar(),
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 15,
  size: 1 + Math.random() * 0.4,
}))
</script>

<template>
  <div class="background-effects">
    <div
      v-for="(symbol, index) in symbols"
      :key="index"
      class="symbol"
      :style="{
        top: `${symbol.top}%`,
        left: `${symbol.left}%`,
        animationDelay: `${symbol.delay}s`,
        animationDuration: `${symbol.duration}s`,
        fontSize: `${symbol.size}rem`,
      }"
    >
      {{ symbol.char }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to center, var(--bg-primary-color), var(--bg-tertiary-color));
  z-index: -1;

  .symbol {
    position: absolute;
    color: var(--fg-seconday-color);
    animation: floatEffect linear infinite;
    user-select: none;
    font-family: 'Arial', sans-serif;
    opacity: 0;
  }
}

@keyframes floatEffect {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }
  20% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
    transform: translateY(-40px) rotate(180deg);
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) rotate(360deg);
  }
}
</style>

--- File: app/components/02.shared/background-effects/ui/index.ts ---

import BackgroundEffects from './background-effects.vue'

export { BackgroundEffects }

--- File: app/components/02.shared/dialog-with-close/index.ts ---

export * from './ui'

--- File: app/components/02.shared/dialog-with-close/ui/dialog-with-close.vue ---

<script lang="ts" setup>
interface Props {
  maxWidth?: number
}

const { maxWidth = 700 } = defineProps<Props>()
const emits = defineEmits<{ afterLeave: [void] }>()

const maxWidthPx = computed(() => `${maxWidth + 48}px`)

const dialog = defineModel<boolean>({ required: true })
</script>

<template>
  <VDialog
    v-model="dialog"
    class="dialog"
    :style="{ maxWidth: maxWidthPx }"
    @after-leave="emits('afterLeave')"
  >
    <slot />
    <VBtn
      icon
      variant="text"
      class="close"
      @click="dialog = false"
    >
      <Icon size="24" name="mdi:close" />
    </VBtn>
  </VDialog>
</template>

<style lang="scss" scoped>
.dialog {
  .close {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 32px;
    height: 32px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

--- File: app/components/02.shared/dialog-with-close/ui/index.ts ---

import DialogWithClose from './dialog-with-close.vue'

export { DialogWithClose }

--- File: app/components/02.shared/footer/index.ts ---

export * from './ui'

--- File: app/components/02.shared/footer/ui/footer.vue ---

<script lang="ts" setup>

</script>

<template>
  <VFooter class="footer">
    <div class="footer-content">
      <span class="copyright">© 2025 Chinisik</span>
      <VSpacer />

      <div class="links">
        <a href="/about" target="_blank" rel="noopener noreferrer">
          <VIcon
            size="small"
            color="var(--fg-primary-color)"
          >mdi-information-variant</VIcon>
        </a>

        <a href="https://github.com/injurka/chinisik" target="_blank" rel="noopener noreferrer">
          <VIcon
            size="small"
            color="var(--fg-primary-color)"
          >mdi-github</VIcon>
        </a>
      </div>
    </div>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-secondary-color);
  border-top: 1px solid var(--border-secondary-color);
  display: flex;
  justify-content: center;

  .copyright {
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .links {
    display: flex;
    gap: 8px;
  }

  &-content {
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    color: var(--fg-primary-color);
  }
}
</style>

--- File: app/components/02.shared/footer/ui/index.ts ---

import Footer from './footer.vue'

export { Footer }

--- File: app/components/02.shared/hanzi-drawing-board/index.ts ---

export * from './types'
export * from './ui'

--- File: app/components/02.shared/hanzi-drawing-board/types/index.ts ---

interface DrawingBoardExposed {
  clearCanvas: () => void
  getImageDataURL: (type?: string, quality?: number) => { userImage: string | null, targetImage: string | null } | null
  isCanvasEmpty: () => boolean
  showTargetCharacter: () => void
  hideTargetCharacter: () => void
  showTargetOverlay: Ref<boolean>
}

export type { DrawingBoardExposed }

--- File: app/components/02.shared/hanzi-drawing-board/ui/hanzi-drawing-board.vue ---

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

// --- Props ---
const props = defineProps<{
  targetCharacter?: string
}>()

const { isMobile } = useDevice()

// --- Refs ---
const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctxRef = ref<CanvasRenderingContext2D | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// --- State ---
const isDrawing = ref(false)
const hasDrawing = ref(false)
const lastPos = reactive({ x: 0, y: 0 })
const lastTimestamp = ref(0)
const lastLineWidth = ref(5)
const showTargetOverlay = ref(false)
const canvasSize = reactive({ width: 400, height: 400 })

// --- Constants ---
const BASE_LINE_WIDTH = isMobile ? 15 : 25
const MAX_LINE_WIDTH = isMobile ? 25 : 35
const MIN_LINE_WIDTH = 2
const VELOCITY_FACTOR = 15
const GRID_COLOR = '#ddd'
const GRID_LINE_WIDTH = 0.5
const DEFAULT_TARGET_COLOR = 'rgba(150, 150, 150, 0.3)'
const DEFAULT_TARGET_FONT_FAMILY = 'MapleMono-CN'

// --- Computed ---
const computedStyles = computed(() => {
  if (typeof window !== 'undefined' && containerRef.value) {
    return getComputedStyle(containerRef.value)
  }
  return null
})

const targetCharacterStyle = computed(() => ({
  color: computedStyles.value?.getPropertyValue('--fg-accent-color').trim() || DEFAULT_TARGET_COLOR,
  fontFamily: computedStyles.value?.getPropertyValue('--font-family-cn').trim() || DEFAULT_TARGET_FONT_FAMILY,
}))

// --- Canvas Setup ---
function setupCanvas() {
  const ctx = ctxRef.value
  if (!ctx)
    return
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-primary-color').trim() || DEFAULT_TARGET_COLOR
  ctx.fillStyle = computedStyles.value?.getPropertyValue('--fg-primary-color').trim() || DEFAULT_TARGET_COLOR
  ctx.lineWidth = lastLineWidth.value
  ctx.font = '10px sans-serif'
  ctx.textAlign = 'start'
  ctx.textBaseline = 'middle'
}

// --- Grid Drawing ---
function drawGridOnContext(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.save()
  ctx.strokeStyle = GRID_COLOR
  ctx.lineWidth = GRID_LINE_WIDTH
  ctx.beginPath()
  ctx.moveTo(1, 1)
  ctx.lineTo(w - 1, 1)
  ctx.lineTo(w - 1, h - 1)
  ctx.lineTo(1, h - 1)
  ctx.closePath()
  ctx.moveTo(w / 2, 1)
  ctx.lineTo(w / 2, h - 1)
  ctx.moveTo(1, h / 2)
  ctx.lineTo(w - 1, h / 2)
  ctx.moveTo(1, 1)
  ctx.lineTo(w - 1, h - 1)
  ctx.moveTo(w - 1, 1)
  ctx.lineTo(1, h - 1)
  ctx.stroke()
  ctx.restore()
}

// --- Coordinate Helper ---
function getEventCoordinates(event: MouseEvent | TouchEvent): { x: number, y: number } | null {
  if (!canvasRef.value)
    return null
  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  let clientX: number
  let clientY: number
  if (event instanceof MouseEvent) {
    clientX = event.clientX
    clientY = event.clientY
  }
  else if (event.touches && event.touches.length > 0) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  }
  else { return null }
  return { x: clientX - rect.left, y: clientY - rect.top }
}

// --- Drawing Logic ---
function startDrawing(event: MouseEvent | TouchEvent) {
  const coords = getEventCoordinates(event)
  if (!coords || !ctxRef.value)
    return
  isDrawing.value = true
  hasDrawing.value = true
  lastPos.x = coords.x
  lastPos.y = coords.y
  lastTimestamp.value = performance.now()
  lastLineWidth.value = BASE_LINE_WIDTH

  setupCanvas()
  ctxRef.value.beginPath()
  ctxRef.value.moveTo(lastPos.x, lastPos.y)
}

function draw(event: MouseEvent | TouchEvent) {
  if (!isDrawing.value || !ctxRef.value)
    return

  const coords = getEventCoordinates(event)
  if (!coords)
    return

  const currentTimestamp = performance.now()
  const deltaTime = Math.max(1, currentTimestamp - lastTimestamp.value)

  const deltaX = coords.x - lastPos.x
  const deltaY = coords.y - lastPos.y
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  const velocity = distance / deltaTime
  const targetLineWidth = BASE_LINE_WIDTH / (1 + velocity * (VELOCITY_FACTOR / 100))
  let newLineWidth = Math.max(MIN_LINE_WIDTH, Math.min(MAX_LINE_WIDTH, targetLineWidth))

  newLineWidth = lastLineWidth.value * 0.8 + newLineWidth * 0.2

  ctxRef.value.lineWidth = newLineWidth
  ctxRef.value.lineTo(coords.x, coords.y)
  ctxRef.value.stroke()

  lastPos.x = coords.x
  lastPos.y = coords.y
  lastTimestamp.value = currentTimestamp
  lastLineWidth.value = newLineWidth

  ctxRef.value.beginPath()
  ctxRef.value.moveTo(lastPos.x, lastPos.y)
}

function stopDrawing() {
  if (!isDrawing.value || !ctxRef.value)
    return
  isDrawing.value = false
  ctxRef.value.beginPath()
}

// --- Canvas Actions ---
function clearCanvas() {
  const ctx = ctxRef.value
  const canvas = canvasRef.value
  if (!ctx || !canvas)
    return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawGridOnContext(ctx, canvas.width, canvas.height)
  setupCanvas()
  hasDrawing.value = false
  isDrawing.value = false
  showTargetOverlay.value = false
}

function createTempCanvas(width: number, height: number): { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D } | null {
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = width
  tempCanvas.height = height
  const tempCtx = tempCanvas.getContext('2d')

  if (!tempCtx) {
    console.error('Failed to get 2D context for temporary canvas')
    return null
  }
  tempCtx.fillStyle = '#FFFFFF'
  tempCtx.fillRect(0, 0, width, height)
  return { canvas: tempCanvas, ctx: tempCtx }
}

// --- Get Image Data ---
function getImageDataURL(type: string = 'image/png', quality?: number): { userImage: string | null, targetImage: string | null } | null {
  const originalCanvas = canvasRef.value

  if (!originalCanvas || !ctxRef.value) {
    console.error('Original canvas or context not available')
    return null
  }

  const width = originalCanvas.width
  const height = originalCanvas.height

  // --- Generate User Image ---
  let userDataURL: string | null = null
  const userImageCanvasData = createTempCanvas(width, height)
  if (userImageCanvasData) {
    const { canvas: userCanvas, ctx: userCtx } = userImageCanvasData
    userCtx.drawImage(originalCanvas, 0, 0)
    userDataURL = userCanvas.toDataURL(type, quality)
  }

  // --- Generate Target Image ---
  let targetDataURL: string | null = null
  if (props.targetCharacter) {
    const targetImageCanvasData = createTempCanvas(width, height)
    if (targetImageCanvasData) {
      const { canvas: targetCanvas, ctx: targetCtx } = targetImageCanvasData

      // 1. Draw Grid on Target Canvas
      drawGridOnContext(targetCtx, width, height)

      // 2. Draw Target Character
      const fontSize = Math.min(width, height) * 0.8
      targetCtx.font = `${fontSize}px ${targetCharacterStyle.value.fontFamily}`
      targetCtx.fillStyle = targetCharacterStyle.value.color
      targetCtx.textAlign = 'center'
      targetCtx.textBaseline = 'middle'
      targetCtx.fillText(props.targetCharacter, width / 2, height / 2)

      targetDataURL = targetCanvas.toDataURL(type, quality)
    }
  }
  else {
    console.warn('Target character prop is not set. Cannot generate target image.')
  }

  return {
    userImage: userDataURL,
    targetImage: targetDataURL,
  }
}

function isCanvasEmpty(): boolean {
  return !hasDrawing.value
}

function showTargetCharacter() {
  if (props.targetCharacter) {
    showTargetOverlay.value = true
  }
  else {
    console.warn('Target character prop is not set. Cannot show overlay.')
  }
}

function hideTargetCharacter() {
  showTargetOverlay.value = false
}

// --- Lifecycle Hooks ---
onMounted(() => {
  if (!canvasRef.value || !containerRef.value)
    return
  const canvas = canvasRef.value
  const context = canvas.getContext('2d', {
    willReadFrequently: true,
  })

  if (!context) {
    console.error('Не удалось получить 2D контекст для canvas')
    return
  }
  ctxRef.value = context

  const container = containerRef.value
  const width = container.clientWidth > 0 ? container.clientWidth : 400
  canvas.width = width
  canvas.height = width
  canvasSize.width = width
  canvasSize.height = width

  setupCanvas()
  drawGridOnContext(ctxRef.value, canvasSize.width, canvasSize.height)
})

defineExpose({
  clearCanvas,
  getImageDataURL,
  isCanvasEmpty,
  showTargetCharacter,
  hideTargetCharacter,
  showTargetOverlay,
})
</script>

<template>
  <div ref="containerRef" class="hanzi-drawing-board-container">
    <canvas
      ref="canvasRef"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart.prevent="startDrawing"
      @touchmove.prevent="draw"
      @touchend.prevent="stopDrawing"
    />
    <div
      v-if="showTargetOverlay && props.targetCharacter"
      class="target-character-overlay"
      :style="`font-size: calc(${canvasSize.width} * 0.8 * 1px);`"
    >
      {{ props.targetCharacter }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hanzi-drawing-board-container {
  aspect-ratio: 1 / 1;
  border: 2px solid var(--border-secondary-color);
  position: relative;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: crosshair;
  background-color: var(--bg-primary-color);
  touch-action: none;
}

.target-character-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--fg-accent-color);
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  font-family: 'MapleMono-CN';
}
</style>

--- File: app/components/02.shared/hanzi-drawing-board/ui/index.ts ---

import HanziDrawingBoard from './hanzi-drawing-board.vue'

export { HanziDrawingBoard }

--- File: app/components/02.shared/header-menu-drawer/index.ts ---

export * from './ui'

--- File: app/components/02.shared/header-menu-drawer/ui/header-menu-drawer.vue ---

<script lang="ts" setup>
interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

const canGoBack = defineProps<{
  canGoBack?: boolean
}>()

const slots = defineSlots<{
  default: () => unknown
}>()

const { isMobile } = useDevice()
const isDrawer = defineModel<boolean>({ required: true })
const contentType = defineModel<string>('contentType', { default: 'sections' })

const navGroups: NavGroup[] = [
  {
    title: 'Обучение',
    items: [
      { name: 'Ключи', icon: 'mdi:key', routeName: RouteNames.Keys, routePath: RoutePaths.Keys.Tab('list') },
      { name: 'Пиньин', icon: 'mdi:translate', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin() },
      { name: 'HSK словарь', icon: 'mdi:trophy-broken', routeName: RouteNames.HSK, routePath: RoutePaths.HSK.Tab('about') },
      { name: 'Тематический словарь', icon: 'mdi:book-open-variant', routeName: RouteNames.ThematicDictionary, routePath: RoutePaths.ThematicDictionary.Sections() },
      { name: 'Глоссарий', icon: 'mdi:book-alphabet', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary.Index() },
    ],
  },
  {
    title: 'Инструменты',
    items: [
      { name: 'Лексический анализ', icon: 'mdi:layers-search', routeName: RouteNames.LinguisticAnalysis, routePath: RoutePaths.LinguisticAnalysis.Index() },
      { name: 'Перевод комиксов', icon: 'mdi:panorama-variant-outline', routeName: RouteNames.ToonManually, routePath: RoutePaths.Toon.Manually() },
    ],
  },
]

const hasSlotContent = computed(() => {
  return !!slots.default()
})

const router = useRouter()
function navigateTo(path: string) {
  if (isMobile) {
    isDrawer.value = false
  }
  router.push(path)
}
</script>

<template>
  <VNavigationDrawer
    v-model="isDrawer"
    location="left"
    :width="isMobile ? 320 : 380"
    class="drawer"
    mobile-breakpoint="xl"
  >
    <header class="header">
      <div v-if="contentType === 'sections'" class="header-title">
        Разделы
      </div>
      <button v-else-if="contentType === 'slot' && canGoBack" class="header-back" @click="contentType = 'sections'">
        <Icon name="mdi:arrow-left" size="20" />
        <span>Вернуться к разделам</span>
      </button>
    </header>

    <main class="main-content">
      <Transition name="smooth-appear" mode="out-in">
        <div v-if="contentType === 'sections'" class="nav-list-container">
          <div v-for="group in navGroups" :key="group.title" class="nav-group">
            <h3 class="group-title">
              {{ group.title }}
            </h3>
            <ul class="group-items">
              <li
                v-for="item in group.items"
                :key="item.routeName"
                v-ripple
                :class="{ actived: $route.name === item.routeName }"
                @click.stop="navigateTo(item.routePath)"
              >
                <Icon size="22" :name="item.icon" />
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div v-else-if="contentType === 'slot' && hasSlotContent" class="slot-content">
          <slot />
        </div>

        <div v-else class="placeholder">
          <p>Нет контента для отображения.</p>
        </div>
      </Transition>
    </main>

    <footer class="footer">
      <button
        v-ripple
        class="about-button"
        @click="navigateTo(RoutePaths.About())"
      >
        О сайте
      </button>
    </footer>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.smooth-appear-enter-active,
.smooth-appear-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.smooth-appear-enter-from,
.smooth-appear-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.drawer {
  border: none;
  border-right: 1px solid var(--border-primary-color);
  user-select: none;

  &:deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary-color);
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid var(--border-primary-color);
    flex-shrink: 0;
    color: var(--fg-secondary-color);

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    &-back {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      color: var(--fg-primary-color);
      transition: color 0.2s ease;
      &:hover {
        color: var(--fg-action-color);
      }
    }
  }

  .main-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 8px;
  }

  .nav-group {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  .group-title {
    padding: 0 12px 8px;
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--fg-secondary-color);
  }

  .group-items {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      height: 44px;
      padding: 0 12px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
      font-weight: 400;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
      }

      &.actived {
        color: var(--fg-accent-color);
        background-color: var(--bg-tertiary-color);
        font-weight: 500;
      }
    }
  }

  .placeholder,
  .slot-content {
    padding: 16px;
  }

  .footer {
    padding: 8px;
    margin-top: auto;
    border-top: 1px solid var(--border-primary-color);
    flex-shrink: 0;

    .about-button {
      width: 100%;
      height: 44px;
      border-radius: 8px;
      color: var(--fg-secondary-color);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
      }
    }
  }
}
</style>

--- File: app/components/02.shared/header-menu-drawer/ui/index.ts ---

import HeaderMenuDrawer from './header-menu-drawer.vue'

export { HeaderMenuDrawer }

--- File: app/components/02.shared/header-profile-drawer/index.ts ---

export * from './ui'

--- File: app/components/02.shared/header-profile-drawer/ui/header-profile-drawer.vue ---

<script lang="ts" setup>
const isDrawer = defineModel<boolean>({ required: true })

interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

const navItems: NavItem[] = [
  { name: 'Мой профиль', icon: 'material-symbols:frame-person-rounded', routeName: RouteNames.Keys, routePath: RoutePaths.Keys('list') },
  { name: 'Лексические разборы', icon: 'material-symbols:manage-search', routeName: RouteNames.LinguisticAnalysisHistory, routePath: RoutePaths.LinguisticAnalysis.History },
  { name: 'Настройки', icon: 'material-symbols:settings-outline', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin },
]

const store = useStore(['auth'])

const { user } = storeToRefs(store.auth)

async function handleLogout() {
  await store.auth.signOut(true)
}
</script>

<template>
  <VNavigationDrawer
    v-model="isDrawer"
    location="right"
    class="drawer"
    width="320"
    temporary
    :touchless="true"
  >
    <div class="profile-header">
      <NuxtImg
        class="profile-header-img"
        width="38"
        height="38"
        placeholder="/images/profile-placeholder.png"
        :src="user?.avatarUrl"
      />
      <div class="profile-header-name">
        {{ user?.name }}
      </div>
      <div class="profile-header-logout" @click="handleLogout">
        <Icon size="20" name="mdi:logout" />
      </div>
      <div class="profile-header-close" @click="isDrawer = !isDrawer">
        <Icon size="20" name="mdi:close" />
      </div>
    </div>

    <hr>

    <div class="nav-list">
      <ul>
        <li
          v-for="item in navItems"
          :key="item.routeName"
          class="link"
          :class="{ actived: $route.name === item.routeName }"
          @click="navigateTo(item.routePath)"
        >
          <Icon class="icon" size="22" :name="item.icon" />
          <span class="label">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  border-right: 1px solid var(--border-primary-color);

  &:deep(.v-navigation-drawer__content) {
    background-color: var(--bg-secondary-color);
    padding: 16px;
  }

  .profile-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    &-name {
      font-size: 0.9rem;
      color: var(--fg-primary-color);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-img {
      border-radius: 50%;
    }
    &-logout,
    &-close {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      min-height: 30px;
      cursor: pointer;
      border-radius: 6px;
      color: var(--fg-secondary-color);
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }
    }
  }

  .nav-list {
    margin-top: 16px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 10px 0;
      margin: 0;
    }

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding: 0 8px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      .icon {
        color: var(--fg-secondary-color);
      }
      .label {
        color: var(--fg-primary-color);
      }

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      &.actived {
        color: var(--fg-accent-color);
      }
    }
  }
}
</style>

--- File: app/components/02.shared/header-profile-drawer/ui/index.ts ---

import HeaderProfileDrawer from './header-profile-drawer.vue'

export { HeaderProfileDrawer }

--- File: app/components/02.shared/header/index.ts ---

export * from './ui'

--- File: app/components/02.shared/header/ui/dialog/drawing-control.vue ---

<script lang="ts" setup>
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { HanziDrawingBoard } from '~/components/02.shared/hanzi-drawing-board'

const isDialog = defineModel<boolean>({ required: true })

const drawingBoardRef = ref<InstanceType<typeof HanziDrawingBoard> | null>(null)

function clearDrawing() {
  drawingBoardRef.value?.clearCanvas()
}
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-settings"
  >
    <div class="dialog-settings-wrapper">
      <span class="title">Рисовалка</span>

      <HanziDrawingBoard
        ref="drawingBoardRef"
        class="board"
      />

      <VBtn
        color="var(--fg-accent-color)"
        variant="text"
        class="clear-btn"
        rounded
        @click="clearDrawing"
      >
        Очистить
      </VBtn>
    </div>
  </DialogWithClose>
</template>

<style lang="scss" scoped>
.dialog-settings {
  .clear-btn {
    margin-top: 12px;
    width: 100%;
    text-transform: none;
    letter-spacing: 0;
    color: var(--fg-primary-color);

    @include mobile() {
      margin-top: 4px;
    }
  }

  .board {
    width: 100%;
  }

  .title {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--border-secondary-color);
    width: 90%;
    text-align: center;
    padding-bottom: 4px;
    color: var(--fg-primary-color);
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 16px 32px;

    @include mobile() {
      padding: 8px;
    }
  }
}
</style>

--- File: app/components/02.shared/header/ui/dialog/settings-control.vue ---

<script lang="ts" setup>
import type { HieroglyphWordVariant, IHieroglyphWordVariousProps } from '~/components/03.domain/hieroglyph-word'
import type { FontCnVariant } from '~/shared/composables/change-font-cn'
import type { ThemesVariant } from '~/shared/composables/change-theme'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

const isDialog = defineModel<boolean>({ required: false, default: true })
const store = useStore(['hieroglyphWord', 'pinyinText'])
const { setFontCnFamily, fontCn } = useChangeFontCn()
const { setTheme, theme } = useChangeTheme()

// Controllers
const controlledTheme = computed({
  get: () => theme.value,
  set: (value: ThemesVariant) => setTheme(value),
})

const controlledHieroglyphVariant = computed({
  get: () => store.hieroglyphWord.variant,
  set: (value: HieroglyphWordVariant) => store.hieroglyphWord.setVariant(value),
})

const controlledColorPinyin = computed({
  get: () => store.pinyinText.isColored,
  set: (value: boolean) => store.pinyinText.setIsColored(value),
})

const controlledFontCnFamily = computed({
  get: () => fontCn.value,
  set: (value: FontCnVariant) => setFontCnFamily(value),
})

// Preview
const showPreview = ref<boolean>(false)
let timeoutId: (ReturnType<typeof setTimeout>) | null = null

function showPreviewHandler() {
  showPreview.value = true
  if (timeoutId)
    clearTimeout(timeoutId)
}

function hidePreviewHandler() {
  timeoutId = setTimeout(() => {
    showPreview.value = false
  }, 500)
}

const previewProps = computed(() => ({
  glyph: '你好',
  pinyin: {
    pinyin: 'ni hao',
    tone: [{
      index: 1,
      type: 3,
    }, {
      index: 4,
      type: 3,
    }],
  },
  translate: 'Привет',
} as IHieroglyphWordVariousProps))
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-settings"
    :max-width="360"
  >
    <div class="dialog-settings-wrapper">
      <span class="title">Общие настройки</span>

      <div class="group-list">
        <div class="group">
          <div class="group-subtitle">
            Цветовое оформление
          </div>
          <v-btn-toggle
            v-model="controlledTheme"
            variant="text"
            class="group-items"
            color="var(--fg-action-color)"
            density="comfortable"
            mandatory
          >
            <v-btn value="light" class="group-item">
              <Icon size="20" name="line-md:sunny-outline-twotone" />
            </v-btn>
            <v-btn value="dark" class="group-item">
              <Icon size="20" name="line-md:moon-alt-loop" />
            </v-btn>
            <v-btn value="rainy" class="group-item">
              <Icon size="20" name="line-md:cloud-twotone" />
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль отображения иероглифа
          </div>
          <v-btn-toggle
            v-model="controlledHieroglyphVariant"
            density="comfortable"
            variant="text"
            class="group-items"
            color="var(--fg-action-color)"
            mandatory
          >
            <v-btn class="group-item">
              1
            </v-btn>
            <v-btn class="group-item">
              2
            </v-btn>
            <v-btn class="group-item">
              3
            </v-btn>
            <v-btn class="group-item">
              4
            </v-btn>
            <v-btn class="group-item">
              5
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль отображения тона
          </div>
          <v-btn-toggle
            v-model="controlledColorPinyin"
            density="comfortable"
            variant="text"
            mandatory
            class="group-items"
            color="var(--fg-action-color)"
          >
            <v-btn :value="true" class="group-item colorfull">
              цветной
            </v-btn>
            <v-btn :value="false" class="group-item">
              обычный
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль написание иероглифа
          </div>
          <v-btn-toggle
            v-model="controlledFontCnFamily"
            density="comfortable"
            variant="text"
            mandatory
            class="group-items"
            color="var(--fg-action-color)"
          >
            <v-btn :value="FontCnVariant.Brushed" class="group-item cn-draw">
              прописные
            </v-btn>
            <v-btn :value="FontCnVariant.Base" class="group-item">
              печатные
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
    </div>

    <div class="preview" :class="{ 'show-preview': showPreview }">
      <HieroglyphWord
        :glyph="previewProps.glyph"
        :pinyin="previewProps.pinyin"
        :translate="previewProps.translate"
      />
      <div class="preview-bg" />
    </div>
  </DialogWithClose>
</template>

<style lang="scss">
.dialog-settings {
  .preview {
    position: absolute;
    right: -270px;
    top: calc(50% - 110px);
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 16px;
    background-color: var(--bg-tertiary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    @include mobile() {
      display: none;
    }
    &.show-preview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .title {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--border-secondary-color);
    width: 90%;
    text-align: center;
    padding-bottom: 4px;
    color: var(--fg-primary-color);
  }

  .group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-items {
      width: 100%;
      background-color: var(--bg-tertiary-color);
    }
    &-item {
      flex-grow: 1;
      flex-wrap: wrap;
      font-size: 0.9rem;
      letter-spacing: 0;
      font-weight: 400;
      text-decoration: none;
      color: var(--fg-primary-color);
      text-transform: none;

      .v-btn {
        min-width: 40px;
      }
      &.colorfull {
        background: linear-gradient(
          to right,
          var(--fg-tone-0-color) 0%,
          var(--fg-tone-1-color) 20%,
          var(--fg-tone-2-color) 40%,
          var(--fg-tone-3-color) 60%,
          var(--fg-tone-4-color) 80%,
          var(--fg-tone-4-color) 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &.cn-draw {
        font-family: 'Noto Serif SC';
      }
    }

    &-subtitle {
      color: var(--fg-secondary-color);
      font-size: 1rem;
      margin: 2px;

      @include mobile() {
        font-size: 0.9rem;
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;
      margin-top: 4px;
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    min-height: 200px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 16px;
  }
}
</style>

--- File: app/components/02.shared/header/ui/header.vue ---

<script lang="ts" setup>
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import DrawingControl from './dialog/drawing-control.vue'
import SettingsControl from './dialog/settings-control.vue'

const store = useStore(['auth'])

const sentinelEl = ref<HTMLElement>()
const headerEl = ref<HTMLElement>()

const isDialogSettings = ref<boolean>(false)
const isDialogDrawing = ref<boolean>(false)

const isSticky = ref<boolean>(false)

const isMenuDrawer = defineModel<boolean>('menuDrawer', { required: true })
const isProfileDrawer = defineModel<boolean>('profileDrawer', { required: true })

function handleProfile() {
  if (!store.auth.user)
    navigateTo(RoutePaths.Auth.SignIn())
  else
    isProfileDrawer.value = !isProfileDrawer.value
}

onMounted(() => {
  if (sentinelEl.value) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isSticky.value = entry.isIntersecting
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    )

    observer.observe(sentinelEl.value)

    onBeforeUnmount(() => {
      observer.disconnect()
    })
  }
})
</script>

<template>
  <div ref="sentinelEl" class="sentinel" />
  <header
    ref="headerEl"
    class="header"
    :class="{ blurred: !isSticky }"
  >
    <ClientOnly>
      <HaoticLines :viewport-el="headerEl" />
    </ClientOnly>

    <div class="header-content">
      <div class="header-nav">
        <div class="logo">
          <Icon class="logo-icon" name="game-icons:sea-dragon" size="24" />
        </div>
        <VBtn
          icon="mdi-menu"
          variant="text"
          @click="isMenuDrawer = !isMenuDrawer"
        />
      </div>

      <div class="header-utils">
        <VBtn
          icon="mdi-draw"
          variant="text"
          title="Рисовалка"
          @click="isDialogDrawing = !isDialogDrawing"
        />
        <DrawingControl v-model="isDialogDrawing" />

        <VBtn
          icon="mdi-cogs"
          variant="text"
          title="Настройки"
          @click="isDialogSettings = !isDialogSettings"
        />

        <SettingsControl v-model="isDialogSettings" />

        <div class="vr" />

        <div class="profile" @click="handleProfile">
          <NuxtImg
            v-if="!!store.auth.user"
            class="profile-img"
            width="38"
            height="38"
            placeholder="/images/profile-placeholder.png"
            src="/images/profile-placeholder.png"
          />
          <div v-else class="profile-img">
            <Icon
              size="28"
              name="mdi:face-man-profile"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.sentinel {
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  border-bottom: 1px solid var(--border-primary-color);
  height: #{$header-height};
  background-color: rgb(var(--bg-header-color));
  width: 100%;
  overflow: hidden;
  z-index: 100;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;

  &.blurred {
    background-color: rgba(var(--bg-header-color), 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  &-content {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    z-index: 6;
    font-family: 'Rubik';
    padding: 0 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-nav {
    .logo {
      display: inline-flex;
      margin: 0 8px;

      &-title {
        margin-left: 8px;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
      padding: 0 10px;

      li {
        list-style: none;
        text-decoration: none;

        span {
          margin-right: 4px;
        }
      }
    }

    .link {
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      padding: 2px 8px;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      &.actived {
        color: var(--fg-accent-color);
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;

    &-img {
      border-radius: 50%;
      border: 2px solid var(--border-primary-color);
      overflow: hidden;
      cursor: pointer;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: border 0.2s ease-in-out;
      &:hover {
        border: 2px solid var(--border-accent-color);
      }
    }
  }
}

.vr {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  letter-spacing: normal;
  font-weight: 400;
  color: var(--fg-muted-color);
}

.utils-settings {
  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  &-content {
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 100%;
    padding: 8px;

    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 8px;

    button {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      height: 48px;
      border-bottom: 1px solid var(--border-secondary-color);

      svg {
        min-width: 24px;
      }

      &:last-child {
        border: none;
      }

      .hieroglyph-variant {
        position: absolute;
        bottom: 0px;
        right: 0px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--bg-secondary-color);
        border: 1px solid var(--fg-primary-color);
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.095em;
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
    }
  }
}
</style>

--- File: app/components/02.shared/header/ui/index.ts ---

import Header from './header.vue'

export { Header }

--- File: app/components/02.shared/markdown-content/index.ts ---

export * from './ui'

--- File: app/components/02.shared/markdown-content/lib/create-markdown-renderer.ts ---

import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItCollapsible from 'markdown-it-collapsible'
import MarkdownItContainer from 'markdown-it-container'

interface WikiImageOptions {
  baseURL?: string
  defaultAlt?: string
}

export function markdownItWikiImages(md: MarkdownIt, options: WikiImageOptions = {}) {
  const {
    baseURL = '',
    defaultAlt = '',
  } = options

  md.inline.ruler.before('emphasis', 'wiki_image', (state, silent) => {
    const pos = state.pos
    const max = state.posMax
    const ch = state.src.charCodeAt(pos)

    if (ch !== 0x21/* ! */)
      return false
    if (state.src.charCodeAt(pos + 1) !== 0x5B/* [ */)
      return false
    if (state.src.charCodeAt(pos + 2) !== 0x5B/* [ */)
      return false

    let end = pos + 3
    while (end < max && state.src.charCodeAt(end) !== 0x5D/* ] */) {
      end++
    }
    if (end >= max)
      return false
    if (state.src.charCodeAt(end + 1) !== 0x5D/* ] */)
      return false

    if (silent)
      return true

    const filename = state.src.slice(pos + 3, end).trim()
    const imgSrc = `${baseURL}${filename}`

    const token = state.push('html_inline', '', 0)
    token.content = `<img src="${imgSrc}" alt="${defaultAlt}" />`

    state.pos = end + 2

    return true
  })
}

interface CreateMarkdownRendererParams {
  imageBasePath?: string
}

export function createMarkdownRenderer(params: CreateMarkdownRendererParams) {
  const { imageBasePath = '/personal/img/' } = params

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })

  md
    .use(markdownItWikiImages, {
      baseURL: imageBasePath,
      defaultAlt: '',
    })
    .use(MarkdownItAttrs)
    .use(MarkdownItCollapsible)
    .use(MarkdownItContainer)

  return md
}

--- File: app/components/02.shared/markdown-content/lib/index.ts ---

export * from './create-markdown-renderer'

--- File: app/components/02.shared/markdown-content/ui/index.ts ---

import MarkdownContent from './markdown-content.vue'

export { MarkdownContent }

--- File: app/components/02.shared/markdown-content/ui/markdown-content.vue ---

<script setup lang="ts">
import { createMarkdownRenderer } from '../lib'

interface Props {
  content: string
  imageBasePath?: string
}

const props = defineProps<Props>()
const renderedContent = ref<string>('')
const md = createMarkdownRenderer({ imageBasePath: props.imageBasePath })

watch(
  () => props.content,
  (newContent) => {
    renderedContent.value = md.render(newContent || '')
  },
  { immediate: true },
)
</script>

<template>
  <div class="markdown-body" v-html="renderedContent" />
</template>

<style lang="scss">
.markdown-body {
  padding: 0;
  background-color: transparent;
  color: var(--fg-primary-color);

  em {
    color: var(--fg-accent-color);
  }

  ul {
    list-style-type: disc;

    ::marker {
      color: var(--bg-overlay-secondary-color);
    }
  }

  pre {
    background: var(--bg-tertiary-color);
    color: var(--fg-primary-color);
    font-style: italic;
    padding-left: 16px;
    margin-top: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
    border-radius: 4px;

    code {
      white-space: wrap;
      word-wrap: break-word;
      line-height: normal;
      display: flex;
      padding: 8px 0;
    }
  }

  blockquote {
    border-left: 2px solid var(--border-accent-color);

    ol {
      margin-left: 32px;
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
    }
  }

  details {
    p {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(370px, 2fr));
      gap: 10px;

      br {
        display: none;
      }

      img {
        object-fit: cover;
        max-width: 600px;
        min-height: 200px;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
      }

      @include mobile() {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}

:root {
  --line-height-tight: 1;
  --callout-border-width: 0px;
  --callout-border-opacity: 0.25;
  --callout-padding: 6px 6px 6px 12px;
  --callout-radius: 4px;
  --callout-title-color: inherit;
  --callout-title-padding: 0;
  --callout-title-size: inherit;
  --callout-title-weight: 500;
  --callout-content-padding: 0;
  --callout-content-background: transparent;
  --callout-blend-mode: var(darken);
  --callout-info: 8, 109, 221;
  --callout-todo: 8, 109, 221;
  --callout-default: 8, 109, 221;
  --callout-bug: 233, 49, 71;
  --callout-error: 233, 49, 71;
  --callout-fail: 233, 49, 71;
  --callout-success: 8, 185, 78;
  --callout-example: 120, 82, 238;
  --callout-important: 0, 191, 188;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-question: 236, 117, 0;
  --callout-warning: 236, 117, 0;
  --callout-quote: 158, 158, 158;
  --callout-collapse-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTkgMThsNi02bC02LTYiLz48L3N2Zz4=');
}

.theme-light {
  --callout-blend-mode: var(darken);
}

.theme-dark {
  --callout-blend-mode: var(lighten);
}

html[data-theme='light'] #app {
  --callout-blend-mode: var(darken);
}

html[data-theme='dark'] #app {
  --callout-blend-mode: var(lighten);
}

/**
 * Obsidian callout about
 *
 * The following style is exactly the same as in obsidian
 */
.callout {
  overflow: hidden;
  border-style: solid;
  border-color: rgba(var(--callout-color), var(--callout-border-opacity));
  border-width: var(--callout-border-width);
  border-radius: var(--callout-radius);
  margin-bottom: 16px;
  mix-blend-mode: var(--callout-blend-mode);
  background-color: rgba(var(--callout-color), 0.1);
  padding: var(--callout-padding);
  --callout-color: var(--callout-default);
  --callout-icon: lucide-pencil;
}

.callout .callout-title {
  padding: var(--callout-title-padding);
  display: flex;
  justify-content: space-between;
  gap: 4px;
  font-size: var(--callout-title-size);
  color: rgb(var(--callout-color));
  line-height: var(--line-height-tight);
  align-items: center;
}

details.callout .callout-title {
  margin: 0;
  cursor: pointer;
  font-size: 0.85rem;
}

.callout .callout-title .callout-title-icon {
  display: none;
}

.callout .callout-title .callout-title-inner {
  --font-weight: var(--callout-title-weight);
  font-weight: var(--font-weight);
  color: var(--callout-title-color);
}

.callout .callout-title .callout-fold {
  background-color: rgb(var(--callout-color));
  mask-image: var(--callout-collapse-icon);
  mask-size: 100%;
  -webkit-mask-image: var(--callout-collapse-icon);
  -webkit-mask-size: 100%;
  height: 24px;
  width: 24px;
  transition: 100ms ease-in-out;
}

details[close].callout > .callout-title > .callout-fold {
  transform: rotate(-90deg);
}

details[open].callout > .callout-title > .callout-fold {
  transform: rotate(90deg);
}

.callout .callout-content {
  overflow-x: auto;
  padding: var(--callout-content-padding);
  background-color: var(--callout-content-background);
}

.callout[data-callout='todo'] {
  --callout-color: var(--callout-todo);
  --callout-icon: lucide-check-circle-2;
}

.callout[data-callout='success'],
.callout[data-callout='check'],
.callout[data-callout='done'] {
  --callout-color: var(--callout-success);
  --callout-icon: lucide-check;
}

.callout[data-callout='warning'],
.callout[data-callout='caution'],
.callout[data-callout='attention'] {
  --callout-color: var(--callout-warning);
  --callout-icon: lucide-alert-triangle;
}

.callout[data-callout='danger'],
.callout[data-callout='error'] {
  --callout-color: var(--callout-error);
  --callout-icon: lucide-zap;
}

.callout[data-callout='tip'],
.callout[data-callout='hint'] {
  --callout-color: var(--callout-tip);
  --callout-icon: lucide-flame;
}

.callout[data-callout='example'] {
  --callout-color: var(--callout-example);
  --callout-icon: lucide-list;
}

.callout[data-callout='abstract'],
.callout[data-callout='summary'],
.callout[data-callout='tldr'] {
  --callout-color: var(--callout-summary);
  --callout-icon: lucide-clipboard-list;
}

.callout[data-callout='quote'],
.callout[data-callout='cite'] {
  --callout-color: var(--callout-quote);
  --callout-icon: quote-glyph;
}
</style>

--- File: app/components/02.shared/page-loader/index.ts ---

export * from './ui'

--- File: app/components/02.shared/page-loader/ui/index.ts ---

import PageLoader from './page-loader.vue'

export { PageLoader }

--- File: app/components/02.shared/page-loader/ui/page-loader.vue ---

<script lang="ts" setup>

</script>

<template>
  <div class="loader">
    <Icon name="line-md:loading-loop" />
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
  font-size: 4rem;
  color: var(--fg-accent-color);
}
</style>

--- File: app/components/03.domain/haotic-lines/index.ts ---

// Public API

// Import
import HaoticLines from './ui/wrapper.vue'

// Export
export { HaoticLines }

--- File: app/components/03.domain/haotic-lines/ui/index.vue ---

<script lang="ts" setup>
import type { P5I } from 'p5i'
import { useDebounceFn } from '@vueuse/core'
import { p5i } from 'p5i'

interface Props {
  width?: number
  height?: number
  scaleFactor?: number
  pointsCounts?: number
  speed?: number
  weightStroke?: number
  color?: string
  cap?: boolean
  viewportEl?: HTMLElement | null
}

const props = withDefaults(defineProps<Props>(), {
  width: 0,
  height: 0,
  scaleFactor: 1.1,
  pointsCounts: 8,
  speed: 1.5,
  weightStroke: 10,
  color: '--bg-accent-overlay-color',
  cap: true,
  viewportEl: null,
})

const haoticLineEl = ref<HTMLElement | null>(null)
const haoticLineCanvas = ref<P5I | null>(null)
const viewport = computed(() => ({
  width: props.viewportEl?.offsetWidth || props.width,
  height: props.viewportEl?.offsetHeight || props.height,
}))

const points = ref<{ x: number, y: number, dx: number, dy: number }[]>([])

function createHaoticLines(el: HTMLElement) {
  const sketch = p5i(() => {
    const {
      speed,
      pointsCounts,
      scaleFactor,
      weightStroke,
      color,
    } = props

    const {
      width: widthEl,
      height: heightEl,
    } = viewport.value

    return {
      setup({ createCanvas, random, WEBGL }) {
        const canvas = createCanvas(widthEl, heightEl, WEBGL)
        canvas.parent(el)

        const step = (widthEl * 1) / (pointsCounts - 1)

        const scalefactorX = scaleFactor * Math.max(heightEl / widthEl, 1)
        const scalefactorY = scaleFactor * Math.max(widthEl / heightEl, 1)

        points.value = []

        for (let i = 0; i < pointsCounts; i++) {
          points.value.push({
            x: i * step - (widthEl * scalefactorX) / 2,
            y: random(-(heightEl / 2) * scalefactorY, (heightEl / 2) * scalefactorY),
            dx: random(-speed, speed),
            dy: random(-speed, speed),
          })
        }
      },
      draw({
        background,
        beginShape,
        vertex,
        endShape,
        width,
        height,
        CLOSE,
        dist,
        ellipse,
        noFill,
        stroke,
        strokeWeight,
      }: P5I) {
        background(0, 0)
        strokeWeight(weightStroke)
        stroke(getComputedStyle(document.documentElement).getPropertyValue(color))
        noFill()

        beginShape()
        for (const point of points.value) {
          vertex(point.x, point.y)
          point.x += point.dx
          point.y += point.dy

          if (point.x < -width / 2 || point.x > width / 2) {
            point.dx = -point.dx
          }
          if (point.y < -height / 2 || point.y > height / 2) {
            point.dy = -point.dy
          }
        }
        endShape(props.cap ? CLOSE : undefined)

        checkIntersection()

        function checkIntersection() {
          for (let i = 0; i < points.value.length; i++) {
            for (let j = i + 1; j < points.value.length; j++) {
              if (dist(points.value[i].x, points.value[i].y, points.value[j].x, points.value[j].y) < 10) {
                ellipse(points.value[i].x, points.value[i].y, 10, 10)
              }
            }
          }
        }
      },
      windowResized({ resizeCanvas }) {
        const { width: widthEl, height: heightEl } = viewport.value
        resizeCanvas(widthEl, heightEl)
      },
    }
  })
  sketch.mount(el)
  return sketch
}

async function createSketchs() {
  if (!haoticLineEl.value) {
    return
  }
  await nextTick()
  if (haoticLineCanvas.value) {
    try {
      haoticLineCanvas.value.remove()
    }
    catch (error) {
      console.warn('Error removing canvas:', error)
    }
  }

  try {
    haoticLineCanvas.value = createHaoticLines(haoticLineEl.value)
  }
  catch (error) {
    console.error('Error creating sketch:', error)
  }
}

const debouncedResizeListener = useDebounceFn(createSketchs, 250)

onMounted(() => {
  createSketchs()
  window.addEventListener('resize', debouncedResizeListener)
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedResizeListener)
  if (haoticLineCanvas.value) {
    try {
      haoticLineCanvas.value.remove()
    }
    catch (error) {
      console.warn('Error removing canvas on unmount:', error)
    }
  }
})

watch(viewport, () => {
  createSketchs()
}, { deep: true })

watch(props, () => {
  createSketchs()
}, { deep: true })
</script>

<template>
  <div
    ref="haoticLineEl"
    class="haotic-line"
  />
</template>

<style lang="scss" scoped>
.haotic-line {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(30px);
  z-index: 5;
}
</style>

--- File: app/components/03.domain/haotic-lines/ui/wrapper.vue ---

<script lang="ts" setup>
import HaoticLines from './index.vue'

interface Props {
  width?: number
  height?: number
  scaleFactor?: number
  pointsCounts?: number
  speed?: number
  weightStroke?: number
  color?: string
  cap?: boolean
  viewportEl?: HTMLElement | null
}

// eslint-disable-next-line unused-imports/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  width: 0,
  height: 0,
  scaleFactor: 1.1,
  pointsCounts: 8,
  speed: 1.5,
  weightStroke: 10,
  color: '--bg-accent-overlay-color',
  cap: true,
  viewportEl: null,
})

const isShowed = ref<boolean>(false)
</script>

<template>
  <HaoticLines
    v-if="isShowed"
    :="props"
  />
</template>

<style lang="scss" scoped>

</style>

--- File: app/components/03.domain/hieroglyph-word/index.ts ---

// Public API

// Import
import { useHieroglyphWordStore } from './store'
import { HieroglyphWord } from './ui'

// Export
export * from './types'
export { HieroglyphWord, useHieroglyphWordStore }

--- File: app/components/03.domain/hieroglyph-word/store/index.ts ---

import type {
  HieroglyphWordVariant,
  IHieroglyphWordState,
} from '~/components/03.domain/hieroglyph-word/types'

export const useHieroglyphWordStore = defineStore('hieroglyphWord', {
  state: (): IHieroglyphWordState => ({
    variant: Number(useCookie(HIEROGLYPH_WORD_VARIANT).value || '0') as HieroglyphWordVariant,
  }),

  actions: {
    setVariant(value: HieroglyphWordVariant) {
      useCookie(HIEROGLYPH_WORD_VARIANT, { sameSite: true }).value = `${value}`
      this.variant = value
    },
  },
})

//* --- Utils ----------------------------------------------- *//

--- File: app/components/03.domain/hieroglyph-word/types/index.ts ---

import type { HieroglyphWordVariant } from './props'

interface IHieroglyphWordState {
  variant: HieroglyphWordVariant
}

export * from './props'
export type {
  IHieroglyphWordState,
}

--- File: app/components/03.domain/hieroglyph-word/types/props.ts ---

import type { PinyinTextProps } from '~/components/03.domain/pinyin-text'

type HieroglyphWordVariant = 0 | 1 | 2 | 3 | 4 | 5

interface IHieroglyphWordVariousProps {
  variant?: HieroglyphWordVariant
  pinyin?: PinyinTextProps
  translate?: string
  glyph: string
}

export type {
  HieroglyphWordVariant,
  IHieroglyphWordVariousProps,
}

--- File: app/components/03.domain/hieroglyph-word/ui/index.scss ---

.variant-0 {
  display: inline-flex;
}
.variant-1 {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.variant-2 {
  display: inline-flex;
  align-items: center;
  gap: 12px;

  .hw-pinyin {
    display: flex;
  }
}
.variant-3 {
  display: flex;
  align-items: center;
  margin: 0 5px;
  gap: 12px;
}
.variant-4 {
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  padding-left: 0px !important;
  border: 1px solid var(--border-accent-color);
  gap: 0px;

  &.hw-none-pinyin,
  &.hw-none-translate {
    border: none;
  }

  .hw-pinyin {
    text-align: center;
    padding: 4px 12px;
    font-size: 1rem;
  }

  .hw-glyph {
    font-size: 1.3rem;
    text-align: center;
    border-radius: 0px;
    border: none;
    border-top: 1px solid var(--border-accent-color);
    border-bottom: 1px solid var(--border-accent-color);
    box-shadow: none;
  }

  .hw-translate {
    text-align: center;
    padding: 4px 12px;
    line-height: 30px;
    font-size: 0.9rem;
  }
}
.variant-5 {
  display: inline-flex;

  .hw-glyph {
    font-size: 2.1rem;
    line-height: 64px;
    border-radius: 10px;
    min-width: 64px;
    min-height: 64px;
    text-align: center;
    padding: 0 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
  }
  .hw-pinyin-translate {
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;

    .hw-pinyin {
      padding: 2px;
      padding-bottom: 4px;
    }
    .hw-translate {
      padding: 2px;
      border-top: 2px dashed var(--border-secondary-color);
      font-weight: 500;
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      min-width: 0;
    }
  }
}

.hw-word {
  font-size: 1rem;
  margin: 4px 0;
  margin-right: 8px;
  display: inline-flex;
}
.hw-pinyin {
  color: var(--fg-secondary-color);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
  font-family: var(--font-family-cn);
  font-weight: 500;
}
.hw-glyph {
  letter-spacing: 2px;
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 5px;
  background: var(--bg-accent-color);
  box-shadow: inset 0 0 2px var(--border-accent-color);
  color: var(--fg-primary-color);
  font-family: var(--font-family-cn);
}
.hw-translate {
  color: var(--fg-primary-color);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
}
.hw-tooltip {
  .v-overlay__content {
    padding: 0;
  }
}
.hw-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  pointer-events: auto;
  padding: 4px 16px;

  &-pinyin {
    color: var(--fg-secondary-color);
    font-weight: 1rem;
    font-family: var(--font-family-cn);
    font-weight: 500;
  }
  &-translate {
    color: var(--fg-primary-color);
    line-height: 32px;
    font-weight: 1rem;
    font-family: 'Rubik';
  }
  &-hr {
    margin: 0;
    border: 1px dashed var(--border-primary-color);
    width: 100%;
    margin: 2px 0;
  }
}

.hw-snackbar {
  text-align: center;
  color: var(--fg-accent-color);
  z-index: 9999;
}

.block {
  display: flex;
  width: auto;
  flex-wrap: wrap;
}

--- File: app/components/03.domain/iframe-viewer/index.ts ---

// Public API

// Import
import IframeViewer from './ui/index.vue'

// Export
export { IframeViewer }

--- File: app/components/03.domain/iframe-viewer/ui/index.vue ---

<script lang="ts" setup>
import { HaoticLines } from '~/components/03.domain/haotic-lines'

interface Props {
  src: string
}

defineProps<Props>()

const dialog = defineModel<boolean>()

const contentEl = ref<HTMLElement>()
</script>

<template>
  <div
    v-if="dialog"
    ref="contentEl"
    class="iframe-viewer"
  >
    <div class="content">
      <iframe :src.prop="src" />

      <VBtn
        icon
        variant="text"
        class="close"
        @click="dialog = false"
      >
        <Icon size="24" name="mdi:close" />
      </VBtn>
    </div>

    <HaoticLines
      v-if="dialog"
      :speed="2"
      :weight-stroke="100"
      :points-counts="20"
      :cap="false"
      :viewport-el="contentEl"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.haotic-line) {
  filter: blur(100px);
}

.iframe-viewer {
  z-index: 3000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;

  .content {
    z-index: 3001;
    position: relative;
    height: calc(100% - 14px);
    width: calc(100% - 14px);
    max-width: 1400px;
    margin: 7px;

    iframe {
      border-radius: 16px;
      box-shadow: 0 0 5px var(--bg-overlay-primary-color);
      border: 3px solid var(--border-accent-color);
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: var(--bg-tertiary-color);
    }

    .close {
      position: absolute;
      right: -6px;
      top: -6px;
      width: 32px;
      height: 32px;
      background-color: var(--bg-tertiary-color);
      border: 2px solid var(--border-accent-color);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

--- File: app/components/03.domain/json-to-dom/index.ts ---

// Public API

// Import
import type { JsonToDomChildren, JsonToDomTags } from './types'
import JsonToDom from './ui/json-to-dom.vue'

// Export
export { JsonToDom }
export type { JsonToDomChildren, JsonToDomTags }

--- File: app/components/03.domain/json-to-dom/types/index.ts ---

type NativeTags = 'div' | 'h2' | 'p' | 'ul' | 'li' | 'em' | 'span'
type CustomTags = 'HieroglyphWord' | 'PinyinText'

export type JsonToDomTags = NativeTags | CustomTags

export interface JsonToDomChildren {
  tag: any
  children?: string | JsonToDomChildren | JsonToDomChildren[]
  class?: string
  props?: Record<string, unknown>
}

--- File: app/components/03.domain/json-to-dom/ui/index.ts ---

import type { JsonToDomChildren, JsonToDomTags } from '~/components/03.domain/json-to-dom/types'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { PinyinText } from '~/components/03.domain/pinyin-text'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  HieroglyphWord,
  PinyinText,
}

function getIsComponent(tag: JsonToDomTags) {
  return components[tag] || tag
}

const JsonToDom = defineComponent({
  name: 'JsonToDom',
  props: {
    node: {
      type: Object as PropType<JsonToDomChildren>,
      required: true,
    },
    // TODO variants
  },
  setup(props) {
    useRender(() => {
      const { node } = props

      return h(
        getIsComponent(node.tag),
        {
          class: node.class,
          ...node.props,
        },
        Array.isArray(node.children)
          ? node.children.map((child, index) => h(JsonToDom, { key: index, node: child }))
          : node.children,
      )
    })
  },
})

export { JsonToDom }

--- File: app/components/03.domain/json-to-dom/ui/json-to-dom.vue ---

<script setup lang="ts">
import type { JsonToDomChildren, JsonToDomTags } from '~/components/03.domain/json-to-dom'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { PinyinText } from '~/components/03.domain/pinyin-text'

defineProps<{ node: JsonToDomChildren }>()

const components: Record<string, Component> = {
  HieroglyphWord,
  PinyinText,
}

function getIsComponent(tag: JsonToDomTags): Component | string {
  if (components[tag]) {
    return components[tag]
  }
  else {
    return tag
  }
}
</script>

<template>
  <component
    :is="getIsComponent(node.tag)"
    :class="node.class"
    v-bind="node.props"
  >
    <template v-if="Array.isArray(node.children)">
      <JsonToDom
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      />
    </template>
    <template v-else>
      {{ node.children }}
    </template>
  </component>
</template>

--- File: app/components/03.domain/pinyin-text/index.ts ---

/* eslint-disable perfectionist/sort-exports */
// Public API

// Import
import { usePinyinTextStore } from './store'
import PinyinText from './ui/index.vue'

// Export
export type * from './types'
export { PinyinText, usePinyinTextStore }
export * from './lib'

--- File: app/components/03.domain/pinyin-text/lib/index.ts ---

export * from './parse-pinyin'

--- File: app/components/03.domain/pinyin-text/lib/parse-pinyin.ts ---

interface PinyinSyllable {
  syllable: string
  tone: ToneType
  position: number
}

/**
 * Преобразует строку пиньиня с цифровыми тонами в массив объектов
 * @param pinyinString - строка пиньиня в формате "da3 dia4n hua4"
 * @returns массив объектов, представляющих слоги с тоном и позицией
 */
function parseStringPinyin(pinyinString: string): PinyinSyllable[] {
  const result: PinyinSyllable[] = []

  const words = pinyinString.trim().split(' ')

  for (const word of words) {
    const toneMatch = word.match(/([1-5])/)

    if (toneMatch) {
      const tone = Number.parseInt(toneMatch[0], 10) as ToneType
      const position = word.indexOf(toneMatch[0]) - 1
      const syllable = word.replace(/[1-5]/, '')

      result.push({
        syllable,
        tone,
        position,
      })
    }
    else {
      result.push({
        syllable: word,
        tone: 5 as ToneType,
        position: 0,
      })
    }
  }

  return result
}

export { parseStringPinyin }

--- File: app/components/03.domain/pinyin-text/store/index.ts ---

//* --- Store ----------------------------------------------- *//
interface IPinyinTextState {
  isColored: boolean
}

export const usePinyinTextStore = defineStore('pinyinText', {
  state: (): IPinyinTextState => ({
    isColored: Boolean(useCookie(PINYIN_COLORED).value || 'true'),
  }),

  actions: {
    setIsColored(value: boolean) {
      useCookie(PINYIN_COLORED, { sameSite: true }).value = `${value}`
      this.isColored = value
    },
  },
})

//* --- Utils ----------------------------------------------- *//

--- File: app/components/03.domain/pinyin-text/types/index.ts ---

export * from './props'

--- File: app/components/03.domain/pinyin-text/types/props.ts ---

interface PinyinTextTone {
  index: number
  type: ToneType
}

interface PinyinTextProps {
  pinyin: string
  tone: PinyinTextTone[] | PinyinTextTone
  colored?: boolean | null
}

export type {
  PinyinTextProps,
  PinyinTextTone,
}

--- File: app/components/03.domain/pinyin-text/ui/index.vue ---

<script lang="ts" setup>
import type { PinyinTextProps } from '~/components/03.domain/pinyin-text/types'
import { usePinyinTextStore } from '~/components/03.domain/pinyin-text/store'

const props = withDefaults(defineProps<PinyinTextProps>(), {
  colored: null,
})

const store = usePinyinTextStore()

const isColored = computed(() => props.colored ?? store.isColored)
const tones = computed(() => Array.isArray(props.tone) ? props.tone : [props.tone])
const splitPinyin = computed(() => {
  const pinyin = props.pinyin.replaceAll(' ', '⠀')
  const parts: string[] = []
  let lastIndex = 0

  tones.value.forEach((tone) => {
    parts.push(
      pinyin.slice(lastIndex, tone.index),
      pinyin[tone.index],
    )
    lastIndex = tone.index + 1
  })

  parts.push(pinyin.slice(lastIndex))

  return parts
})

function color(toneType: ToneType) {
  return isColored.value
    ? `var(--fg-tone-${toneType}-color)`
    : ''
}
function isTone(index: number) {
  return index % 2
}
function getTone(index: number) {
  return tones.value[Math.floor(index / 2)]
}
</script>

<template>
  <span :key="`${isColored}`" class="pinyin">
    <span
      v-for="(part, index) in splitPinyin"
      :key="index"
      class="pinyin-part"
      :class="{ tone: isTone(index) }"
      :style="{ color: isTone(index) ? color(getTone(index).type) : '' }"
    >
      {{ part }}
      <span
        v-if="isTone(index)"
        class="pinyin-tone"
      >
        {{ pinyinTone[getTone(index).type] }}
      </span>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.pinyin {
  display: inline-flex;
  justify-content: center;

  &-part {
    &.tone {
      position: relative;
    }
  }
  &-tone {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 100%;
    width: 100%;
    font-weight: 600;
    font-family: var(--font-family-cn);
    font-size: inherit;
  }
}
</style>

--- File: app/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs/index.ts ---

import ThematicDictionaryBreadcrumbs from './ui/breadcrumbs.vue'

export { ThematicDictionaryBreadcrumbs }

--- File: app/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs/ui/breadcrumbs.vue ---

<script lang="ts" setup>
interface Props {
  items: {
    title: string
    to: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <VBreadcrumbs
    class="breadcrumbs"
    :items="items"
    color="var(--fg-secondary-color)"
  >
    <template #item="{ item }">
      <VBreadcrumbsItem
        :to="item.to"
        :title="item.title"
      />
    </template>
  </VBreadcrumbs>
</template>

<style scoped lang="scss">
.breadcrumbs {
  padding: 8px 0;
  font-size: 0.8rem;
}
</style>

--- File: app/components/03.domain/thematic-dictionary/thematic-dictionary-card/index.ts ---

import ThematicDictionaryCard from './ui/card.vue'

export { ThematicDictionaryCard }

--- File: app/components/03.domain/thematic-dictionary/thematic-dictionary-card/ui/card.vue ---

<script lang="ts" setup>
interface Props {
  sysname: string
  glyph: string
  name: string
  navigateUrl: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div
      class="card-content"
      @click="navigateTo(navigateUrl)"
    >
      <div class="glyph">
        {{ glyph }}
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  --tw-gradient-from: var(--bg-overlay-primary-color);
  --tw-gradient-to: var(--bg-secondary-color);
  --tw-gradient-via-position: 50%;
  --tw-gradient-to-position: 100%;
  --tw-gradient-stops:
    var(--tw-gradient-from), var(--tw-gradient-to) var(--tw-gradient-via-position),
    var(--tw-gradient-to) var(--tw-gradient-to-position);
  background: linear-gradient(to right, var(--tw-gradient-stops));

  border-radius: 6px;
  border: 1px solid var(--border-secondary-color);
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid var(--border-accent-color);
    .glyph {
      color: var(--fg-accent-color);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    border-radius: inherit;
    cursor: pointer;

    .glyph {
      @include default-font();
      flex-shrink: 0;
      width: 10%;
      text-align: center;
      font-weight: 400;
      border-radius: 5px;
      font-size: 1.2rem;
      color: var(--fg-secondary-color);
      font-family: var(--font-family-cn);
      line-height: normal;
    }

    .name {
      @include default-font();
      font-weight: 500;
      font-size: 0.9rem;
      width: 90%;
      text-align: center;
    }
  }
}
</style>

--- File: app/components/05.modules/glossary-sysname-lab/index.ts ---

export * from './ui'

--- File: app/components/05.modules/glossary-sysname-lab/ui/glossary-sysname-lab-content.vue ---

<script lang="ts" setup>
import { mockTestQuestion } from '~/../server/utils/mock/quiz'
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import LabSettings from './sections/lab-settings.vue'
import LabTest from './sections/lab-test.vue'

const isTestActive = ref<boolean>(false)
const isFullscreen = ref<boolean>(false)
const contentEl = ref<HTMLElement>()

function handleStartTest() {
  isTestActive.value = true
}

onMounted(() => {
  // console.log('>', contentEl.value?.offsetWidth)
})
</script>

<template>
  <LabSettings
    v-if="isTestActive"
    @start-test="handleStartTest"
  />
  <LabTest
    v-else-if="!isFullscreen"
    v-model:fullscreen="isFullscreen"
    :test="mockTestQuestion"
  />

  <ClientOnly>
    <v-dialog
      v-model="isFullscreen"
      class="dialog"
      persistent
    >
      <div
        ref="contentEl"
        class="dialog-content"
      >
        <LabTest
          v-model:fullscreen="isFullscreen"
          class="fullscreen"
          :test="mockTestQuestion"
        />
        <HaoticLines
          v-if="isFullscreen"
          :speed="2"
          :weight-stroke="50"
          :points-counts="10"
          :cap="false"
          :viewport-el="contentEl"
          color="--bg-overlay-secondary-color"
        />
      </div>
    </v-dialog>
  </ClientOnly>
</template>

<style scoped lang="scss">
:deep(.haotic-line) {
  filter: blur(100px);
  z-index: 1;
}

:deep() {
  .word {
    &.variant-4 {
      padding-left: 0px !important;
      border: none;
      border-left: 3px dashed var(--border-accent-color);
      border-right: 3px dashed var(--border-accent-color);
      border-radius: 0;
      width: 100%;
    }
  }
}

.lab {
  width: 100%;
  margin-top: 32px;
}

.dialog {
  max-width: 1000px;
  max-height: 1000px;

  :deep() {
    .v-overlay__content {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
      margin: 0;
    }
    .v-overlay__scrim {
      background-color: var(--bg-inverted-color);
      opacity: 0.5 !important;
    }
    .v-overlay__content {
      max-height: 1000px;
      height: 100%;
      border-radius: 0 !important;
    }
  }

  &-wrapper {
    width: 100%;
    height: 100%;
  }
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    width: 100%;
    height: 100%;
    gap: 12px;
  }
}
</style>

--- File: app/components/05.modules/glossary-sysname-lab/ui/index.ts ---

import GlossarySysnameLabContent from './glossary-sysname-lab-content.vue'

export { GlossarySysnameLabContent }

--- File: app/components/05.modules/glossary-sysname-lab/ui/sections/lab-settings.vue ---

<script lang="ts" setup>
const emits = defineEmits<{ startTest: [void] }>()
</script>

<template>
  <div class="lab-settings">
    <span class="lab-settings-header">Содержание теста</span>
    <div class="lab-settings-list">
      <div class="lab-settings-item">
        <p>Варианты ответов:</p>
        <div>
          <v-checkbox
            color="var(--fg-accent-color)"
            label="Единичный"
            hide-details
            density="comfortable"
          />
          <v-checkbox
            color="var(--fg-accent-color)"
            label="Множественный"
            hide-details
            density="comfortable"
          />
        </div>
      </div>
    </div>
    <div class="lab-settings-start">
      <VBtn
        variant="tonal"
        class="pinyin-btn"
        rounded="sm"
        @click="emits('startTest')"
      >
        Начать тест
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lab-settings {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 340px;

  &-header {
    text-align: center;
    margin: 12px;
    font-size: 1.2rem;
  }
  &-list {
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    padding: 12px;
  }
  &-start {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-btn {
      background-color: var(--bg-accent-color);
      border: 1px solid var(--border-button-secondary-color);
      text-transform: none;
    }
  }
}
</style>

--- File: app/components/05.modules/glossary-sysname-lab/ui/sections/lab-test.vue ---

<script lang="ts" setup>
import type { IAnswer } from '~/shared/types'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

interface IProps {
  test: any
}

const props = defineProps<IProps>()

const isFullscreen = defineModel<boolean>('fullscreen', { required: true, default: false })

const isAnswered = ref<boolean>(false)
const selectedAnswered = ref<IAnswer | null>(null)

const correctAnswer = computed(() => props.test.correct[0])

function controlledAnswerStyled(answer: IAnswer) {
  const selectedAnswerValue = selectedAnswered.value?.key

  if (!isAnswered.value) {
    return {
      selected: selectedAnswerValue === answer.key,
    }
  }

  const answerCorrect = props.test.correct[0].key

  return {
    correct: selectedAnswerValue === answer.key && answerCorrect === selectedAnswerValue,
    uncorrect: selectedAnswerValue === answer.key && answerCorrect !== selectedAnswerValue,
  }
}

function handleSelectAnswer(answer: IAnswer) {
  selectedAnswered.value = answer
}

function handleSubmitAnswer() {
  isAnswered.value = true
}

function handleNextAnswer() {
  isAnswered.value = false
  selectedAnswered.value = null
}
</script>

<template>
  <div class="lab-test">
    <div class="lab-test-content">
      <div class="question">
        <p class="question-title">
          {{ test.question }}
        </p>
        <hr class="question-divider">
      </div>
      <div class="answer-list">
        <VBtn
          v-for="(answer, key) in test.answers"
          :key="key"
          variant="text"
          class="answer"
          :disabled="isAnswered"
          :class="controlledAnswerStyled(answer)"
          @click="handleSelectAnswer(answer)"
        >
          {{ answer.value }}
        </VBtn>
      </div>

      <div v-if="isAnswered" class="answer-description">
        <hr class="answer-description-divider">
        <div class="answer-description-content">
          <div class="answer-description-header">
            Правильный ответ:
          </div>
          <div>
            <HieroglyphWord
              :="correctAnswer.meta.hieroglyph"
              :variant="$vuetify.display.mobile ? 4 : 5"
            />
            <div class="answer-description-hint">
              {{ correctAnswer.meta.description }}
            </div>
          </div>
        </div>
      </div>

      <div class="check">
        <div class="check-option left">
          <!-- <VTooltip
            text="Настройки теста"
          >
            <template #activator="{ props }">
              <Icon
                v-bind="props"
                class="check-option-item"
                name="mdi:settings-box"
                size="32"
                @click="isFullscreen = !isFullscreen"
              />
            </template>
          </VTooltip> -->
        </div>

        <VBtn
          v-if="!isAnswered"
          class="check-btn"
          rounded
          variant="tonal"
          @click="handleSubmitAnswer"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="check-btn"
          rounded
          variant="tonal"
          @click="handleNextAnswer"
        >
          Следующий вопрос
        </VBtn>

        <div class="check-option right">
          <VTooltip
            text="На весь экран"
          >
            <template #activator="{ props: templateProps }">
              <Icon
                v-bind="templateProps"
                class="check-option-item check-fullscreen"
                name="mdi:fullscreen"
                size="32"
                @click="isFullscreen = !isFullscreen"
              />
            </template>
          </VTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Переопределенние стилей для лучшего отображения
:deep() {
  .word {
    &.variant-4 {
      padding-left: 0px !important;
      border: none;
      border-left: 3px dashed var(--border-accent-color);
      border-right: 3px dashed var(--border-accent-color);
      border-radius: 0;
      width: 100%;
    }
  }
}

.lab-test {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-content {
    width: 100%;
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    padding: 16px;

    .question {
      &-title {
        display: flex;
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;

        @include mobile() {
          font-size: 1.1rem;
        }
      }
      &-divider {
        margin-top: 8px;
        border: 1px solid var(--border-secondary-color);
      }
    }

    .answer-list {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 32px;

      @include mobile() {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }
    }

    .answer {
      min-width: 80px;
      min-height: 80px;
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
      font-size: 2rem;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 4px;
      padding: 8px;
      flex-basis: 300px;
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      gap: 8px;
      cursor: pointer;

      &:hover {
        color: var(--fg-action-color);
      }

      &.selected {
        color: var(--fg-action-color);
        border: 2px solid var(--border-accent-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }
      &.correct {
        opacity: 1;
        border: 1px solid #00ff4c60;
        background-color: #00ff9d21;
        color: #0d4e00da;
      }
      &.uncorrect {
        opacity: 1;
        border: 1px solid #ff1e0060;
        background-color: #ff000021;
        color: #4e0024da;
      }

      @include mobile() {
        flex-basis: 190px;
        min-width: 50px;
        min-height: 50px;
        font-size: 1rem;
      }
    }

    .answer-description {
      display: flex;
      flex-direction: column;

      &-content {
        padding: 0 16px;
      }
      &-header {
        margin-bottom: 12px;
        font-style: italic;
        font-size: 1rem;

        @include mobile() {
          font-size: 0.9rem;
        }
      }
      &-divider {
        width: 100%;
        margin-top: 18px;
        margin-bottom: 24px;
        border: 1px solid var(--border-secondary-color);
      }
      &-hint {
        margin: 0 2px;
        margin-top: 12px;
        font-size: 0.8rem;
        font-family: 'Rubik';
        color: var(--fg-secondary-color);
      }
    }

    .check {
      margin-top: 48px;
      position: relative;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: 'LEFT_OPTION BTN RIGHT_OPTION';

      @include mobile() {
        grid-template-columns: 1fr 4fr 1fr;
      }

      &-btn {
        grid-area: BTN;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 1px;
        padding: 0 24px;
        color: var(--fg-primary-color);
      }

      &-option {
        display: flex;
        align-items: center;
        gap: 12px;

        &-item {
          color: var(--fg-secondary-color);
        }

        > * {
          cursor: pointer;
        }

        &.left {
          grid-area: LEFT_OPTION;
        }
        &.right {
          grid-area: RIGHT_OPTION;
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }

    @include mobile() {
      padding: 16px 8px;
    }
  }

  &.fullscreen {
    z-index: 100;
    height: 100%;
    background-color: transparent;

    .lab-test-content {
      background-color: transparent !important;
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 100%;
      border: none;
      padding: 8px;

      .answer-list {
        margin-top: auto;
      }

      .check {
        margin-top: auto;
      }
    }
  }
}
</style>

--- File: app/components/05.modules/hsk/about/index.ts ---

import HskAbout from './ui/index.vue'

export { HskAbout }

--- File: app/components/05.modules/hsk/about/ui/index.vue ---

<script lang="ts" setup>
</script>

<template>
  <div class="hsk-about">
    <section>
      <p>
        Уровень знания китайского языка для лиц, не являющихся носителями китайского языка, определяется квалификационным экзаменом. Его результаты признаются во всем мире.
      </p>

      <p>
        Разработаны стандарты HSK Пекинским университетом языка и культуры. Они начали применяться впервые в 1992 году. Изначально существовало всего 6 уровней (HSK-1, HSK-2, HSK-3, HSK-4, HSK-5, HSK-6).
      </p>

      <p>
        В 2021 вступил в силу новый стандарт HSK 3.0, который заменил предыдущую шестиуровневую модель. Он имеет более структурированную систему классификации. Теперь выделяются 9 уровней знания языка (HSK-1, HSK-2, HSK-3, HSK-4, HSK-5, HSK-6, HSK-7, HSK-8, HSK-9).
      </p>

      <p>
        Новый HSK соответствует другим международным стандартам, таким как CEFR (Общеевропейская система языкового обучения) и ACTFL (Американский совет по преподаванию иностранных языков). Помимо аудирования, чтения и письма, проверяются такие навыки, как разговорная речь, рукописный ввод китайских иероглифов и перевод.
      </p>

      <p>
        HSK 3.0 в своих тестах оценивает владение четырьмя основными элементами китайского языка. Это:
      </p>

      <ul>
        <li>иероглифы,</li>
        <li>активный словарный запас,</li>
        <li>грамматика,</li>
        <li>восприятие речи на слух.</li>
      </ul>

      <p>
        Если сравнивать сложность и количество слов, необходимых для прохождения всех четырехмерных тестов (восприятие речи на слух, иероглифы, словарный запас и грамматика), то можно сказать, что новый HSK более строгий, чем старый.
      </p>

      <p>
        Добавленные продвинутые уровни с 7 по 9 в новом HSK, предназначен для тех, кто изучает китайский язык, литературу, историю и культуру Китая.
      </p>
    </section>

    <section>
      <h2>Уровни владения китайским языком</h2>

      <p>Существует три основных группы владения китайским: начальный, средний и продвинутый</p>

      <p>Все 9 уровней по системе оценки HSK можно условно объединить в 3 укрупненные группы: начальный, средний и продвинутый уровни.</p>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Уровень HSK</th>
              <th>Группа</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Уровень HSK">
                HSK-1, HSK-2, HSK-3
              </td>
              <td data-label="Группа">
                Начальный
              </td>
            </tr>
            <tr>
              <td data-label="Уровень HSK">
                HSK-4, HSK-5, HSK-6
              </td>
              <td data-label="Группа">
                Средний
              </td>
            </tr>
            <tr>
              <td data-label="Уровень HSK">
                HSK-7, HSK-8, HSK-9
              </td>
              <td data-label="Группа">
                Продвинутый
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>Критерии оценки уровней знания китайского языка</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Уровень</th>
              <th>Иероглифы</th>
              <th>Количество слов</th>
              <th>Грамматические конструкции</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Уровень">
                HSK 1
              </td>
              <td data-label="Иероглифы">
                300
              </td>
              <td data-label="Количество слов">
                500
              </td>
              <td data-label="Грамматические конструкции">
                48
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 2
              </td>
              <td data-label="Иероглифы">
                600
              </td>
              <td data-label="Количество слов">
                1272
              </td>
              <td data-label="Грамматические конструкции">
                129
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 3
              </td>
              <td data-label="Иероглифы">
                900
              </td>
              <td data-label="Количество слов">
                2245
              </td>
              <td data-label="Грамматические конструкции">
                210
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 4
              </td>
              <td data-label="Иероглифы">
                1200
              </td>
              <td data-label="Количество слов">
                3245
              </td>
              <td data-label="Грамматические конструкции">
                286
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 5
              </td>
              <td data-label="Иероглифы">
                1500
              </td>
              <td data-label="Количество слов">
                4316
              </td>
              <td data-label="Грамматические конструкции">
                357
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 6
              </td>
              <td data-label="Иероглифы">
                1800
              </td>
              <td data-label="Количество слов">
                5456
              </td>
              <td data-label="Грамматические конструкции">
                424
              </td>
            </tr>
            <tr>
              <td data-label="Уровень">
                HSK 7, 8 и 9
              </td>
              <td data-label="Иероглифы">
                3000
              </td>
              <td data-label="Количество слов">
                11092
              </td>
              <td data-label="Грамматические конструкции">
                572
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>Описание уровней</h2>

      <h3>Уровень HSK 1 — первоначальное знакомство с китайским языком, начальный уровень</h3>
      <p>Самый первый уровень, на котором студент узнает основы китайского языка, овладевает базовыми разговорными фразами. Общий словарный запас на данном этапе составляет 500 слов. На этом уровне студент имеет базовые знания по грамматике, понимает самые простые слова и фразы, которых достаточно для элементарной коммуникации, умеет писать и читать изученные иероглифы.</p>

      <h3>Уровень HSK 2 — начальный уровень</h3>
      <p>Это второй уровень владения, на котором студент имеет базовые знания по грамматике, умеет поддержать беседу на бытовые темы с помощью наиболее часто употребляемых фраз. На данном уровне студенту известно 1272 слова, каждое из которых он может записать иероглифами и прочитать в тексте.</p>

      <h3>Уровень HSK 3 — начальный уровень</h3>
      <p>Владение китайским языком на данном уровне предполагает возможность выполнения основных коммуникативных задач в бытовой сфере, учебе, работе, во время путешествий по Китаю. Студент с уровнем HSK 3 способен поддержать общение на несложные темы с помощью фраз и слов, наиболее часто используемых в повседневной жизни и профессиональной деятельности. На данном уровне студенту известно 2245 слов, каждое из которых он может записать иероглифами и прочитать в тексте.</p>

      <h3>Уровень HSK 4 — средний уровень</h3>
      <p>Предполагает возможность вести беседы на все распространенные темы в самых разных бытовых и профессиональных сферах. Человек способен свободно общаться с носителями китайского языка на разные темы. Общий словарный запас на четвертом уровне составляет 3245 слов.</p>

      <h3>Уровень HSK 5 — средний уровень</h3>
      <p>Пятый уровень владения китайским языком, на котором студент умеет читать газетные и журнальные статьи, понимает телепередачи и фильмы на путунхуа.</p>
      <p>Владение китайским языком на данном уровне предполагает способность студента выступать с речью перед аудиторией на китайском языке. Общий словарный запас на пятом уровне составляет 4316 слов. Уровня HSK 5 в большинстве случаев достаточно для поступления в китайские вузы.</p>

      <h3>Уровень HSK 6 — средний уровень</h3>
      <p>На 6 уровне студент владеет китайским языком не хуже, чем рядовой носитель. Он способен с легкостью воспринимать устную и письменную речь на китайском языке, свободно и развернуто выражает свои мысли как в устной, так и в письменной форме.</p>
      <p>Общий словарный запас на четвертом уровне составляет 5456 слов. Уровень HSK6 открывает двери во все учебные заведения Китая. В предыдущей версии HSK данный уровень считался продвинутым и был последним в классификации.</p>

      <h3>Уровни 7–9 – продвинутые уровни</h3>
      <p>Добавленные в версии 3.0 продвинутые уровни с 7 по 9 в новом HSK, предназначены для тех, кто специализируется на изучении китайского языка, литературы, истории и культуры Китая. Если вы хотите получить степень магистра или доктора по китайскому языку, эти уровни для вас.</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hsk-about {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--fg-primary-color);
  font-size: 1rem;

  @include mobile() {
    font-size: 0.9rem;
  }

  p {
    padding: 8px 0;
  }

  .table-wrapper {
    overflow-x: auto;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 8px 0;
  }

  th,
  td {
    border: 1px solid var(--border-secondary-color);
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: var(--bg-secondary-color);
  }

  .table-container {
    overflow-x: auto;
  }

  @include mobile() {
    table {
      display: block;
    }

    thead {
      display: none;
    }

    tbody {
      display: block;
    }

    tr {
      display: block;
      margin-bottom: 16px;
      border: 1px solid var(--border-secondary-color);
    }

    td {
      display: block;
      border: none;
      padding-left: 50%;
      position: relative;
      text-align: left;
      word-break: break-word;
      text-align: right;

      &:before {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        font-weight: bold;
        content: attr(data-label);
        text-align: left;
      }
    }
  }

  h3 {
    margin-top: 24px;
  }
}
</style>

--- File: app/components/05.modules/hsk/index.ts ---

export * from './about'
export * from './lab'
export * from './words'

--- File: app/components/05.modules/hsk/lab/composables/card-queue.ts ---

function useCardQueue<T>(initialWords: T[]) {
  const queue = ref(shuffle(initialWords))
  const currentCard = computed(() => queue.value[0])

  function shuffle<T>(array: T[]) {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }

    return shuffledArray
  }

  function markAsKnown() {
    queue.value.shift()
  }

  function markForRepeat() {
    const card = queue.value.shift()
    if (card) {
      queue.value.push(card)
    }
  }

  function resetQueue() {
    queue.value = [...initialWords]
  }

  function shuffleQueue() {
    queue.value = shuffle(queue.value)
  }

  return {
    queue,
    currentCard,
    markAsKnown,
    markForRepeat,
    resetQueue,
    shuffleQueue,
  }
}

export { useCardQueue }

--- File: app/components/05.modules/hsk/lab/composables/index.ts ---

export * from './card-queue'
export * from './swipe-handler'

--- File: app/components/05.modules/hsk/lab/composables/swipe-handler.ts ---

import { computed, onUnmounted, ref } from 'vue'

type SwipeDirection = 'left' | 'right' | null
interface SwipeCallbacks {
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

function useSwipeHandler({ onSwipeLeft, onSwipeRight }: SwipeCallbacks) {
  const startX = ref(0)
  const currentX = ref(0)
  const isSwiping = ref(false)
  const swipeDirection = ref<SwipeDirection>(null)

  const cardStyle = computed(() => {
    if (!isSwiping.value)
      return {}

    const deltaX = currentX.value - startX.value
    const rotate = deltaX / 20
    const opacity = Math.max(1 - Math.abs(deltaX) / 500, 0.5)

    return {
      transform: `translateX(${deltaX}px) rotate(${rotate}deg)`,
      opacity,
      transition: isSwiping.value ? 'none' : 'all 0.3s ease',
    }
  })

  function handleStart(clientX: number) {
    startX.value = clientX
    currentX.value = clientX
    isSwiping.value = true
    swipeDirection.value = null
  }

  function handleMove(clientX: number) {
    if (!isSwiping.value)
      return

    currentX.value = clientX
    const deltaX = currentX.value - startX.value
    swipeDirection.value = deltaX > 0 ? 'right' : 'left'
  }

  function resetSwipe() {
    isSwiping.value = false
    startX.value = 0
    currentX.value = 0
    swipeDirection.value = null
  }

  function handleEnd() {
    if (!isSwiping.value)
      return

    const deltaX = currentX.value - startX.value
    if (Math.abs(deltaX) > 100) {
      deltaX > 0 ? onSwipeRight() : onSwipeLeft()
    }

    resetSwipe()
  }

  function onTouchStart(e: TouchEvent) {
    handleStart(e.touches[0].clientX)
  }

  function onTouchMove(e: TouchEvent) {
    handleMove(e.touches[0].clientX)
  }

  function onMouseMove(e: MouseEvent) {
    handleMove(e.clientX)
  }

  function onMouseUp() {
    handleEnd()
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  function onMouseDown(e: MouseEvent) {
    handleStart(e.clientX)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    const cancelHandler = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
    document.addEventListener('mouseleave', cancelHandler)
    onUnmounted(() => {
      document.removeEventListener('mouseleave', cancelHandler)
    })
  }

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  })

  return {
    cardStyle,
    swipeDirection,
    isSwiping,
    swipeHandlers: {
      touchstart: onTouchStart,
      touchmove: onTouchMove,
      touchend: handleEnd,
      mousedown: onMouseDown,
    },
  }
}

export { useSwipeHandler }

--- File: app/components/05.modules/hsk/lab/index.ts ---

import HskLab from './ui/index.vue'

export { HskLab }

--- File: app/components/05.modules/hsk/lab/ui/hsk-lab.vue ---

<script setup lang="ts">
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { useCardQueue, useSwipeHandler } from '../composables'

interface Props {
  items: HieroglyphHsk[]
}

const props = defineProps<Props>()
const isFullscreen = defineModel<boolean>('fullscreen', { required: true, default: false })

const { currentCard, markAsKnown, markForRepeat } = useCardQueue<HieroglyphHsk>(props.items)
const { cardStyle, swipeDirection, isSwiping, swipeHandlers } = useSwipeHandler({
  onSwipeLeft: handleKnow,
  onSwipeRight: handleRepeat,
})

const showDetails = ref(false)
const lastAction = ref<'know' | 'repeat' | null>(null)
const contentEl = ref<HTMLElement>()

function handleKnow() {
  lastAction.value = 'know'
  showDetails.value = true
}

function handleRepeat() {
  lastAction.value = 'repeat'
  showDetails.value = true
}

function handleContinue() {
  if (!currentCard.value)
    return

  if (lastAction.value === 'know') {
    markAsKnown()
  }
  else if (lastAction.value === 'repeat') {
    markForRepeat()
  }

  showDetails.value = false
  lastAction.value = null
}

const cardClass = computed(() => ({
  'card--swiping': isSwiping.value,
  'card--swipe-left': swipeDirection.value === 'left',
  'card--swipe-right': swipeDirection.value === 'right',
}))
</script>

<template>
  <div ref="contentEl" class="quiz-container" :class="{ isFullscreen: fullscreen }">
    <Transition name="card" mode="out-in">
      <div
        v-if="currentCard && !showDetails"
        class="card"
        :class="cardClass"
        :style="cardStyle"
        v-on="swipeHandlers"
      >
        <div class="card-content">
          <div class="card-glyph">
            {{ currentCard.glyph }}
          </div>
          <div class="card-actions">
            <v-btn
              variant="tonal"
              class="btn btn--repeat"
              color="red"
              @click="handleRepeat"
            >
              Забыл
            </v-btn>
            <v-btn
              variant="tonal"
              class="btn btn--know"
              color="green"
              @click="handleKnow"
            >
              Знаю
            </v-btn>
          </div>
        </div>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="showDetails" class="card-details">
        <div class="card-details-content">
          <h2 class="card-details-glyph">
            {{ currentCard?.glyph }}
          </h2>

          <div class="card-details-pinyin">
            <div v-for="(p, pIndex) in currentCard.pinyin" :key="pIndex">
              <PinyinText
                :pinyin="p.syllable"
                :tone="{
                  index: p.position + pIndex,
                  type: p.tone as ToneType,
                }"
              />
            </div>
          </div>
          <div class="card-details-translation">
            <p>{{ currentCard?.translation.ru }}</p>
          </div>
        </div>
        <v-btn
          variant="tonal"
          class="btn btn--continue"
          @click="handleContinue"
        >
          Продолжить
        </v-btn>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="!currentCard" class="empty">
        Все карточки пройдены! 🎉
      </div>
    </Transition>

    <v-btn
      v-if="!!fullscreen"
      icon
      variant="text"
      class="fullscreen"
      @click="isFullscreen = !isFullscreen"
    >
      <Icon
        name="mdi:fullscreen"
        size="32"
      />
    </v-btn>

    <ClientOnly>
      <HaoticLines
        v-if="fullscreen"
        class="haotic-lines"
        :speed="2"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.haotic-lines {
  opacity: 0.1;
}
.quiz-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 64px;
  width: 100%;
  height: 100%;

  &.isFullscreen {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    margin: 0;
    background-color: var(--bg-primary-color);
    align-items: center;

    .card-details,
    .card {
      max-width: 600px;
      max-height: 600px;
      z-index: 10;
      aspect-ratio: 1 / 1;
      border-radius: 0;
    }
  }
}

.fullscreen {
  position: absolute;
  right: 4px;
  top: 4px;
  color: var(--fg-tertiary-color);
  z-index: 10;
}

.card {
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  max-width: 500px;
  max-height: 500px;
  position: relative;
  background:
    radial-gradient(ellipse at top, var(--bg-accent-color), var(--bg-secondary-color)),
    radial-gradient(ellipse at bottom, var(--bg-secondary-color), var(--bg-secondary-color));
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    z-index: 2;
  }

  &-glyph {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-actions {
    display: flex;
    justify-content: space-between;

    .btn {
      text-transform: none;
      width: 45%;
      font-size: 0.9rem;
    }
  }

  &--swiping {
    cursor: grabbing;
  }

  &--swipe-left {
    background: linear-gradient(45deg, var(--bg-error-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-error-color);
    border: 1px solid var(--bg-error-color);
  }

  &--swipe-right {
    background: linear-gradient(-45deg, var(--bg-success-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-success-color);
    border: 1px solid var(--bg-success-color);
  }
}

.card-details {
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 4px;
  }

  &-glyph {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-pinyin {
    font-size: 1.4rem;
    text-align: center;
    color: var(--fg-secondary-color);
    font-family: var(--font-family-cn);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px dashed var(--border-secondary-color);

    > div {
      margin: 4px;
    }
  }

  &-translation {
    color: var(--fg-primary-color);
    font-weight: 1rem;
    font-family: 'Rubik';
    text-align: center;
  }

  .btn {
    text-transform: none;
    font-size: 0.9rem;
  }
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.card-leave-to {
  opacity: 0;

  &.card--swipe-left {
    transform: translateX(-100px) rotate(-15deg);
  }

  &.card--swipe-right {
    transform: translateX(100px) rotate(15deg);
  }
}
</style>

--- File: app/components/05.modules/hsk/lab/ui/index.vue ---

<script lang="ts" setup>
import LabQuiz from './hsk-lab.vue'

const { api } = useApi()

const isFullscreen = ref<boolean>(false)

const { data } = await useAsyncData(
  'hieroglyph-hsk_lab',
  () => api.hsk.v1.hieroglyphsByLevel({ level: 1 }),
)
</script>

<template>
  <LabQuiz
    v-if="data"
    v-model:fullscreen="isFullscreen"
    :items="data"
  />
</template>

<style lang="scss" scoped>
.hsk-lab {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

--- File: app/components/05.modules/hsk/words/composables/hsk-controls.ts ---

const HSK_WORDS_CONTROL_KEY = 'hsk_words_control'

interface HskWordsControlValues {
  isFixedStyle: boolean
}

function useHskControls() {
  const controlValues = useCookie<HskWordsControlValues>(HSK_WORDS_CONTROL_KEY)
  const controlMenu = ref(false)
  const controls = ref<HskWordsControlValues>(controlValues.value ?? { isFixedStyle: true })

  const toggleControl = (key: keyof HskWordsControlValues) => {
    const rawValues = { ...controlValues.value }
    rawValues[key] = !rawValues[key]
    controlValues.value = rawValues
    controls.value = rawValues
  }

  return {
    controlMenu,
    controls,
    toggleControl,
  }
}

export type { HskWordsControlValues }
export { useHskControls }

--- File: app/components/05.modules/hsk/words/composables/hsk-words.ts ---

const HSK_LEVELS = Array.from({ length: 9 }, (_, i) => i + 1)
const ITEMS_PER_PAGE_DEFAULT = 30
const VISIBLE_PAGES = 7
const MOBILE_VISIBLE_PAGES = 3
const KEY = 'hieroglyph-hsk_words'
const SEARCH_DEBOUNCE = 300

async function useHskWords() {
  const page = ref<number>(1)
  const searchKeyword = ref<string>('')
  const selectedLevel = ref<number>(1)
  const itemsPerPage = ref<number>(ITEMS_PER_PAGE_DEFAULT)

  const { api } = useApi()
  const { isMobile } = useDevice()
  const { data, status, error, refresh } = await useAsyncData(
    KEY,
    () => api.hsk.v1.hieroglyphsByLevelList({
      level: selectedLevel.value,
      page: page.value,
      limit: itemsPerPage.value,
      keyword: searchKeyword.value,
    }),
  )

  const debouncedRefresh = useDebounceFn(() => refresh(), SEARCH_DEBOUNCE)
  const isLoading = computed(() => status.value === 'pending')

  const totalPages = computed(() => {
    const total = data.value?.pagination?.total
    return total ? Math.ceil(total / itemsPerPage.value) : 0
  })

  watch(searchKeyword, () => {
    page.value = 1
    debouncedRefresh()
  })

  watch([page, itemsPerPage, selectedLevel], () => {
    refresh()
  })

  return {
    HSK_LEVELS,
    VISIBLE_PAGES,
    MOBILE_VISIBLE_PAGES,
    page,
    searchKeyword,
    selectedLevel,
    itemsPerPage,
    isMobile,
    data,
    isLoading,
    totalPages,
    error,
  }
}

export { useHskWords }

--- File: app/components/05.modules/hsk/words/composables/index.ts ---

export * from './hsk-controls'
export * from './hsk-words'
export * from './pinyin-formatter'

--- File: app/components/05.modules/hsk/words/composables/pinyin-formatter.ts ---

import type { PinyinTextProps, PinyinTextTone } from '~/components/03.domain/pinyin-text'

function usePinyinFormatter() {
  const formatPinyinData = (pinyinArray: HieroglyphHsk['pinyin']): PinyinTextProps => {
    return {
      pinyin: pinyinArray.map(p => p.syllable).join(' '),
      tone: pinyinArray.map((p, index, array) => {
        const offset = array
          .slice(0, index)
          .reduce((sum, curr) => sum + curr.syllable.length + 1, 0)

        return {
          index: offset + p.position,
          type: p.tone,
        }
      }) as unknown as PinyinTextTone,
    }
  }

  return { formatPinyinData }
}

export { usePinyinFormatter }

--- File: app/components/05.modules/hsk/words/index.ts ---

import HskWords from './ui/index.vue'

export { HskWords }

--- File: app/components/05.modules/hsk/words/ui/hsk-words-control.vue ---

<script lang="ts" setup>
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'

type Controls = Record<any, unknown>

const emits = defineEmits<{ toggleControl: [keyof Controls] }>()
const control = defineModel<Controls>({ required: true })

const store = useStore(['hieroglyphWord'])

const controls: { key: keyof Controls, label: string }[] = [{
  key: 'isFixedStyle',
  label: 'Фиксированный стиль отображения',
}]

const controlledHieroglyphVariant = computed({
  get: () => store.hieroglyphWord.variant,
  set: (value: HieroglyphWordVariant) => store.hieroglyphWord.setVariant(value),
})
</script>

<template>
  <div class="controls">
    <div
      v-for="item in controls" :key="item.key"
      class="controls-item"
      :class="{ actived: control[item.key] }"
      @click="emits('toggleControl', item.key)"
    >
      <button class="controls-button">
        {{ item.label }}
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
    <v-btn-toggle
      v-model="controlledHieroglyphVariant"
      density="compact"
      variant="text"
      class="controls-item-grouped"
      color="var(--fg-action-color)"
      :disabled="!!control.isFixedStyle"
      mandatory
    >
      <v-btn class="group-item">
        1
      </v-btn>
      <v-btn class="group-item">
        2
      </v-btn>
      <v-btn class="group-item">
        3
      </v-btn>
      <v-btn class="group-item">
        4
      </v-btn>
      <v-btn class="group-item">
        5
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary-color);
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;

  &-item {
    position: relative;
    background-color: var(--bg-secondary-color);
    border: 2px solid var(--border-secondary-color);
    color: var(--fg-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 10px 10px 0 0;
    min-width: 140px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &-grouped {
      border-radius: 0 0 10px 10px;
      width: 100%;
      background-color: var(--bg-tertiary-color);
      color: var(--fg-secondary-color);
    }

    &.actived {
      border: 2px solid var(--border-accent-color);
      box-shadow: 0 0 3px var(--bg-accent-color);

      .controls {
        &-selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: var(--border-accent-color);
          border-radius: 5px;
        }
      }
    }
  }

  &-button {
    cursor: pointer;
    color: var(--fg-primary-color);
  }

  &-selected {
    position: absolute;
    top: -10px;
    right: -8px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
}
</style>

--- File: app/components/05.modules/hsk/words/ui/index.vue ---

<script lang="ts" setup>
import PageLoader from '~/components/02.shared/page-loader/ui/page-loader.vue'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import HskWordsControl from '~/components/05.modules/hsk/words/ui/hsk-words-control.vue'
import { useHskControls, useHskWords, usePinyinFormatter } from '../composables'

const {
  HSK_LEVELS,
  VISIBLE_PAGES,
  MOBILE_VISIBLE_PAGES,
  page,
  searchKeyword,
  selectedLevel,
  isMobile,
  data,
  isLoading,
  totalPages,
  error,
} = await useHskWords()

const { formatPinyinData } = usePinyinFormatter()
const { controlMenu, controls, toggleControl } = useHskControls()
</script>

<template>
  <div class="hsk-words">
    <div class="controls">
      <v-select
        v-model="selectedLevel"
        :items="HSK_LEVELS"
        class="controls-hsk"
        label="HSK"
        variant="outlined"
        density="comfortable"
        hide-details
        prepend-inner-icon="mdi-trophy-outline"
      />
      <v-text-field
        v-model="searchKeyword"
        label="Поиск"
        placeholder="Введите иероглиф, пиньин или перевод..."
        class="controls-keyword"
        clearable
        outlined
        hide-details
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="comfortable"
      />
      <v-menu
        v-model="controlMenu"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            variant="plain"
            v-bind="props"
          >
            <Icon size="24" name="mdi-tune" />
          </v-btn>
        </template>

        <HskWordsControl v-model="controls" @toggle-control="toggleControl" />
      </v-menu>
    </div>

    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data?.length && !error?.data" class="words-list">
      <HieroglyphWord
        v-for="item in data.data"
        :key="item.id"
        :variant="controls.isFixedStyle ? 5 : undefined"
        :glyph="item.glyph"
        :translate="item.translation.ru"
        :pinyin="formatPinyinData(item.pinyin)"
      />

      <v-pagination
        v-model="page"
        :length="totalPages"
        :total-visible="isMobile ? MOBILE_VISIBLE_PAGES : VISIBLE_PAGES"
        color="primary"
      />
    </div>

    <div v-else class="empty">
      <NuxtImg
        width="200"
        height="200"
        src="/images/not-found.gif"
      />
      <span v-if="error?.data">
        Ошибка получения данных :(
      </span>
      <span v-else>
        Ничего не найдено :(
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hsk-words {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  &:deep(.v-pagination__list) {
    .v-btn {
      color: var(--fg-accent-color) !important;
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    margin-top: 16px;

    &-hsk {
      max-width: 100px;
    }

    @include mobile() {
      flex-direction: column;
      gap: 8px;

      &-hsk {
        max-width: 100%;
      }
    }
  }
  .words-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include mobile {
      font-size: 0.9rem;

      &:deep(.hw-word) {
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
    }
  }
  .empty {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 0;

    > img {
      box-shadow: 0 0 30px var(--bg-error-color);
      border: 2px solid var(--border-primary-color);
      border-radius: 8px;
    }

    > span {
      margin: 0 auto;
      font-size: 1.2rem;
      margin-top: 24px;
      color: var(--fg-secondary-color) !important;
    }
  }
  .loader {
    margin-top: 100px;
  }
}
</style>

--- File: app/components/05.modules/keys/index.ts ---

import type { ControlHieroglyphKey, KeysStore } from './store/keys.store'
import KeyHieroglyphControl from './ui/key-control/key-hieroglyph-control.vue'
import KeyHieroglyphList from './ui/keys-list/key-hieroglyph-list.vue'
import KeyHieroglyphPractice from './ui/keys-practice/keys-practice.vue'

export type {
  ControlHieroglyphKey,
  KeysStore,
}

export {
  KeyHieroglyphControl,
  KeyHieroglyphList,
  KeyHieroglyphPractice,
}

--- File: app/components/05.modules/keys/store/keys.store.ts ---

import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

enum RequestKeys {
  ALL = 'keys_all',
  DESCRIPTION = 'keys_description',
}

export interface ControlHieroglyphKey {
  isPinyin: boolean
  isTranslate: boolean
  isTranscription: boolean
}

//* --- State ----------------------------------------------- *//

interface KeysState {
  hieroglyphKeys: HieroglyphKey[]
  description: JsonToDomChildren

  control: ControlHieroglyphKey
}

//* --- Store ----------------------------------------------- *//
export const useKeysStore = defineStore('keys', {
  state: (): KeysState => ({
    hieroglyphKeys: [],
    description: {} as JsonToDomChildren,

    control: {
      isPinyin: false,
      isTranslate: false,
      isTranscription: false,
    },
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.ALL, RequestKeys.DESCRIPTION]),
  },

  actions: {
    async getAndSetAllKeys() {
      await useRequest({
        key: RequestKeys.ALL,
        fn: ({ api }) => api.keys.v1.all(),
        onSuccess: ({ data }) => this.hieroglyphKeys = data,
      })
    },
    async getAndSetDescriptionKeys() {
      await useRequest({
        key: RequestKeys.DESCRIPTION,
        fn: ({ api }) => api.cms.v1.description({ sysname: 'keys' }),
        onSuccess: ({ data }) => this.description = data,
      })
    },
    toggleControl(field: keyof ControlHieroglyphKey) {
      this.control[field] = !this.control[field]
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type KeysStore = ReturnType<typeof useKeysStore>

--- File: app/components/05.modules/keys/ui/key-control/key-hieroglyph-control.vue ---

<script lang="ts" setup>
import type { ControlHieroglyphKey } from '../../store/keys.store'

const store = useStore(['keys'])
const { toggleControl } = store.keys
const { control } = storeToRefs(store.keys)

const controls: { key: keyof ControlHieroglyphKey, label: string }[] = [{
  key: 'isPinyin',
  label: 'Пиньин',
}, {
  key: 'isTranslate',
  label: 'Перевод',
}, {
  key: 'isTranscription',
  label: 'Транскрипция',
}]
</script>

<template>
  <div class="controls">
    <div
      v-for="item in controls" :key="item.key"
      class="controls-item"
      :class="{ actived: control[item.key] }"
      @click="toggleControl(item.key)"
    >
      <button class="controls-button">
        {{ item.label }}
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;

  gap: 10px;
  background-color: var(--bg-primary-color);
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;

  &-item {
    position: relative;

    background-color: var(--bg-secondary-color);
    border: 2px solid var(--border-secondary-color);
    color: var(--fg-primary-color);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px 10px;
    border-radius: 10px;
    min-width: 140px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &.actived {
      border: 2px solid var(--border-accent-color);
      box-shadow: 0 0 3px var(--bg-accent-color);

      .controls {
        &-selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: var(--border-accent-color);
          border-radius: 5px;
        }
      }
    }
  }

  &-button {
    cursor: pointer;
    color: var(--fg-primary-color);
  }

  &-selected {
    position: absolute;
    top: -10px;
    right: -8px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
}
</style>

--- File: app/components/05.modules/keys/ui/keys-list/dialog/key-hieroglyph-info.vue ---

<script lang="ts" setup>
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { PageLoader } from '~/components/02.shared/page-loader'
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import { IframeViewer } from '~/components/03.domain/iframe-viewer'
import { PinyinText } from '~/components/03.domain/pinyin-text'

interface Props {
  hieroglyph?: HieroglyphKey
}
const props = defineProps<Props>()

enum RequestKeys {
  KEY_HIEROGLYPH = 'key_key-hieroglyphs',
}

const isWikiViewing = ref<boolean>(false)

const data = computed(() => ({
  hieroglyph: props.hieroglyph!,
  info: 'Описание для данного ключа не найдено.',
  description: '',
  wiki: `https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D1%87_${props.hieroglyph?.index}`,
}))

const dialog = defineModel<boolean>({ required: true })
const hieroglyphEl = ref<HTMLElement>()

// Example
const example = ref<PinyinHieroglyphs | null>(null)
const isLoadingExample = computed(() => useRequestStatus([RequestKeys.KEY_HIEROGLYPH]))
const isExampleHidden = computed<boolean>(() => !!example.value || isLoadingExample.value)
const apiErrorExample = computed(() => useRequestError(RequestKeys.KEY_HIEROGLYPH))
const abortController = ref<AbortController>(new AbortController())

function generateExample() {
//  TODO
}

// eslint-disable-next-line unused-imports/no-unused-vars
function handleRefreshExample() {
  generateExample()
}

function resetExamples() {
  example.value = null
  abortController.value.abort()
  abortController.value = new AbortController()
}

function onOpenWiki() {
  isWikiViewing.value = !isWikiViewing.value
}
</script>

<template>
  <ClientOnly>
    <DialogWithClose
      v-model="dialog"
      class="dialog"
      @after-leave="resetExamples"
    >
      <VCard class="dialog-content">
        <div ref="hieroglyphEl" class="hieroglyph-container">
          <HaoticLines
            v-if="dialog"
            :weight-stroke="40"
            class="haotic-lines"
            :viewport-el="hieroglyphEl"
          />
          <div class="hieroglyph-item item">
            <div class="item-pinyin">
              <PinyinText
                :pinyin="data.hieroglyph.pinyin"
                :tone="{
                  index: data.hieroglyph.toneIndex,
                  type: data.hieroglyph.toneType,
                }"
              />
              <div class="pinyin-tran">
                {{ data.hieroglyph.transcription }}
              </div>
            </div>
            <div class="item-hieroglyph">
              {{ data.hieroglyph.glyph }}
            </div>
            <div class="item-translate">
              {{ data.hieroglyph.translate }}
            </div>
          </div>
        </div>
        <div class="control">
          <div class="control-hr" />
          <div class="control-items">
            <div class="control-item" @click="onOpenWiki">
              <VTooltip
                activator="parent"
                location="top"
              >
                Ссылка на wikipedia
              </VTooltip>
              <Icon size="24" name="mdi:wikipedia" />
            </div>
          </div>
        </div>
        <p class="info">
          <VBtn
            v-if="!isExampleHidden"
            class="example-btn"
            rounded
            variant="tonal"
            @click="generateExample"
          >
            Сгенерировать примеры иероглифов
          </VBtn>

          <PageLoader v-else-if="isLoadingExample" />

          <VSnackbar
            :model-value="!!apiErrorExample"
            :timeout="2000"
            color="red"
          >
            <div>
              {{ apiErrorExample?.message }}
            </div>
          </VSnackbar>
        </p>
        <p class="description">
          {{ data.description }}
        </p>
      </VCard>
    </DialogWithClose>

    <IframeViewer v-model="isWikiViewing" :src="data.wiki" />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.haotic-lines {
  opacity: 0.2;
}

.dialog {
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    .hieroglyph {
      &-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;

        .item {
          overflow: hidden;
          background-color: var(--bg-tertiary-color);
          border: 1px solid var(--border-secondary-color);
          border-radius: 10px;
          padding: 5px;
          aspect-ratio: 1 / 1;
          height: 220px;
          z-index: 10;
          display: grid;
          grid-template-rows: 1.5fr 2fr 1.5fr;
          grid-template-areas:
            'pinyin'
            'hieroglyph'
            'translate';

          text-align: center;
          overflow: hidden;
          box-shadow: 0 0 5px var(--bg-overlay-primary-color);

          &-pinyin,
          &-hieroglyph,
          &-translate {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          &-pinyin {
            grid-area: pinyin;
            :deep(.pinyin-part) {
              font-size: 1.1rem !important;
            }

            .pinyin-tran {
              margin-top: 4px;
              font-size: 0.8rem;
              color: var(--fg-secondary-color);
              border-top: 1px solid var(--border-primary-color);
            }
          }

          &-hieroglyph {
            grid-area: hieroglyph;
            font-family: var(--font-family-cn);
            font-size: 4rem;
          }

          &-translate {
            grid-area: translate;
            text-align: center;
            font-family: 'Rubik';
            font-size: 0.9rem;
          }
        }
      }
    }

    .info {
      text-align: center;
    }

    .control {
      position: relative;

      &-items {
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 4;
        gap: 32px;
      }

      &-item {
        color: var(--fg-tertiary-color);
        background-color: var(--bg-secondary-color);
        cursor: pointer;
        height: 100%;

        > svg {
          transition: all 0.1s ease-in-out;

          &:hover {
            transform: scale(1.5);
            color: var(--fg-secondary-color);
          }

          &.isFavorite {
            color: rgb(209, 136, 27);
          }
        }
      }

      &-hr {
        position: absolute;
        width: 100%;
        height: 1px;
        border: 1px dashed var(--border-primary-color);
        top: 50%;
        z-index: 3;
      }
    }
  }
}

.example {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  .loader {
    font-size: 36px;
  }

  &-btn {
    z-index: 10;
    text-transform: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--fg-action-color);
    width: auto;
    margin: 0 auto;
    padding: 0 32px;
    font-size: 0.8rem;

    @include mobile {
      font-size: 0.75rem;
    }
  }
}
</style>

--- File: app/components/05.modules/keys/ui/keys-list/key-hieroglyph-list.vue ---

<script lang="ts" setup>
import KeyHieroglyphInfo from './dialog/key-hieroglyph-info.vue'
import KeyHieroglyph from './key-hieroglyph.vue'

interface Props {
  items: HieroglyphKey[]
}

defineProps<Props>()

const store = useStore(['keys'])
const { control } = storeToRefs(store.keys)

const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}
</script>

<template>
  <div class="list">
    <KeyHieroglyph
      v-for="(item, key) in items!"
      :key="key + 1"
      :hieroglyph="item"
      :control
      @on-expand="onHieroglyphExpand"
    />
    <KeyHieroglyphInfo
      v-model="isExpandedDialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </div>
</template>

<style lang="scss" scoped>
 .list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 64px;
}
</style>

--- File: app/components/05.modules/keys/ui/keys-list/key-hieroglyph.vue ---

<script lang="ts" setup>
import type { ControlHieroglyphKey } from '../../store/keys.store'
import { useElementVisibility } from '@vueuse/core'
import { PinyinText } from '~/components/03.domain/pinyin-text'

interface Props {
  control: ControlHieroglyphKey
  hieroglyph: HieroglyphKey
}

const props = defineProps<Props>()
const emits = defineEmits<{ onExpand: [HieroglyphKey] }>()

const contentEl = ref<HTMLElement | null>(null)

const isElementVisible = useElementVisibility(contentEl)

const isToneCalculated = ref<boolean>(false)
const isFullyShowed = ref<boolean>(false)

const shouldShowPinyin = computed<boolean>(() => props.control.isPinyin || isFullyShowed.value)
const shouldShowTranslate = computed<boolean>(() => props.control.isTranslate || isFullyShowed.value)

watch(
  () => [props.control.isPinyin, props.control.isTranslate],
  () => isFullyShowed.value = false,
)

watch(
  () => [
    props.control.isPinyin,
    isFullyShowed.value,
    isElementVisible.value,
  ],
  () => {
    if (!shouldShowPinyin.value || !isElementVisible.value) {
      return
    }
    isToneCalculated.value = true
  },
)
</script>

<template>
  <div ref="contentEl" class="wrapper">
    <div class="item" @click="isFullyShowed = !isFullyShowed">
      <div class="item-index">
        {{ hieroglyph.index }}
      </div>
      <Transition name="slide-up">
        <div v-if="shouldShowPinyin && isToneCalculated" class="item-pinyin">
          <PinyinText
            :pinyin="hieroglyph.pinyin"
            :tone="{
              index: hieroglyph.toneIndex,
              type: hieroglyph.toneType,
            }"
          />
          <div
            v-show="control.isTranscription && hieroglyph.transcription"
            class="pinyin-tran"
          >
            {{ hieroglyph.transcription }}
          </div>
        </div>
      </Transition>
      <div class="item-hieroglyph">
        {{ hieroglyph.glyph }}
      </div>
      <Transition name="slide-down">
        <div v-if="shouldShowTranslate" class="item-translate">
          {{ hieroglyph.translate }}
        </div>
      </Transition>
      <div
        v-if="isElementVisible"
        class="item-expand"
        @click="emits('onExpand', hieroglyph)"
      >
        <Icon name="mdi:menu" size="15" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.wrapper {
  cursor: pointer;
  position: relative;
  margin: 5px;
  aspect-ratio: 1 / 1;

  width: 160px;
  height: 160px;

  @include tablet {
    width: 30%;
    height: 30%;
  }

  @include mobile {
    width: 45%;
    height: 45%;
  }

  .item {
    overflow: hidden;

    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 10px;
    padding: 5px;

    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 1.5fr 2fr 1.5fr;
    grid-template-areas:
      'pinyin'
      'hieroglyph'
      'translate';

    text-align: center;
    overflow: hidden;

    box-shadow: 0 0 5px var(--bg-overlay-primary-color);

    &:hover {
      box-shadow: 0 0 5px var(--bg-overlay-secondary-color);
      transition: box-shadow 0.2s ease-in-out;
    }

    &:hover {
      .itemindex,
      .item-expand {
        opacity: 1;
        color: var(--fg-primary-color);
        transition: all 0.2s ease-in-out;
      }
    }

    &-pinyin,
    &-hieroglyph,
    &-translate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: normal;
    }

    &-pinyin {
      grid-area: pinyin;
      font-size: 1rem;

      .pinyin-tran {
        font-size: 0.7rem;
        color: var(--fg-secondary-color);
        border-top: 1px solid var(--border-primary-color);
      }
    }

    &-hieroglyph {
      grid-area: hieroglyph;
      font-family: var(--font-family-cn);
      font-size: 2rem;

      @include tablet() {
        font-size: 3rem;
      }
    }

    &-translate {
      grid-area: translate;
      text-align: center;
      font-family: 'Rubik';
      font-size: 0.8rem;
    }

    &-index {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      top: -4px;
      left: -4px;
      height: 26px;
      width: 26px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 50%;
      color: var(--fg-secondary-color);

      @include mobile {
        top: -3px;
        left: -3px;
        height: 20px;
        width: 20px;
        font-size: 0.6rem;
        letter-spacing: 0px;
      }
    }

    &-expand {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      bottom: -4px;
      right: -4px;
      height: 22px;
      width: 22px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 20%;
      transition: all 0.2s ease-in-out;
      opacity: 0;
      color: var(--fg-secondary-color);

      &:hover {
        opacity: 1;
        color: var(--fg-primary-color);
      }

      @include mobile {
        bottom: -3px;
        right: -3px;
        height: 18px;
        width: 18px;
        font-size: 0.6rem;
        letter-spacing: 0px;
        opacity: 1;
      }
    }
  }
}
</style>

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice-draw/keys-practice-draw.vue ---

<script lang="ts" setup>
import type { DrawingBoardExposed } from '~/components/02.shared/hanzi-drawing-board'
import { HanziDrawingBoard } from '~/components/02.shared/hanzi-drawing-board'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

interface Props {
  items: HieroglyphKey[]
}

interface CheckResult {
  similarity: number
  feedback: string
}

const props = defineProps<Props>()

enum RequestKeys {
  CHECK_HANZI_DRAWING = 'llm_keys-check-hanzi-drawing',
}

const settingsMenu = ref<boolean>(false)

const settings = useLocalStorage('hanziPracticeSettings', {
  showTargetInCanvas: false,
  useLLMCheck: true,
})

const drawingBoardRef = ref<DrawingBoardExposed | null>(null)
const result = ref<CheckResult | null>(null)
const showFullInfo = ref(false)
const hasAttemptedDrawing = ref(false)
const abortController = ref<AbortController>(new AbortController())
const shuffledItems = ref<HieroglyphKey[]>([])
const currentShuffledIndex = ref(0)

const currentItem = computed(() => shuffledItems.value[currentShuffledIndex.value] || null)
const targetCharacter = computed<string>(() => currentItem.value?.glyph ?? '')
const isCheckingDisabled = computed(() => !drawingBoardRef.value || !targetCharacter.value)
const instruction = computed<string>(() => !currentItem.value ? 'Нет данных для отображения.' : `Нарисуйте иероглиф для слова: "${currentItem.value.translate}"`)
const totalItemsCount = computed(() => shuffledItems.value.length)
const isLoading = computed(() => useRequestStatus([RequestKeys.CHECK_HANZI_DRAWING]))
const apiError = computed(() => useRequestError(RequestKeys.CHECK_HANZI_DRAWING))

const resultStyle = computed(() => {
  if (!result.value?.similarity)
    return {}

  const hue = (result.value.similarity / 100) * 120
  const saturation = 80
  const bgLightness = 90
  const borderLightness = 45

  const backgroundColor = `hsl(${hue}, ${saturation}%, ${bgLightness}%)`
  const borderColor = `hsl(${hue}, ${saturation}%, ${borderLightness}%)`
  const color = borderColor

  return {
    backgroundColor,
    borderColor,
    color,
  }
})

function shuffleArray(array: HieroglyphKey[]) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function initializePracticeCycle() {
  if (props.items.length > 0) {
    shuffledItems.value = shuffleArray(props.items)
  }
  else {
    shuffledItems.value = []
  }
  currentShuffledIndex.value = 0
  clearDrawing()
}

function clearDrawing() {
  drawingBoardRef.value?.clearCanvas()
  result.value = null
  showFullInfo.value = false
  hasAttemptedDrawing.value = false
}

function handleVisibility() {
  if (!drawingBoardRef.value || isLoading.value)
    return

  if (drawingBoardRef.value.showTargetOverlay)
    drawingBoardRef.value.hideTargetCharacter()
  else
    drawingBoardRef.value.showTargetCharacter()
}

async function handleCheck() {
  if (!settings.value.useLLMCheck) {
    result.value = null
    showFullInfo.value = true
    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value?.showTargetCharacter()

    return
  }

  if (!drawingBoardRef.value || isLoading.value || !currentItem.value)
    return

  const imageDataUrl = drawingBoardRef.value.getImageDataURL('image/png', 0.9)

  if (!imageDataUrl?.userImage) {
    return
  }

  result.value = null
  hasAttemptedDrawing.value = true

  useRequest({
    key: RequestKeys.CHECK_HANZI_DRAWING,
    fn: ({ api }) => api.llm.v1.checkHanziDrawing({
      userImage: imageDataUrl.userImage!,
      targetImage: imageDataUrl.targetImage!,
      targetWord: targetCharacter.value,
    }, abortController.value),
    onSuccess: ({ data }) => {
      result.value = data
      showFullInfo.value = true
      if (settings.value.showTargetInCanvas)
        drawingBoardRef.value?.showTargetCharacter()
    },
    onError: (err) => {
      console.error('Ошибка при проверке иероглифа:', err)
      result.value = null
      showFullInfo.value = false
    },
  })
}

function nextItem() {
  drawingBoardRef.value?.hideTargetCharacter()

  if (currentShuffledIndex.value < shuffledItems.value.length - 1) {
    currentShuffledIndex.value++
    clearDrawing()
  }
  else {
    initializePracticeCycle()
  }
}

function applyCanvasVisibilitySetting() {
  nextTick(() => {
    if (!drawingBoardRef.value)
      return

    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value.showTargetCharacter()
    else
      drawingBoardRef.value.hideTargetCharacter()
  })
}

function getSimilarityText(value: number) {
  if (value >= 85)
    return 'Корректно'

  if (value >= 75)
    return 'Почти корректно'

  return 'Неправильно'
}

watch(() => settings.value.showTargetInCanvas, () => {
  if (showFullInfo.value)
    applyCanvasVisibilitySetting()
})

onMounted(initializePracticeCycle)
</script>

<template>
  <VCard class="content">
    <template v-if="currentItem && totalItemsCount > 0">
      <h2 class="title">
        Практика прописи
      </h2>
      <p class="instruction">
        {{ instruction }}
      </p>

      <div class="board-container">
        <HanziDrawingBoard
          :key="targetCharacter"
          ref="drawingBoardRef"
          :target-character="targetCharacter"
        />
      </div>

      <div v-if="showFullInfo && currentItem" class="full-info">
        <HieroglyphWord
          :variant="5"
          :glyph="currentItem.glyph"
          :translate="currentItem.translate"
          :pinyin="currentItem.pinyin"
        />
      </div>

      <div v-if="result && !isLoading" class="result" :style="resultStyle">
        <p><b>{{ getSimilarityText(+result.similarity) }}</b></p>
        <p>{{ result.feedback }}</p>
      </div>
      <div v-if="apiError && !isLoading" class="error">
        <p>Ошибка: {{ apiError }}</p>
      </div>

      <div class="controls">
        <VBtn
          variant="text"
          rounded
          :disabled="isLoading"
          @click="clearDrawing"
        >
          Очистить
        </VBtn>
        <VBtn
          variant="text"
          rounded
          :disabled="isLoading"
          @click="handleVisibility"
        >
          Показать / Скрыть
        </VBtn>
        <VBtn
          v-if="!showFullInfo"
          variant="tonal"
          class="action-btn"
          rounded
          :disabled="isCheckingDisabled"
          :loading="isLoading"
          @click="handleCheck"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="action-btn"
          rounded
          variant="tonal"
          :disabled="isLoading"
          @click="nextItem"
        >
          {{ currentShuffledIndex < totalItemsCount - 1 ? 'Следующий' : 'Начать заново' }}
        </VBtn>
      </div>
    </template>

    <div class="settings">
      <VMenu
        v-model="settingsMenu"
        :close-on-content-click="false"
      >
        <template #activator="{ props: menuProps }">
          <v-btn
            icon
            variant="text"
            v-bind="menuProps"
          >
            <Icon size="24" name="mdi-tune" />
          </v-btn>
        </template>

        <VList class="settings-menu">
          <VListItem class="settings-item">
            <VSwitch
              v-model="settings.showTargetInCanvas"
              label="Показывать эталон"
              color="var(--fg-accent-color)"
              hide-details
              inset
              density="compact"
            />
          </VListItem>
          <VListItem class="settings-item">
            <VSwitch
              v-model="settings.useLLMCheck"
              label="Проверка LLM"
              color="var(--fg-accent-color)"
              hide-details
              inset
              density="compact"
            />
          </VListItem>
        </VList>
      </VMenu>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--bg-secondary-color);
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  color: var(--fg-primary-color);
  border-radius: 24px !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .settings {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 48px;
    height: 48px;
  }
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
}

.instruction {
  font-size: 1rem;
  color: var(--fg-secondary-color);
  text-align: center;
  margin-bottom: 8px;
}

.board-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 16px;
  user-select: none;
}

.full-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;

  border-bottom: 1px dashed var(--border-button-secondary-color);
  border-top: 1px dashed var(--border-button-secondary-color);
}

.result,
.error {
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  width: 100%;

  > :first-of-type {
    border-bottom: 1px solid var(--border-secondary-color);
    padding-bottom: 8px;
    font-size: 1rem;
  }
  p {
    margin: 4px 0;
  }
}

.result {
  border: 1px solid #4caf50;
  background-color: #e8f5e9;
  color: #2e7d32;
}

.error {
  border: 1px solid #f44336;
  background-color: #ffebee;
  color: #c62828;
}

.controls {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  .v-btn {
    text-transform: none;
    letter-spacing: 0;
    color: var(--fg-primary-color);
    width: 30%;
  }
  .action-btn {
    background-color: var(--bg-accent-color);
    text-transform: none;
    min-width: 100px;
    border: 1px solid var(--border-button-secondary-color);
  }
}

@include mobile() {
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;

    .settings {
      left: 5px;
      top: 5px;
    }
  }

  .title {
    margin-top: 10px;
    font-size: 1rem;
  }

  .instruction {
    font-size: 0.9rem;
  }

  .controls {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    .v-btn {
      text-transform: none;
      letter-spacing: 0;
      width: 100%;
    }
  }
}
</style>

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/card-queue.ts ---

function useCardQueue<T>(initialWords: T[]) {
  const queue = ref(shuffle(initialWords))
  const currentCard = computed(() => queue.value[0])

  function shuffle<T>(array: T[]) {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }

    return shuffledArray
  }

  function markAsKnown() {
    queue.value.shift()
  }

  function markForRepeat() {
    const card = queue.value.shift()
    if (card) {
      queue.value.push(card)
    }
  }

  function resetQueue() {
    queue.value = [...initialWords]
  }

  function shuffleQueue() {
    queue.value = shuffle(queue.value)
  }

  return {
    queue,
    currentCard,
    markAsKnown,
    markForRepeat,
    resetQueue,
    shuffleQueue,
  }
}

export { useCardQueue }

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/index.ts ---

export * from './card-queue'
export * from './swipe-handler'

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/composables/swipe-handler.ts ---

import { computed, onUnmounted, ref } from 'vue'

type SwipeDirection = 'left' | 'right' | null
interface SwipeCallbacks {
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

function useSwipeHandler({ onSwipeLeft, onSwipeRight }: SwipeCallbacks) {
  const startX = ref(0)
  const currentX = ref(0)
  const isSwiping = ref(false)
  const swipeDirection = ref<SwipeDirection>(null)

  const cardStyle = computed(() => {
    if (!isSwiping.value)
      return {}

    const deltaX = currentX.value - startX.value
    const rotate = deltaX / 20
    const opacity = Math.max(1 - Math.abs(deltaX) / 500, 0.5)

    return {
      transform: `translateX(${deltaX}px) rotate(${rotate}deg)`,
      opacity,
      transition: isSwiping.value ? 'none' : 'all 0.3s ease',
    }
  })

  function handleStart(clientX: number) {
    startX.value = clientX
    currentX.value = clientX
    isSwiping.value = true
    swipeDirection.value = null
  }

  function handleMove(clientX: number) {
    if (!isSwiping.value)
      return

    currentX.value = clientX
    const deltaX = currentX.value - startX.value
    swipeDirection.value = deltaX > 0 ? 'right' : 'left'
  }

  function resetSwipe() {
    isSwiping.value = false
    startX.value = 0
    currentX.value = 0
    swipeDirection.value = null
  }

  function handleEnd() {
    if (!isSwiping.value)
      return

    const deltaX = currentX.value - startX.value
    if (Math.abs(deltaX) > 100) {
      deltaX > 0 ? onSwipeRight() : onSwipeLeft()
    }

    resetSwipe()
  }

  function onTouchStart(e: TouchEvent) {
    handleStart(e.touches[0].clientX)
  }

  function onTouchMove(e: TouchEvent) {
    handleMove(e.touches[0].clientX)
  }

  function onMouseMove(e: MouseEvent) {
    handleMove(e.clientX)
  }

  function onMouseUp() {
    handleEnd()
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  function onMouseDown(e: MouseEvent) {
    handleStart(e.clientX)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    const cancelHandler = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
    document.addEventListener('mouseleave', cancelHandler)
    onUnmounted(() => {
      document.removeEventListener('mouseleave', cancelHandler)
    })
  }

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  })

  return {
    cardStyle,
    swipeDirection,
    isSwiping,
    swipeHandlers: {
      touchstart: onTouchStart,
      touchmove: onTouchMove,
      touchend: handleEnd,
      mousedown: onMouseDown,
    },
  }
}

export { useSwipeHandler }

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice-quize/key-practice-quize.vue ---

<script setup lang="ts">
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { useCardQueue, useSwipeHandler } from './composables'

interface Props {
  items: HieroglyphKey[]
}

const props = defineProps<Props>()
const isFullscreen = defineModel<boolean>('fullscreen', { required: true, default: false })

const { currentCard, markAsKnown, markForRepeat } = useCardQueue<HieroglyphKey>(props.items)
const { cardStyle, swipeDirection, isSwiping, swipeHandlers } = useSwipeHandler({
  onSwipeLeft: handleKnow,
  onSwipeRight: handleRepeat,
})

const showDetails = ref(false)
const lastAction = ref<'know' | 'repeat' | null>(null)
const contentEl = ref<HTMLElement>()

function handleKnow() {
  lastAction.value = 'know'
  showDetails.value = true
}

function handleRepeat() {
  lastAction.value = 'repeat'
  showDetails.value = true
}

function handleContinue() {
  if (!currentCard.value)
    return

  if (lastAction.value === 'know') {
    markAsKnown()
  }
  else if (lastAction.value === 'repeat') {
    markForRepeat()
  }

  showDetails.value = false
  lastAction.value = null
}

const cardClass = computed(() => ({
  'card--swiping': isSwiping.value,
  'card--swipe-left': swipeDirection.value === 'left',
  'card--swipe-right': swipeDirection.value === 'right',
}))
</script>

<template>
  <div ref="contentEl" class="quiz-container" :class="{ isFullscreen: fullscreen }">
    <Transition name="card" mode="out-in">
      <div
        v-if="currentCard && !showDetails"
        class="card"
        :class="cardClass"
        :style="cardStyle"
        v-on="swipeHandlers"
      >
        <div class="card-content">
          <div class="card-glyph">
            {{ currentCard.glyph }}
          </div>
          <div class="card-actions">
            <v-btn
              variant="tonal"
              class="btn btn--repeat"
              color="red"
              @click="handleRepeat"
            >
              Забыл
            </v-btn>
            <v-btn
              variant="tonal"
              class="btn btn--know"
              color="green"
              @click="handleKnow"
            >
              Знаю
            </v-btn>
          </div>
        </div>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="showDetails" class="card-details">
        <div class="card-details-content">
          <h2 class="card-details-glyph">
            {{ currentCard?.glyph }}
          </h2>

          <div class="card-details-pinyin">
            <PinyinText
              :pinyin="currentCard.pinyin"
              :tone="{
                index: currentCard.toneIndex,
                type: currentCard.toneType as ToneType,
              }"
            />
          </div>
          <div class="card-details-translation">
            <p>{{ currentCard?.transcription }}</p>
          </div>
        </div>
        <v-btn
          variant="tonal"
          class="btn btn--continue"
          @click="handleContinue"
        >
          Продолжить
        </v-btn>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="!currentCard" class="empty">
        Все карточки пройдены! 🎉
      </div>
    </Transition>

    <v-btn
      v-if="!!fullscreen"
      icon
      variant="text"
      class="fullscreen"
      @click="isFullscreen = !isFullscreen"
    >
      <Icon
        name="mdi:fullscreen"
        size="32"
      />
    </v-btn>

    <ClientOnly>
      <HaoticLines
        v-if="fullscreen"
        class="haotic-lines"
        :speed="2"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.haotic-lines {
  opacity: 0.1;
}
.quiz-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 64px;
  width: 100%;
  height: 100%;

  &.isFullscreen {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    margin: 0;
    background-color: var(--bg-primary-color);
    align-items: center;

    .card-details,
    .card {
      max-width: 600px;
      max-height: 600px;
      z-index: 10;
      aspect-ratio: 1 / 1;
      border-radius: 0;
    }
  }
}

.fullscreen {
  position: absolute;
  right: 4px;
  top: 4px;
  color: var(--fg-tertiary-color);
  z-index: 10;
}

.card {
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  max-width: 500px;
  max-height: 500px;
  position: relative;
  background:
    radial-gradient(ellipse at top, var(--bg-accent-color), var(--bg-secondary-color)),
    radial-gradient(ellipse at bottom, var(--bg-secondary-color), var(--bg-secondary-color));
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    z-index: 2;
  }

  &-glyph {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-actions {
    display: flex;
    justify-content: space-between;

    .btn {
      text-transform: none;
      width: 45%;
      font-size: 0.9rem;
    }
  }

  &--swiping {
    cursor: grabbing;
  }

  &--swipe-left {
    background: linear-gradient(45deg, var(--bg-error-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-error-color);
    border: 1px solid var(--bg-error-color);
  }

  &--swipe-right {
    background: linear-gradient(-45deg, var(--bg-success-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-success-color);
    border: 1px solid var(--bg-success-color);
  }
}

.card-details {
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 4px;
  }

  &-glyph {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-pinyin {
    font-size: 1.4rem;
    text-align: center;
    color: var(--fg-secondary-color);
    font-family: var(--font-family-cn);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px dashed var(--border-secondary-color);

    > div {
      margin: 4px;
    }
  }

  &-translation {
    color: var(--fg-primary-color);
    font-weight: 1rem;
    font-family: 'Rubik';
    text-align: center;
  }

  .btn {
    text-transform: none;
    font-size: 0.9rem;
  }
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.card-leave-to {
  opacity: 0;

  &.card--swipe-left {
    transform: translateX(-100px) rotate(-15deg);
  }

  &.card--swipe-right {
    transform: translateX(100px) rotate(15deg);
  }
}
</style>

--- File: app/components/05.modules/keys/ui/keys-practice/keys-practice.vue ---

<script lang="ts" setup>
import KeyHieroglyphPracticeDraw from './keys-practice-draw/keys-practice-draw.vue'
import KeyHieroglyphPracticeQuize from './keys-practice-quize/key-practice-quize.vue'

interface Props {
  items: HieroglyphKey[]
}

type Mode = 'quize' | 'draw'

defineProps<Props>()

const isFullscreen = ref<boolean>(false)
const mode = ref<Mode>('quize')

function handleChangeMode(value: Mode) {
  mode.value = value
}
</script>

<template>
  <div class="practice">
    <div class="practice-content">
      <KeyHieroglyphPracticeQuize
        v-if="mode === 'quize'"
        v-model:fullscreen="isFullscreen"
        :items="items"
      />
      <KeyHieroglyphPracticeDraw
        v-if="mode === 'draw'"
        v-model:fullscreen="isFullscreen"
        :items="items"
      />
    </div>

    <v-tooltip
      v-if="mode === 'quize'"
      location="top"
      text="Перейти в режим рисования иероглифов"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="practice-button-mode"
          rounded
          variant="tonal"
          @click="handleChangeMode('draw')"
        >
          <span>Рисование</span>
          <v-icon>mdi-draw</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip
      v-if="mode === 'draw'"
      location="top"
      text="Перейти в режим квиза"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="practice-button-mode"
          rounded
          variant="tonal"
          @click="handleChangeMode('quize')"
        >
          <span>Квиз</span>
          <v-icon>mdi-draw</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.practice {
  max-width: 1200px;
  margin: 0 auto;

  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 600px;

    @include mobile {
      min-height: auto;
    }
  }

  &-button-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    text-transform: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--fg-secondary-color);
    width: auto;
    margin: 0 auto;
    padding: 0 32px;
    margin-top: 64px;

    &:hover {
      opacity: 1;
    }

    :first-of-type {
      margin-right: 8px;
    }

    @include mobile {
      font-size: 0.75rem;
    }
  }
}
</style>

--- File: app/components/05.modules/linguistic-analysis-history/composable/index.ts ---

export * from './linguistic-analysis-list'

--- File: app/components/05.modules/linguistic-analysis-history/composable/linguistic-analysis-list.ts ---

import { computed, ref, watch } from 'vue'

const ITEMS_PER_PAGE_DEFAULT = 20 // Значение по умолчанию для количества элементов на странице
const VISIBLE_PAGES = 7 // Количество видимых страниц в пагинации для десктопа
const MOBILE_VISIBLE_PAGES = 3 // Количество видимых страниц для мобильных
const KEY = `linguisticAnalysisHistory`

export async function useLinguisticAnalysisList() {
  const page = ref<number>(1)
  const limit = ref<number>(ITEMS_PER_PAGE_DEFAULT)

  const { api } = useApi()
  const { isMobile } = useDevice()

  const { data, error, status, refresh } = await useAsyncData(
    KEY,
    () => api.linguisticAnalysis.v1.historyList({
      page: page.value,
      limit: limit.value,
    }),
  )

  const isLoading = computed(() => status.value === 'pending')

  const totalPages = computed(() => {
    const total = data.value?.pagination?.total ?? 0
    const currentLimit = limit.value
    return total > 0 && currentLimit > 0 ? Math.ceil(total / currentLimit) : 0
  })

  watch([page, limit], () => {
    refresh()
  }, { immediate: false })

  return {
    VISIBLE_PAGES,
    MOBILE_VISIBLE_PAGES,
    isLoading,
    page,
    limit,
    isMobile,
    data,
    totalPages,
    error,
    refresh,
  }
}

--- File: app/components/05.modules/linguistic-analysis-history/index.ts ---

export * from './ui'

--- File: app/components/05.modules/linguistic-analysis-history/ui/index.ts ---

import LinguisticAnalysisHistory from './linguistic-analysis-history.vue'

export { LinguisticAnalysisHistory }

--- File: app/components/05.modules/linguistic-analysis-history/ui/linguistic-analysis-history.vue ---

<script setup lang="ts">
import PageLoader from '~/components/02.shared/page-loader/ui/page-loader.vue'
import { useLinguisticAnalysisList } from '../composable/linguistic-analysis-list'

const {
  VISIBLE_PAGES,
  MOBILE_VISIBLE_PAGES,
  page,
  isMobile,
  data,
  totalPages,
  isLoading,
} = await useLinguisticAnalysisList()

function formatDate(dateString: string | Date | undefined): string {
  if (!dateString)
    return 'N/A'
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString
    return date.toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })
  }
  catch (e) {
    console.error('Error formatting date:', dateString, e)
    return 'Invalid Date'
  }
}
</script>

<template>
  <section class="linguistic-analysis-page">
    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data?.length" class="analysis-list-container">
      <div class="analysis-list">
        <v-card
          v-for="item in data.data"
          :key="item.id"
          class="analysis-item"
          variant="tonal"
        >
          <v-card-text>
            <p><strong>Символ:</strong> {{ item.glyph }}</p>
            <p><strong>Исходный текст:</strong> {{ item.sourceValue }}</p>
            <p><strong>Тип:</strong> {{ item.type }}</p>
            <p><strong>Модель:</strong> {{ item.model }}</p>
            <p><strong>Токены:</strong> {{ item.totalTokens }}</p>
            <p><strong>Время генерации (мс):</strong> {{ item.generationDuration }}</p>
            <p><strong>Создано:</strong> {{ formatDate(item.createdAt) }}</p>
            <p><strong>Тип данных:</strong> {{ item.dataType }}</p>
          </v-card-text>
        </v-card>
      </div>

      <VPagination
        v-if="totalPages > 1"
        v-model="page"
        :length="totalPages"
        :total-visible="isMobile ? MOBILE_VISIBLE_PAGES : VISIBLE_PAGES"
        class="pagination-controls"
        color="primary"
        density="comfortable"
      />
    </div>

    <div v-else class="empty">
      <NuxtImg
        width="200"
        height="200"
        src="/images/not-found.gif"
      />
      <span v-if="data?.data">
        Ошибка получения данных :(
      </span>
      <span v-else>
        Ничего не найдено :(
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.linguistic-analysis-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  .analysis-list-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .analysis-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 1rem;
  }

  .analysis-item {
    p {
      display: flex;
      margin-bottom: 4px;
      font-size: 0.9rem;

      strong {
        margin-right: 0.5em;
        color: var(--v-theme-primary);
      }
    }
  }

  &:deep(.v-pagination__list) {
    .v-btn {
      color: var(--fg-accent-color) !important;
    }
  }

  .empty {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 0;

    > img {
      box-shadow: 0 0 30px var(--bg-error-color);
      border: 2px solid var(--border-primary-color);
      border-radius: 8px;
    }

    > span {
      margin: 0 auto;
      font-size: 1.2rem;
      margin-top: 24px;
      color: var(--fg-secondary-color) !important;
    }
  }
  .loader {
    margin-top: 100px;
  }
}
</style>

--- File: app/components/05.modules/linguistic-analysis/composable/index.ts ---

export * from './linguistic-analysis-content'

--- File: app/components/05.modules/linguistic-analysis/composable/linguistic-analysis-content.ts ---

enum RequestKeys {
  ANALYZE_TEXT = 'linguistic-analysis_analyze-text',
}

type LinguisticAnalysisDataType = 'json' | 'strictMarkdown' | 'markdown'

interface LinguisticAnalysisContentControl {
  value: string
  model: string
  dataType: LinguisticAnalysisDataType
}

function useLinguisticAnalysisContent() {
  const analyzedText = ref<LlmLinguisticAnalysis | null>(null)
  const analyzedTextMd = ref<string | null>(null)

  const control = ref<LinguisticAnalysisContentControl>({
    value: '',
    model: 'google/gemini-2.0-flash-001',
    dataType: 'json',
  })
  const abortController = ref<AbortController>(new AbortController())

  const resetAbortController = () => {
    if (!abortController.value.signal.reason) {
      abortController.value.abort()
      abortController.value = new AbortController()
    }
  }

  const analyze = async () => {
    resetAbortController()

    if (control.value.dataType === 'json') {
      analyzedText.value = null
      await useRequest({
        key: RequestKeys.ANALYZE_TEXT,
        fn: ({ api }) => api.llm.v1.analyzeText({
          value: control.value.value,
          model: control.value.model,
        }, abortController.value),
        onSuccess: ({ data }) => analyzedText.value = data,
      })
    }
    else {
      analyzedTextMd.value = null
      await useRequest({
        key: RequestKeys.ANALYZE_TEXT,
        fn: ({ api }) => api.llm.v1.analyzeTextFlat({
          value: control.value.value,
          model: control.value.model,
          isTemplate: control.value.dataType === 'strictMarkdown',
        }, abortController.value),
        onSuccess: ({ data }) => analyzedTextMd.value = data,
      })
    }
  }
  const isAnalyzedText = computed(() => (
    control.value.dataType === 'json' ? !!analyzedText.value : !!analyzedTextMd.value
  ))
  const isLoadingSubmit = computed(() => useRequestStatus([RequestKeys.ANALYZE_TEXT]))
  const errorSubmit = computed(() => useRequestError(RequestKeys.ANALYZE_TEXT))

  onUnmounted(() => resetAbortController())

  return {
    analyze,
    analyzedText,
    analyzedTextMd,
    control,
    isLoadingSubmit,
    isAnalyzedText,
    errorSubmit,
  }
}

export { useLinguisticAnalysisContent }
export type { LinguisticAnalysisContentControl, LinguisticAnalysisDataType }

--- File: app/components/05.modules/linguistic-analysis/constant/index.ts ---

export * from './meta'
export * from './position-translations'
export * from './role-translations'

--- File: app/components/05.modules/linguistic-analysis/constant/meta.ts ---

const typeCopmonentMappingForControl = {
  Json: 'Шаблонный',
  StrictMarkdown: 'Markdown',
  Markdown: 'Полотно',
}

const typeSplitMapping = {
  0: 'json',
  1: 'strictMarkdown',
  2: 'markdown',
}

export {
  typeCopmonentMappingForControl,
  typeSplitMapping,
}

--- File: app/components/05.modules/linguistic-analysis/constant/position-translations.ts ---

const positionTranslations: Record<string, string> = {
  'left': 'Слева',
  'right': 'Справа',
  'top': 'Сверху',
  'bottom': 'Снизу',
  'full-surround': 'Полное окружение',
  'top-surround': 'Верхнее окружение',
  'bottom-surround': 'Нижнее окружение',
  'left-surround': 'Левое окружение',
  'overlaid': 'Накладываемый',
  'center': 'Центр',
  'inside': 'Внутри',
  'diagonal': 'Диагональ',
  'top-left': 'Верхний левый',
  'top-right': 'Верхний правый',
  'bottom-left': 'Нижний левый',
  'bottom-right': 'Нижний правый',
  'cross': 'Перекрестие',
  'floating': 'Плавающий',
}

export { positionTranslations }

--- File: app/components/05.modules/linguistic-analysis/constant/role-translations.ts ---

const roleTranslations: Record<string, string> = {
  'semantic': 'Семантический',
  'phonetic': 'Фонетический',
  'empty-sign': 'Пустой знак',
  'differentiator': 'Дифференциатор',
  'structural': 'Структурный',
  'pictographic': 'Пиктографический',
  'compound-semantic': 'Составной семантический',
  'loan-component': 'Заимствованный компонент',
  'semantic-phonetic': 'Семантико-фонетический',
  'radical-variant': 'Вариант радикала',
  'orthographic-marker': 'Орфографический маркер',
  'semantic-corrupt': 'Искажённый семантический',
  'component-fusion': 'Слияние компонентов',
  'pseudo-component': 'Псевдокомпонент',
  'ornamental': 'Декоративный',
}

export { roleTranslations }

--- File: app/components/05.modules/linguistic-analysis/index.ts ---

export * from './ui'

--- File: app/components/05.modules/linguistic-analysis/ui/index.ts ---

import LinguisticAnalysis from './linguistic-analysis.vue'

export { LinguisticAnalysis }

--- File: app/components/05.modules/linguistic-analysis/ui/linguistic-analysis.vue ---

<script setup lang="ts">
import { computed, ref } from 'vue'
import { linguisticAnalysisMdMock, linguisticAnalysisMock, linguisticAnalysisStrictMdMock } from '~/../server/utils/mock/linguistic-analysis'
import { PageLoader } from '~/components/02.shared/page-loader'
import { useLinguisticAnalysisContent } from '../composable'

import AnalysisViewerMd from './sections/analysis-viewer-md.vue'
import AnalysisViewer from './sections/analysis-viewer.vue'
import Control from './sections/control.vue'
import ExampleBtn from './sections/example-btn.vue'

const isExample = ref(false)

const {
  analyzedText,
  analyzedTextMd,
  analyze,
  control,
  isLoadingSubmit,
  isAnalyzedText,
  errorSubmit,
} = useLinguisticAnalysisContent()

// Computed properties для условий отображения
const showAnalysisViewer = computed(() => (!!analyzedText.value || isExample.value) && control.value.dataType === 'json')
const showAnalysisViewerMd = computed(() => !!analyzedTextMd.value || isExample.value)

// Mock контент для примера
const analysisViewerContent = computed(() => ((isExample.value && !analyzedText.value) ? linguisticAnalysisMock : analyzedText.value) as LlmLinguisticAnalysis)
const analysisViewerMdContent = computed(() => ((isExample.value && !analyzedTextMd.value)
  ? control.value.dataType === 'strictMarkdown' ? linguisticAnalysisStrictMdMock : linguisticAnalysisMdMock
  : analyzedTextMd.value) as string)
</script>

<template>
  <div class="content">
    <Control
      v-model="control"
      :disabled="isLoadingSubmit"
      @submit="analyze"
    />
    <ExampleBtn
      v-model="isExample"
      :is-hidden="isAnalyzedText || isLoadingSubmit"
    />

    <PageLoader v-if="isLoadingSubmit" />

    <AnalysisViewer
      v-else-if="showAnalysisViewer"
      :content="analysisViewerContent "
    />
    <AnalysisViewerMd
      v-else-if="showAnalysisViewerMd"
      :content="analysisViewerMdContent "
    />

    <VSnackbar
      :model-value="!!errorSubmit"
      :timeout="2000"
      color="red"
    >
      <div>
        {{ errorSubmit?.message }}
      </div>
    </VSnackbar>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>

--- File: app/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer-md.vue ---

<script setup lang="ts">
import { MarkdownContent } from '~/components/02.shared/markdown-content'

interface Props {
  content: string
}

defineProps<Props>()
</script>

<template>
  <div class="linguistic-analysis-md">
    <MarkdownContent
      :content="content"
    />
  </div>
</template>

<style scoped lang="scss">
.linguistic-analysis-md {
  margin: 0;
}
</style>

--- File: app/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer.vue ---

<script setup lang="ts">
import { parseStringPinyin, PinyinText } from '~/components/03.domain/pinyin-text'
import { positionTranslations, roleTranslations } from '../../constant'

interface Props {
  content: LlmLinguisticAnalysis
}

defineProps<Props>()
</script>

<template>
  <div class="linguistic-analysis">
    <div v-for="(sentence, sIndex) in content.sentences" :key="sIndex" class="sentence">
      <!-- Sentence Header -->
      <div class="sentence-header">
        <div class="glyph-block">
          {{ sentence.glyph }}
        </div>
        <div class="pinyin-block">
          <div v-for="(p, pIndex) in parseStringPinyin(sentence.pinyin)" :key="pIndex">
            <PinyinText
              :pinyin="p.syllable"
              :tone="{
                index: p.position,
                type: p.tone,
              }"
            />
          </div>
        </div>
        <div class="translation-block">
          {{ sentence.translate }}
        </div>
        <div class="transcription-block">
          ({{ sentence.transcription }})
        </div>
      </div>

      <!-- Sentence Additional -->
      <div>
        <!-- Sentence Structure -->
        <details class="collapsible">
          <summary>
            <div>Структура предложения</div>
          </summary>
          <div class="collapsible-content">
            <div class="collapsible-card">
              <div class="collapsible-card-header">
                {{ sentence.structure.description }}
              </div>
            </div>
          </div>
        </details>

        <!-- Grammar Rules -->
        <details class="collapsible">
          <summary>
            <div>Грамматические правила</div>
            <div>({{ sentence.grammarRules?.length }})</div>
          </summary>
          <div class="collapsible-content">
            <div v-for="(rule, rIndex) in sentence.grammarRules" :key="rIndex" class="collapsible-card">
              <div class="collapsible-card-header">
                {{ rule.description }}
              </div>
              <p v-if="rule.example" class="collapsible-card-desc">
                Пример: {{ rule.example }}
              </p>
            </div>
          </div>
        </details>
      </div>

      <!-- Components -->
      <div class="components">
        <h3 class="components-header">
          Составные элементы
        </h3>
        <template v-for="(component, cIndex) in sentence.components" :key="cIndex">
          <div class="component">
            <!-- Hieroglyph Component -->
            <div v-if="component.type === 'hieroglyph'" class="hieroglyph">
              <div class="component-header">
                <div class="main-info">
                  <span class="glyph">{{ component.glyph }}</span>
                  <div class="pinyin-translation">
                    <div class="pinyin-translation-pinyin">
                      <div v-for="(p, pIndex) in parseStringPinyin(component.pinyin)" :key="pIndex">
                        <PinyinText
                          :pinyin="p.syllable"
                          :tone="{
                            index: p.position,
                            type: p.tone,
                          }"
                        />
                      </div>
                    </div>
                    <div class="pinyin-translation-translation">
                      {{ component.translate }}
                    </div>
                  </div>
                </div>
                <span class="part-of-speech">{{ component.partOfSpeech }}</span>
              </div>

              <div class="details-grid">
                <div class="detail-item">
                  <span class="detail-label">Черт:</span>
                  <span class="detail-desc">{{ component.strokeCount }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Этимология:</span>
                  <span class="detail-desc">{{ component.etymology }}</span>
                </div>
                <div class="detail-item full-width">
                  <span class="detail-label">Мнемоника:</span>
                  <span class="detail-desc">{{ component.mnemonic }}</span>
                </div>
              </div>

              <!-- Grammar & Hints -->
              <div class="sub-sections">
                <details v-if="component.grammarRules?.length" class="collapsible">
                  <summary>
                    <div>Грамматика</div>
                    <div>({{ component.grammarRules.length }})</div>
                  </summary>
                  <div class="collapsible-content">
                    <div v-for="(rule, rIndex) in component.grammarRules" :key="rIndex" class="collapsible-card">
                      <div class="collapsible-card-header">
                        {{ rule.description }}
                      </div>
                      <p v-if="rule.example" class="collapsible-card-desc">
                        Пример: {{ rule.example }}
                      </p>
                    </div>
                  </div>
                </details>

                <details v-if="component.hints?.length" class="collapsible">
                  <summary>
                    <div>Особенности</div>
                    <div>({{ component.hints.length }})</div>
                  </summary>
                  <div class="collapsible-content">
                    <ul>
                      <li v-for="(hint, hIndex) in component.hints" :key="hIndex">
                        {{ hint }}
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <!-- Keys -->
              <div v-if="component.keys?.length" class="keys-section">
                <h4 class="keys-section-header">
                  Составные ключи
                </h4>
                <div v-for="(key, kIndex) in component.keys" :key="kIndex" class="key-block">
                  <div class="key-header">
                    <div class="key-meta">
                      <div class="key-glyph">
                        {{ key.glyph }}
                      </div>
                      <span class="key-pinyin">
                        <div v-for="(p, pIndex) in parseStringPinyin(key.pinyin)" :key="pIndex">
                          <PinyinText
                            :pinyin="p.syllable"
                            :tone="{
                              index: p.position,
                              type: p.tone,
                            }"
                          />
                        </div>
                      </span>
                      <span v-if="key.translate" class="key-translation">- {{ key.translate }}</span>
                    </div>
                    <div class="key-tags">
                      <span class="key-position">{{ positionTranslations[key.position] ?? key.position }}</span>
                      <span class="key-role">{{ roleTranslations[key.role] ?? key.role }}</span>
                    </div>
                  </div>
                  <div v-if="key.keyInfo" class="kangxi-info">
                    Канси #{{ key.keyInfo.number }} ({{ key.keyInfo.name }}),
                    Частота: {{ key.keyInfo.frequencyRank }}
                  </div>
                  <span v-if="key.keyInfo?.variants?.length" class="key-variants">
                    Варианты написания:
                    <span v-for="glyph in key.keyInfo.variants" :key="glyph" class="key-variants-glyph">
                      {{ glyph }}
                    </span>
                  </span>
                  <span v-if="key.description" class="key-description"> > {{ key.description }}</span>
                </div>
              </div>
            </div>

            <!-- Word Component -->
            <div v-else-if="component.type === 'word'" class="word">
              <div class="component-header">
                <div class="main-info">
                  <span class="glyph">{{ component.glyph }}</span>
                  <div class="pinyin-translation">
                    <div class="pinyin-translation-pinyin">
                      <div v-for="(p, pIndex) in parseStringPinyin(component.pinyin)" :key="pIndex">
                        <PinyinText
                          :pinyin="p.syllable"
                          :tone="{
                            index: p.position,
                            type: p.tone,
                          }"
                        />
                      </div>
                    </div>
                    <div class="pinyin-translation-translation">
                      {{ component.translate }}
                    </div>
                  </div>
                </div>
                <span class="part-of-speech">{{ component.partOfSpeech }}</span>
              </div>

              <!-- Nested Hieroglyphs -->
              <div class="nested-hieroglyphs">
                <div v-for="(hieroglyph, hIndex) in component.hieroglyphs" :key="hIndex" class="hieroglyph nested">
                  <!-- Повтор структуры для иероглифа -->
                  <div class="component-header">
                    <div class="main-info">
                      <span class="glyph">{{ hieroglyph.glyph }}</span>
                      <div class="pinyin-translation">
                        <div class="pinyin-translation-pinyin">
                          <div v-for="(p, pIndex) in parseStringPinyin(hieroglyph.pinyin)" :key="pIndex">
                            <PinyinText
                              :pinyin="p.syllable"
                              :tone="{
                                index: p.position,
                                type: p.tone,
                              }"
                            />
                          </div>
                        </div>
                        <div class="pinyin-translation-translation">
                          {{ hieroglyph.translate }}
                        </div>
                      </div>
                    </div>
                    <span class="part-of-speech">{{ hieroglyph.partOfSpeech }}</span>
                  </div>

                  <div class="details-grid">
                    <div v-if="hieroglyph.strokeCount" class="detail-item">
                      <span class="detail-label">Черт:</span>
                      <span class="detail-desc">{{ hieroglyph.strokeCount }}</span>
                    </div>
                    <div v-if="hieroglyph.etymology" class="detail-item">
                      <span class="detail-label">Этимология:</span>
                      <span class="detail-desc">{{ hieroglyph.etymology }}</span>
                    </div>
                    <div v-if="hieroglyph.mnemonic" class="detail-item full-width">
                      <span class="detail-label">Мнемоника:</span>
                      <span class="detail-desc">{{ hieroglyph.mnemonic }}</span>
                    </div>
                  </div>

                  <!-- Grammar & Hints -->
                  <div class="sub-sections">
                    <details v-if="hieroglyph.grammarRules?.length" class="collapsible">
                      <summary>
                        <div>Грамматика</div>
                        <div>({{ hieroglyph.grammarRules.length }})</div>
                      </summary>
                      <div class="collapsible-content">
                        <div v-for="(rule, rIndex) in hieroglyph.grammarRules" :key="rIndex" class="collapsible-card">
                          <div class="collapsible-card-header">
                            {{ rule.description }}
                          </div>
                          <p v-if="rule.example" class="collapsible-card-desc">
                            Пример: {{ rule.example }}
                          </p>
                        </div>
                      </div>
                    </details>

                    <details v-if="hieroglyph.hints?.length" class="collapsible">
                      <summary>
                        <div>Особенности</div>
                        <div>({{ hieroglyph.hints.length }})</div>
                      </summary>
                      <div class="collapsible-content">
                        <ul>
                          <li v-for="(hint, hhIndex) in hieroglyph.hints" :key="hhIndex">
                            {{ hint }}
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>

                  <!-- Keys for nested hieroglyph -->
                  <div v-if="hieroglyph.keys?.length" class="keys-section">
                    <h4 class="keys-section-header">
                      Составные ключи
                    </h4>
                    <div v-for="(key, kIndex) in hieroglyph.keys" :key="kIndex" class="key-block">
                      <div class="key-header">
                        <div class="key-meta">
                          <div class="key-glyph">
                            {{ key.glyph }}
                          </div>
                          <span class="key-pinyin">
                            <div v-for="(p, pIndex) in parseStringPinyin(key.pinyin)" :key="pIndex">
                              <PinyinText
                                :pinyin="p.syllable"
                                :tone="{
                                  index: p.position,
                                  type: p.tone,
                                }"
                              />
                            </div>
                          </span>
                          <span v-if="key.translate" class="key-translation">- {{ key.translate }}</span>
                        </div>
                        <div class="key-tags">
                          <span class="key-position">{{ positionTranslations[key.position] ?? key.position }}</span>
                          <span class="key-role">{{ roleTranslations[key.role] ?? key.role }}</span>
                        </div>
                      </div>
                      <div v-if="key.keyInfo" class="kangxi-info">
                        Канси #{{ key.keyInfo.number }} ({{ key.keyInfo.name }}),
                        Частота: {{ key.keyInfo.frequencyRank }}
                      </div>
                      <span v-if="key.keyInfo?.variants?.length" class="key-variants">
                        Варианты написания:
                        <span v-for="glyph in key.keyInfo.variants" :key="glyph" class="key-variants-glyph">
                          {{ glyph }}
                        </span>
                      </span>
                      <span v-if="key.description" class="key-description"> > {{ key.description }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="divider">
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sentence {
  background: var(--bg-primary-color);
  border-left: 2px solid var(--border-secondary-color);
  border-right: 2px solid var(--border-secondary-color);
  padding: 16px;

  @include mobile {
    border: none;
    padding: 2px;
  }

  &-header {
    text-align: center;
    margin-bottom: 24px;

    .glyph-block {
      line-height: normal;
      font-size: 48px;
      margin-bottom: 8px;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
    }

    .pinyin-block {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      .pinyin-tone {
        font-size: 1.4rem;
      }

      > div {
        margin: 4px;
        display: flex;
      }

      border-bottom: 2px dashed var(--border-secondary-color);
    }

    .translation-block {
      color: var(--fg-primary-color);
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 0.2px;
    }

    .transcription-block {
      color: var(--fg-tertiary-color);
      font-size: 14px;
    }
  }
}

.collapsible {
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 6px;
  margin: 8px 0;
  padding: 0 12px;

  @include mobile {
    padding: 0 6px;
  }

  &-content {
    margin-bottom: 8px;
    font-size: 1rem;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  &-card {
    margin: 12px 0;
    margin-top: 4px;
    padding: 12px;
    background: var(--bg-tertiary-color);
    border-left: 4px solid var(--border-accent-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @include mobile {
      margin: 6px 0;
    }

    &-header {
      display: flex;
      gap: 8px;
      color: var(--fg-action-color);
      font-style: italic;
      font-size: 1rem;

      @include mobile {
        font-size: 0.9rem;
      }
    }

    &-desc {
      font-size: 0.9rem;

      @include mobile {
        font-size: 0.8rem;
      }
    }
  }

  summary {
    padding: 8px 4px;
    cursor: pointer;
    color: var(--fg-accent-color);
    font-weight: 500;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
}

.details-grid {
  .detail-item {
    display: flex;
    margin: 4px 0;
    font-size: 0.9rem;

    @include mobile {
      flex-wrap: wrap;
      margin: 8px 0;
    }

    .detail-label {
      color: var(--fg-primary-color);
      font-weight: 400;
      margin-right: 8px;
    }

    .detail-desc {
      color: var(--fg-tertiary-color);
      font-weight: 300;
    }
  }
}

.divider {
  border: 2px dashed var(--border-secondary-color);
}

.components {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 2px dashed var(--border-secondary-color);

  &-header {
    color: var(--fg-tertiary-color);
    text-align: center;
  }

  .component {
    margin: 16px 0;
    padding: 16px;
    border-left: 2px solid var(--border-accent-color);

    @include mobile {
      padding: 8px;
    }

    .component-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;

      .main-info {
        display: flex;
        align-items: center;
        gap: 12px;

        .glyph {
          line-height: normal;
          font-size: 2rem;
          letter-spacing: 2px;
          font-weight: 500;
          padding: 2px 4px;
          border-radius: 5px;
          background: var(--bg-accent-color);
          box-shadow: inset 0 0 2px var(--border-accent-color);
          color: var(--fg-primary-color);
          font-family: var(--font-family-cn);
        }
      }

      .pinyin-translation {
        &-pinyin {
          font-size: 1em;
          display: flex;
          gap: 8px;
        }
        &-translation {
          color: var(--fg-tertiary-color);
          font-size: 1em;
        }
      }

      .part-of-speech {
        background: var(--bg-tertiary-color);
        color: var(--fg-tertiary-color);
        border: 1px solid var(--border-secondary-color);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        align-self: flex-start;

        @include mobile {
          font-size: 0.7em;
          padding: 2px 4px;
        }
      }
    }

    .sub-sections {
      margin-top: 16px;
    }
  }
}

//

.nested-hieroglyphs {
  padding-left: 16px;
  border-left: 2px solid var(--border-secondary-color);

  @include mobile {
    padding-left: 8px;
  }

  .hieroglyph {
    margin: 12px 0;
    padding: 12px 0;
    background: var(--bg-primary-color);
  }
}

.keys-section {
  margin-top: 32px;
  border-top: 2px dashed var(--border-secondary-color);

  &-header {
    margin-top: 16px;
    color: var(--fg-tertiary-color);
    text-align: center;
  }

  .kangxi-info {
    margin-top: 8px;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
  }

  .key-description {
    display: flex;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    margin-top: 4px;
  }

  .key-variants {
    margin-top: 8px;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    &-glyph {
      border-radius: 10px;
      text-align: center;
      min-width: 34px;
      min-height: 34px;
      letter-spacing: 2px;
      font-weight: 500;
      margin-left: 8px;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
    }
  }

  .key-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .key-tags {
      display: flex;
      gap: 6px;

      @include mobile {
        flex-direction: column;
      }

      > span {
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.75em;
      }

      .key-position {
        background: #e0f2fe;
        color: #0369a1;
        border: 1px solid var(--border-secondary-color);
      }
      .key-role {
        background: #f3e8ff;
        color: #6b21a8;
        border: 1px solid var(--border-secondary-color);
      }
    }

    .key-meta {
      display: flex;
      align-items: center;
      gap: 8px;

      .key-glyph {
        font-size: 1.2rem;
        border-radius: 10px;
        text-align: center;
        min-width: 34px;
        min-height: 34px;
        letter-spacing: 2px;
        font-weight: 500;
        padding: 2px 4px;
        border-radius: 5px;
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        color: var(--fg-primary-color);
        font-family: var(--font-family-cn);
      }
      .key-pinyin {
        color: var(--fg-secondary-color);
      }
      .key-translation {
        color: var(--fg-primary-color);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 0.2px;
      }
    }
  }

  .key-block {
    margin: 12px 0;
    padding: 4px 0;
    padding-left: 8px;
    background: var(--bg-primary-color);
    border-left: 2px solid var(--border-secondary-color);
  }
}

.tone {
  font-size: 0.8em;
  vertical-align: super;
  color: var(--fg-accent-color);
}
</style>

--- File: app/components/05.modules/linguistic-analysis/ui/sections/control.vue ---

<script setup lang="ts">
import type { LinguisticAnalysisContentControl, LinguisticAnalysisDataType } from '../../composable'
import { typeCopmonentMappingForControl, typeSplitMapping } from '~/components/05.modules/linguistic-analysis/constant'

defineProps<{ disabled: boolean }>()
const emits = defineEmits<{ submit: [any] }>()
const control = defineModel<LinguisticAnalysisContentControl>({ required: true })

const LLMs = [
  {
    title: 'AI HUB MIX',
    items: [
      'gemini-flash-latest',
      'gemini-flash-lite-latest',
      'Qwen3-VL-235B-A22B-Instruct',
      'Qwen3-Next-80B-A3B-Instruct',
    ],
  },
  {
    title: 'OPEN ROUTER',
    items: [
      'google/gemini-2.0-flash-001',
      'google/gemini-2.0-flash-lite-001',
    ],
  },
]

const formattedLLMs = ref(formatItems(LLMs))

function formatItems(items: any[]) {
  const result = []
  for (const group of items) {
    result.push({
      title: group.title,
      header: true,
      group: true,
    })
    for (const item of group.items) {
      result.push({
        value: item,
        title: item,
      })
    }
  }
  return result
}
const errors = ref<string[]>([])
const isError = ref<boolean>(false)

const btnToggleValue = computed(() => {
  return Object
    .entries(typeSplitMapping)
    .find(([_, value]) => value === control.value.dataType)?.[0]
})

function handleClickSubmit() {
  errors.value = []

  const payload = {
    value: control.value,
    model: control.value.model,
    dataType: control.value.dataType,
  }

  emits('submit', payload)
}

function updateBtnToggleValue(index?: unknown) {
  if (typeof index !== 'number')
    return

  control.value.dataType = Object
    .entries(typeSplitMapping)
    .find(([key, _]) => +key === +index)![1]! as LinguisticAnalysisDataType
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    handleClickSubmit()
  }
}
</script>

<template>
  <div class="control">
    <v-text-field
      v-model="control.value"
      :disabled="disabled"
      label="Текст для разбора (RU / CN)"
      variant="outlined"
      hide-details="auto"
      prepend-inner-icon="mdi-rhombus-split"
      @keydown="handleKeyDown"
    >
      <template #append-inner>
        <v-btn
          variant="plain"
          icon="mdi-cube-send"
          color="primary"
          @click="handleClickSubmit"
        />
      </template>
    </v-text-field>

    <v-select
      v-model="control.model"
      class="control-model"
      :disabled="disabled"
      density="compact"
      hide-details
      label="LLM модель"
      :items="formattedLLMs"
      item-title="title"
      item-value="value"
      variant="filled"
    >
      <template #selection="{ item }">
        {{ item.title }}
      </template>

      <template #item="{ item, props }">
        <v-list-item
          v-if="item.raw.header"
          density="compact"
          :title="item.raw.title"
          :disabled="true"
          class="group-header"
        />
        <v-list-item
          v-else
          density="compact"
          v-bind="props"
          :title="item.raw.title"
        />
      </template>
    </v-select>

    <div class="control-additional">
      <span>Выберите формат вывода для анализа.</span>
      <v-btn-toggle
        :disabled="disabled"
        divided
        variant="outlined"
        class="control-types"
        :model-value="btnToggleValue"
        @update:model-value="updateBtnToggleValue"
      >
        <v-btn v-for="type in typeCopmonentMappingForControl" :key="type">
          {{ type }}
        </v-btn>
      </v-btn-toggle>
    </div>

    <!-- <v-switch
      v-model="isMarkdown"
      :disabled="disabled"
      class="control-md"
      density="compact"
      label="Вывод в Markdown"
      color="var(--fg-accent-color)"
      hide-details
      append-icon="mdi-language-markdown"
    /> -->
  </div>
  <v-snackbar
    v-model="isError"
    :timeout="2000"
    color="red"
  >
    <div v-for="error in errors" :key="error">
      {{ error }}
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss">
.control {
  margin: 16px 0;
  border-left: 2px solid var(--border-secondary-color);
  border-right: 2px solid var(--border-secondary-color);
  padding: 10px 24px;

  @include mobile() {
    border: none;
    padding: 0;
  }

  &-model {
    margin-top: 8px;
    color: var(--fg-secondary-color);
    &:deep(.v-field) {
      border-radius: 4px;
    }
    &:deep(.v-field__outline) {
      display: none;
    }
  }

  > input {
    font-weight: 500;
  }

  &-md {
    margin-top: 8px;
    margin-left: 8px;
    color: var(--fg-secondary-color);
  }

  &-additional {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      color: var(--fg-tertiary-color);
      font-size: 0.9rem;
    }
    > div {
      margin-top: 4px;
    }
  }

  &-types {
    margin: 8px 0;
    width: 100%;
    :deep(.v-btn) {
      flex-grow: 1;
      color: var(--fg-primary-color);
      font-size: 0.8rem !important;

      @include mobile() {
        font-size: 0.7rem !important;
      }
    }
  }
}

.group-header {
  font-weight: bold;
  color: var(--fg-tertiary-color); /* Adjust color as needed */
  cursor: default; /* No pointer on hover */
  user-select: none; /* Prevent text selection */
}
</style>

--- File: app/components/05.modules/linguistic-analysis/ui/sections/example-btn.vue ---

<script setup lang="ts">
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

defineProps<{ isHidden: boolean }>()

const isExample = defineModel<boolean>({ default: false })
</script>

<template>
  <v-btn
    v-if="!isHidden"
    class="example-btn"
    rounded
    variant="tonal"
    @click="isExample = !isExample"
  >
    <span> {{ isExample ? 'Скрыть' : 'Показать' }} пример для </span>
    <HieroglyphWord
      :variant="0"
      glyph="打电话"
      translate="Привет"
      pinyin="ni hao"
    />
  </v-btn>
</template>

<style scoped lang="scss">
.example-btn {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-action-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;

  .hw-word {
    margin-left: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>

--- File: app/components/05.modules/pinyin/index.ts ---

import type { PinyinStore } from './store/pinyin.store'
import { usePinyinStore } from './store/pinyin.store'
import PinyinTable from './ui/pinyin-table.vue'

export type { PinyinStore }
export { PinyinTable, usePinyinStore }

--- File: app/components/05.modules/pinyin/store/pinyin.store.ts ---

import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

enum RequestKeys {
  ALL = 'pinyin_all',
  DESCRIPTION = 'pinyin_description',
}

//* --- State ----------------------------------------------- *//
interface PinyinState {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
  description: JsonToDomChildren
}

//* --- Store ----------------------------------------------- *//
export const usePinyinStore = defineStore('pinyin', {
  state: (): PinyinState => ({
    initials: [],
    finals: [],
    initialWithFinal: {} as InitialWithFinal,
    description: {} as JsonToDomChildren,
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.DESCRIPTION, RequestKeys.ALL]),
  },

  actions: {
    async getAndSetPinyin() {
      await useRequest({
        key: RequestKeys.ALL,
        fn: ({ api }) => api.pinyin.v1.all(),
        onSuccess: ({ data }) => {
          this.initials = data.initials
          this.finals = data.finals
          this.initialWithFinal = data.initialWithFinal
        },
      })
    },
    async getAndSetDescriptionKeys() {
      await useRequest({
        key: RequestKeys.DESCRIPTION,
        fn: ({ api }) => api.cms.v1.description({ sysname: 'pinyin' }),
        onSuccess: ({ data }) => this.description = data,
      })
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type PinyinStore = ReturnType<typeof usePinyinStore>

--- File: app/components/05.modules/pinyin/ui/dialog/pinyin-info.vue ---

<script lang="ts" setup>
import { Howl } from 'howler'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { PageLoader } from '~/components/02.shared/page-loader'
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { PinyinText } from '~/components/03.domain/pinyin-text'

interface Props {
  pinyin: string
  initialWithFinal: InitialWithFinal
}
const props = defineProps<Props>()

enum RequestKeys {
  PINIYIN_HIEROGLYPH = 'pinyin_pinyin-hieroglyphs',
}

const dialog = defineModel<boolean>({ required: true })
const dialogEl = ref<HTMLElement>()
const audio = ref<Howl | null>(null)
const abortController = ref<AbortController>(new AbortController())

const pinyinData = computed(() => {
  const pinyinSection = props.pinyin.split('+')

  return {
    value: pinyinSection.join(''),
    index: pinyinSection[0].length,
  }
})

const example = ref<PinyinHieroglyphs | null>(null)
const isLoadingExample = computed(() => useRequestStatus([RequestKeys.PINIYIN_HIEROGLYPH]))
const isExampleHidden = computed<boolean>(() => !!example.value || isLoadingExample.value)
const apiErrorExample = computed(() => useRequestError(RequestKeys.PINIYIN_HIEROGLYPH))

function playPinyin(value: string, tone: ToneType) {
  const track = `/chinese-pinyin-sound/${value}${tone}.mp3`

  if (audio.value) {
    audio.value.stop()
  }

  audio.value = new Howl({ src: [track] })
  audio.value.play()
}

function generateExample() {
  useRequest({
    key: RequestKeys.PINIYIN_HIEROGLYPH,
    fn: ({ api }) => api.llm.v1.pinyinHieroglyphs({
      pinyin: pinyinData.value.value,
      tones: props.initialWithFinal[props.pinyin] as ToneType[],
      count: 2,
    }, abortController.value),
    onSuccess: ({ data }) => example.value = data,
  })
}

function handleRefreshExample() {
  generateExample()
}

function resetExamples() {
  example.value = null
  abortController.value.abort()
  abortController.value = new AbortController()
}
</script>

<template>
  <ClientOnly>
    <DialogWithClose
      v-model="dialog"
      class="dialog"
      @after-leave="resetExamples"
    >
      <div ref="dialogEl" class="dialog-wrapper">
        <p class="title">
          Вариации и звучание слога
          <PinyinText
            :pinyin="pinyinData.value"
            :tone="{
              index: pinyinData.index,
              type: 0 as ToneType,
            }"
          />
        </p>

        <div class="content">
          <VBtn
            v-for="tone in initialWithFinal[pinyin]"
            :key="tone"
            variant="tonal"
            class="pinyin-btn"
            size="x-large"
            rounded="sm"
            @click="playPinyin(pinyinData.value, tone as ToneType)"
          >
            <PinyinText
              :pinyin="pinyinData.value"
              :tone="{
                index: pinyinData.index,
                type: tone as ToneType,
              }"
            />
          </VBtn>
        </div>

        <div class="example">
          <Transition name="smooth-appear" mode="out-in">
            <VBtn
              v-if="!isExampleHidden"
              class="example-btn"
              rounded
              variant="tonal"
              @click="generateExample"
            >
              Сгенерировать примеры иероглифов
            </VBtn>

            <PageLoader v-else-if="isLoadingExample" />

            <div v-else-if="!!example" class="example-content">
              <div class="example-content-control">
                <hr class="divider">
                <VBtn
                  icon
                  class="icon"
                  variant="plain"
                  density="compact"
                  @click="handleRefreshExample"
                >
                  <Icon name="mdi:refresh" size="24" />
                </VBtn>
              </div>
              <div class="example-content-list">
                <div
                  v-for="item in example?.examples"
                  :key="item.tone"
                  class="example-content-item"
                >
                  <HieroglyphWord
                    v-for="word in item.hieroglyphs"
                    :key="word.glyph"
                    :variant="5"
                    :translate="word.translate"
                    :glyph="word.glyph"
                    :pinyin="{
                      pinyin: word.pinyin,
                      tone: {
                        index: word.toneIndex,
                        type: word.toneType as ToneType,
                      },
                    }"
                  />
                </div>
              </div>
            </div>
          </Transition>
          <VSnackbar
            :model-value="!!apiErrorExample"
            :timeout="2000"
            color="red"
          >
            <div>
              {{ apiErrorExample?.message }}
            </div>
          </VSnackbar>
        </div>

        <HaoticLines :viewport-el="dialogEl" />
      </div>
    </DialogWithClose>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dialog {
  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 32px;

    .title {
      z-index: 10;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin-bottom: 24px;
      font-family: 'Rubik';
      line-height: 19px;
      font-size: 1.1rem;
      color: var(--fg-secondary-color);
      font-weight: 500;
      background: transparent;
      border-bottom: 2px solid var(--border-button-secondary-color);
      padding-bottom: 12px;

      @include mobile {
        font-size: 0.9rem;
      }

      .pinyin {
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        border-radius: 5px;
        padding: 4px 6px;
        font-size: 1.1rem;
        color: var(--fg-secondary-color);

        @include mobile {
          font-size: 0.9rem;
        }
      }
    }

    .content {
      gap: 24px;
      z-index: 10;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-self: center;

      :deep(.pinyin) {
        font-size: 1.2rem;
        letter-spacing: 0;
      }

      @include mobile {
        display: flex;
        flex-direction: column;
      }

      .pinyin-btn {
        background-color: var(--bg-accent-color);
        text-transform: none;
        min-width: 100px;
        width: 20%;
        border: 1px solid var(--border-button-secondary-color);
        box-shadow: 0 0 4px var(--bg-overlay-secondary-color);

        @include mobile {
          min-width: 150px;
        }
      }
    }

    .example {
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px;

      .loader {
        font-size: 36px;
      }
      &-content {
        width: 100%;

        &-control {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
          gap: 8px;

          .divider {
            width: 100%;
            border: 1px dashed var(--border-secondary-color);
          }
          .icon {
            display: flex;
            color: var(--fg-secondary-color);
          }
        }
        &-list {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          grid-template-columns: 1fr;

          @include mobile {
            display: flex;
            flex-direction: column;
          }
        }
        &-item {
          display: flex;
          @include mobile {
            flex-direction: column;
          }

          .word {
            width: 50%;

            @include mobile {
              width: 100%;
            }
          }
        }
      }

      &-btn {
        z-index: 10;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 1px;
        color: var(--fg-action-color);
        width: auto;
        margin: 0 auto;
        padding: 0 32px;
        font-size: 0.8rem;

        @include mobile {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>

--- File: app/components/05.modules/pinyin/ui/pinyin-table.vue ---

<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import PinyinInfo from './dialog/pinyin-info.vue'

interface HoveredPinyin {
  initial: Initial | null
  final: Final | null
}

interface Props {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
}

defineProps<Props>()

const hoveredPinyin = ref<HoveredPinyin>({
  final: null,
  initial: null,
})
const dialog = ref<boolean>(false)
const lastSelectedPinyin = ref<string>('')

const handleLeavePinyin = useDebounceFn((initial: Initial, final: Final) => {
  if (initial.id === hoveredPinyin.value.initial?.id
    && final.id === hoveredPinyin.value.final?.id
  ) {
    hoveredPinyin.value = { initial: null, final: null }
  }
}, 100)
function handleOverPinyin(initial: Initial, final: Final) {
  hoveredPinyin.value = { initial, final }
}
function handleClickPinyin(value: string) {
  lastSelectedPinyin.value = value
  dialog.value = true
}
</script>

<template>
  <div class="pinyin">
    <div class="pinyin-container">
      <div :style="{ gridRow: 1 }" class="pinyin-row__empty" />

      <template v-for="final in finals" :key="final.id">
        <div
          :style="{ gridRow: 1 }"
          class="pinyin-row__h"
          :class="{ highlight: hoveredPinyin.final?.id === final.id }"
        >
          {{ final.name }}
        </div>
      </template>

      <template v-for="initial in initials" :key="initial.id">
        <div
          :style="{ gridRow: initial.pos + 1 }"
          class="pinyin-row__v"
          :class="{ highlight: hoveredPinyin.initial?.id === initial.id }"
        >
          {{ initial.name }}
        </div>
        <div
          v-for="final in finals" :key="final.id"
          :style="{ gridRow: initial.pos + 1 }"
          class="pinyin-row"
          @mouseover="handleOverPinyin(initial, final)"
          @mouseleave="handleLeavePinyin(initial, final)"
        >
          <div
            v-if="initialWithFinal[`${initial.name}+${final.name}`]?.length"
            @click="handleClickPinyin(`${initial.name}+${final.name}`)"
          >
            {{ `${initial.name}${final.name}` }}
          </div>
          <div v-else class="pinyin-row__empty" />
        </div>
      </template>
    </div>

    <PinyinInfo
      v-model="dialog"
      :pinyin="lastSelectedPinyin"
      :initial-with-final
    />
  </div>
</template>

<style lang="scss" scoped>
.pinyin {
  padding: 5px;

  width: 100%;
  height: 100%;

  margin: 0px auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  &-container {
    max-width: 1800px;
    border-radius: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(36, 1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 1px;
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-primary-color);
  }
  &-row {
    background-color: var(--bg-tertiary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: var(--bg-action-hover-color);
      transition: background-color 0.2s ease-in;
    }

    &__h {
      transition: background-color 0.4s ease-out;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;

      &.highlight {
        background-color: var(--bg-overlay-secondary-color);
        transition: background-color 0.4s ease-in;
      }
    }

    &__v {
      transition: background-color 0.4s ease-out;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;

      &.highlight {
        background-color: var(--bg-overlay-secondary-color);
        transition: background-color 0.4s ease-in;
      }
    }

    &__empty {
      background-color: var(--bg-secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &-menu {
    &__content {
      color: var(--color-text-invert);
      padding: 15px;

      font-size: 1rem;
      background-color: var(--color-background-modal);
      width: 320px;
      max-height: 500px;
      height: 100%;
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      color: var(--color-text-invert);
      font-size: 2rem;
      border-bottom: 2px solid var(--border-primary-color);
      padding: 5px 0;
      margin-bottom: 10px;
    }

    &-tones {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;

      &__button {
        color: var(--color-text-invert);
        font-size: 1.3rem;
        background-color: var(--color-background-modal-content);
        border: 1px solid var(--border-primary-color);
        border-radius: 10px;
        padding: 5px 10px;
      }
    }
  }
}
</style>

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-catalog/index.ts ---

import ThematicDictionaryCatalog from './ui/catalog.vue'

export { ThematicDictionaryCatalog }

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-catalog/ui/catalog.vue ---

<script lang="ts" setup>
import { ThematicDictionaryCard } from '~/components/03.domain/thematic-dictionary/thematic-dictionary-card'

interface Props {
  sections: ThematicDictionaryData['catalog']
}

defineProps<Props>()
</script>

<template>
  <div class="thematic-dictionary-catalog">
    <h2>Тематический словарь</h2>
    <p>
      Этот тематический словарь предназначен для изучения основных слов и фраз по различным темам.
      Он поможет вам расширить свой словарный запас и улучшить навыки общения на разные темы, такие как беседа, путешествия и многое другое.
    </p>
    <div class="list">
      <ThematicDictionaryCard
        v-for="section in sections"
        :key="section.sysname"
        :navigate-url="RoutePaths.ThematicDictionary.Categories(section.sysname)"
        :sysname="section.sysname"
        :glyph="section.glyph"
        :name="section.name"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-catalog {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}
</style>

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/composables/controls.ts ---

const THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY = 'thematic_dictionary_category_control'

interface ThematicDictionaryCategoryControlValues {
  isFixedStyle: boolean
}

function useThematicDictionaryCategoryControls() {
  const controlValues = useCookie<ThematicDictionaryCategoryControlValues>(THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY)
  const controlMenu = ref(false)
  const controls = ref<ThematicDictionaryCategoryControlValues>(controlValues.value ?? { isFixedStyle: true })

  const toggleControl = (key: keyof ThematicDictionaryCategoryControlValues) => {
    const rawValues = { ...controlValues.value }
    rawValues[key] = !rawValues[key]
    controlValues.value = rawValues
    controls.value = rawValues
  }

  return {
    controlMenu,
    controls,
    toggleControl,
  }
}

export type { ThematicDictionaryCategoryControlValues }
export { useThematicDictionaryCategoryControls }

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/composables/index.ts ---

export * from './controls'

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/index.ts ---

import ThematicDictionaryCategory from './ui/category.vue'

export { ThematicDictionaryCategory }

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/category.vue ---

<script lang="ts" setup>
import type { IHieroglyphWordVariousProps } from '~/components/03.domain/hieroglyph-word'
import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { ThematicDictionaryBreadcrumbs } from '~/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs'
import Control from '~/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/control.vue'
import { useThematicDictionaryCategoryControls } from '../composables'
import DrawingControl from './dialog/drawing-control.vue'

interface Props {
  section: ThematicDictionarySection
  category: ThematicDictionaryCategory
  nextCategory: ThematicDictionaryCategory
}

const props = defineProps<Props>()
const isShowFullText = ref<boolean>(false)
const isDialogDrawing = ref<boolean>(false)
const { controlMenu, controls, toggleControl } = useThematicDictionaryCategoryControls()

const maxLines = 5

const content = computed<JsonToDomChildren>(() => {
  const content = toRaw(props.category.content)
  const isFixedStyle = controls.value.isFixedStyle

  if (Array.isArray(content.children)) {
    content.children = content.children.map((item) => {
      if (item.props && Object.hasOwn(item.props, 'variant'))
        item.props.variant = isFixedStyle ? 5 : null
      return item
    })
  }

  return content
})
const drawContent = computed<IHieroglyphWordVariousProps[]>(() => {
  const data = toRaw(props.category.content.children) as JsonToDomChildren[]

  return data.map(m => m.props) as unknown as IHieroglyphWordVariousProps[]
})
const isLongText = computed<boolean>(() => {
  const lines = props.category.description?.split('\n')

  return (lines?.length ?? 0) > maxLines
})
const breadcrumbs = computed(() => {
  const crumbs = [{ title: 'Секции', to: RoutePaths.ThematicDictionary.Sections }]

  if (props.section) {
    crumbs.push({
      title: props.section.name,
      to: RoutePaths.ThematicDictionary.Categories(props.section.sysname),
    })
  }
  if (props.section && props.category) {
    crumbs.push({
      title: props.category.name,
      to: RoutePaths.ThematicDictionary.Category(props.section.sysname, props.category.sysname),
    })
  }
  return crumbs
})
</script>

<template>
  <div class="thematic-dictionary-category">
    <ThematicDictionaryBreadcrumbs :items="breadcrumbs" />

    <div class="content">
      <div class="header">
        <h1>{{ category.name }}</h1>
        <div v-if="section.description" class="description">
          <p
            class="description-text"
            :class="{ truncated: !isShowFullText && isLongText }"
          >
            {{ category.description }}
          </p>
          <VBtn
            v-if="isLongText"
            rounded
            variant="plain"
            class="description-toggle-full"
            @click="isShowFullText = !isShowFullText"
          >
            {{ isShowFullText ? 'Скрыть' : 'Показать больше' }}
          </VBtn>
        </div>
      </div>

      <div class="tabs">
        <div class="settings">
          <VMenu
            v-model="controlMenu"
            :close-on-content-click="false"
          >
            <template #activator="{ props: menuProps }">
              <VBtn
                icon
                variant="text"
                v-bind="menuProps"
              >
                <Icon size="24" name="mdi-tune" />
              </VBtn>
            </template>

            <Control
              v-model="controls"
              @toggle-control="toggleControl"
            />
          </VMenu>

          <VBtn
            v-if="category.drawAllowed"
            icon="mdi-draw"
            variant="text"
            title="Тренировка прописи"
            @click="isDialogDrawing = !isDialogDrawing"
          />
          <DrawingControl
            v-model="isDialogDrawing"
            :items="drawContent"
          />
        </div>
      </div>

      <JsonToDom
        v-if="content"
        :node="content"
      />
    </div>

    <div v-if="nextCategory" class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        :to="RoutePaths.ThematicDictionary.Category(section.sysname, nextCategory.sysname)"
      >
        « {{ nextCategory.name }} »
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-category {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }

  .header {
    margin-top: 16px;
  }

  .tabs {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid var(--border-secondary-color);
    height: 48px;

    .settings {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      height: 48px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &-text {
      white-space: pre-line;
      position: relative;
      margin-top: 12px;

      &.truncated {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        line-clamp: 5;
        -webkit-box-orient: vertical;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3.5rem;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--bg-primary-color));
          pointer-events: none;
        }
      }
    }

    &-toggle-full {
      margin: 16px auto;
      text-transform: none;
      letter-spacing: 0;
      width: 320px;
      color: var(--fg-secondary-color);
    }
  }

  .list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    @include mobile {
      font-size: 0.9rem;

      &:deep(.hw-word) {
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
    }
  }
}

.navigate-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0;
  padding-top: 32px;
  margin-top: 16px;
  border-top: 2px dashed var(--border-button-secondary-color);
  gap: 8px;

  @include mobile() {
    font-size: 0.9rem;
    padding-left: 8px;
    padding-right: 8px;

    &:deep(.v-btn) {
      width: 100%;
    }
  }
  &-btn {
    background-color: var(--bg-accent-color);
    text-transform: none;
    letter-spacing: 0;
    border: 1px solid var(--border-button-secondary-color);
  }
}
</style>

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/control.vue ---

<script lang="ts" setup>
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'

type Controls = Record<any, unknown>

const emits = defineEmits<{ toggleControl: [keyof Controls] }>()
const control = defineModel<Controls>({ required: true })

const store = useStore(['hieroglyphWord'])

const controls: { key: keyof Controls, label: string }[] = [{
  key: 'isFixedStyle',
  label: 'Фиксированный стиль отображения',
}]

const controlledHieroglyphVariant = computed({
  get: () => store.hieroglyphWord.variant,
  set: (value: HieroglyphWordVariant) => store.hieroglyphWord.setVariant(value),
})
</script>

<template>
  <div class="controls">
    <div
      v-for="item in controls" :key="item.key"
      class="controls-item"
      :class="{ actived: control[item.key] }"
      @click="emits('toggleControl', item.key)"
    >
      <span class="controls-button">
        {{ item.label }}
      </span>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
    <v-btn-toggle
      v-model="controlledHieroglyphVariant"
      density="compact"
      variant="text"
      class="controls-item-grouped"
      color="var(--fg-action-color)"
      :disabled="!!control.isFixedStyle"
      mandatory
    >
      <v-btn class="group-item">
        1
      </v-btn>
      <v-btn class="group-item">
        2
      </v-btn>
      <v-btn class="group-item">
        3
      </v-btn>
      <v-btn class="group-item">
        4
      </v-btn>
      <v-btn class="group-item">
        5
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary-color);
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;

  &-item {
    position: relative;
    background-color: var(--bg-secondary-color);
    border: 2px solid var(--border-secondary-color);
    color: var(--fg-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 10px 10px 0 0;
    min-width: 140px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &-grouped {
      border-radius: 0 0 10px 10px;
      width: 100%;
      background-color: var(--bg-tertiary-color);
      color: var(--fg-secondary-color);
    }

    &.actived {
      border: 2px solid var(--border-accent-color);
      box-shadow: 0 0 3px var(--bg-accent-color);

      .controls {
        &-selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: var(--border-accent-color);
          border-radius: 5px;
        }
      }
    }
  }

  &-button {
    cursor: pointer;
    color: var(--fg-primary-color);
  }

  &-selected {
    position: absolute;
    top: -10px;
    right: -8px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
}
</style>

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-category/ui/dialog/drawing-control.vue ---

<script lang="ts" setup>
import type { DrawingBoardExposed } from '~/components/02.shared/hanzi-drawing-board'
import type { IHieroglyphWordVariousProps } from '~/components/03.domain/hieroglyph-word'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { HanziDrawingBoard } from '~/components/02.shared/hanzi-drawing-board'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

interface Props {
  items: IHieroglyphWordVariousProps[]
}

interface CheckResult {
  similarity: number
  feedback: string
}

const props = defineProps<Props>()

enum RequestKeys {
  CHECK_HANZI_DRAWING = 'llm_check-hanzi-drawing',
}

const dialog = defineModel<boolean>({ required: true })
const settingsMenu = ref<boolean>(false)

const settings = useLocalStorage('hanziPracticeSettings', {
  showTargetInCanvas: false,
  useLLMCheck: true,
})

const drawingBoardRef = ref<DrawingBoardExposed | null>(null)
const result = ref<CheckResult | null>(null)
const showFullInfo = ref(false)
const hasAttemptedDrawing = ref(false)
const abortController = ref<AbortController>(new AbortController())
const shuffledItems = ref<IHieroglyphWordVariousProps[]>([])
const currentShuffledIndex = ref(0)

const currentItem = computed(() => shuffledItems.value[currentShuffledIndex.value] || null)
const targetCharacter = computed<string>(() => currentItem.value?.glyph ?? '')
const isCheckingDisabled = computed(() => !drawingBoardRef.value || !targetCharacter.value)
const instruction = computed<string>(() => !currentItem.value ? 'Нет данных для отображения.' : `Нарисуйте иероглиф для слова: "${currentItem.value.translate}"`)
const totalItemsCount = computed(() => shuffledItems.value.length)
const isLoading = computed(() => useRequestStatus([RequestKeys.CHECK_HANZI_DRAWING]))
const apiError = computed(() => useRequestError(RequestKeys.CHECK_HANZI_DRAWING))

const resultStyle = computed(() => {
  if (!result.value?.similarity)
    return {}

  const hue = (result.value.similarity / 100) * 120
  const saturation = 80
  const bgLightness = 90
  const borderLightness = 45

  const backgroundColor = `hsl(${hue}, ${saturation}%, ${bgLightness}%)`
  const borderColor = `hsl(${hue}, ${saturation}%, ${borderLightness}%)`
  const color = borderColor

  return {
    backgroundColor,
    borderColor,
    color,
  }
})

function shuffleArray(array: IHieroglyphWordVariousProps[]) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function initializePracticeCycle() {
  if (props.items.length > 0) {
    shuffledItems.value = shuffleArray(props.items)
  }
  else {
    shuffledItems.value = []
  }
  currentShuffledIndex.value = 0
  clearDrawing()
}

function clearDrawing() {
  drawingBoardRef.value?.clearCanvas()
  result.value = null
  showFullInfo.value = false
  hasAttemptedDrawing.value = false
}

function handleVisibility() {
  if (!drawingBoardRef.value || isLoading.value)
    return

  if (drawingBoardRef.value.showTargetOverlay)
    drawingBoardRef.value.hideTargetCharacter()
  else
    drawingBoardRef.value.showTargetCharacter()
}

async function handleCheck() {
  if (!settings.value.useLLMCheck) {
    result.value = null
    showFullInfo.value = true
    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value?.showTargetCharacter()

    return
  }

  if (!drawingBoardRef.value || isLoading.value || !currentItem.value)
    return

  const imageDataUrl = drawingBoardRef.value.getImageDataURL('image/png', 0.9)

  if (!imageDataUrl?.userImage) {
    return
  }

  result.value = null
  hasAttemptedDrawing.value = true

  useRequest({
    key: RequestKeys.CHECK_HANZI_DRAWING,
    fn: ({ api }) => api.llm.v1.checkHanziDrawing({
      userImage: imageDataUrl.userImage!,
      targetImage: imageDataUrl.targetImage!,
      targetWord: targetCharacter.value,
    }, abortController.value),
    onSuccess: ({ data }) => {
      result.value = data
      showFullInfo.value = true
      if (settings.value.showTargetInCanvas)
        drawingBoardRef.value?.showTargetCharacter()
    },
    onError: (err) => {
      console.error('Ошибка при проверке иероглифа:', err)
      result.value = null
      showFullInfo.value = false
    },
  })
}

function nextItem() {
  drawingBoardRef.value?.hideTargetCharacter()

  if (currentShuffledIndex.value < shuffledItems.value.length - 1) {
    currentShuffledIndex.value++
    clearDrawing()
  }
  else {
    initializePracticeCycle()
  }
}

function handleDialogLeave() {
  abortController.value.abort()
  abortController.value = new AbortController()
  clearDrawing()
}

function applyCanvasVisibilitySetting() {
  nextTick(() => {
    if (!drawingBoardRef.value)
      return

    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value.showTargetCharacter()
    else
      drawingBoardRef.value.hideTargetCharacter()
  })
}

watch(() => settings.value.showTargetInCanvas, () => {
  if (showFullInfo.value)
    applyCanvasVisibilitySetting()
})

onMounted(initializePracticeCycle)
</script>

<template>
  <DialogWithClose
    v-model="dialog"
    class="dialog"
    @after-leave="handleDialogLeave"
  >
    <VCard class="dialog-content">
      <template v-if="currentItem && totalItemsCount > 0">
        <h2 class="title">
          Практика прописи
        </h2>
        <p class="instruction">
          {{ instruction }}
        </p>

        <div class="board-container">
          <HanziDrawingBoard
            :key="targetCharacter"
            ref="drawingBoardRef"
            :target-character="targetCharacter"
          />
        </div>

        <div v-if="showFullInfo && currentItem" class="full-info">
          <HieroglyphWord
            :variant="5"
            :glyph="currentItem.glyph"
            :translate="currentItem.translate"
            :pinyin="currentItem.pinyin"
          />
        </div>

        <div v-if="result && !isLoading" class="result" :style="resultStyle">
          <p>Схожесть: <b>{{ result.similarity.toFixed(1) }}%</b></p>
          <p>{{ result.feedback }}</p>
        </div>
        <div v-if="apiError && !isLoading" class="error">
          <p>Ошибка: {{ apiError }}</p>
        </div>

        <div class="controls">
          <VBtn
            variant="text"
            rounded
            :disabled="isLoading"
            @click="clearDrawing"
          >
            Очистить
          </VBtn>
          <VBtn
            variant="text"
            rounded
            :disabled="isLoading"
            @click="handleVisibility"
          >
            Показать / Скрыть
          </VBtn>
          <VBtn
            v-if="!showFullInfo"
            variant="tonal"
            class="action-btn"
            rounded
            :disabled="isCheckingDisabled"
            :loading="isLoading"
            @click="handleCheck"
          >
            Проверить
          </VBtn>
          <VBtn
            v-else
            class="action-btn"
            rounded
            variant="tonal"
            :disabled="isLoading"
            @click="nextItem"
          >
            {{ currentShuffledIndex < totalItemsCount - 1 ? 'Следующий' : 'Начать заново' }}
          </VBtn>
        </div>
      </template>
      <template v-else>
        <p>Нет данных для практики.</p>
        <VBtn
          rounded
          class="action-btn"
          color="primary"
          @click="dialog = false"
        >
          Закрыть
        </VBtn>
      </template>

      <div class="settings">
        <VMenu
          v-model="settingsMenu"
          :close-on-content-click="false"
        >
          <template #activator="{ props: menuProps }">
            <v-btn
              icon
              variant="text"
              v-bind="menuProps"
            >
              <Icon size="24" name="mdi-tune" />
            </v-btn>
          </template>

          <VList class="settings-menu">
            <VListItem class="settings-item">
              <VSwitch
                v-model="settings.showTargetInCanvas"
                label="Показывать эталон"
                color="var(--fg-accent-color)"
                hide-details
                inset
                density="compact"
              />
            </VListItem>
            <VListItem class="settings-item">
              <VSwitch
                v-model="settings.useLLMCheck"
                label="Проверка LLM"
                color="var(--fg-accent-color)"
                hide-details
                inset
                density="compact"
              />
            </VListItem>
          </VList>
        </VMenu>
      </div>
    </VCard>
  </DialogWithClose>
</template>

<style lang="scss" scoped>
.dialog {
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;

    .settings {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 48px;
      height: 48px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .instruction {
    font-size: 1rem;
    color: var(--fg-secondary-color);
    text-align: center;
    margin-bottom: 8px;
  }

  .board-container {
    width: 100%;
    max-width: 600px;
    margin-bottom: 16px;
    user-select: none;
  }

  .full-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
    padding: 10px;
    width: 100%;

    border-bottom: 1px dashed var(--border-button-secondary-color);
    border-top: 1px dashed var(--border-button-secondary-color);
  }

  .result,
  .error {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    width: 100%;

    > :first-of-type {
      border-bottom: 1px solid var(--border-secondary-color);
      padding-bottom: 8px;
      font-size: 1rem;
    }
    p {
      margin: 4px 0;
    }
  }

  .result {
    border: 1px solid #4caf50;
    background-color: #e8f5e9;
    color: #2e7d32;
  }

  .error {
    border: 1px solid #f44336;
    background-color: #ffebee;
    color: #c62828;
  }

  .controls {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    .v-btn {
      text-transform: none;
      letter-spacing: 0;
      color: var(--fg-primary-color);
    }
    .action-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      min-width: 100px;
      width: 20%;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}

@include mobile() {
  .dialog {
    &-content {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 8px;
      background-color: var(--bg-secondary-color);
      box-shadow: 0 0 5px var(--bg-overlay-primary-color);
      border: 1px solid var(--border-primary-color);
      color: var(--fg-primary-color);
      border-radius: 24px !important;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 4px;

      .settings {
        left: 5px;
        top: 5px;
      }
    }

    .title {
      margin-top: 10px;
      font-size: 1rem;
    }

    .instruction {
      font-size: 0.9rem;
    }

    .controls {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 10px;
      width: 100%;

      .v-btn {
        text-transform: none;
        letter-spacing: 0;
        width: 100%;
      }
    }
  }
}
</style>

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-section/composables/controls.ts ---

const THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY = 'thematic_dictionary_category_control'

interface ThematicDictionaryCategoryControlValues {
  isFixedStyle: boolean
}

function useThematicDictionaryCategoryControls() {
  const controlValues = useCookie<ThematicDictionaryCategoryControlValues>(THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY)
  const controlMenu = ref(false)
  const controls = ref<ThematicDictionaryCategoryControlValues>(controlValues.value ?? { isFixedStyle: true })

  const toggleControl = (key: keyof ThematicDictionaryCategoryControlValues) => {
    const rawValues = { ...controlValues.value }
    rawValues[key] = !rawValues[key]
    controlValues.value = rawValues
    controls.value = rawValues
  }

  return {
    controlMenu,
    controls,
    toggleControl,
  }
}

export type { ThematicDictionaryCategoryControlValues }
export { useThematicDictionaryCategoryControls }

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-section/composables/index.ts ---

export * from './controls'

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-section/index.ts ---

import ThematicDictionarySection from './ui/section.vue'

export { ThematicDictionarySection }

--- File: app/components/05.modules/thematic-dictionary/thematic-dictionary-section/ui/section.vue ---

<script lang="ts" setup>
import { ThematicDictionaryBreadcrumbs } from '~/components/03.domain/thematic-dictionary/thematic-dictionary-breadcrumbs'
import { ThematicDictionaryCard } from '~/components/03.domain/thematic-dictionary/thematic-dictionary-card'

interface Props {
  sections: ThematicDictionaryData['catalog']
  section: ThematicDictionarySection
}

const props = defineProps<Props>()

const search = ref<string>('')

const categories = computed(() => (
  props.section.categories.filter(
    categorie => categorie.name.includes(search.value),
  )
))

const breadcrumbs = computed(() => {
  const crumbs = [{ title: 'Секции', to: RoutePaths.ThematicDictionary.Sections }]

  if (props.section) {
    crumbs.push({
      title: props.section.name,
      to: RoutePaths.ThematicDictionary.Categories(props.section.sysname),
    })
  }

  return crumbs
})
</script>

<template>
  <div class="thematic-dictionary-section">
    <ThematicDictionaryBreadcrumbs :items="breadcrumbs" />

    <div class="content">
      <aside class="side-catalog">
        <ul class="side-catalog-list">
          <li
            v-for="item in sections"
            :key="item.id"
            class="side-catalog-item"
            :class="{ actived: item.sysname === section.sysname }"
            @click="navigateTo(RoutePaths.ThematicDictionary.Categories(item.sysname))"
          >
            <span>{{ item.glyph }}</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </aside>

      <div class="header">
        <h1>{{ section.name }}</h1>
        <div v-if="section.description" class="description">
          <p class="description-text">
            {{ section.description }}
          </p>
        </div>
      </div>

      <div class="controls">
        <v-text-field
          v-model="search"
          class="controls-search"
          label="Поиск "
          variant="outlined"
          density="comfortable"
          hide-details
          prepend-inner-icon="mdi-text-search"
        />
      </div>

      <div class="list">
        <ThematicDictionaryCard
          v-for="category in categories"
          :key="category.sysname"
          :navigate-url="RoutePaths.ThematicDictionary.Category(section.sysname, category.sysname)"
          :sysname="category.sysname"
          :glyph="category.glyph"
          :name="category.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &-text {
      margin-top: 12яpx;
      white-space: pre-line;
      position: relative;
    }
  }
}

.header {
  margin-top: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}

.controls {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
}

.side-catalog {
  position: absolute;
  top: 95px;
  left: -260px;
  border-right: 3px solid var(--border-secondary-color);
  border-radius: 0 12px 12px 0;
  overflow: hidden;
  opacity: 0.6;
  min-height: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1700px) {
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  &-list {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    gap: 4px;
    margin: 0;

    --tw-gradient-from: transparent;
    --tw-gradient-to: var(--bg-secondary-color);
    --tw-gradient-via-position: 50%;
    --tw-gradient-to-position: 100%;
    --tw-gradient-stops:
      var(--tw-gradient-from), var(--tw-gradient-to) var(--tw-gradient-via-position),
      var(--tw-gradient-to) var(--tw-gradient-to-position);
    background: linear-gradient(to right, var(--tw-gradient-stops));

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 200px;
      height: 32px;
      line-height: 32px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      user-select: none;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      > :first-of-type {
        @include default-font();
        text-align: center;
        font-weight: 400;
        border-radius: 5px;
        font-size: 1.2rem;
        color: var(--fg-secondary-color);
        font-family: var(--font-family-cn);
        line-height: normal;
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        padding: 2px 4px;
      }
      > :last-of-type {
        @include default-font();
        font-weight: 400;
        font-size: 0.9rem;
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-shrink: 0;
      }

      &.actived {
        > :first-of-type {
          color: var(--fg-accent-color);
        }
        > :last-of-type {
          color: var(--fg-accent-color);
        }
      }
    }
  }
}
</style>

--- File: app/components/05.modules/toon/toon-manual/composables/index.ts ---

export * from './use-image-selection'
export * from './use-translate-controls'

--- File: app/components/05.modules/toon/toon-manual/composables/use-image-selection.ts ---

// composables/use-image-selection.ts
import { storeToRefs } from 'pinia'
import { useToonManuallyStore } from '../store'

function useImageSelection() { // Убираем параметр image
  const store = useToonManuallyStore()
  const { selectedArea, isSelecting, uploadedImage } = storeToRefs(store) // Добавляем uploadedImage

  // --- State -------------------------------------------------------------------
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctxRef = ref<CanvasRenderingContext2D | null>(null)
  const originalImageRef = ref<HTMLImageElement | null>(null)

  const selectionStart = ref<{ x: number, y: number } | null>(null)
  const selectionEnd = ref<{ x: number, y: number } | null>(null)
  const currentSelectionRect = ref<{ x: number, y: number, width: number, height: number } | null>(null)
  const extractedSnippetSrc = ref<string | null>(null)

  // --- Computed Properties ---------------------------------------------------
  const computedStyles = computed(() => {
    if (typeof window !== 'undefined' && canvasRef.value) {
      return getComputedStyle(canvasRef.value)
    }
    return null
  })

  // --- Canvas and Image Handling ---------------------------------------------
  const resetSelection = () => {
    store.clearSelectedArea()
    store.isSelecting = false
    currentSelectionRect.value = null
    extractedSnippetSrc.value = null
    redrawFullCanvas()
  }

  function getCanvasCoordinates(event: MouseEvent | PointerEvent): { x: number, y: number } {
    if (!canvasRef.value)
      return { x: 0, y: 0 }
    const rect = canvasRef.value.getBoundingClientRect()
    const scaleX = canvasRef.value.width / rect.width
    const scaleY = canvasRef.value.height / rect.height
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    }
  }

  async function drawImageOnCanvas(imageSrc: string | null = null) {
    if (!canvasRef.value)
      return

    // Используем uploadedImage из store, если imageSrc не передан
    const imageToUse = imageSrc || uploadedImage.value

    extractedSnippetSrc.value = null
    currentSelectionRect.value = null

    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }
    ctxRef.value = ctx
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!imageToUse) {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('No image selected', canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas()
      return
    }

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const imageElement = new Image()
        imageElement.crossOrigin = 'anonymous'
        imageElement.onload = () => resolve(imageElement)
        imageElement.onerror = err => reject(err)
        imageElement.src = imageToUse
      })

      originalImageRef.value = img
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      redrawFullCanvas()
    }
    catch (error) {
      console.error('Failed to load image:', imageToUse, error)
      ctx.fillStyle = 'grey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText(`Error loading image`, canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas()
    }
  }

  function redrawFullCanvas() {
    if (!ctxRef.value || !canvasRef.value)
      return

    const ctx = ctxRef.value
    const canvas = canvasRef.value

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (originalImageRef.value) {
      ctx.drawImage(originalImageRef.value, 0, 0, canvas.width, canvas.height)
    }
    else {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('Image unavailable', canvas.width / 2, canvas.height / 2)
    }

    const canvasRect = canvas.getBoundingClientRect()
    const scaleFactor = canvas.width > 0 && canvasRect.width > 0 ? canvas.width / canvasRect.width : 1

    // Рисуем выделенную область из store
    if (selectedArea.value) {
      ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-action-color').trim() ?? 'blue'
      ctx.fillStyle = 'rgba(0, 100, 255, 0.2)'
      ctx.lineWidth = 2 * scaleFactor
      const { x, y, width, height } = selectedArea.value
      ctx.fillRect(x, y, width, height)
      ctx.strokeRect(x, y, width, height)
    }
    // Рисуем текущее выделение
    else if (currentSelectionRect.value) {
      ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-action-color').trim() ?? 'red'
      ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'
      ctx.lineWidth = 2 * scaleFactor
      const { x, y, width, height } = currentSelectionRect.value
      ctx.fillRect(x, y, width, height)
      ctx.strokeRect(x, y, width, height)
    }
  }

  // --- Event Handlers (Mouse/Pointer) ----------------------------------------
  function handlePointerDown(event: PointerEvent) {
    if (!canvasRef.value)
      return

    resetSelection()
    const coords = getCanvasCoordinates(event)

    store.isSelecting = true
    selectionStart.value = coords
    selectionEnd.value = coords
    currentSelectionRect.value = { x: coords.x, y: coords.y, width: 0, height: 0 }
    extractedSnippetSrc.value = null

    redrawFullCanvas()
  }

  function handlePointerMove(event: PointerEvent) {
    if (!canvasRef.value)
      return
    const coords = getCanvasCoordinates(event)

    if (isSelecting.value && selectionStart.value) {
      selectionEnd.value = coords
      const x = Math.min(selectionStart.value.x, selectionEnd.value.x)
      const y = Math.min(selectionStart.value.y, selectionEnd.value.y)
      const width = Math.abs(selectionStart.value.x - selectionEnd.value.x)
      const height = Math.abs(selectionStart.value.y - selectionEnd.value.y)
      currentSelectionRect.value = { x, y, width, height }
      redrawFullCanvas()
      canvasRef.value.style.cursor = 'crosshair'
    }
  }

  function handlePointerUp() {
    if (!canvasRef.value)
      return

    if (isSelecting.value && currentSelectionRect.value && currentSelectionRect.value.width > 5 && currentSelectionRect.value.height > 5) {
      if (!originalImageRef.value) {
        store.isSelecting = false
        currentSelectionRect.value = null
        redrawFullCanvas()
        return
      }

      // Сохраняем выделенную область в store
      store.setSelectedArea(currentSelectionRect.value)
      extractSelectionAndCreateArea()
    }

    store.isSelecting = false
    selectionStart.value = null
    selectionEnd.value = null
    currentSelectionRect.value = null

    redrawFullCanvas()
  }

  function handlePointerLeave() {
    if (canvasRef.value)
      canvasRef.value.style.cursor = 'default'

    if (isSelecting.value) {
      store.isSelecting = false
      selectionStart.value = null
      selectionEnd.value = null
      currentSelectionRect.value = null
      redrawFullCanvas()
    }
  }

  function extractSelectionAndCreateArea() {
    if (!canvasRef.value || !selectedArea.value || !originalImageRef.value)
      return

    const { x, y, width, height } = selectedArea.value
    if (width <= 0 || height <= 0) {
      return
    }

    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = width
    tempCanvas.height = height
    const tempCtx = tempCanvas.getContext('2d')

    if (!tempCtx)
      return

    tempCtx.drawImage(
      originalImageRef.value,
      x,
      y,
      width,
      height,
      0,
      0,
      width,
      height,
    )
    const snippetDataUrl = tempCanvas.toDataURL('image/png')
    extractedSnippetSrc.value = snippetDataUrl
  }

  // --- Other functions

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        resetSelection()
        event.preventDefault()
        break

      case 'Delete':
      case 'Backspace':
        if (selectedArea.value) {
          resetSelection()
          event.preventDefault()
        }
        break

      case 'Enter':
        if (selectedArea.value) {
          event.preventDefault()
          store.translateSelectedArea()
        }
        break
    }
  }

  const setupListeners = () => {
    document.addEventListener('keydown', handleKeydown)
  }

  const cleanupListeners = () => {
    document.removeEventListener('keydown', handleKeydown)
  }

  // --- Initialization and Watchers ------------------------------------------
  async function initCanvas() {
    await nextTick()
    if (canvasRef.value) {
      if (!canvasRef.value.width || !canvasRef.value.height) {
        const parent = canvasRef.value.parentElement?.parentElement
        if (parent) {
          const rect = parent.getBoundingClientRect()
          canvasRef.value.width = rect.width > 0 ? rect.width : 800
          canvasRef.value.height = rect.height > 0 ? rect.height : 600
        }
        else {
          canvasRef.value.width = 800
          canvasRef.value.height = 600
        }
      }
      await drawImageOnCanvas() // Убираем параметр, будет использоваться uploadedImage из store
    }
  }

  // Следим за изменениями uploadedImage в store
  watch(uploadedImage, async (newImage) => {
    if (newImage) {
      await nextTick()
      await drawImageOnCanvas(newImage)
    }
  })

  // Следим за изменениями selectedArea в store
  watch(selectedArea, () => {
    redrawFullCanvas()
  })

  return {
    isSelecting,
    selectedArea,
    canvasRef,
    extractedSnippetSrc,

    resetSelection,
    setupListeners,
    cleanupListeners,

    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    initCanvas,
    redrawFullCanvas,
  }
}

export { useImageSelection }

--- File: app/components/05.modules/toon/toon-manual/composables/use-translate-controls.ts ---

import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'

const TOON_TRANSLATE_CONTROL_KEY = 'toon_translate_control'

interface ToonTranslateControlValues {
  displayStyle: HieroglyphWordVariant | null
  grammarBlock: boolean
  selectionBlock: boolean
}

function useToonTranslateControls() {
  const controlValues = useCookie<ToonTranslateControlValues>(TOON_TRANSLATE_CONTROL_KEY, {
    default: () => ({
      displayStyle: 5,
      grammarBlock: true,
      selectionBlock: true,
    }),
  })

  const controlMenu = ref(false)
  const controls = ref<ToonTranslateControlValues>(controlValues.value || { displayStyle: null })

  watch(controls, (newValues) => {
    if (newValues) {
      controlValues.value = newValues
    }
  }, { deep: true })

  return {
    controlMenu,
    controls,
  }
}

export type { ToonTranslateControlValues }
export { useToonTranslateControls }

--- File: app/components/05.modules/toon/toon-manual/index.ts ---

export { useToonManuallyStore } from './store'
export type { SelectedArea, TranslationResult } from './store'
export { default as ToonManual } from './ui/index.vue'

--- File: app/components/05.modules/toon/toon-manual/store/index.ts ---

export interface SelectedArea {
  x: number
  y: number
  width: number
  height: number
}

export interface TranslationResult {
  source: string
  translate: string
  transcription: string
  detectedLanguage?: string
  targetLanguage?: string
}

export interface ToonManuallyState {
  uploadedImage: string | null
  selectedArea: SelectedArea | null
  translationResults: TranslationResult | null
  isContainerFitted: boolean
  isSelecting: boolean
  isLoading: boolean
  processingAbortController: AbortController
}

enum RequestKeys {
  ITT = 'toon-manually_itt',
}

export const useToonManuallyStore = defineStore('toon-manually', {
  state: (): ToonManuallyState => ({
    uploadedImage: null,
    selectedArea: null,
    translationResults: null,
    isContainerFitted: true,
    isSelecting: false,
    isLoading: false,
    processingAbortController: new AbortController(),
  }),

  getters: {
    isProcessing: () => useRequestStatus([RequestKeys.ITT]),
    errorProcessing: () => useRequestError(RequestKeys.ITT),
  },

  actions: {
    async uploadImage(file: File) {
      this.isLoading = true
      try {
        const reader = new FileReader()
        const result = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
        this.uploadedImage = result
        this.selectedArea = null
        this.isSelecting = false
        this.translationResults = null
      }
      catch (error) {
        console.error('Ошибка при загрузке изображения:', error)
        throw error
      }
      finally {
        this.isLoading = false
      }
    },

    setSelectedArea(area: SelectedArea) {
      this.selectedArea = {
        x: Math.round(area.x),
        y: Math.round(area.y),
        width: Math.round(area.width),
        height: Math.round(area.height),
      }
    },

    clearSelectedArea() {
      this.selectedArea = null
    },

    resetAbortController() {
      if (this.processingAbortController.signal.aborted === false) {
        this.processingAbortController.abort()
      }
      this.processingAbortController = new AbortController()
    },

    // Функция для получения выделенной области как File
    async getSelectedAreaAsFile(): Promise<File | null> {
      if (!this.uploadedImage || !this.selectedArea) {
        console.warn('getSelectedAreaAsFile: Нет изображения или выделенной области.')
        return null
      }

      try {
        // Создаем изображение из uploadedImage
        const img = await new Promise<HTMLImageElement>((resolve, reject) => {
          const imageElement = new Image()
          imageElement.crossOrigin = 'anonymous'
          imageElement.onload = () => resolve(imageElement)
          imageElement.onerror = reject
          imageElement.src = this.uploadedImage!
        })

        // Создаем canvas для извлечения выделенной области
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx)
          return null

        const { x, y, width, height } = this.selectedArea
        canvas.width = width
        canvas.height = height

        // Рисуем выделенную область
        ctx.drawImage(img, x, y, width, height, 0, 0, width, height)

        // Конвертируем в Blob, затем в File
        return new Promise<File>((resolve) => {
          canvas.toBlob((blob) => {
            if (blob) {
              const file = new File([blob], 'selected-area.png', { type: 'image/png' })
              resolve(file)
            }
          }, 'image/png', 0.95)
        })
      }
      catch (error) {
        console.error('Ошибка при создании файла выделенной области:', error)
        return null
      }
    },

    async translateSelectedArea() {
      if (!this.uploadedImage || !this.selectedArea) {
        console.warn('translateSelectedArea: Нет изображения или выделенной области.')
        return
      }

      if (this.isProcessing)
        this.resetAbortController()

      this.translationResults = null

      try {
        // Получаем файл выделенной области
        const imageFile = await this.getSelectedAreaAsFile()
        if (!imageFile) {
          console.error('Не удалось создать файл выделенной области')
          return
        }

        await useRequest({
          key: RequestKeys.ITT,
          fn: ({ api }) => api.llm.v1.imageToTextTranslate({ image: imageFile }, this.processingAbortController),
          onSuccess: ({ data }) => {
            this.translationResults = {
              source: data.source,
              translate: data.translate,
              transcription: data.transcription,
              detectedLanguage: 'Китайский',
              targetLanguage: 'Русский',
            }
          },
        })
      }
      catch (error) {
        console.error('Ошибка при переводе:', error)
      }
    },

    resetToUpload() {
      this.uploadedImage = null
      this.selectedArea = null
      this.translationResults = null
      this.isSelecting = false
    },

    reset() {
      this.$reset()
      this.processingAbortController = new AbortController()
    },
  },
})

--- File: app/components/05.modules/toon/toon-manual/types/index.ts ---

export interface ImageUploadOptions {
  maxSize: number
  supportedTypes: string[]
  quality?: number
}

export interface SelectionArea {
  x: number
  y: number
  width: number
  height: number
}

export interface OCRResult {
  text: string
  confidence: number
  language: string
  boundingBoxes?: BoundingBox[]
}

export interface BoundingBox {
  x: number
  y: number
  width: number
  height: number
  text: string
}

export interface TranslationOptions {
  sourceLanguage?: string
  targetLanguage: string
  preserveFormatting?: boolean
}

export interface AIServiceConfig {
  provider: 'openai' | 'google' | 'azure'
  apiKey: string
  endpoint?: string
  model?: string
}

--- File: app/components/05.modules/toon/toon-manual/ui/index.vue ---

<script setup lang="ts">
import { useToonManuallyStore } from '../store'
import ImageEditor from './sections/image-editor.vue'
import ImageUploader from './sections/image-uploader.vue'
import TranslationResults from './sections/translation-results.vue'

const store = useToonManuallyStore()
const { uploadedImage, translationResults } = storeToRefs(store)
</script>

<template>
  <div class="toon-manually">
    <div v-if="!uploadedImage" class="steps-indicator">
      <div class="step">
        <div class="step-number">
          1
        </div>
        <div class="step-label">
          Загрузка
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          2
        </div>
        <div class="step-label">
          Выделение
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          3
        </div>
        <div class="step-label">
          Перевод
        </div>
      </div>
    </div>

    <Transition name="smooth-appear" mode="out-in">
      <ImageUploader v-if="!uploadedImage" />
      <ImageEditor v-else />
    </Transition>

    <TranslationResults v-if="translationResults" />
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.toon-manually {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.steps-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  gap: 32px;

  @include mobile() {
    gap: 16px;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.5;
    transition: opacity 0.3s ease;

    &-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--bg-secondary-color);
      border: 2px solid var(--border-secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: var(--fg-primary-color);
      transition: all 0.3s ease;
    }

    &-label {
      font-size: 0.9rem;
      color: var(--fg-secondary-color);
      text-align: center;
    }

    &.active .step-number {
      border-color: var(--border-accent-color);
      background-color: var(--bg-accent-color);
    }
  }
}
</style>

--- File: app/components/05.modules/toon/toon-manual/ui/sections/image-editor.vue ---

<script setup lang="ts">
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { useImageSelection } from '../../composables/use-image-selection'
import { useToonManuallyStore } from '../../store'
import ImageUploader from './image-uploader.vue'

const store = useToonManuallyStore()
const {
  uploadedImage,
  isProcessing,
  selectedArea: storeSelectedArea,
  isContainerFitted,
} = storeToRefs(store)

const uploadNewDialog = ref<boolean>(false)

const {
  // isSelecting,
  // extractedSnippetSrc,
  selectedArea,
  canvasRef,

  resetSelection,
  setupListeners,
  cleanupListeners,

  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handlePointerLeave,
  initCanvas,
  // redrawFullCanvas,
} = useImageSelection(uploadedImage.value!)

watch(uploadedImage, (newImage) => {
  if (newImage) {
    nextTick(() => {
      initCanvas()
    })
  }
})

onMounted(() => {
  setupListeners()
  if (uploadedImage.value) {
    initCanvas()
  }
})

onUnmounted(() => {
  cleanupListeners()
})

async function handleTranslateSelection() {
  if (!storeSelectedArea.value)
    return
  await store.translateSelectedArea()
}

function resetImage() {
  store.resetToUpload()
}

function uploadNew() {
  resetSelection()
  store.translationResults = null
  uploadNewDialog.value = true
}
</script>

<template>
  <div class="image-editor">
    <div class="editor-header">
      <div class="instructions">
        <Icon name="mdi-information" />
        <span>Выделите область с текстом для перевода</span>
      </div>

      <div class="actions">
        <VBtn
          style="font-size: 0.8rem;"
          density="comfortable"
          variant="tonal"
          @click="resetImage"
        >
          Назад
        </VBtn>

        <VBtn
          density="comfortable"
          variant="tonal"
          style="font-size: 0.8rem;"
          color="var(--fg-accent-color)"
          :disabled="!storeSelectedArea || isProcessing"
          :loading="isProcessing"
          prepend-icon="mdi-translate"
          @click="handleTranslateSelection"
        >
          Перевести
        </VBtn>

        <VBtn
          style="font-size: 0.8rem;"
          density="compact"
          color="var(--border-positive-color)"
          variant="tonal"
          icon="mdi-plus"
          @click="uploadNew"
        />
      </div>
    </div>

    <div class="image-viewer-wrapper">
      <div class="image-viewer">
        <canvas
          ref="canvasRef"
          class="toon-canvas"
          :class="{ fitted: isContainerFitted }"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
          @pointerup="handlePointerUp"
          @pointerleave="handlePointerLeave"
        />
      </div>
    </div>

    <div v-if="storeSelectedArea" class="selection-info">
      <div class="info-item">
        <span class="label">Координаты:</span>
        <span class="value">{{ storeSelectedArea.x }}, {{ storeSelectedArea.y }}</span>
      </div>
      <div class="info-item">
        <span class="label">Размер:</span>
        <span class="value">{{ storeSelectedArea.width }} × {{ storeSelectedArea.height }}</span>
      </div>
      <VBtn
        size="small"
        variant="text"
        prepend-icon="mdi-close"
        class="info-item-btn"
        @click="resetSelection()"
      >
        Очистить
      </VBtn>
    </div>

    <div v-if="!storeSelectedArea && !selectedArea" class="selection-hint">
      <Icon name="mdi-gesture-tap" />
      <p>Нажмите и перетащите левой кнопкой мыши, чтобы выделить область с текстом</p>
      <p class="hint-secondary">
        <kbd>ПКМ</kbd> или <kbd>Esc</kbd> для сброса выделения
      </p>
    </div>

    <DialogWithClose
      v-model="uploadNewDialog"
      class="dialog"
    >
      <VCard class="dialog-content">
        <ImageUploader @on-select="() => uploadNewDialog = false" />
      </VCard>
    </DialogWithClose>
  </div>
</template>

<style scoped lang="scss">
.image-editor {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--bg-secondary-color);
  border-radius: 8px;

  @include mobile() {
    flex-direction: column;
    gap: 16px;
  }

  .instructions {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--fg-secondary-color);
    font-size: 0.9rem;

    svg {
      color: var(--fg-accent-color);
    }
  }

  .actions {
    display: flex;
    gap: 12px;

    .v-btn {
      text-transform: none;
    }
  }
}

.image-viewer-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;

  .image-viewer {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--border-primary-color);
    background-color: var(--bg-tertiary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px var(--bg-overlay-primary-color);
  }

  .toon-canvas {
    display: block;
    max-width: 100%;
    min-width: 50%;
    max-height: 100%;
    object-fit: contain;

    &.fitted {
      width: 100%;
    }
  }
}

.selection-info {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  background-color: var(--bg-secondary-color);
  border-radius: 8px;
  font-size: 0.9rem;

  @include mobile() {
    flex-wrap: wrap;
    gap: 12px;
  }

  .info-item {
    display: flex;
    gap: 8px;

    .label {
      color: var(--fg-secondary-color);
      font-weight: 500;
    }

    .value {
      color: var(--fg-primary-color);
      font-family: 'JetBrains Mono', monospace;
    }

    &-btn {
      margin-left: auto;
    }
  }
}

.selection-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px;
  text-align: center;
  color: var(--fg-secondary-color);

  .v-icon {
    font-size: 3rem;
    color: var(--fg-tertiary-color);
  }

  p {
    margin: 0;

    &.hint-secondary {
      font-size: 0.9rem;
      color: var(--fg-tertiary-color);

      kbd {
        background-color: var(--bg-tertiary-color);
        border: 1px solid var(--border-secondary-color);
        border-radius: 4px;
        padding: 2px 6px;
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--fg-primary-color);
      }
    }
  }
}

.dialog {
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding-top: 48px;
  }
}
</style>

--- File: app/components/05.modules/toon/toon-manual/ui/sections/image-uploader.vue ---

<script setup lang="ts">
import { useToonManuallyStore } from '../../store'

const emits = defineEmits<{ onSelect: [File] }>()

const store = useToonManuallyStore()
const { isLoading } = storeToRefs(store)

const fileInput = ref<HTMLInputElement>()
const dragover = ref(false)
const pasteSupported = ref(false)

// Обработка файлов
async function handleFiles(files: FileList | File[]) {
  const file = files[0]
  if (!file || !file.type.startsWith('image/')) {
    return
  }

  await store.uploadImage(file)
  emits('onSelect', file)
}

function onFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    handleFiles(target.files)
  }
}

// Drag & Drop
function onDragOver(event: DragEvent) {
  event.preventDefault()
  dragover.value = true
}

function onDragLeave() {
  dragover.value = false
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  dragover.value = false

  if (event.dataTransfer?.files?.length) {
    handleFiles(event.dataTransfer.files)
  }
}

// Вставка из буфера
async function pasteFromClipboard() {
  try {
    const clipboardItems = await navigator.clipboard.read()

    for (const item of clipboardItems) {
      for (const type of item.types) {
        if (type.startsWith('image/')) {
          const blob = await item.getType(type)
          const file = new File([blob], 'pasted-image.png', { type })
          await handleFiles([file])
          return
        }
      }
    }
  }
  catch (error) {
    console.error('Ошибка при вставке из буфера:', error)
  }
}

// Обработка вставки через Ctrl+V
function onPaste(event: ClipboardEvent) {
  const items = event.clipboardData?.items
  if (!items)
    return

  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        handleFiles([file])
      }
    }
  }
}

async function loadExampleImage() {
  store.isLoading = true
  const response = await fetch('/images/toon-example.jpg')
  if (!response.ok) {
    throw new Error('Не удалось загрузить пример изображения')
  }
  const blob = await response.blob()
  const file = new File([blob], 'example-image.jpg', { type: blob.type })

  await handleFiles([file])
}

onMounted(() => {
  pasteSupported.value = navigator.clipboard && 'read' in navigator.clipboard
  document.addEventListener('paste', onPaste)
})

onUnmounted(() => {
  document.removeEventListener('paste', onPaste)
})
</script>

<template>
  <div class="image-uploader">
    <div
      class="upload-area"
      :class="{ dragover, loading: isLoading }"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @click="fileInput?.click()"
    >
      <div v-if="isLoading" class="loading-content">
        <Icon name="line-md:loading-loop" size="48" />
        <p>Загрузка изображения...</p>
      </div>

      <div v-else class="upload-content">
        <Icon name="mdi:cloud-upload" size="64" />
        <h3>Загрузите изображение</h3>
        <p>Перетащите файл сюда или нажмите для выбора</p>
        <div class="supported-formats">
          Поддерживаемые форматы: JPG, PNG, GIF, WEBP
        </div>
      </div>
    </div>

    <div class="upload-actions">
      <VBtn
        color="primary"
        variant="tonal"
        prepend-icon="mdi-folder-open"
        @click="fileInput?.click()"
      >
        Выбрать файл
      </VBtn>

      <VBtn
        v-if="pasteSupported"
        color="secondary"
        variant="tonal"
        prepend-icon="mdi-content-paste"
        @click="pasteFromClipboard"
      >
        Вставить из буфера
      </VBtn>

      <VBtn
        variant="tonal"
        color="var(--bg-accent-overlay-color)"
        prepend-icon="mdi-information-outline"
        @click="loadExampleImage"
      >
        <span> Пример </span>
      </VBtn>
    </div>

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      hidden
      @change="onFileSelect"
    >
  </div>
</template>

<style scoped lang="scss">
.image-uploader {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.upload-area {
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 2px dashed var(--border-secondary-color);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--bg-secondary-color);

  &:hover {
    border-color: var(--border-accent-color);
    background-color: var(--bg-tertiary-color);
  }

  &.dragover {
    border-color: var(--border-accent-color);
    background-color: var(--bg-accent-color);
    transform: scale(1.02);
  }

  &.loading {
    cursor: wait;
    border-color: var(--border-accent-color);
  }

  .upload-content {
    text-align: center;
    color: var(--fg-secondary-color);

    h3 {
      margin: 16px 0 8px;
      color: var(--fg-primary-color);
    }

    p {
      margin-bottom: 16px;
    }

    .supported-formats {
      font-size: 0.85rem;
      color: var(--fg-tertiary-color);
    }
  }

  .loading-content {
    text-align: center;
    color: var(--fg-secondary-color);

    p {
      margin-top: 16px;
    }
  }
}

.upload-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  .v-btn {
    text-transform: none;
  }
}
</style>

--- File: app/components/05.modules/toon/toon-manual/ui/sections/translation-control.vue ---

<script lang="ts" setup>
import type { ToonTranslateControlValues } from '../../composables'
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'

const control = defineModel<ToonTranslateControlValues>({ required: true })

const controlledHieroglyphVariant = computed({
  get: () => control.value.displayStyle,
  set: (value: HieroglyphWordVariant) => control.value.displayStyle = value,
})
</script>

<template>
  <div class="controls">
    <div class="controls-item-block">
      <div
        class="controls-item grouped-header"
        :class="{ actived: control.displayStyle === null }"
        @click="controlledHieroglyphVariant = null"
      >
        <button class="controls-button">
          Глобальный стиль отображения
        </button>
        <Icon class="controls-selected" name="re:checked" size="20" />
      </div>
      <v-btn-toggle
        v-model="controlledHieroglyphVariant"
        density="compact"
        variant="text"
        class="controls-item-grouped grouped-footer"
        color="var(--fg-action-color)"
        mandatory
      >
        <v-btn :value="2" class="group-item">
          1
        </v-btn>
        <v-btn :value="3" class="group-item">
          2
        </v-btn>
        <v-btn :value="4" class="group-item">
          3
        </v-btn>
        <v-btn :value="5" class="group-item">
          4
        </v-btn>
      </v-btn-toggle>
    </div>

    <div
      class="controls-item-block controls-item"
      :class="{ actived: !!control.grammarBlock }"
      @click="control.grammarBlock = !control.grammarBlock"
    >
      <button class="controls-button">
        Отображение грамматики
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>

    <div
      class="controls-item-block controls-item"
      :class="{ actived: !!control.selectionBlock }"
      @click="control.selectionBlock = !control.selectionBlock"
    >
      <button class="controls-button">
        Отображение предпросмотра
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary-color);
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;
  gap: 16px;

  .grouped-header {
    border-radius: 10px 10px 0 0;
  }

  .grouped-footer {
    border-radius: 0 0 10px 10px;
    width: 100%;
    background-color: var(--bg-tertiary-color);
    color: var(--fg-secondary-color);
  }

  &-item {
    position: relative;
    background-color: var(--bg-secondary-color);
    border: 2px solid var(--border-secondary-color);
    color: var(--fg-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 10px;
    min-width: 140px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &.actived {
      border: 2px solid var(--border-accent-color);
      box-shadow: 0 0 3px var(--bg-accent-color);

      .controls {
        &-selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: var(--border-accent-color);
          border-radius: 5px;
        }
      }
    }
  }

  &-button {
    cursor: pointer;
    color: var(--fg-primary-color);
  }

  &-selected {
    position: absolute;
    top: -10px;
    right: -8px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
}
</style>

--- File: app/components/05.modules/toon/toon-manual/ui/sections/translation-results.vue ---

<script setup lang="ts">
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import TranslationControl from '~/components/05.modules/toon/toon-manual/ui/sections/translation-control.vue'
import { useToonTranslateControls } from '../../composables'
import { useToonManuallyStore } from '../../store'

const { controlMenu, controls } = useToonTranslateControls()
const store = useToonManuallyStore()
const {
  errorProcessing,
  translationResults,
  selectedArea,
  uploadedImage,
} = storeToRefs(store)

const previewCanvas = ref<HTMLCanvasElement>()

function resetSelection() {
  store.$patch({
    translationResults: null,
    selectedArea: null,
    isSelecting: false,
  })
}

async function soundSource() {
  // TODO: Реализация воспроизведения звука
}

function drawPreview() {
  if (!previewCanvas.value || !uploadedImage.value || !selectedArea.value)
    return

  const canvas = previewCanvas.value
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return

  const img = new Image()
  img.onload = () => {
    const area = selectedArea.value!

    canvas.width = area.width
    canvas.height = area.height

    ctx.drawImage(
      img,
      area.x,
      area.y,
      area.width,
      area.height,
      0,
      0,
      area.width,
      area.height,
    )
  }
  img.src = uploadedImage.value
}

// Следим за изменениями selectedArea и перерисовываем превью
watch([selectedArea, uploadedImage], () => {
  nextTick(() => {
    drawPreview()
  })
})

onMounted(() => {
  drawPreview()
})
</script>

<template>
  <Transition name="slide-up" appear>
    <div v-if="!errorProcessing" class="translation-results-wrapper">
      <div class="translation-results">
        <div class="results-content" :class="{ flex: !controls.selectionBlock }">
          <!-- Превью выделенной области -->
          <div v-show="controls.selectionBlock" class="selected-area-preview">
            <div class="preview-header">
              <h3>Выделенная область</h3>
            </div>

            <div class="preview-container">
              <canvas ref="previewCanvas" class="preview-canvas" />
            </div>
          </div>

          <!-- Результаты перевода -->
          <div class="translation-section">
            <div class="text-block">
              <div class="text-block-header">
                <h3>Распознанный текст</h3>

                <VBtn
                  size="small"
                  variant="text"
                  icon="mdi-volume-high"
                  density="comfortable"
                  style="font-size: 0.7rem;"
                  @click="soundSource"
                />
              </div>

              <div class="text-content container">
                <HieroglyphWord
                  v-if="translationResults?.source"
                  :variant="controls.displayStyle ?? undefined"
                  :glyph="translationResults?.source"
                  :translate="translationResults?.translate"
                  :pinyin="translationResults?.transcription"
                />
                <span v-else>Не удалось распознать текст</span>
              </div>
            </div>

            <div v-show="controls.grammarBlock" class="text-block">
              <div class="text-block-header">
                <h3>Граматические конструкции</h3>
              </div>
              <div class="text-content container">
                Ничего не выявлено
              </div>
            </div>
          </div>
        </div>

        <VBtn
          icon
          variant="text"
          class="close"
          @click="resetSelection()"
        >
          <Icon size="18" name="mdi:close" />
        </VBtn>

        <div class="settings">
          <VMenu
            v-model="controlMenu"
            :close-on-content-click="false"
          >
            <template #activator="{ props }">
              <VBtn
                icon
                variant="text"
                v-bind="props"
              >
                <Icon size="20" name="mdi-tune" />
              </VBtn>
            </template>

            <TranslationControl v-model="controls" />
          </VMenu>
        </div>
      </div>
    </div>
  </Transition>

  <VSnackbar
    :model-value="!!errorProcessing"
    :timeout="2000"
    color="red"
  >
    <div>
      {{ errorProcessing?.message }}
    </div>
  </VSnackbar>
</template>

<style scoped lang="scss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.translation-results {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-top: 1px solid var(--border-secondary-color);

  .close {
    position: absolute;
    right: 6px;
    top: -16px;
    width: 30px;
    height: 30px;
    background-color: var(--bg-tertiary-color);
    border: 2px solid var(--border-accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .settings {
    position: absolute;
    right: 42px;
    top: -40px;
    width: 30px;
    height: 30px;
    background-color: var(--bg-tertiary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(var(--bg-header-color), 0.5);
    z-index: 100;
  }
}

.results-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;

  &.flex {
    display: flex;
  }

  @include tablet() {
    grid-template-columns: 1fr;
  }
}

.selected-area-preview {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 16px;

  h3 {
    margin: 0 0 8px;
    color: var(--fg-primary-color);
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 1.1rem !important;
    }
  }

  .preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: var(--bg-tertiary-color);
    border-radius: 8px;
    border: 2px dashed var(--border-secondary-color);
    flex-grow: 1;

    .preview-canvas {
      max-width: 100%;
      max-height: 300px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }
}

.translation-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.text-block {
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 16px;
  flex-grow: 1;

  &-header {
    display: flex;

    h3 {
      font-size: 0.9rem;
      width: 100%;
    }
  }

  h3 {
    margin: 0 0 12px;
    color: var(--fg-primary-color);
    font-size: 1.1rem !important;
  }

  .text-content {
    padding: 16px;
    border-radius: 8px;
    line-height: 1.6;
    min-height: 80px;
    white-space: pre-wrap;
    word-wrap: break-word;

    &.container {
      background-color: var(--bg-tertiary-color);
      color: var(--fg-secondary-color);
      display: flex;

      &:deep(.hw-word) {
        flex-grow: 1;
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
    }
  }
}

.translation-info {
  grid-column: 1 / -1;
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 20px;

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;

    @include mobile() {
      grid-template-columns: 1fr;
    }
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .label {
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
      font-weight: 500;
    }

    .value {
      color: var(--fg-primary-color);
      font-family: 'JetBrains Mono', monospace;
    }
  }
}
</style>

--- File: app/components/05.modules/toon/toon-reader/composables/use-toon-reader.ts ---

import type { HighlightArea, ToonReaderMode } from '../types'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

export function useToonReader(
  initialImages: Ref<string[]>,
  initialAreas: Ref<HighlightArea[]>,
  mode: Ref<ToonReaderMode>,
) {
  // --- State -------------------------------------------------------------------
  const manhwaImages = computed(() => initialImages.value)
  const currentPageId = ref<string>('0')
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctxRef = ref<CanvasRenderingContext2D | null>(null)
  const originalImageRef = ref<HTMLImageElement | null>(null)

  const areas = ref<HighlightArea[]>([...initialAreas.value])
  const hoveredAreaId = ref<string | null>(null)
  const selectedAreaForEdit = ref<HighlightArea | null>(null)

  const isSelecting = ref(false)
  const selectionStart = ref<{ x: number, y: number } | null>(null)
  const selectionEnd = ref<{ x: number, y: number } | null>(null)
  const currentSelectionRect = ref<{ x: number, y: number, width: number, height: number } | null>(null)
  const extractedSnippetSrc = ref<string | null>(null)
  const isLoadingImage = ref(false)

  // --- Computed Properties ---------------------------------------------------
  const totalPages = computed(() => manhwaImages.value.length)
  const currentImageSrc = computed(() => {
    // if (totalPages.value > 0 && currentPageId.value < totalPages.value && currentPageId.value >= 0) {
    return manhwaImages.value[+currentPageId.value]
    // }
    return null
  })
  const computedStyles = computed(() => {
    if (typeof window !== 'undefined' && canvasRef.value) {
      return getComputedStyle(canvasRef.value)
    }
    return null
  })

  const areasOnCurrentPage = computed(() => {
    return areas.value.filter(area => area.pageId === currentPageId.value)
  })

  // const canGoPrev = computed(() => currentPageId.value > 0)
  const canGoPrev = computed(() => true)
  // const canGoNext = computed(() => currentPageId.value < totalPages.value - 1)
  const canGoNext = computed(() => true)

  // --- Canvas and Image Handling ---------------------------------------------
  function getCanvasCoordinates(event: MouseEvent | PointerEvent): { x: number, y: number } {
    if (!canvasRef.value)
      return { x: 0, y: 0 }
    const rect = canvasRef.value.getBoundingClientRect()
    const scaleX = canvasRef.value.width / rect.width
    const scaleY = canvasRef.value.height / rect.height
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    }
  }

  async function drawImageOnCanvas(imageSrc: string | null) {
    if (!canvasRef.value)
      return
    isLoadingImage.value = true
    extractedSnippetSrc.value = null
    currentSelectionRect.value = null
    hoveredAreaId.value = null
    selectedAreaForEdit.value = null

    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      isLoadingImage.value = false
      return
    }
    ctxRef.value = ctx
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!imageSrc) {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('No image selected', canvas.width / 2, canvas.height / 2)
      isLoadingImage.value = false
      originalImageRef.value = null
      redrawFullCanvas() // Перерисовать, чтобы показать пустой холст с областями, если они есть на этой странице
      return
    }

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const imageElement = new Image()
        imageElement.crossOrigin = 'anonymous'
        imageElement.onload = () => resolve(imageElement)
        imageElement.onerror = err => reject(err)
        imageElement.src = imageSrc
      })

      originalImageRef.value = img
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      redrawFullCanvas()
    }
    catch (error) {
      console.error('Failed to load image:', imageSrc, error)
      ctx.fillStyle = 'grey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText(`Error loading: ${imageSrc.split('/').pop()}`, canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas() // Показать области на сером фоне
    }
    finally {
      isLoadingImage.value = false
    }
  }

  function redrawFullCanvas() {
    if (!ctxRef.value || !canvasRef.value)
      return

    const ctx = ctxRef.value
    const canvas = canvasRef.value

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (originalImageRef.value) {
      ctx.drawImage(originalImageRef.value, 0, 0, canvas.width, canvas.height)
    }
    else {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('Image unavailable', canvas.width / 2, canvas.height / 2)
      // Не выходим, т.к. области все равно нужно нарисовать
    }

    const canvasRect = canvas.getBoundingClientRect()
    // Используем canvas.width, а не rect.width, т.к. rect.width может быть 0 при скрытом canvas
    const scaleFactor = canvas.width > 0 && canvasRect.width > 0 ? canvas.width / canvasRect.width : 1

    // Отрисовка сохраненных областей
    areasOnCurrentPage.value.forEach((area) => {
      const isHovered = area.id === hoveredAreaId.value && mode.value === 'view'
      const isSelectedForEditUI = area.id === selectedAreaForEdit.value?.id && mode.value === 'edit'

      ctx.strokeStyle = isSelectedForEditUI
        ? 'rgba(0, 0, 255, 0.9)'
        : (isHovered
            ? 'rgba(0, 255, 0, 0.7)'
            : mode.value === 'edit'
              ? 'rgba(255, 215, 0, 0.6)'
              : 'transparent')
      ctx.fillStyle = isSelectedForEditUI
        ? 'rgba(0, 0, 255, 0.2)'
        : (isHovered
            ? 'rgba(0, 255, 0, 0.15)'
            : mode.value === 'edit'
              ? 'rgba(255, 215, 0, 0.1)'
              : 'transparent')

      ctx.lineWidth = (isSelectedForEditUI || isHovered ? 3 : 2) * scaleFactor

      // Показываем заливку в режиме view, или если область выбрана для редактирования, или если у области есть текст
      if (mode.value === 'view' || isSelectedForEditUI || (mode.value === 'edit' && area.text)) {
        ctx.fillRect(area.rect.x, area.rect.y, area.rect.width, area.rect.height)
      }
      ctx.strokeRect(area.rect.x, area.rect.y, area.rect.width, area.rect.height)
    })

    // Отрисовка текущего нового выделения в режиме 'edit'
    if (mode.value === 'edit' && currentSelectionRect.value) {
      ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-action-color').trim() ?? 'red'
      ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'
      ctx.lineWidth = 2 * scaleFactor
      const { x, y, width, height } = currentSelectionRect.value
      ctx.fillRect(x, y, width, height)
      ctx.strokeRect(x, y, width, height)
    }
  }

  // --- Event Handlers (Mouse/Pointer) ----------------------------------------
  function handlePointerDown(event: PointerEvent) {
    if (isLoadingImage.value || !canvasRef.value)
      return

    const coords = getCanvasCoordinates(event)

    if (mode.value === 'edit') {
      const clickedArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )

      if (clickedArea) {
        selectedAreaForEdit.value = clickedArea
        isSelecting.value = false
        currentSelectionRect.value = null
        extractedSnippetSrc.value = null
      }
      else {
        if (!originalImageRef.value) { // Запрещаем создавать выделение, если нет основного изображения
          selectedAreaForEdit.value = null // Сбросить, если клик был вне областей
          isSelecting.value = false
          return
        }
        selectedAreaForEdit.value = null
        isSelecting.value = true
        selectionStart.value = coords
        selectionEnd.value = coords
        currentSelectionRect.value = { x: coords.x, y: coords.y, width: 0, height: 0 } // Инициализация
        extractedSnippetSrc.value = null
      }
    }
    else if (mode.value === 'view') {
      // В режиме просмотра клик по области также выбирает ее для отображения информации
      const clickedArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      if (clickedArea) {
        selectedAreaForEdit.value = clickedArea // Переиспользуем для передачи в родительский компонент
      }
      else {
        selectedAreaForEdit.value = null // Сброс, если клик мимо
      }
    }
    redrawFullCanvas()
  }

  function handlePointerMove(event: PointerEvent) {
    if (isLoadingImage.value || !canvasRef.value)
      return
    const coords = getCanvasCoordinates(event)

    if (mode.value === 'view') {
      const foundArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      const newHoverId = foundArea ? foundArea.id : null
      if (hoveredAreaId.value !== newHoverId) {
        hoveredAreaId.value = newHoverId
        redrawFullCanvas()
      }
      canvasRef.value.style.cursor = foundArea ? 'pointer' : 'default'
    }
    else if (mode.value === 'edit' && isSelecting.value && selectionStart.value) {
      if (!originalImageRef.value)
        return // Не позволяем рисовать выделение без основного изображения

      selectionEnd.value = coords
      const x = Math.min(selectionStart.value.x, selectionEnd.value.x)
      const y = Math.min(selectionStart.value.y, selectionEnd.value.y)
      const width = Math.abs(selectionStart.value.x - selectionEnd.value.x)
      const height = Math.abs(selectionStart.value.y - selectionEnd.value.y)
      currentSelectionRect.value = { x, y, width, height }
      redrawFullCanvas()
      canvasRef.value.style.cursor = 'crosshair'
    }
    else if (mode.value === 'edit' && !isSelecting.value) {
      const foundArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      canvasRef.value.style.cursor = foundArea ? 'grab' : 'crosshair'
    }
  }

  function handlePointerUp() {
    if (isLoadingImage.value || !canvasRef.value)
      return

    if (mode.value === 'edit') {
      if (isSelecting.value && currentSelectionRect.value && currentSelectionRect.value.width > 5 && currentSelectionRect.value.height > 5) {
        if (!originalImageRef.value) {
          isSelecting.value = false
          currentSelectionRect.value = null
          redrawFullCanvas()
          return
        }
        extractSelectionAndCreateArea()
      }
      else if (!isSelecting.value && selectedAreaForEdit.value) {
        // Клик по существующей области уже обработан в pointerdown, ничего не делаем
      }
      else {
        // Сброс, если выделение слишком маленькое или не было начато
        currentSelectionRect.value = null
      }
      isSelecting.value = false // Завершаем процесс выделения в любом случае
      selectionStart.value = null
      selectionEnd.value = null
    }
    // В режиме 'view' клик уже обработан в handlePointerDown
    redrawFullCanvas()
  }

  function handlePointerLeave() {
    if (mode.value === 'view' && hoveredAreaId.value !== null) {
      hoveredAreaId.value = null
      redrawFullCanvas()
    }
    if (canvasRef.value)
      canvasRef.value.style.cursor = 'default'

    if (mode.value === 'edit' && isSelecting.value) {
      isSelecting.value = false
      selectionStart.value = null
      selectionEnd.value = null
      currentSelectionRect.value = null
      redrawFullCanvas()
    }
  }

  function extractSelectionAndCreateArea() {
    // originalImageRef.value уже проверен в handlePointerUp перед вызовом этой функции
    if (!canvasRef.value || !currentSelectionRect.value || !originalImageRef.value)
      return

    const { x, y, width, height } = currentSelectionRect.value
    if (width <= 0 || height <= 0) {
      currentSelectionRect.value = null
      return
    }

    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = width
    tempCanvas.height = height
    const tempCtx = tempCanvas.getContext('2d')

    if (!tempCtx)
      return

    tempCtx.drawImage(
      originalImageRef.value,
      x,
      y,
      width,
      height,
      0,
      0,
      width,
      height,
    )
    const snippetDataUrl = tempCanvas.toDataURL('image/png')
    extractedSnippetSrc.value = snippetDataUrl

    const newArea: HighlightArea = {
      id: generateId(),
      pageId: currentPageId.value,
      rect: { ...currentSelectionRect.value },
      text: '',
    } as HighlightArea
    areas.value.push(newArea)
    selectedAreaForEdit.value = newArea
    currentSelectionRect.value = null
    // redrawFullCanvas() // Будет вызван из handlePointerUp
  }

  // --- Area Management ------------------------------------------------------
  function updateAreaText(areaId: string, newText: string) {
    const area = areas.value.find(a => a.id === areaId)
    if (area) {
      area.text = newText
      redrawFullCanvas()
    }
  }

  function deleteArea(areaId: string) {
    areas.value = areas.value.filter(a => a.id !== areaId)
    if (selectedAreaForEdit.value?.id === areaId) {
      selectedAreaForEdit.value = null
    }
    redrawFullCanvas()
  }

  function clearSelectionForEdit() {
    selectedAreaForEdit.value = null
    extractedSnippetSrc.value = null
    redrawFullCanvas()
  }

  // --- Pagination -----------------------------------------------------------
  function nextPage() {
    if (canGoNext.value) {
      // currentPageId.value++
    }
  }

  function prevPage() {
    if (canGoPrev.value) {
      // currentPageId.value--
    }
  }

  // --- Initialization and Watchers ------------------------------------------
  async function initCanvas() {
    await nextTick()
    if (canvasRef.value) {
      if (!canvasRef.value.width || !canvasRef.value.height) {
        const parent = canvasRef.value.parentElement?.parentElement
        if (parent) {
          const rect = parent.getBoundingClientRect()
          canvasRef.value.width = rect.width > 0 ? rect.width : 800
          canvasRef.value.height = rect.height > 0 ? rect.height : 600
        }
        else {
          canvasRef.value.width = 800
          canvasRef.value.height = 600
        }
      }
      await drawImageOnCanvas(currentImageSrc.value)
    }
  }

  watch(currentImageSrc, async (newSrc) => {
    await drawImageOnCanvas(newSrc)
  })

  watch(initialImages, async () => {
    // currentPageId.value = 0
    await initCanvas()
  }, { deep: true })

  watch(initialAreas, (newAreas) => {
    areas.value = [...newAreas]
    redrawFullCanvas()
  }, { deep: true })

  watch(mode, () => {
    isSelecting.value = false
    selectionStart.value = null
    selectionEnd.value = null
    currentSelectionRect.value = null
    hoveredAreaId.value = null
    selectedAreaForEdit.value = null
    extractedSnippetSrc.value = null

    if (canvasRef.value) {
      canvasRef.value.style.cursor = mode.value === 'view' ? 'default' : 'crosshair'
    }

    redrawFullCanvas()
  })

  return {
    canvasRef,
    isLoadingImage,
    currentPageIndex: currentPageId,
    totalPages,
    currentImageSrc,
    areasOnCurrentPage,
    selectedAreaForEdit,
    extractedSnippetSrc,
    canGoPrev,
    canGoNext,
    hoveredAreaId,

    nextPage,
    prevPage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    initCanvas,
    redrawFullCanvas,

    updateAreaText,
    deleteArea,
    clearSelectionForEdit,
  }
}

--- File: app/components/05.modules/toon/toon-reader/index.ts ---

import type { HighlightArea, ToonReaderMode } from './types'
import ToonReader from './ui/index.vue'

export { type HighlightArea, type ToonReaderMode }
export { ToonReader }

--- File: app/components/05.modules/toon/toon-reader/types/index.ts ---

// --- Базовые типы ---

/**
 * Прямоугольная область с координатами и размерами.
 * Координаты (x, y) - верхний левый угол.
 * Все значения предполагаются в пикселях относительно оригинального размера изображения.
 */
export interface RectCoordinates {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Информация о создателе/редакторе.
 */
export interface AuditInfo {
  createdBy?: string // ID пользователя или имя
  createdAt: string // ISO 8601 timestamp
  updatedBy?: string // ID пользователя или имя
  updatedAt: string // ISO 8601 timestamp
}

// --- Модели для Туна ---

/**
 * Выделенная область на странице туна/манхвы.
 */
export interface HighlightArea extends AuditInfo {
  id: string // Уникальный идентификатор области (например, UUID)
  pageId: string // ID страницы, к которой принадлежит эта область
  rect: RectCoordinates // Геометрия области
  text?: string // Текст, ассоциированный с областью (полученный от AI или введенный вручную)
  aiProcessed?: boolean // Флаг, указывающий, был ли текст получен от AI
  tags?: string[] // Дополнительные теги или категории для области
  // color?: string;     // Опционально: цвет для выделения этой области в UI
}

/**
 * Страница туна/манхвы.
 */
export interface ToonPage extends AuditInfo {
  id: string // Уникальный идентификатор страницы (например, UUID)
  chapterId: string // ID главы, к которой принадлежит эта страница
  pageNumber: number // Порядковый номер страницы в главе (начиная с 1)
  imageUrl: string // URL или путь к изображению страницы
  imageWidth?: number // Оригинальная ширина изображения (опционально, может быть получена при загрузке)
  imageHeight?: number // Оригинальная высота изображения (опционально)
  highlightAreas?: HighlightArea[] // Массив выделенных областей на этой странице (загружаются по необходимости или вместе)
  description?: string // Краткое описание/заметки к странице
}

/**
 * Глава туна/манхвы.
 */
export interface ToonChapter extends AuditInfo {
  id: string // Уникальный идентификатор главы (например, UUID)
  workId: string // ID произведения, к которому принадлежит эта глава
  chapterNumber: number // Порядковый номер главы в произведении (начиная с 1)
  title: string // Название главы
  description?: string // Краткое описание главы
  coverImageUrl?: string // URL обложки главы (опционально)
  pages?: ToonPage[] // Массив страниц в главе (может загружаться лениво)
  pageCount?: number // Общее количество страниц в главе (для пагинации без загрузки всех страниц)
}

/**
 * Произведение туна/манхвы (корневая сущность).
 */
export interface ToonWork extends AuditInfo {
  id: string // Уникальный идентификатор произведения (например, UUID)
  title: string // Название произведения
  author?: string // Автор
  artist?: string // Художник
  description?: string // Описание произведения
  genres?: string[] // Жанры
  status?: 'ongoing' | 'completed' | 'paused' | 'cancelled' // Статус произведения
  coverImageUrl?: string // URL основной обложки произведения
  chapters?: ToonChapter[] // Массив глав (может загружаться лениво)
  chapterCount?: number // Общее количество глав
  // Дополнительные метаданные:
  language?: string // Язык оригинала
  publicationDate?: string // Дата публикации
  tags?: string[] // Теги
  rating?: number // Рейтинг
  isAdult?: boolean // 18+ контент
}

// --- Типы для пагинации и состояния UI ---

/**
 * Режимы работы ридера.
 */
export type ToonReaderMode = 'view' | 'edit'

/**
 * Состояние ридера, которое может передаваться между компонентами или храниться.
 */
export interface ToonReaderState {
  currentWorkId?: string | null
  currentChapterId?: string | null
  currentPageId?: string | null // Или currentPageIndex, если работаем с массивом страниц
  currentPageIndex: number // Индекс текущей страницы в текущей главе
  mode: ToonReaderMode
  // Другие параметры UI, например, уровень масштабирования, если он будет
  // zoomLevel?: number;
}

/**
 * Опции для запроса списка (например, списка глав или страниц).
 */
export interface ListRequestOptions {
  page?: number // Номер страницы для пагинации
  limit?: number // Количество элементов на странице
  sortBy?: string // Поле для сортировки
  sortOrder?: 'asc' | 'desc' // Порядок сортировки
  filter?: Record<string, any> // Фильтры
}

/**
 * Ответ со списком данных и информацией о пагинации.
 */
export interface PaginatedListResponse<T> {
  items: T[]
  totalItems: number
  totalPages: number
  currentPage: number
  itemsPerPage: number
}

--- File: app/components/05.modules/toon/toon-reader/ui/index.vue ---

<script setup lang="ts">
import type { HighlightArea, ToonReaderMode } from '../types'
import { useToonReader } from '../composables/use-toon-reader'

const props = defineProps<{
  images: string[]
  initialAreas?: HighlightArea[]
  mode: ToonReaderMode
}>()

const emit = defineEmits<{
  (e: 'areaClicked', payload: HighlightArea): void
  (e: 'areaCreated', payload: { area: HighlightArea, snippetBase64: string | null }): void
  (e: 'areaUpdated', payload: HighlightArea): void
  (e: 'areaDeleted', payload: { areaId: string }): void
}>()

const imagesRef = computed(() => props.images)
const initialAreasRef = computed(() => props.initialAreas || [])
const modeRef = toRef(props, 'mode')

const {
  canvasRef,
  isLoadingImage,
  // currentPageIndex,
  totalPages,
  selectedAreaForEdit,
  extractedSnippetSrc,
  canGoPrev,
  canGoNext,
  hoveredAreaId,

  nextPage,
  prevPage,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handlePointerLeave,
  initCanvas,
  // redrawFullCanvas,

  updateAreaText: composableUpdateAreaText,
  deleteArea: composableDeleteArea,
  clearSelectionForEdit,
} = useToonReader(imagesRef, initialAreasRef, modeRef)

const newTextForArea = ref('')

onMounted(async () => {
  await initCanvas()
})

watch(() => props.mode, () => {
  newTextForArea.value = '' // Сбрасываем текст при смене режима
  // selectedAreaForEdit из composable уже сбрасывается через watch в composable
})

watch(selectedAreaForEdit, (newSelectedArea) => {
  if (newSelectedArea) {
    newTextForArea.value = newSelectedArea.text || ''
    if (props.mode === 'view' && newSelectedArea.text) {
      emit('areaClicked', newSelectedArea)
    }
  }
  else {
    newTextForArea.value = ''
  }
})

watch(extractedSnippetSrc, (newSnippet) => {
  // Это событие теперь больше для обработки нового выделения, готового к отправке в AI
  if (newSnippet && selectedAreaForEdit.value && props.mode === 'edit') {
    emit('areaCreated', { area: selectedAreaForEdit.value, snippetBase64: newSnippet })
  }
})

function handleUpdateText() {
  if (selectedAreaForEdit.value) {
    composableUpdateAreaText(selectedAreaForEdit.value.id, newTextForArea.value)
    emit('areaUpdated', { ...selectedAreaForEdit.value, text: newTextForArea.value })
    // Опционально: clearSelectionForEdit(); // или пусть пользователь сам отменит
  }
}

function handleDeleteArea() {
  if (selectedAreaForEdit.value) {
    const areaIdToDelete = selectedAreaForEdit.value.id
    composableDeleteArea(areaIdToDelete)
    emit('areaDeleted', { areaId: areaIdToDelete })
    // selectedAreaForEdit автоматически станет null в composable
  }
}

function cancelEdit() {
  clearSelectionForEdit()
  newTextForArea.value = ''
}
</script>

<template>
  <div class="toon-reader-module">
    <div v-if="totalPages > 0" class="reader-content">
      <div class="image-viewer-wrapper">
        <div class="image-viewer">
          <div v-if="isLoadingImage" class="loading-overlay">
            <v-progress-circular indeterminate color="primary" size="64" />
          </div>
          <canvas
            ref="canvasRef"
            class="toon-canvas"
            @pointerdown="handlePointerDown"
            @pointermove="handlePointerMove"
            @pointerup="handlePointerUp"
            @pointerleave="handlePointerLeave"
          />
        </div>
      </div>

      <div class="controls">
        <v-btn
          :disabled="!canGoPrev || isLoadingImage"
          variant="tonal"
          @click="prevPage"
        >
          <v-icon start>
            mdi-arrow-left
          </v-icon>
          Назад
        </v-btn>
        <span class="page-info">
          <!-- Страница {{ currentPageIndex + 1 }} из {{ totalPages }} -->
        </span>
        <v-btn
          :disabled="!canGoNext || isLoadingImage"
          variant="tonal"
          @click="nextPage"
        >
          Далее
          <v-icon end>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </div>

      <!-- Информация о наведенной области в режиме просмотра -->
      <div v-if="mode === 'view' && hoveredAreaId" class="hover-info-wrapper">
        <div class="hover-info">
          <p>Hovering over an area. Click to see details.</p>
        </div>
      </div>

      <!-- Панель редактирования/информации -->
      <div v-if="selectedAreaForEdit && mode === 'edit'" class="edit-panel-wrapper">
        <div class="edit-panel">
          <h3>Edit Area (ID: {{ selectedAreaForEdit.id.substring(0, 5) }})</h3>
          <v-textarea
            v-model="newTextForArea"
            label="Associated Text"
            rows="3"
            variant="outlined"
            density="compact"
            class="mb-2"
            hide-details
          />
          <div class="edit-panel-actions">
            <v-btn color="primary" variant="tonal" @click="handleUpdateText">
              Save Text
            </v-btn>
            <v-btn color="error" variant="outlined" @click="handleDeleteArea">
              Delete Area
            </v-btn>
            <v-btn variant="text" @click="cancelEdit">
              Cancel / Deselect
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-images-module">
      <p>No images to display.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.toon-reader-module {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.reader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.image-viewer-wrapper {
  width: 100%;
  aspect-ratio: 2/3;
  position: relative;
  margin: 0 auto;
}

.image-viewer {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--border-primary-color);
  background-color: var(--bg-tertiary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px var(--bg-overlay-primary-color);
}

.toon-canvas {
  display: block;
  max-width: 100%;
  min-width: 50%;
  max-height: 100%;
  object-fit: contain;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;

  .v-btn {
    text-transform: none;
  }
}

.page-info {
  font-size: 0.9rem;
  color: var(--fg-secondary-color);
  min-width: 120px;
  text-align: center;
}

.hover-info {
  font-style: italic;
  color: var(--fg-tertiary-color);
  font-size: 0.9em;
  padding: 0.3em 0.6em;
  background-color: var(--bg-secondary-color);
  border-radius: 4px;

  &-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
}

.edit-panel {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--border-accent-color);
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    font-size: 1.2rem;
    color: var(--fg-primary-color);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  &-actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}
.snippet-preview-edit {
  margin-top: 1rem;
  padding: 0.8rem;
  border: 1px dashed var(--fg-secondary-color);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-tertiary-color);
  max-width: 100%;

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--fg-primary-color);
  }
  .extracted-image {
    max-width: 100%;
    max-height: 150px;
    border: 1px solid var(--border-primary-color);
    object-fit: contain;
  }
  .text-caption {
    color: var(--fg-tertiary-color);
    font-size: 0.8em;
  }
}

.no-images-module {
  text-align: center;
  color: var(--fg-secondary-color);
  padding: 1rem;
  border: 1px dashed var(--border-secondary-color);
  border-radius: 6px;
  background-color: var(--bg-tertiary-color);
}
</style>

--- File: app/error.vue ---

<script setup lang="ts">

</script>

<template>
  <div />
</template>

--- File: app/layouts/base-with-effects.vue ---

<script lang="ts" setup>
import { BackgroundEffects } from '~/components/02.shared/background-effects'
import { Footer } from '~/components/02.shared/footer'
import { Header } from '~/components/02.shared/header'
import { HeaderMenuDrawer } from '~/components/02.shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/02.shared/header-profile-drawer'

const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)

const { isMobile } = useDevice()
const store = useStore(['auth'])
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <VLayout>
    <HeaderMenuDrawer v-model="isMenuDrawer" />
    <HeaderProfileDrawer v-if="store.auth.isAuthenticated" v-model="isProfileDrawer" />

    <VMain>
      <div class="main-content">
        <slot />
      </div>

      <ClientOnly>
        <BackgroundEffects v-if="!isMobile" />
      </ClientOnly>

      <Footer />
    </VMain>
  </VLayout>
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
}
</style>

--- File: app/layouts/glossary-sysname.vue ---

<script lang="ts" setup>
import { PageLoader } from '~/components/02.shared/page-loader'
import BaseLayout from './base-with-effects.vue'

export type TabVariant = 'topic' | 'brief' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsLeftOptions = [
  {
    key: 'topic',
    icon: 'material-symbols:slab-serif-outline',
    hint: 'Полное содержимое статьи',
  },
  {
    key: 'brief',
    icon: 'material-symbols:stack-hexagon-outline',
    hint: 'Обобщенние статьи',
  },
  {
    key: 'lab',
    icon: 'material-symbols:lab-research-outline',
    hint: 'Создание тестов относительно материала',
  },
] satisfies TabsOption[]

const route = useRoute()
const currentTab = ref<TabVariant>('topic')
const isLoadingContent = ref<boolean>(false)

function handleChangeTab(value: TabVariant) {
  currentTab.value = value
  navigateTo(RoutePaths.Glossary.Page('1', value))
}

const hash = route.fullPath.split('/').at(-1)
if (hash && tabsLeftOptions.some(tab => tab.key === hash)) {
  currentTab.value = hash as TabVariant
}
</script>

<template>
  <BaseLayout>
    <PageLoader v-if="isLoadingContent" />

    <section v-else class="content">
      <div class="header-section">
        <div class="option left">
          <VTooltip
            v-for="tab in tabsLeftOptions"
            :key="tab.key"
            :text="tab.hint"
          >
            <template #activator="{ props }">
              <Icon
                v-bind="props"
                class="option-item"
                :class="[{ isActive: currentTab === tab.key }]"
                :name="tab.icon"
                size="32"
                @click="handleChangeTab(tab.key)"
              />
            </template>
          </VTooltip>
        </div>

        <h1 class="title">
          Модальные глаголы
        </h1>

        <div class="option right" />
      </div>

      <slot />
    </section>
  </BaseLayout>
</template>

<style scoped lang="scss">
.content {
  background-color: var(--bg-primary-color);
  font-family: 'Rubik';
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;

  @include mobile() {
    padding: 0px;
  }
}

.header-section {
  max-width: 1200px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'LEFT_OPTION TITLE RIGHT_OPTION';
  border-bottom: 2px solid var(--border-primary-color);
  padding: 24px 5px 10px 5px;

  .title {
    grid-area: TITLE;
    text-align: center;
    font-size: 1.8rem;

    @include mobile() {
      border-top: 2px solid var(--border-primary-color);
      padding: 8px 0;
    }
  }

  .option {
    display: flex;
    align-items: center;
    gap: 12px;

    &-item {
      color: var(--fg-secondary-color);
    }
    .isActive {
      color: var(--fg-action-color);
    }

    > * {
      cursor: pointer;
    }

    &.left {
      grid-area: LEFT_OPTION;

      @include mobile() {
        padding-left: 8px;
      }
    }
    &.right {
      grid-area: RIGHT_OPTION;
      display: flex;
      flex-direction: row-reverse;

      @include mobile() {
        padding-right: 8px;
      }
    }
  }

  @include mobile() {
    margin: 8px auto 20px auto;
    padding: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'LEFT_OPTION RIGHT_OPTION'
      'TITLE TITLE';
  }
}

:deep() {
  .example {
    border-left: 2px dashed var(--border-accent-color);
    padding-left: 8px;
  }
  .text {
    line-height: 32px;
  }
  .warn {
    display: inline-block;
    padding: 10px;
    background: var(--bg-secondary-color);
    border-left: 4px solid var(--border-accent-color);
    border-radius: 6px 12px 12px 6px;
    min-width: 420px;
  }
  .fg-secondary {
    color: var(--fg-secondary-color);
  }
  hr {
    margin-top: 32px;
    margin-bottom: 48px;
    border: 1px solid var(--border-secondary-color);
  }
}
</style>

--- File: app/middleware/auth.ts ---

/* eslint-disable unused-imports/no-unused-vars */
interface RouteMetaAuth {
  requiredRoles?: string[]
  requiresAuth?: boolean
}

export default defineNuxtRouteMiddleware((to) => {
  const { requiredRoles = [], requiresAuth = false } = to.meta as RouteMetaAuth

  // TODO
})

--- File: app/pages/[...all].vue ---

<script lang="ts" setup>
definePageMeta({ layout: 'base-with-effects' })

await navigateTo(RoutePaths.Keys.Tab('list'))
</script>

<template>
  <div />
</template>

--- File: app/pages/about/index.vue ---

<script setup lang="ts">
import { BackgroundEffects } from '~/components/02.shared/background-effects'
import { HaoticLines } from '~/components/03.domain/haotic-lines'

const contentEl = ref<HTMLElement>()
const { isMobile } = useDevice()
</script>

<template>
  <section ref="contentEl" class="wrapper">
    <div class="content">
      <h1>О проекте</h1>
      <p>
        Добро пожаловать! Меня зовут Иван, и когда в жизни стало слишком обыденно,
        я решил бросить вызов самому себе. Так появилась идея совместить изучение
        китайского языка с созданием этого веб-приложения.
        <br><br>
        По сути, это цифровой дневник с инструментами, которые помогают закрепить
        знания на глубинном уровне. Здесь собраны личные заметки и разработки,
        рождённые в процессе погружения в китайский язык.
        <br><br>
        Если вы хотите узнать о технической реализации проекта или предложить
        улучшения, исходный код доступен на
        <span class="source">
          <a href="https://github.com/injurka/chinisik">GitHub</a>
        </span>
      </p>

      <div class="section">
        <h2>Важно знать</h2>
        <ul>
          <li>Проект создан для личного использования без коммерческих целей</li>
          <li>Контент основан на субъективном опыте изучения языка</li>
          <li>Материалы собирались из открытых источников и в процессе работы с языковыми моделями</li>
        </ul>
      </div>
    </div>

    <VBtn
      variant="tonal"
      class="back"
      @click="navigateTo(RoutePaths.Keys.Tab('list'))"
    >
      Вернуться на главную
    </VBtn>

    <ClientOnly>
      <BackgroundEffects v-if="!isMobile" />

      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="180"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="220"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
.haotic-lines {
  opacity: 0.1;
}

.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back {
  z-index: 10;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-tertiary-color);
  width: auto;
  margin: 1rem auto;
  margin-bottom: 2rem;
  font-size: 0.85rem;

  @include mobile {
    font-size: 0.8rem;
  }
}

.content {
  z-index: 10;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  color: var(--fg-primary-color);
  line-height: 1.6;
  background-color: rgba(var(--bg-header-color), 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 8px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);

  h1 {
    font-size: 2rem;
    color: var(--fg-accent-color);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--border-accent-color);
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--fg-action-color);
    margin: 1rem 0;
    margin-bottom: 0;
  }

  p {
    margin: 0.5rem 0;
    color: var(--fg-secondary-color);
  }

  ul {
    padding-left: 1rem;
    li {
      margin: 0.3rem 0;
      font-size: 0.9rem;
      color: var(--fg-tertiary-color);
      &::marker {
        color: var(--border-accent-color);
      }
    }
  }

  .source {
    white-space: nowrap;
    display: inline-flex;
    padding: 0 6px;
    align-items: center;
    gap: 4px;
    color: var(--fg-secondary-color);
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 4px;
    opacity: 0.7;

    a {
      color: var(--fg-secondary-color);
    }

    &:hover {
      color: var(--fg-action-color);
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-accent-color);
      box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      opacity: 1;
    }
  }
}

.section {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary-color);
  border-left: 3px solid var(--border-accent-color);
  border-radius: 4px;
}
</style>

--- File: app/pages/auth/callback.vue ---

<script setup lang="ts">
import { PageLoader } from '~/components/02.shared/page-loader'

const route = useRoute()
const store = useStore(['auth'])

async function authorizationCallback() {
  const token = route.query.token as string
  const refreshToken = route.query.refreshToken as string

  if (!token || !refreshToken) {
    navigateTo({
      path: RoutePaths.Auth.SignIn(),
      query: {
        oa_error: OAuthErrors.MissingToken,
      },
    })
  }

  await store.auth.refresh(refreshToken, true)
  await nextTick()
  validateUser()
}

async function validateUser() {
  const { status } = await store.auth.me()

  if (status === 'REJECTED') {
    navigateTo({
      path: RoutePaths.Auth.SignIn(),
      query: { oa_error: OAuthErrors.MeError },
    })
  }
  else {
    navigateTo({ path: RoutePaths.Keys.Tab('list') })
  }
}

onMounted(() => {
  authorizationCallback()
})
</script>

<template>
  <div class="content">
    <div class="card">
      <p class="title">
        正在完成授权...
      </p>
      <p class="subtitle">
        Завершение авторизации...
      </p>
      <PageLoader />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-family: var(--font-family-cn);
      color: var(--fg-primary-color);
      font-weight: 500;
      font-size: 2rem;
    }

    .subtitle {
      font-family: 'Rubik';
      font-weight: 400;
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
    }

    .loader {
      margin-top: 24px;
      height: auto;
      flex-grow: 0;
      font-size: 2rem;
    }
  }
}
</style>

--- File: app/pages/auth/forgot-password.vue ---

<script setup lang="ts">

</script>

<template>
  <section class="content">
    <div class="card">
      Я его тоже не помню
    </div>
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
}

.card {
  z-index: 10;
  width: 520px;
  margin: 16px;

  font-family: 'Rubik';
  text-decoration: none;
  text-transform: none;

  border-left: 4px solid var(--border-secondary-color);
  border-right: 4px solid var(--border-secondary-color);

  padding: 32px;
}
</style>

--- File: app/pages/auth/sign-in.vue ---

<script setup lang="ts">
import LogoSVG from '~/assets/svg/logo.svg?raw'
import { HaoticLines } from '~/components/03.domain/haotic-lines'
import { OAuthErrors, OAuthProviders } from '~/shared/types/models'

enum RequestKeys {
  SIGN_IN = 'auth_sign-in',
}

const store = useStore(['auth'])
const route = useRoute()

const email = ref<string>('')
const password = ref<string>('')
const terms = ref<boolean>(false)
const contentEl = ref<HTMLElement>()

const formHasErrors = ref<boolean>(false)
const isPasswordShowed = ref<boolean>(false)
const snackbarError = ref({
  showed: false,
  msg: '',
})

const emailRules = [
  (v: string) => !!v || 'Почтовый адрес обязателен',
  (v: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(v) || 'Неверный формат почты',
]

const passwordRules = [
  (v: string) => !!v || 'Пароль обязателен',
  (v: string) => v.length >= 8 || 'Пароль должен быть не менее 8 символов',
]

const isLoading = computed(() => useRequestStatus([RequestKeys.SIGN_IN]))

async function submitSignIn() {
  formHasErrors.value = false

  const emailValid = emailRules.every(rule => rule(email.value) === true)
  const passwordValid = passwordRules.every(rule => rule(password.value) === true)

  if (!emailValid || !passwordValid || !terms.value) {
    formHasErrors.value = true
    return
  }

  try {
    await store.auth.signIn({ email: email.value, password: password.value }, true)

    await navigateTo(RoutePaths.Keys.Tab('list'))
  }
  catch (error) {
    let errorMessage: string = 'Неизвестная ошибка.'

    if (isIApiError(error))
      errorMessage = error.message
    else if (error instanceof Error)
      errorMessage = error.message

    snackbarError.value = { showed: true, msg: errorMessage }
  }
}

function customizeSvgColors(content: string) {
  return content
    .replaceAll('#bbcef8', 'var(--fg-accent-color)')
    .replaceAll('#424c86', 'var(--border-accent-color)')
}

async function handleOAuth(provider: OAuthProviders) {
  const { apiBaseUrl } = useRuntimeConfig().public

  switch (provider) {
    case OAuthProviders.GitHub:
      await navigateTo({ path: cleanDoubleSlashes(`${apiBaseUrl}/v1/auth/github`) }, { external: true })
      break

    case OAuthProviders.Google:
      await navigateTo({ path: cleanDoubleSlashes(`${apiBaseUrl}/v1/auth/google`) }, { external: true })
      break
  }
}

onMounted(() => {
  const oauthError = route.query.oa_error as OAuthErrors

  if (oauthError) {
    let msg = ''

    switch (oauthError) {
      case OAuthErrors.MissingToken:
        msg = 'Ошибка при OAuth авторизации'
        break

      case OAuthErrors.MeError:
        msg = 'Не удалось получить данные пользователя'
        break
    }

    snackbarError.value = {
      showed: true,
      msg,
    }

    // Очиска query параметров
    navigateTo({ query: {} })
  }
})
</script>

<template>
  <section ref="contentEl" class="content">
    <div class="card">
      <v-progress-linear
        v-if="isLoading"
        color="var(--fg-accent-color)"
        indeterminate
        height="4"
        class="linear-left"
      />
      <v-progress-linear
        v-if="isLoading"
        color="var(--fg-accent-color)"
        indeterminate
        height="4"
        class="linear-right"
      />

      <div class="logo">
        <span v-html="customizeSvgColors(LogoSVG)" />
      </div>

      <v-form :disabled="isLoading" class="form" @submit.prevent="submitSignIn">
        <v-text-field
          v-model="email"
          label="Почтовый адрес"
          variant="outlined"
          placeholder="chinisik@gmail.com"
          prepend-icon="mdi-email-outline"
          :rules="emailRules"
          type="email"
          name="email"
          required
        />
        <v-text-field
          v-model="password"
          label="Пароль"
          :type="isPasswordShowed ? 'text' : 'password'"
          name="password"
          variant="outlined"
          :rules="passwordRules"
          prepend-icon="mdi-lock-outline"
          :append-inner-icon="isPasswordShowed ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          required
          @click:append-inner="isPasswordShowed = !isPasswordShowed"
        />
        <v-checkbox
          v-model="terms"
          color="primary"
          class="legal"
          label="Я подтверждаю, что прочитал, согласен и принимаю Chinisik's Условия использования и Политику конфиденциальности."
          required
        />

        <v-btn
          type="submit"
          class="mb-4"
          color="primary"
          size="large"
          variant="tonal"
          block
          :disabled="!terms"
        >
          Авторизоваться
        </v-btn>
      </v-form>

      <div class="utils">
        <v-btn variant="text" color="primary" @click="navigateTo(RoutePaths.Auth.ForgotPassword())">
          Забыли пароль?
        </v-btn>
        <v-btn variant="text" color="primary" @click="navigateTo(RoutePaths.Auth.SignUp())">
          Создать аккаунт
        </v-btn>
      </div>

      <div class="divider">
        <div class="divider-left" />
        <div class="divider-text">
          ИЛИ
        </div>
        <div class="divider-right" />
      </div>

      <div class="additional">
        <div class="additional-oauth">
          <v-btn
            variant="outlined"
            color="primary"
            height="52"
            @click="handleOAuth(OAuthProviders.Google)"
          >
            <v-icon size="25">
              mdi-google
            </v-icon>
          </v-btn>
          <v-btn
            variant="outlined"
            color="primary"
            height="52"
            @click="handleOAuth(OAuthProviders.GitHub)"
          >
            <v-icon size="25">
              mdi-github
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <ClientOnly>
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="180"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="220"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>

    <v-snackbar
      v-model="snackbarError.showed"
      close-delay="2"
      location="top"
      color="var(--border-negative-color)"
    >
      <div class="text-center">
        {{ snackbarError.msg }}
      </div>
    </v-snackbar>
  </section>
</template>

<style scoped lang="scss">
.haotic-lines {
  opacity: 0.1;
}
.linear-right {
  right: calc(260px - (660px - 520px) / 2);
}
.linear-left {
  left: calc(260px - (660px - 520px) / 2);
}

.linear-right,
.linear-left {
  position: absolute;
  display: flex;
  top: 0;
  width: 650px;
  transform: rotate(90deg) translateX(50%);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
}

.card {
  position: relative;
  z-index: 10;
  width: 520px;
  margin: 16px;
  background-color: rgba(var(--bg-header-color), 0.2);
  backdrop-filter: blur(8px);
  font-family: 'Rubik';
  text-decoration: none;
  text-transform: none;

  border-left: 4px solid var(--border-secondary-color);
  border-right: 4px solid var(--border-secondary-color);

  padding: 32px;

  &:deep(.v-btn) {
    color: var(--fg-action-color) !important;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  margin: 16px;
  margin-top: 8px;
  margin-bottom: 32px;
  gap: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-icon {
    color: var(--border-accent-color);
  }
}

.legal {
  &:deep(.v-label) {
    font-size: 0.9rem;
  }
}

.utils {
  display: flex;
  justify-content: space-between;

  &:deep(.v-btn) {
    text-decoration: none;
    text-transform: none;
    color: var(--fg-tertiary-color) !important;
  }
}

.divider {
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  display: flex;

  &-left,
  &-right {
    background-color: var(--border-primary-color);
    flex-grow: 1;
    height: 1px;
  }
  &-text {
    color: var(--fg-tertiary-color);
    flex-shrink: 0;
    margin: 0 10px;
  }
}

.additional {
  &-oauth {
    display: flex;
    justify-content: center;
    gap: 18px;
  }
}
</style>

--- File: app/pages/auth/sign-up.vue ---

<script setup lang="ts">

</script>

<template>
  <section class="content">
    <div class="card">
      Я запрещаю тебе регистрироваться здесь
    </div>
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
}

.card {
  z-index: 10;
  width: 520px;
  margin: 16px;

  font-family: 'Rubik';
  text-decoration: none;
  text-transform: none;

  border-left: 4px solid var(--border-secondary-color);
  border-right: 4px solid var(--border-secondary-color);

  padding: 32px;
}
</style>

--- File: app/pages/error.vue ---

<script setup lang="ts">

</script>

<template>
  <div class="error" />
</template>

<style scoped>

</style>

--- File: app/pages/glossary/[sysname]/brief.vue ---

<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { textMock } from '~/../server/utils/mock/glossary/1_modal-verb/text-mock'
import { JsonToDom } from '~/components/03.domain/json-to-dom'

function handleNavigateTab(value: TabVariant) {
  navigateTo(RoutePaths.Glossary.Page('1', value))
}

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="content-section">
    <JsonToDom
      :node="textMock.brief!"
    />

    <div class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('topic')"
      >
        <template #prepend>
          <Icon name="mdi:arrow-left" />
        </template>
        Перейти к полной статье
      </VBtn>
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('lab')"
      >
        Перейти к проверке знаний
        <template #append>
          <Icon name="mdi:arrow-right" />
        </template>
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 16px;

  > :first-child {
    height: 100%;
  }

  @include mobile() {
    padding: 4px;
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px 0;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);
    gap: 8px;

    @include mobile() {
      font-size: 0.9rem;
      padding-left: 8px;
      padding-right: 8px;

      &:deep(.v-btn) {
        width: 100%;
      }
    }
    &-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      letter-spacing: 0;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}
</style>

--- File: app/pages/glossary/[sysname]/lab.vue ---

<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { GlossarySysnameLabContent } from '~/components/05.modules/glossary-sysname-lab'

function handleNavigateTab(value: TabVariant) {
  navigateTo(RoutePaths.Glossary.Page('1', value))
}

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="content-section">
    <GlossarySysnameLabContent />

    <div class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('brief')"
      >
        <template #prepend>
          <Icon name="mdi:arrow-left" />
        </template>
        Перейти к кратком содержанию
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 16px;

  > :first-child {
    height: 100%;
  }

  @include mobile() {
    padding: 4px;
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);
    font-size: 1rem;
    gap: 8px;

    @include mobile() {
      font-size: 0.9rem;
      padding-left: 8px;
      padding-right: 8px;

      &:deep(.v-btn) {
        width: 100%;
      }
    }

    &-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      letter-spacing: 0;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}
</style>

--- File: app/pages/glossary/[sysname]/topic.vue ---

<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { textMock } from '~/../server/utils/mock/glossary/1_modal-verb/text-mock'
import { JsonToDom } from '~/components/03.domain/json-to-dom'

function handleNavigateTab(value: TabVariant) {
  navigateTo(RoutePaths.Glossary.Page('1', value))
}

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="content-section">
    <JsonToDom
      :node="textMock.main!"
    />

    <div class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('brief')"
      >
        Перейти к кратком содержанию
        <template #append>
          <Icon name="mdi:arrow-right" />
        </template>
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 16px;

  > :first-child {
    height: 100%;
  }

  @include mobile() {
    padding: 4px;
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);

    @include mobile() {
      font-size: 0.9rem;
      padding-left: 8px;
      padding-right: 8px;

      &:deep(.v-btn) {
        width: 100%;
      }
    }

    &-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      letter-spacing: 0;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}
</style>

--- File: app/pages/glossary/index.vue ---

<script lang="ts" setup>
import { mockCms } from '~/../server/utils/mock/cms/description'
import { PageLoader } from '~/components/02.shared/page-loader'
import { JsonToDom } from '~/components/03.domain/json-to-dom'

const isLoadingContent = ref<boolean>(false)
const items = [
  'Модальный глагол 1',
  'Модальный глагол 2',
  'Модальный глагол 3',
]

function handleOpenTopic(value: string) {
  navigateTo(`${RoutePaths.Glossary.Page(value, 'topic')}`)
}

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content-wrapper">
    <JsonToDom
      :node="mockCms.glossary"
    />

    <div class="topic-list">
      <div
        v-for="item in items"
        :key="item"
        class="topic-item"
        @click="handleOpenTopic('1')"
      >
        <Icon name="material-symbols:stacks-outline" size="28" />
        <span class="topic-item-name"> {{ item }} </span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  .topic {
    &-list {
      max-width: 1200px;
      width: 100%;
      margin: 24px auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 20px;
    }

    &-item {
      background-color: var(--bg-secondary-color);
      border: 1px solid var(--border-secondary-color);
      height: 44px;
      padding: 4px;
      cursor: pointer;
      display: flex;
      flex-grow: 1;
      flex-basis: 300px;
      gap: 8px;
      font-size: 1rem;
      align-items: center;
      overflow: hidden;
      transition: box-shadow 0.2s ease-in-out;

      .iconify {
        min-width: 1em;
        color: var(--fg-accent-color);
      }

      &-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:hover {
        box-shadow: 0 0 8px var(--bg-overlay-secondary-color);
      }
    }
  }
}
</style>

--- File: app/pages/hsk/index.vue ---

<script setup lang="ts">
import { mockCms } from '~/../server/utils/mock/cms/description'

import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { HskAbout, HskLab, HskWords } from '~/components/05.modules/hsk'

type TabVariant = 'about' | 'words' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsOptions = [
  { key: 'about', icon: 'mdi-book', hint: 'Подробнее о HSK' },
  { key: 'words', icon: 'mdi-book-open-page-variant', hint: 'Слова' },
  { key: 'lab', icon: 'mdi-test-tube', hint: 'Проверка знаний' },
] satisfies TabsOption[]

const { isMobile } = useDevice()
const route = useRoute()

const currentTab = ref<TabVariant>(initialTab())

function initialTab() {
  const tab = route.query.tab as TabVariant | undefined
  return tab && tabsOptions.some(t => t.key === tab) ? tab : 'about'
}

watch(
  currentTab,
  (newTab) => {
    navigateTo({
      path: RoutePaths.HSK.Index(),
      query: { tab: newTab },
      replace: true,
    })
  },
)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <JsonToDom :node="mockCms.hskLevels!" />

    <div class="tabs">
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        :fixed-tabs="!isMobile"
        color="var(--fg-accent-color)"
        bg-color="transparent"
        slider-color="var(--fg-action-color)"
      >
        <v-tab
          v-for="tab in tabsOptions"
          :key="tab.key"
          :prepend-icon="tab.icon"
          :value="tab.key"
          :text="isMobile ? '' : tab.hint"
        />
      </v-tabs>
    </div>

    <v-tabs-window v-model="currentTab" class="window">
      <v-tabs-window-item value="about">
        <v-container fluid>
          <Transition name="smooth-appear" mode="out-in">
            <HskAbout />
          </Transition>
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="words">
        <v-container fluid>
          <Transition name="smooth-appear" mode="out-in">
            <HskWords />
          </Transition>
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="lab">
        <v-container fluid>
          <Transition name="smooth-appear" mode="out-in">
            <HskLab />
          </Transition>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  .tabs {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;
    border-bottom: 1px solid var(--border-secondary-color);

    .settings {
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      height: 48px;
    }
    .v-btn {
      color: var(--fg-secondary-color);
      text-transform: none;
      z-index: 1000;
    }
  }

  .window {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &:deep() {
      .v-window__container {
        display: flex;
        flex-grow: 1;
      }
      .v-window-item {
        display: flex;
        flex-grow: 1;
      }
      .v-container {
        display: flex;
        flex-grow: 1;
        @include mobile {
          padding: 4px;
        }
      }
    }
  }
}
</style>

--- File: app/pages/keys/index.vue ---

<script lang="ts" setup>
import { PageLoader } from '~/components/02.shared/page-loader'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { KeyHieroglyphControl, KeyHieroglyphList, KeyHieroglyphPractice } from '~/components/05.modules/keys'

type TabVariant = 'list' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsOptions = [
  { key: 'list', icon: 'mdi-book-open-page-variant', hint: 'Полный список' },
  { key: 'lab', icon: 'mdi-test-tube', hint: 'Проверка знаний' },
] satisfies TabsOption[]

const route = useRoute()
const { isMobile } = useDevice()
const store = useStore(['keys'])
const { isLoadingContent, description, hieroglyphKeys } = storeToRefs(store.keys)

const controlMenu = ref(false)
const currentTab = ref<TabVariant>(initialTab())

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAndSetAllKeys(),
    store.keys.getAndSetDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

function initialTab() {
  const tab = route.query.tab as TabVariant | undefined

  return tab && tabsOptions.some(t => t.key === tab) ? tab : 'list'
}

watch(
  currentTab,
  (newTab) => {
    navigateTo({
      path: RoutePaths.Keys.Index(),
      query: { tab: newTab },
      replace: true,
    })
  },
)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content-wrapper">
    <JsonToDom
      :node="description!"
    />

    <div class="tabs">
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        :fixed-tabs="isMobile ? false : true"
        color="var(--fg-accent-color)"
        bg-color="transparent"
        slider-color="var(--fg-action-color)"
      >
        <v-tab
          v-for="tab in tabsOptions"
          :key="tab.key"
          :prepend-icon="tab.icon"
          :value="tab.key"
          :text="isMobile ? '' : tab.hint"
        />
      </v-tabs>
      <div class="settings">
        <v-menu
          v-model="controlMenu"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              icon
              variant="text"
              v-bind="props"
            >
              <Icon size="24" name="mdi-tune" />
            </v-btn>
          </template>

          <KeyHieroglyphControl />
        </v-menu>
      </div>
    </div>

    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="list">
        <v-container fluid>
          <KeyHieroglyphList :items="hieroglyphKeys" />
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="lab">
        <v-container fluid>
          <KeyHieroglyphPractice :items="hieroglyphKeys" />
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  .tabs {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;
    border-bottom: 1px solid var(--border-secondary-color);

    .settings {
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      height: 48px;
    }
    .v-btn {
      color: var(--fg-primary-color);
      text-transform: none;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 64px;
  }
}
</style>

--- File: app/pages/linguistic-analysis/history.vue ---

<script setup lang="ts">
import { LinguisticAnalysisHistory } from '~/components/05.modules/linguistic-analysis-history'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <h1 class="page-title">
      История лексического анализа
    </h1>
    <LinguisticAnalysisHistory />
  </section>
</template>

<style lang="scss" scoped>
.page-title {
  text-align: center;
}
</style>

--- File: app/pages/linguistic-analysis/index.vue ---

<script setup lang="ts">
import { mockCms } from '~/../server/utils/mock/cms/description'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { LinguisticAnalysis } from '~/components/05.modules/linguistic-analysis'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <JsonToDom :node="mockCms.linguisticAnalysis!" />

    <LinguisticAnalysis />

    <v-tooltip location="top" text="История лексического разбора">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="history-button"
          rounded
          variant="tonal"

          @click="navigateTo(RoutePaths.LinguisticAnalysis.History())"
        >
          <span>История</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </section>
</template>

<style lang="scss" scoped>
.history-button {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-secondary-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;
  margin-top: auto;

  :first-of-type {
    margin-right: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>

--- File: app/pages/pinyin.vue ---

<script setup lang="ts">
import { PageLoader } from '~/components/02.shared/page-loader'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { PinyinTable } from '~/components/05.modules/pinyin/index'

const store = useStore(['pinyin'])
const {
  isLoadingContent,
  finals,
  initials,
  initialWithFinal,
  description,
} = storeToRefs(store.pinyin)

await useAsyncData(
  'pinyin',
  () => Promise.all([
    store.pinyin.getAndSetPinyin(),
    store.pinyin.getAndSetDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content-wrapper">
    <JsonToDom
      :node="description!"
    />

    <PinyinTable
      :finals="finals!"
      :initials="initials!"
      :initial-with-final="initialWithFinal!"
    />
  </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
  max-width: 100%;
}
</style>

--- File: app/pages/thematic-dictionary/[section]/[category]/index.vue ---

<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/../server/utils/mock/thematic-dictionary'
import { ThematicDictionaryCategory } from '~/components/05.modules/thematic-dictionary/thematic-dictionary-category'

const route = useRoute()
const categorySysname = route.params.category as string
const sectionSysname = route.params.section as string

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

const currentSection = data.value?.find(s => s.sysname === sectionSysname) ?? null
const currentCategory = currentSection?.categories.find(c => c.sysname === categorySysname) ?? null

const nextCategory = computed(() => {
  if (!currentSection || !currentCategory)
    return null

  const currentIndex = currentSection.categories.findIndex(cat => cat.sysname === currentCategory?.sysname)
  if (currentIndex === -1 || currentIndex === currentSection.categories.length - 1)
    return null

  return currentSection.categories[currentIndex + 1]
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionaryCategory
      v-if="currentCategory && currentSection"
      :category="currentCategory"
      :section="currentSection"
      :next-category="nextCategory!"
    />
    <p v-else>
      Категория не найдена.
    </p>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  @include mobile() {
    padding: 8px;
  }
}
</style>

--- File: app/pages/thematic-dictionary/[section]/index.vue ---

<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/../server/utils/mock/thematic-dictionary'
import { ThematicDictionarySection } from '~/components/05.modules/thematic-dictionary/thematic-dictionary-section'

const route = useRoute()
const sectionSysname = route.params.section as string

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

const currentSection = data.value?.find(s => s.sysname === sectionSysname) ?? null

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionarySection
      v-if="currentSection"
      :section="currentSection"
      :sections="thematicDictionaryDataMock.catalog"
    />
    <p v-else>
      Раздел не найден.
    </p>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  @include mobile() {
    padding: 8px;
  }
}
</style>

--- File: app/pages/thematic-dictionary/index.vue ---

<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/../server/utils/mock/thematic-dictionary'
import { ThematicDictionaryCatalog } from '~/components/05.modules/thematic-dictionary/thematic-dictionary-catalog'

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionaryCatalog
      v-if="data"
      :sections="data"
    />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  padding-top: 20px;

  @include mobile() {
    padding: 8px;
    padding-top: 20px;
  }
}
</style>

--- File: app/pages/toon/[sysname].vue ---

<!-- eslint-disable no-alert -->
<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { HighlightArea, ToonReaderMode } from '~/components/05.modules/toon/toon-reader'
import { ToonReader } from '~/components/05.modules/toon/toon-reader'

definePageMeta({
  layout: 'base-with-effects',
})

const toonImages = ref([
  '/toon/tsinning/0001.jpg',
  '/toon/tsinning/0002.jpg',
])

// Моковые данные для предустановленных областей
const predefinedAreas = ref<HighlightArea[]>([
  {
    id: 'area1-page0',
    pageId: '0',
    rect: { x: 50, y: 100, width: 200, height: 80 },
    text: 'Это первая область на первой странице!',
  },
  {
    id: 'area2-page0',
    pageId: '0',
    rect: { x: 300, y: 200, width: 150, height: 100 },
    text: 'Другой текст здесь.',
  },
  {
    id: 'area1-page1',
    pageId: '1',
    rect: { x: 100, y: 50, width: 250, height: 120 },
    text: 'Текст для второй страницы.',
  },
] as HighlightArea[])

const readerMode = ref<ToonReaderMode>('view') // 'view' или 'edit'
const currentDisplayedText = ref<string | null>(null)
const lastCreatedSnippet = ref<{ area: HighlightArea, snippetBase64: string | null } | null>(null)

function handleAreaClicked(area: HighlightArea) {
  console.log('Page: Area clicked in view mode:', area)
  currentDisplayedText.value = area.text || 'Нет текста для этой области.'
  // Можно отобразить текст в модальном окне или специальном блоке
  // Например, используя Vuetify диалог:
  // dialogText.value = area.text; isDialogVisible.value = true;
}

function handleAreaCreated(payload: { area: HighlightArea, snippetBase64: string | null }) {
  console.log('Page: Area created/selected for AI:', payload)
  lastCreatedSnippet.value = payload
  // Здесь можно сразу отправить payload.snippetBase64 в AI для получения текста
  // и потом обновить payload.area.text
  // Например:
  // const aiText = await fetchAiText(payload.snippetBase64);
  // const areaToUpdate = predefinedAreas.value.find(a => a.id === payload.area.id);
  // if (areaToUpdate) areaToUpdate.text = aiText;
  // Или если хотите, чтобы пользователь сам вводил текст:
  // просто сохраняем, что область создана.

  // Добавляем новую область в наш список (если ее еще нет)
  // Это важно, если создание происходит только через UI модуля
  const exists = predefinedAreas.value.some(a => a.id === payload.area.id)
  if (!exists) {
    predefinedAreas.value.push(payload.area)
  }
}

function handleAreaUpdated(updatedArea: HighlightArea) {
  console.log('Page: Area text updated:', updatedArea)
  const index = predefinedAreas.value.findIndex(a => a.id === updatedArea.id)
  if (index !== -1) {
    predefinedAreas.value[index] = { ...updatedArea }
  }
  currentDisplayedText.value = null // Сбросить отображаемый текст
  if (lastCreatedSnippet.value?.area.id === updatedArea.id) {
    lastCreatedSnippet.value = null // Очистить, если обновляли только что созданную
  }
}

function handleAreaDeleted(payload: { areaId: string }) {
  console.log('Page: Area deleted:', payload.areaId)
  predefinedAreas.value = predefinedAreas.value.filter(a => a.id !== payload.areaId)
  currentDisplayedText.value = null
  if (lastCreatedSnippet.value?.area.id === payload.areaId) {
    lastCreatedSnippet.value = null
  }
}

function toggleMode() {
  readerMode.value = readerMode.value === 'view' ? 'edit' : 'view'
  currentDisplayedText.value = null
  lastCreatedSnippet.value = null
}
</script>

<template>
  <section class="content-wrapper">
    <div class="header-controls">
      <h1 class="page-title">
        蓝溪镇
      </h1>
      <div>
        <span>0003 Прощание</span>
      </div>
      <v-tooltip
        location="top"
        :text="`Перейти в режим ${readerMode === 'view' ? 'Редактирования' : 'Просмотра'}`"
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            rounded
            variant="tonal"
            @click="toggleMode"
          >
            <v-icon>
              {{ readerMode === 'view' ? 'mdi-pencil' : 'mdi-eye' }}
            </v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </div>

    <ToonReader
      :images="toonImages"
      :initial-areas="predefinedAreas"
      :mode="readerMode"
      @area-clicked="handleAreaClicked"
      @area-created="handleAreaCreated"
      @area-updated="handleAreaUpdated"
      @area-deleted="handleAreaDeleted"
    />
  </section>
</template>

<style scoped lang="scss">
.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 4px;
}

.page-title {
  text-align: left;
  margin-bottom: 0;
  font-size: 1.8rem;
}

.displayed-text-panel {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--border-accent-color);
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
  width: 100%;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.3rem;
    color: var(--fg-primary-color);
    margin-bottom: 0.75rem;
  }
  p {
    color: var(--fg-primary-color);
    white-space: pre-wrap; /* Чтобы сохранять переносы строк из текста */
    line-height: 1.6;
  }
  .v-btn {
    margin-top: 0.5rem;
    float: right;
  }
}

.ai-processing-section {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border-primary-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-tertiary-color);
  width: 100%;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.4rem;
    color: var(--fg-accent-color);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: var(--fg-secondary-color);
  }
  .page-extracted-image {
    max-width: 100%;
    max-height: 200px;
    border: 1px solid var(--border-secondary-color);
    object-fit: contain;
  }
  .v-btn {
    text-transform: none;
  }
}
</style>

--- File: app/pages/toon/manually.vue ---

<script setup lang="ts">
import { ToonManual } from '~/components/05.modules/toon/toon-manual'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <div class="header">
      <h1>Переводчик изображений</h1>
      <p class="description">
        Загрузите изображение с текстом, выделите область для перевода и получите результат с помощью AI
      </p>
    </div>

    <client-only>
      <ToonManual />
    </client-only>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .header {
    text-align: center;
    margin-bottom: 32px;

    h1 {
      color: var(--fg-primary-color);
      margin-bottom: 8px;
    }

    .description {
      color: var(--fg-secondary-color);
      font-size: 1rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @include mobile() {
    padding: 16px 8px;
  }
}
</style>

--- File: app/plugins/01.api.ts ---

export default defineNuxtPlugin(async (_) => {
  const store = useStore(['auth'])
  const { tokenPair } = storeToRefs(store.auth)

  const apiInterceptops = [{
    onRequest: ({ options }) => {
      if (options.skipAuth) {
        return
      }

      if (tokenPair.value?.access) {
        const accessToken = `Bearer ${tokenPair.value?.access}`
        const headers = options.headers ||= {} as Headers

        if (Array.isArray(headers)) {
          headers.push(['Authorization', accessToken])
          headers.push(['x-authorizaition', accessToken])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', accessToken)
          headers.set('x-authorizaition', accessToken)
        }
        else {
          (headers as { Authorization: string }).Authorization = accessToken
        }
      }
    },

    onRequestError: () => { },

    onResponse: () => { },

    onResponseError: () => { },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})

--- File: app/plugins/02.session-restore.ts ---

import { useAuthStore } from '~/shared/store'

/**
 * Плагин восстановления сессии.
 * Выполняется один раз при загрузке приложения.
 */
export default defineNuxtPlugin({
  name: 'session-restore',
  dependsOn: ['api-client'],
  async setup() {
    const authStore = useAuthStore()

    if (authStore.isInitialized) {
      return
    }

    try {
      // Если есть access-токен, пытаемся получить пользователя
      if (authStore.tokenPair?.access) {
        await authStore.me()
      }
      // Если access-токена нет, но есть refresh-токен, сразу обновляем
      else if (authStore.tokenPair?.refresh) {
        await authStore.refresh()
        await authStore.me()
      }
    }
    catch {
      // Если первая попытка не удалась (например, access-токен истек)
      // и у нас все еще есть refresh-токен (т.к. me() его больше не удаляет).
      if (authStore.tokenPair?.refresh) {
        try {
          console.warn('Первоначальная попытка восстановления сессии не удалась, пробую обновить токен.')
          await authStore.refresh()
          await authStore.me()
        }
        catch (refreshError) {
          // Если и обновление не помогло, то все очищаем
          console.error('Не удалось восстановить сессию даже после обновления токена:', refreshError)
          authStore.clearAuth()
        }
      }
      else {
        // Если refresh-токена нет, то просто очищаем
        authStore.clearAuth()
      }
    }
    finally {
      authStore.isInitialized = true
    }
  },
})

--- File: app/service-worker/notification.ts ---

//

--- File: app/service-worker/share-target.ts ---

/// <reference lib="WebWorker" />
// declare const self: ServiceWorkerGlobalScope

// const clientResolves: { [key: string]: () => void } = {}

export function onShareTarget(_: FetchEvent) {
  //   if (!event.request.url.endsWith('/web-share-target') || event.request.method !== 'POST')
  //     return

  //   event.waitUntil(handleSharedTarget(event))
}

// self.addEventListener('message', (event) => {
//   if (event.data.action !== 'ready-to-receive')
//     return

//   const id: string | undefined = (event.source as any)?.id ?? undefined

//   if (id && clientResolves[id] !== undefined)
//     clientResolves[id]()
// })

// async function handleSharedTarget(event: FetchEvent) {
//   event.respondWith(Response.redirect('/home?share-target=true', 303))
//   await waitForClientToGetReady(event.resultingClientId)

//   const [client, formData] = await getClientAndFormData(event)
//   if (client === undefined)
//     return

//   await sendShareTargetMessage(client, formData)
// }

// async function sendShareTargetMessage(client: Client, data: FormData) {
//   const sharedData: {
//     textParts: string[]
//     files: File[]
//   } = {
//     textParts: [],
//     files: [],
//   }

//   // We collect the text data shared with us
//   const title = data.get('title')
//   if (title !== null)
//     sharedData.textParts.push(title.toString())

//   const text = data.get('text')
//   if (text !== null)
//     sharedData.textParts.push(text.toString())

//   const link = data.get('link')
//   if (link !== null)
//     sharedData.textParts.push(link.toString())

//   // We collect the files shared with us
//   for (const [name, file] of data.entries()) {
//     if (name === 'files' && file instanceof File)
//       sharedData.files.push(file)
//   }

//   client.postMessage({ data: sharedData, action: 'compose-with-shared-data' })
// }

// function waitForClientToGetReady(clientId: string) {
//   return new Promise<void>((resolve) => {
//     clientResolves[clientId] = resolve
//   })
// }

// function getClientAndFormData(event: FetchEvent): Promise<[client: Client | undefined, formData: FormData]> {
//   return Promise.all([
//     self.clients.get(event.resultingClientId),
//     event.request.formData(),
//   ])
// }

--- File: app/service-worker/sw.ts ---

/* eslint-disable regexp/no-unused-capturing-group */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { cacheNames, clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING')
//     self.skipWaiting()
// })

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheNames.precache).then((cache) => {
      return cache.add('/')
    }),
  )
})

const entries = self.__WB_MANIFEST
if (import.meta.env.DEV)
  entries.push({ url: '/', revision: Math.random().toString() })

precacheAndRoute(entries)

cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
}

if (import.meta.env.PROD) {
  registerRoute(
    ({ request, sameOrigin }) => sameOrigin && request.destination === 'manifest',
    new NetworkFirst({
      cacheName: 'wander-mark-webmanifest',
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({ maxEntries: 100 }),
      ],
    }),
  )
  // Паттерн для файлов контента (json, txt, html, md) через прокси /api/cms/content/
  const contentApiPattern = /(json|txt|html|md)$/i
  const contentImgPattern = /(png|jpg|jpeg|svg|gif)$/i

  // === ВАЖНО: ПОРЯДОК ПРАВИЛ ИМЕЕТ ЗНАЧЕНИЕ ===
  // Более специфичные правила должны идти перед более общими.

  // Стратегия StaleWhileRevalidate для файлов контента (json, md и т.д.)
  // Это правило ДОЛЖНО идти ПЕРЕД более общими правилами для /api/
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = contentApiPattern.test(url.pathname)
      if (matches) {
        console.log(`[SW] Matched content API pattern for: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'static-content-stale-while-revalidate',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
        // Этот плагин разрешает кэширование только для статусов 0 (opaque) и 200 (OK)
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия StaleWhileRevalidate для изображений контента
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = contentImgPattern.test(url.pathname)
      if (matches) {
        console.log(`[SW] Matched image pattern for: ${url.pathname}`)
      }
      return matches
    },
    new StaleWhileRevalidate({
      cacheName: 'content-images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    }),
  )

  // Стратегия NetworkOnly для ОБЩИХ запросов к /api/, которые НЕ ДОЛЖНЫ кэшироваться
  // Это правило ДОЛЖНО идти ПОСЛЕ всех специфичных правил для /api/ (например, /api/cms/content/).
  registerRoute(
    // Используем функцию-матчер для логирования
    ({ url, request, event }) => {
      const matches = /^\/api\//.test(url.pathname)
      if (matches) {
        // Логгируем, если общий API паттерн совпал (это должно происходить только для запросов,
        // не попавших в contentApiPattern или contentImgPattern)
        console.log(`[SW] Matched general API pattern for: ${url.pathname}`)
      }
      return matches
    },
    new NetworkOnly(),
  )

  // === КОНЕЦ НАСТРОЙКИ ПРАВИЛ ===
}

// Маршрут для обработки навигационных запросов.
// Все запросы, которые не совпадают со статическими файлами и другими маршрутами,
// будут направлены на URL, созданный createHandlerBoundToURL('/').
// Это обычно отдает HTML-оболочку приложения.
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

// Активирует новую версию Service Worker'а сразу после установки,
// пропуская состояние ожидания (waiting state).
self.skipWaiting()
// Захватывает всех активных клиентов (открытые вкладки),
// чтобы новая версия SW начала контролировать их немедленно.
clientsClaim()

--- File: app/service-worker/tsconfig.json ---

{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "lib": [
      "ESNext",
      "WebWorker",
      "DOM.Iterable"
    ],
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "./"
  ],
  "exclude": []
}

--- File: app/service-worker/web-push-notifications.ts ---

/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

declare const self: ServiceWorkerGlobalScope

self.addEventListener('message', () => {

})

export function onPush(event: PushEvent) {
  const promise = self.registration.showNotification(
    'title',
    {
      badge: '/pwa-192x192.png',
      body: 'Buzz! Buzz!',
      data: {
        access_token: 'access_token',
        preferred_locale: 'ru',
        url: `/`,
      },
      dir: 'auto',
      icon: '/apple-touch-icon-180x180.png',
      lang: 'ru',
      tag: 'vibration-sample',

      // @ts-expect-error error missing type, just ignore
      timestamp: new Date().getTime(),

    },
  )

  event.waitUntil(promise)
}

export function onNotificationClick(event: NotificationEvent) {
  const reactToNotificationClick = new Promise((resolve) => {
    event.notification.close()
    resolve(openUrl(event.notification.data.url))
  })

  event.waitUntil(reactToNotificationClick)
}

function findBestClient(clients: WindowClient[]) {
  const focusedClient = clients.find(client => client.focused)
  const visibleClient = clients.find(client => client.visibilityState === 'visible')

  return focusedClient || visibleClient || clients[0]
}

async function openUrl(url: string) {
  const clients = await self.clients.matchAll({ type: 'window' })
  // Chrome 42-48 does not support navigate
  if (clients.length !== 0 && 'navigate' in clients[0]) {
    const client = findBestClient(clients as WindowClient[])
    await client.navigate(url).then(client => client?.focus())
  }

  await self.clients.openWindow(url)
}

--- File: app/shared/api/collections/auth/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Auth }

export type { IMethods as IAuthMethods }
export { service as authService }

--- File: app/shared/api/collections/auth/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/auth/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    signIn(payload: DTO.ISignInUserP) {
      return instance<DTO.IAuthUserR>(`/v1/auth/sign-in`, {
        method: 'POST',
        body: payload,
      })
    },

    me() {
      return instance<DTO.IAuthUserR['user']>(`/v1/auth/me`, {
        method: 'GET',
      })
    },

    refresh(payload: DTO.IRefreshAuthP) {
      return instance<DTO.IAuthTokenPair>(`/v1/auth/refresh`, {
        method: 'POST',
        body: payload,
        // Важно: не отправляем авто-заголовок Authorization
        skipAuth: true,
      })
    },

    // Добавляем метод для выхода
    signOut() {
      return instance(`/v1/auth/logout`, {
        method: 'POST',
      })
    },
  }
}

export default method

--- File: app/shared/api/collections/auth/handlers/v1.types.ts ---

import type { User } from '~/shared/types/models'

// Request //

interface ISignInUserP {
  password: string
  email: string
}

// Response //

interface IAuthTokenPair {
  token: string
  refreshToken: string
}

interface IAuthUserR extends IAuthTokenPair {
  user: User
}

interface IRefreshAuthP {
  refreshToken: string
}

export type {
  IAuthTokenPair,
  IAuthUserR,
  IRefreshAuthP,
  ISignInUserP,
}

--- File: app/shared/api/collections/auth/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/cms/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Cms }

export type { IMethods as ICmsMethods }
export { service as cmsService }

--- File: app/shared/api/collections/cms/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/cms/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    description(payload: DTO.IDescirptionP) {
      return instance<DTO.IDescriptionR>(`/v1/cms/description/${payload.sysname}`, {
        method: 'GET',
      })
    },
  }
}

export default method

--- File: app/shared/api/collections/cms/handlers/v1.types.ts ---

import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

// Response //

export interface IDescirptionP {
  sysname: 'keys' | 'pinyin'
}

// Request //

export type IDescriptionR = JsonToDomChildren

--- File: app/shared/api/collections/cms/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/hsk/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Hsk }

export type { IMethods as IHskMethods }
export { service as hskService }

--- File: app/shared/api/collections/hsk/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/hsk/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    hieroglyphsByLevel(payload: DTO.IHieroglyphsLevelP) {
      return instance<DTO.IHieroglyphsLevelR>(`/v1/hsk/hieroglyphs/${payload.level}`, {
        method: 'GET',
      })
    },
    hieroglyphsByLevelList({ level, ...paginationParams }: DTO.IHieroglyphsLevelListP) {
      return instance<DTO.IHieroglyphsLevelListR>(`/v1/hsk/hieroglyphs/${level}/list`, {
        params: paginationParams,
        method: 'GET',
      })
    },
  }
}

export default method

--- File: app/shared/api/collections/hsk/handlers/v1.types.ts ---

import type { DataListType, HieroglyphHsk, PageLimitType, PageType } from '~/shared/types'

// Response //

export type IHieroglyphsLevelR = HieroglyphHsk[]
export type IHieroglyphsLevelListR = DataListType<HieroglyphHsk>

// Request //

export interface IHieroglyphsLevelP {
  level: number
}

export interface IHieroglyphsLevelListP {
  level: number
  keyword: string
  page: PageType
  limit: PageLimitType
}

--- File: app/shared/api/collections/hsk/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/index.ts ---

export * from './auth'
export * from './cms'
export * from './hsk'
export * from './keys'
export * from './linguistic-analysis'
export * from './llm'
export * from './pinyin'

--- File: app/shared/api/collections/keys/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Keys }

export type { IMethods as IKeysMethods }
export { service as keysService }

--- File: app/shared/api/collections/keys/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/keys/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IKeysAllR>(`/v1/keys`, { method: 'GET' })
    },
  }
}

export default method

--- File: app/shared/api/collections/keys/handlers/v1.types.ts ---

// Response //

export type IKeysAllR = HieroglyphKey[]

// Request //

--- File: app/shared/api/collections/keys/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/linguistic-analysis/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.LinguisticAnalysis }

export type { IMethods as ILinguisticAnalysisMethods }
export { service as linguisticAnalysisService }

--- File: app/shared/api/collections/linguistic-analysis/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/linguistic-analysis/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    historyList(params: DTO.ILinguisticAnalysisHistoryListP) {
      return instance<DTO.ILinguisticAnalysisHistoryListR>(`/v1/linguistic-analysis/all-list`, {
        params,
        method: 'GET',
      })
    },
  }
}

export default method

--- File: app/shared/api/collections/linguistic-analysis/handlers/v1.types.ts ---

import type { DataListType, PageLimitType, PageType } from '~/shared/types'

// Response //

interface LinguisticAnalysisAll extends Omit<LinguisticAnalysis, 'data'> {
  dataType: 'Markdown' | 'Json'
  data: string | LlmLinguisticAnalysis
}

export type ILinguisticAnalysisHistoryListR = DataListType<LinguisticAnalysisAll>

// Request //

export interface ILinguisticAnalysisHistoryListP {
  keyword?: string
  page: PageType
  limit: PageLimitType
}

--- File: app/shared/api/collections/linguistic-analysis/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/llm/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Llm }

export type { IMethods as ILlmMethods }
export { service as llmService }

--- File: app/shared/api/collections/llm/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/llm/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    pinyinHieroglyphs(payload: DTO.PinyinHieroglyphsP, abortController?: AbortController) {
      return instance<DTO.PinyinHieroglyphsR>(`/v1/llm/pinyin-hieroglyphs`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeText(payload: DTO.AnalyzeTextP, abortController?: AbortController) {
      return instance<DTO.AnalyzeTextR>(`/v1/llm/linguistic-analysis`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeTextFlat(payload: DTO.AnalyzeTextFlatP, abortController?: AbortController) {
      return instance<string>(`/v1/llm/linguistic-analysis-flat`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    checkHanziDrawing(payload: DTO.CheckHanziDrawingP, abortController?: AbortController) {
      return instance<DTO.CheckHanziDrawingR>(`/v1/llm/hanzi-check`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    imageToTextTranslate(payload: DTO.ImageToTextTranslateP, abortController?: AbortController) {
      const formData = new FormData()
      formData.append('image', payload.image, 'area-selected')

      return instance<DTO.ImageToTextTranslateR>(`/v1/llm/image-to-text-translate`, {
        method: 'POST',
        body: formData,
        signal: abortController?.signal,
      })
    },
  }
}

export default method

--- File: app/shared/api/collections/llm/handlers/v1.types.ts ---

import type {
  ImageToTextTranslate,
  LlmLinguisticAnalysis,
  ToneType,
} from '~/shared/types/models'

// Request //
export interface PinyinHieroglyphsP {
  tones: ToneType[]
  pinyin: string
  count: number
}

export interface AnalyzeTextP {
  value: string
  model: string
}

export interface AnalyzeTextFlatP {
  value: string
  model: string
  isTemplate: boolean
}

export interface CheckHanziDrawingP {
  userImage: string
  targetImage: string
  targetWord: string
}

export interface ImageToTextTranslateP {
  image: File
}

// Response //

export type ImageToTextTranslateR = ImageToTextTranslate
export type PinyinHieroglyphsR = PinyinHieroglyphs
export type AnalyzeTextR = LlmLinguisticAnalysis
export interface CheckHanziDrawingR {
  similarity: number
  feedback: string
}

--- File: app/shared/api/collections/llm/index.ts ---

export * from './combine'

--- File: app/shared/api/collections/pinyin/combine.ts ---

import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Pinyin }

export type { IMethods as IPinyinMethods }
export { service as pinyinService }

--- File: app/shared/api/collections/pinyin/handlers/index.ts ---

export { default as v1 } from './v1'
export * from './v1.types'

--- File: app/shared/api/collections/pinyin/handlers/v1.ts ---

import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IPinyinAllR>(`/v1/pinyin`, { method: 'GET' })
    },
  }
}

export default method

--- File: app/shared/api/collections/pinyin/handlers/v1.types.ts ---

// Response //

export interface IPinyinAllR {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
}

// Request //

--- File: app/shared/api/collections/pinyin/index.ts ---

export * from './combine'

--- File: app/shared/api/helpers/create-api.ts ---

/* eslint-disable no-console */

import type { FetchOption, IApi, IService } from '../types'
import { createInstance } from '.'
import {
  authService,
  cmsService,
  hskService,
  keysService,
  linguisticAnalysisService,
  llmService,
  pinyinService,
} from '../collections'

const services: IService[] = [
  authService,
  cmsService,
  hskService,
  keysService,
  linguisticAnalysisService,
  llmService,
  pinyinService,
]

interface CreateApiParams {
  interceptops: FetchOption<any>[]
  verbose: boolean
  baseUrl: string
  refresh: (() => Promise<void>) | null
}

function createApi(params: Partial<CreateApiParams>) {
  const {
    interceptops = [],
    verbose = true,
    baseUrl = '',
  } = params

  console.log(`💫 %c[API]`, 'color: #9400D3; font-weight: bold;', 'baseUrl:', baseUrl)

  const api = {} as IApi

  services.forEach((service) => {
    const serviceInstance = createInstance({
      baseUrl,
      interceptops,
      verbose,
    })
    const serviceMethods = service.createMethods(serviceInstance)

    // @ts-expect-error no check
    api[service.name] = serviceMethods
  })

  return api
}

export { createApi }
export type { CreateApiParams }

--- File: app/shared/api/helpers/index.ts ---

export * from './create-api'
export * from './instance'

--- File: app/shared/api/helpers/instance.ts ---

/* eslint-disable no-console */
import type { FetchOption, Instance } from '../types'

interface CreateInstanceParams {
  baseUrl: string
  verbose?: boolean
  interceptops?: FetchOption<any>[]
}

function cleanDoubleSlashes(input = ''): string {
  return input
    .split('://')
    .map(string_ => string_.replace(/\/{2,}/g, '/'))
    .join('://')
}

function createInstance(params: CreateInstanceParams) {
  const {
    baseUrl,
    interceptops = [],
    verbose = false,
  } = params

  const applyInterceptors = <R>(
    interceptors: FetchOption<R>[],
    options: FetchOption<R>,
    hookName: keyof FetchOption<R>,
    ...params: any[]
  ) => {
    [...interceptors, options].forEach((obj) => {
      const hook = obj?.[hookName]

      if (typeof hook === 'function')
        hook.apply(obj, params)
    })
  }

  const apiMethod = <R>(
    url: string,
    options: FetchOption<R>,
  ): Promise<R> => {
    const _options = {
      // retryStatusCodes: [401],
      // retryDelay: 100,
      retry: 0,
      ...options,
      // @ts-expect-error idk
      onRequest: (...params) => applyInterceptors(interceptops, options, 'onRequest', ...params),
      // @ts-expect-error idk
      onRequestError: (...params) => applyInterceptors(interceptops, options, 'onRequestError', ...params),
      // @ts-expect-error idk
      onResponse: (...params) => applyInterceptors(interceptops, options, 'onResponse', ...params),
      // @ts-expect-error idk
      onResponseError: (...params) => applyInterceptors(interceptops, options, 'onResponseError', ...params),
    } satisfies FetchOption<R>

    const _url = cleanDoubleSlashes(`${baseUrl}/${url}`)

    if (verbose)
      console.log(`⚡ %c[${options.method!.toUpperCase()}]`, 'color: #9400D3; font-weight: bold;', '-', _url)

    return $fetch(_url as any, _options as any)
  }

  return apiMethod as Instance
}

export { cleanDoubleSlashes, createInstance }
export type { CreateInstanceParams }

--- File: app/shared/api/index.ts ---

export * from './collections'
export * from './helpers'
export * from './types'

--- File: app/shared/api/types/api.ts ---

import type { FetchOptions } from 'ofetch'
import type { ILinguisticAnalysisMethods } from '../collections/linguistic-analysis'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods
  = IKeysMethods
    | IPinyinMethods
    | ILlmMethods
    | ICmsMethods
    | IHskMethods
    | IAuthMethods
    | ILinguisticAnalysisMethods

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
  llm: ILlmMethods
  cms: ICmsMethods
  hsk: IHskMethods
  auth: IAuthMethods
  linguisticAnalysis: ILinguisticAnalysisMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}

--- File: app/shared/api/types/index.ts ---

export * from './api'
export * from './shared'

--- File: app/shared/api/types/shared.ts ---

export enum ApiNames {
  Keys = 'keys',
  Hsk = 'hsk',
  Pinyin = 'pinyin',
  Llm = 'llm',
  Cms = 'cms',
  Auth = 'auth',
  LinguisticAnalysis = 'linguisticAnalysis',
}

--- File: app/shared/composables/change-font-cn.ts ---

enum FontCnVariant {
  Base = 'base',
  Brushed = 'brushed',
}

function useChangeFontCn() {
  const font = useCookie<FontCnVariant>(FONT_FAMILY_CN)

  const applyFontCnFamily = (value: FontCnVariant) => {
    const rootElement = document.querySelector('html')

    if (rootElement)
      rootElement.dataset.cn = value
  }

  const toggleFontCnFamily = () => {
    font.value = font.value === FontCnVariant.Base
      ? FontCnVariant.Brushed
      : FontCnVariant.Base

    applyFontCnFamily(font.value)
  }

  const setFontCnFamily = (value: FontCnVariant) => {
    font.value = value

    applyFontCnFamily(font.value)
  }

  return {
    fontCn: font,
    setFontCnFamily,
    toggleFontCnFamily,
  }
}

export { FontCnVariant }
export { useChangeFontCn }

--- File: app/shared/composables/change-theme.ts ---

enum ThemesVariant {
  Light = 'light',
  Dark = 'dark',
  Rainy = 'rainy',
}

const themesColors: Record<ThemesVariant, string> = {
  [ThemesVariant.Light]: '#dcdfe1',
  [ThemesVariant.Dark]: '#161b22',
  [ThemesVariant.Rainy]: '#121314',
}

function useChangeTheme() {
  const theme = useColorMode()

  function applyToHead(value: ThemesVariant) {
    useHead({
      meta: [
        { name: 'theme-color', content: themesColors[value] },
      ],
    })
  }

  function getHeadThemeColor() {
    return themesColors[theme.value as ThemesVariant]
  }

  const setTheme = (value: ThemesVariant) => {
    theme.preference = value
    applyToHead(value)
  }

  return {
    theme,
    getHeadThemeColor,
    setTheme,
  }
}

export { useChangeTheme }
export { ThemesVariant }

--- File: app/shared/composables/combine-stores.ts ---

import { useHieroglyphWordStore } from '~/components/03.domain/hieroglyph-word'
import { usePinyinTextStore } from '~/components/03.domain/pinyin-text'

import { useKeysStore } from '~/components/05.modules/keys/store/keys.store'
import { usePinyinStore } from '~/components/05.modules/pinyin/store/pinyin.store'

type ExtractStoreId<T> = T extends { $id: infer U } ? U : never

interface IStoreTypes {
  request: ReturnType<typeof useRequestWrapperStore>
  keys: ReturnType<typeof useKeysStore>
  pinyin: ReturnType<typeof usePinyinStore>

  // * domain components
  hieroglyphWord: ReturnType<typeof useHieroglyphWordStore>
  pinyinText: ReturnType<typeof usePinyinTextStore>

  // * global
  auth: ReturnType<typeof useAuthStore>
}

type StoreKeys = ExtractStoreId<IStoreTypes[keyof IStoreTypes]>

export const stores: Readonly<{ [K in StoreKeys]: () => IStoreTypes[K] }> = Object.freeze({
  request: useRequestWrapperStore,
  keys: useKeysStore,
  pinyin: usePinyinStore,

  // * domain components
  hieroglyphWord: useHieroglyphWordStore,
  pinyinText: usePinyinTextStore,

  // * global
  auth: useAuthStore,

})

function useStore<T extends StoreKeys>(key: T): Readonly<IStoreTypes[T]>
function useStore<T extends StoreKeys>(keys: T[]): Readonly<{ [K in T]: IStoreTypes[K]; }>
function useStore<T extends StoreKeys>(keysOrKey: T[] | T) {
  if (Array.isArray(keysOrKey))
    return Object.fromEntries(keysOrKey.map(key => [key, stores[key]()])) as { [K in T]: IStoreTypes[K] }

  return stores[keysOrKey]()
}

export { useStore }

--- File: app/shared/composables/index.ts ---

export * from './change-font-cn'
export * from './change-theme'
export * from './combine-stores'
export * from './render'

--- File: app/shared/composables/render.ts ---

export function getCurrentInst(name: string, message?: string) {
  const vm = getCurrentInstance()

  if (!vm)
    throw new Error(`[Lib] ${name} ${message || 'must be called from inside a setup function'}`)

  return vm
}

export function useRender(render: () => VNode): void {
  const vm = getCurrentInst('useRender') as any
  vm.render = render
}

--- File: app/shared/constant/cookie-key.ts ---

export const TOKEN_KEY = 'AUTH_ACCESS_TOKEN'
export const REFRESH_TOKEN_KEY = 'AUTH_REFRESH_TOKEN'

export const FONT_FAMILY_CN = '__FONT_FAMILY_CN__'
export const PINYIN_COLORED = '__PINYIN_COLORED__'
export const HIEROGLYPH_WORD_VARIANT = '__HIEROGLYPH_WORD_VARIANT__'

--- File: app/shared/constant/index.ts ---

export * from './cookie-key'
export * from './pinyin-tone'

--- File: app/shared/constant/pinyin-tone.ts ---

export const pinyinTone = ['', 'ˉ', 'ˊ', 'ˇ', 'ˋ'] as const

--- File: app/shared/lib/analyze-pinyin-tones.ts ---

export interface ToneInfo {
  toneMark: string
  toneNumber: number
  position: number
  vowel: string
}

const toneMap = {
  '\u0304': 1, // Макрон (первый тон)
  '\u0301': 2, // Акут (второй тон)
  '\u030C': 3, // Гачек (третий тон)
  '\u0300': 4, // Гравис (четвертый тон)
} as const

// Создаем тип, который представляет собой только валидные ключи toneMap
type ToneCharacter = keyof typeof toneMap

// Функция-предохранитель типа. Она проверяет, является ли символ знаком тона.
// Если да, TypeScript будет считать `char` типом `ToneCharacter` внутри блоков if.
function isToneCharacter(char: string): char is ToneCharacter {
  return char in toneMap
}

function analyzePinyinTones(pinyin: string): ToneInfo[] {
  const normalizedPinyin = pinyin.normalize('NFD')
  const results: ToneInfo[] = []

  for (let i = 0; i < normalizedPinyin.length; i++) {
    const char = normalizedPinyin[i] as string

    if (isToneCharacter(char)) {
      const position = i - 1
      const vowel = normalizedPinyin[position]

      if (vowel) {
        results.push({
          toneMark: char,
          toneNumber: toneMap[char],
          position,
          vowel,
        })
      }
    }
  }

  return results
}

export { analyzePinyinTones }

--- File: app/shared/lib/index.ts ---

export * from './analyze-pinyin-tones'

--- File: app/shared/store/auth.store.ts ---

import type * as DTO from '~/shared/api/collections/auth/handlers/v1.types'
import { useCookie } from '#app'

// Константы для ключей запросов
enum RequestKeys {
  ME = 'auth_me',
  REFRESH = 'auth_refresh',
  SIGN_IN = 'auth_sign-in',
  SIGN_OUT = 'auth_sign-out',
}

interface AuthState {
  user: User | null
  tokenPair: TokenPair | null
  isInitialized: boolean
}

interface TokenPair {
  access: string
  refresh: string
}

/**
 * Хранилище для управления аутентификацией
 */
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const access = useCookie<string | null>(TOKEN_KEY).value
    const refresh = useCookie<string | null>(REFRESH_TOKEN_KEY).value

    return {
      user: null,
      isInitialized: false,
      tokenPair: access && refresh ? { access, refresh } : null,
    }
  },

  getters: {
    isLoading: () => useRequestStatus([
      RequestKeys.ME,
      RequestKeys.REFRESH,
      RequestKeys.SIGN_IN,
      RequestKeys.SIGN_OUT,
    ]),
    isAuthenticated: state => !!state.user,
  },

  actions: {
    /**
     * Получает информацию о текущем пользователе
     */
    async me() {
      return await useRequest({
        key: RequestKeys.ME,
        fn: ({ api }) => api.auth.v1.me(),
        onSuccess: ({ data }) => {
          this.user = data
        },
        onError: ({ error }) => {
          this.user = null
          throw error
        },
      })
    },

    /**
     * Обновляет токен авторизации
     */
    async refresh() {
      const refreshToken = this.tokenPair?.refresh
      if (!refreshToken) {
        return Promise.reject(new Error('Refresh token is not available.'))
      }
      return await useRequest({
        key: RequestKeys.REFRESH,
        fn: ({ api }) => api.auth.v1.refresh({ refreshToken }),
        onSuccess: ({ data }) => {
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          })
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Авторизует пользователя
     */
    async signIn(payload: DTO.ISignInUserP) {
      return await useRequest({
        key: RequestKeys.SIGN_IN,
        fn: ({ api }) => api.auth.v1.signIn(payload),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          })
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Выход пользователя из системы
     */
    async signOut() {
      await useRequest({
        key: RequestKeys.SIGN_OUT,
        fn: ({ api }) => api.auth.v1.signOut(),
        onSuccess: () => {
          this.clearAuth()
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Сохраняет токены в куки
     */
    saveTokens(tokens: TokenPair) {
      this.tokenPair = tokens

      const cookieOptions = {
        secure: import.meta.env.PROD,
        maxAge: 60 * 60 * 24 * 30, // 30 дней
        sameSite: 'lax' as const,
      }
      useCookie(TOKEN_KEY, cookieOptions).value = tokens.access
      useCookie(REFRESH_TOKEN_KEY, cookieOptions).value = tokens.refresh
    },

    /**
     * Очищает токены из кук
     */
    clearTokens() {
      this.tokenPair = null
      useCookie(TOKEN_KEY).value = null
      useCookie(REFRESH_TOKEN_KEY).value = null
    },

    /**
     * Очищает данные авторизации
     */
    clearAuth() {
      this.user = null
      this.clearTokens()
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>
export { RequestKeys }

--- File: app/shared/store/index.ts ---

export * from './auth.store'

--- File: app/shared/types/dts/env.d.ts ---

/// <reference types="vite/client" />

interface ImportMetaEnv {
  NODE_ENV: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

--- File: app/shared/types/dts/fetch.d.ts ---

declare module 'ofetch' {
  interface FetchOptions extends FetchOptions {
    // Опция для пропуска добавления заголовка авторизации
    skipAuth?: boolean
    // Опция для предотвращения автоматического обновления токена при 401
    skipAuthRefresh?: boolean

    responseType: 'json' | 'text'
  }
}

--- File: app/shared/types/dts/global.d.ts ---

interface Window {
}

--- File: app/shared/types/index.ts ---

export * from './models'
export * from './routes'
export * from './shared'

--- File: app/shared/types/models/auth.ts ---

enum OAuthProviders {
  GitHub = 'github',
  Google = 'google',
}

enum OAuthErrors {
  MissingToken = 'missing_token',
  MeError = 'me_error',
}

export { OAuthErrors, OAuthProviders }

--- File: app/shared/types/models/hiroglyph/hiroglyph-hsk.ts ---

import type { HieroglyphStructure } from './hiroglyph'

type HieroglyphHsk = Omit<HieroglyphStructure, 'translation'> & {
  item: any
  translation: {
    en: string
    ru: string
  }
}

export type {
  HieroglyphHsk,
}

--- File: app/shared/types/models/hiroglyph/hiroglyph-key.ts ---

import type { ToneType } from '../pinyin'

interface HieroglyphKey {
  index?: number
  alternative?: string | null
  toneType: ToneType
  toneIndex: number
  pinyin: string
  glyph: string
  translate: string
  transcription: string
}

export type { HieroglyphKey }

--- File: app/shared/types/models/hiroglyph/hiroglyph.ts ---

interface HieroglyphStructure {
  id: number
  glyph: string
  traditionalGlyph: string
  translation: string
  pinyin: {
    syllable: string
    tone: 0 | 1 | 2 | 3 | 4
    position: number
  }[]
}

export type {
  HieroglyphStructure,
}

--- File: app/shared/types/models/hiroglyph/index.ts ---

export * from './hiroglyph'
export * from './hiroglyph-hsk'
export * from './hiroglyph-key'

--- File: app/shared/types/models/index.ts ---

export * from './auth'
export * from './hiroglyph'
export * from './linguistic-analysis'
export * from './llm'
export * from './pinyin'
export * from './quiz'
export * from './thematic-dictionary'
export * from './user'

--- File: app/shared/types/models/linguistic-analysis.ts ---

interface GrammarRules {
  type: string
  description: string
  example?: string
}

type PartOfSpeech = string

type KeyPosition
  = | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'full-surround'
    | 'top-surround'
    | 'bottom-surround'
    | 'left-surround'
    | 'overlaid'
    | 'center'
    | 'inside'
    | 'diagonal'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'cross'
    | 'floating'

type KeyRole
  = | 'semantic'
    | 'phonetic'
    | 'empty-sign'
    | 'differentiator'
    | 'structural'
    | 'pictographic'
    | 'compound-semantic'
    | 'loan-component'
    | 'semantic-phonetic'
    | 'radical-variant'
    | 'orthographic-marker'
    | 'semantic-corrupt'
    | 'component-fusion'
    | 'pseudo-component'
    | 'ornamental'

interface Key {
  glyph: string
  position: KeyPosition
  role: KeyRole
  translate?: string
  pinyin: string
  description?: string
  keyInfo?: {
    number: number
    name: string
    variants: string[]
    frequencyRank: number
  } | null | null
}

interface BaseEntry {
  glyph: string
  pinyin: string
  partOfSpeech: PartOfSpeech
  translate: string
  transcription: string
  grammarRules?: GrammarRules[]
  hints?: string[]
}

interface Hieroglyph extends BaseEntry {
  type: 'hieroglyph'
  strokeCount?: number
  etymology?: string
  mnemonic?: string
  keys?: Key[]
}

interface Word extends BaseEntry {
  type: 'word'
  hieroglyphs?: Hieroglyph[]
}

interface Sentence {
  type: 'sentence'
  structure: {
    type: string
    description: string
  }
  glyph: string
  pinyin: string
  translate: string
  transcription: string
  grammarRules?: GrammarRules[]
  hints?: string[]
  components?: (Hieroglyph | Word)[]
}

interface LlmLinguisticAnalysis {
  sentences: Sentence[]
}

interface LinguisticAnalysis {
  id: number
  type: string
  userId: number
  model: string
  sourceValue: string
  glyph: string
  totalTokens: number
  generationDuration: number
  createdAt: Date
  updatedAt: Date
  data: LlmLinguisticAnalysis
}

export type { LinguisticAnalysis, LlmLinguisticAnalysis }

--- File: app/shared/types/models/llm/i-to-t.ts ---

interface ImageToTextTranslate {
  source: string
  translate: string
  transcription: string
}

export type { ImageToTextTranslate }

--- File: app/shared/types/models/llm/index.ts ---

export * from './i-to-t'
export * from './pinyin-hieroglyphs'

--- File: app/shared/types/models/llm/pinyin-hieroglyphs.ts ---

interface Hieroglyph {
  glyph: string
  pinyin: string
  toneType: number
  toneIndex: number
  translate: string
  transcription: string
}

interface PinyinHieroglyphsExample {
  tone: ToneType
  hieroglyphs: Hieroglyph[]
}

interface PinyinHieroglyphs {
  sourcePinyin: string
  tones: ToneType[]
  examples: PinyinHieroglyphsExample[]
  count?: number
}

export type { PinyinHieroglyphs }

--- File: app/shared/types/models/pinyin.ts ---

export type ToneType = 0 | 1 | 2 | 3 | 4

export interface Final {
  id: number
  name: string
  pos: number
}
export interface Initial {
  id: number
  name: string
  pos: number
}
export interface InitialsFinals {
  id: number
  initialId: number | null
  finalToneId: number
}
export interface FinalsTone {
  id: number
  name: string
  toneType: ToneType
  finalId: number
}

export type InitialWithFinal = Record<string, number[]>

--- File: app/shared/types/models/quiz.ts ---

export interface IAnswer {
  key: number
  type: 'glyph'
  value: string
}

--- File: app/shared/types/models/thematic-dictionary.ts ---

import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

interface ThematicDictionaryCategory {
  id: number
  sysname: string
  name: string
  description?: string
  glyph: string
  drawAllowed: boolean
  content: JsonToDomChildren
}

interface ThematicDictionarySection {
  id: number
  sysname: string
  description: string
  name: string
  glyph: string
  categories: ThematicDictionaryCategory[]
}

interface ThematicDictionaryData {
  catalog: ThematicDictionarySection[]
}

export type {
  ThematicDictionaryCategory,
  ThematicDictionaryData,
  ThematicDictionarySection,
}

--- File: app/shared/types/models/user.ts ---

interface User {
  id: number
  email: string
  name?: string
  avatarUrl?: string
  githubId: string
  googleId: string
  createdAt: Date
  updatedAt: Date
}

export enum Permission {
  AiGenerate = 'AiGenerate',
}
const permissions: Permission[] = [Permission.AiGenerate]

export {
  permissions,
}
export type {
  User,
}

--- File: app/shared/types/routes.ts ---

export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  LinguisticAnalysis = 'linguistic-analysis',
  LinguisticAnalysisHistory = 'linguistic-analysis-history',
  HSK = 'hsk',
  ThematicDictionary = 'thematic-dictionary',

  About = 'about',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',

  ToonManually = 'toon-manually',

}

export const RoutePaths = {
  Keys: {
    Index: () => '/keys',
    Tab: (value: 'list' | 'lab') => `/keys?tab=${value}`,
  },
  Pinyin: () => '/pinyin',
  Glossary: {
    Index: () => '/glossary',
    Page: (sysname: string, tab: 'topic' | 'brief' | 'lab') => `/glossary/${sysname}/${tab}`,
  },
  LinguisticAnalysis: {
    Index: () => '/linguistic-analysis',
    History: () => '/linguistic-analysis/history',
  },
  HSK: {
    Index: () => `/hsk`,
    Tab: (value: 'about' | 'words' | 'lab') => `/hsk?tab=${value}`,
  },
  ThematicDictionary: {
    Sections: () => '/thematic-dictionary',
    Categories: (section: string) => `/thematic-dictionary/${section}`,
    Category: (section: string, category: string) => `/thematic-dictionary/${section}/${category}`,
  },

  About: () => '/about',

  Auth: {
    SignIn: () => '/auth/sign-in',
    SignUp: () => '/auth/sign-up',
    ForgotPassword: () => '/auth/forgot-password',
  },

  Toon: {
    List: () => '/toon/list',
    Manually: () => '/toon/manually',
  },
}

--- File: app/shared/types/shared/api.ts ---

import type { IApiError as IApiErrorExternal } from '~/modules/1.api'

type IApiError = IApiErrorExternal

function isIApiError(error: unknown): error is IApiError {
  return (
    typeof error === 'object'
    && error !== null
    && 'message' in error
    && typeof (error as any).message === 'string'
  )
}

export type { IApiError }
export { isIApiError }

--- File: app/shared/types/shared/index.ts ---

export * from './api'
export * from './pagination'

--- File: app/shared/types/shared/pagination.ts ---

type PageType = number
type PageLimitType = number

interface PaginationType {
  page: number
  limit: number
  total: number
}

interface DataListType<T> {
  data: T[]
  pagination: PaginationType
}

export type {
  DataListType,
  PageLimitType,
  PageType,
  PaginationType,
}

--- File: eslint.config.ts ---

import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: true,
    ignores: [
      '**/.nuxt/**',
      '**/.output/**',
      '**/.vitestcache/**',
      '**/e2e-**/**',
      '**/personal/content/**',
    ],
  }),
)

--- File: modules/1.api/index.ts ---

import { addImportsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

export * from './types'

export default defineNuxtModule({
  meta: {
    name: 'api',
    configKey: 'api',
    compatibility: {
      nuxt: '^4.0.0',
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const moduleOptions = defu(
      nuxt.options.runtimeConfig.public.api,
      options,
    )
    nuxt.options.runtimeConfig.public.api = moduleOptions
    nuxt.options.build.transpile.push(resolve('runtime'))

    // Plugins
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'all',
    })

    // Composables
    addImportsDir(resolve('./runtime/composables'))
    addImportsDir(resolve('./runtime/store'))
  },
})

--- File: modules/1.api/runtime/composables/use-api.ts ---

import type { UseApi, UseApiInitParams } from '../../types'

let api: IApi = {} as IApi
let refreshUserTokens: (() => Promise<void>) | null = null

const useApi: UseApi = () => {
  const init = async (params: Partial<UseApiInitParams>) => {
    const {
      baseUrl = '',
      verbose = true,
      interceptops = [],
      refresh = null,
    } = params

    refreshUserTokens = refresh
    api = createApi({
      baseUrl,
      verbose,
      interceptops,
    })
  }

  return { init, api, refresh: refreshUserTokens }
}

export { useApi }

--- File: modules/1.api/runtime/composables/use-request.ts ---

import type {
  UseRequest,
  UseRequestError,
  UseRequestErrors,
  UseRequestStatus,
} from '../../types'
import { useRequestWrapperStore } from '../store/request-wrapper.store'

const useRequest: UseRequest = (payload) => {
  return useRequestWrapperStore().request(payload)
}

const useRequestStatus: UseRequestStatus = (keys, status) => {
  return useRequestWrapperStore().checkStatus(keys, status ?? 'PENDING')
}

const useRequestError: UseRequestError = (key) => {
  return useRequestWrapperStore().getError(key)
}

const useRequestErrors: UseRequestErrors = (key) => {
  return useRequestWrapperStore().getAnyError(key)
}

export {
  useRequest,
  useRequestError,
  useRequestErrors,
  useRequestStatus,
}

--- File: modules/1.api/runtime/plugin.ts ---

import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { useApi } from './composables/use-api'

export default defineNuxtPlugin({
  name: 'api-client',
  enforce: 'post',
  async setup(nuxtApp) {
    const { api, init } = useApi()
    const store = useStore(['auth'])

    const config = useRuntimeConfig().public
    const interceptops = (nuxtApp?.$apiInterceptops ?? []) as FetchOption<unknown>[]

    init({
      baseUrl: config.apiBaseUrl,
      verbose: config.apiVerbose,
      interceptops,
      refresh: async () => {
        if (!store.auth.tokenPair?.refresh)
          return

        try {
          const data = await api.auth.v1.refresh({ refreshToken: store.auth.tokenPair?.refresh })

          nuxtApp.runWithContext(() => {
            store.auth.saveTokens({ access: data.token, refresh: data.refreshToken }, true)
          })
        }
        catch {
          nuxtApp.runWithContext(() => {
            store.auth.clearAuth(true)
          })
        }
      },
    })

    nuxtApp.vueApp.config.globalProperties.$api = api
    nuxtApp.provide('api', api)
  },
})

--- File: modules/1.api/runtime/store/request-wrapper.store.ts ---

import type {
  ApiStatus,
  IApiError,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  ITryRequest,
} from '../../types'
import { computed, useApi } from '#imports'

const useRequestWrapperStore = defineStore('request', {
  state: (): IRequestWrapperState => ({
    _status: new Map(),
    _error: new Map(),
  }),

  actions: {
    _setLoading(key: string, value: ApiStatus) {
      this._status.set(key, value)
    },
    _setError(key: string, value: IApiError | null) {
      if (value)
        this._error.set(key, value)
      else
        this._error.delete(key)
    },

    async request<T = boolean>(payload: IRequestWrapperPayload<T>): Promise<IRequestReturn<T>> {
      const {
        key,
        fn,
        onSuccess,
        onError,
      } = payload

      this._setLoading(key, 'PENDING')
      this._setError(key, null)

      const { result, error } = await this.tryRequest(fn)

      try {
        await (result && !error
          ? onSuccess?.({
              data: result as Awaited<T>,
              state: this.$state,
            })
          : onError?.({
              error: error as IApiError,
              state: this.$state,
            }))
      }
      finally {
        this._setLoading(key, result ? 'FULFILLED' : 'REJECTED')
        this._setError(key, error)
      }

      return {
        data: result,
        error,
        status: result ? 'FULFILLED' : 'REJECTED',
      }
    },
    async tryRequest<T>(fn: IRequestWrapperPayload<T>['fn'], skipRefresh = false): Promise<ITryRequest<T>> {
      const { api, refresh } = useApi()
      let error: IApiError | null = null

      try {
        const result = (await fn({ state: this.$state, api }) ?? null)
        return {
          result,
          error: null,
        }
      }
      catch (e: any) {
        if (e.status === 401 && !skipRefresh) {
          try {
            await refresh?.()
            return this.tryRequest(fn, true)
          }
          catch (refreshError) {
            error = this.adapterError(refreshError)
          }
        }
        else {
          error = this.adapterError(e)
        }
      }

      return {
        error,
        result: null,
      }
    },

    adapterError(e: any): IApiError | null {
      if (!e?.response) {
        return null
      }

      const status = e.response.status
      const data = e.response._data || e

      const error: IApiError = {
        status,
        message: (data?.message) || 'Произошла ошибка',
      }

      if (!(import.meta.server && import.meta.env.NODE_ENV === 'production')) {
        console.error('[REQUEST ERROR] - ', e)
      }

      return error
    },
    getStatus(key: string): ApiStatus {
      return this._status.get(key) || 'NONE'
    },
    checkStatus(keys: string[], status = 'PENDING'): boolean {
      return keys.some(s => this.getStatus(s) === status)
    },
    getError(key: string): IApiError | null {
      return this._error.get(key) || null
    },
    getAnyError(keys: string[]): IApiError | null {
      for (const key of keys) {
        const error = this._error.get(key)
        if (error)
          return error
      }
      return null
    },
    isAnyLoading(keys: string[]) {
      return computed(() => this.checkStatus(keys, 'PENDING'))
    },
  },
})

export { useRequestWrapperStore }

--- File: modules/1.api/types/composables.ts ---

import type { ApiStatus } from '../types'
import type { IApiError, IRequestReturn, IRequestWrapperPayload } from './store'
import type { CreateApiParams } from '~/shared/api'

// Типизация для useRequest
export type UseRequest = <T>(payload: IRequestWrapperPayload<T>) => Promise<IRequestReturn<T>>

// Типизация для useRequestStatus
export type UseRequestStatus = (keys: string[], status?: ApiStatus) => boolean

// Типизация для useRequestError - проверка упал ли запрос с ошибкой
export type UseRequestError = (key: string) => IApiError | null
export type UseRequestErrors = (key: string[]) => IApiError | null

// Типизация для useApi
export type UseApiInitParams = Partial<CreateApiParams>
export type UseApi = () => {
  init: (params: UseApiInitParams) => Promise<void>
  api: IApi
  refresh: (() => Promise<void>) | null
}

--- File: modules/1.api/types/index.ts ---

export * from './composables'
export * from './store'

--- File: modules/1.api/types/store.ts ---

export type ApiStatus
  = 'NONE'
    | 'PENDING'
    | 'FULFILLED'
    | 'REJECTED'

interface IRequestWrapperState {
  _status: Map<string, ApiStatus>
  _error: Map<string, IApiError | null>
}

interface IRequestReturn<T> { data: T | null, error?: IApiError | null, status: ApiStatus }
interface IRequestWrapperPayload<T> {
  key: string
  fn: (payload: ICallback) => Promise<T>
  onSuccess?: (payload: SuccessCallback<T>) => Promise<void> | void | unknown
  onError?: (payload: ErrorCallback) => Promise<void> | void | unknown
}

interface IApiError {
  status: number
  message: string
}
interface ICallback {
  state: IRequestWrapperState
  api: IApi
}
type SuccessCallback<T> = Omit<ICallback, 'api'> & { data: T }
type ErrorCallback = Omit<ICallback, 'api'> & { error: IApiError }

interface ITryRequest<T> {
  result: T | null
  error: IApiError | null
}

export type {
  IApiError,
  ICallback,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  ITryRequest,
}

--- File: nuxt.config.ts ---

import {
  baseCfg,
  colorModeCfg,
  importsCfg,
  pwaCfg,
  runtimeCfg,
  viteCfg,
} from './build'

export default defineNuxtConfig({
  ssr: true,

  ...baseCfg,

  $development: {
    pwa: pwaCfg.development,
    colorMode: colorModeCfg.development,
    runtimeConfig: runtimeCfg.development,
  },

  $production: {
    pwa: pwaCfg.production,
    colorMode: colorModeCfg.production,
    runtimeConfig: runtimeCfg.production,
  },

  imports: importsCfg,
  vite: viteCfg,
})

--- File: package.json ---

{
  "$schema": "https://json.schemastore.org/package.json",
  "name": "chinisik",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": ">=22.0.0",
    "bun": ">=1.1.0"
  },
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "start": "nuxt start",
    "preview": "nuxt preview",
    "generate": "nuxt generate",
    "prepare": "nuxt prepare",
    "analyze": "nuxt analyze",
    "--------------------------------------------------------------------------------": "",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "vue-tsc --noEmit",
    "----------------------------------------------------------------------------------": "",
    "postinstall": "simple-git-hooks && nuxt prepare"
  },
  "dependencies": {
    "@pinia/nuxt": "0.11.2",
    "@vite-pwa/nuxt": "^1.0.7",
    "@vueuse/core": "14.0.0",
    "@vueuse/nuxt": "14.0.0",
    "howler": "2.2.4",
    "markdown-it": "^14.1.0",
    "markdown-it-attrs": "^4.3.1",
    "markdown-it-collapsible": "^2.0.2",
    "markdown-it-container": "^4.0.0",
    "markdown-it-regexp": "^0.4.0",
    "p5i": "0.6.0",
    "pinia": "3.0.3"
  },
  "devDependencies": {
    "@antfu/eslint-config": "6.2.0",
    "@iconify-json/game-icons": "1.2.3",
    "@iconify-json/line-md": "1.2.11",
    "@iconify-json/material-symbols": "1.2.44",
    "@iconify-json/mdi": "1.2.3",
    "@nuxt/eslint": "1.10.0",
    "@nuxt/fonts": "0.11.4",
    "@nuxt/icon": "2.1.0",
    "@nuxt/image": "1.11.0",
    "@nuxt/types": "2.18.1",
    "@nuxtjs/color-mode": "3.5.2",
    "@nuxtjs/device": "3.2.4",
    "@types/howler": "2.2.12",
    "@types/jsdom": "27.0.0",
    "@types/markdown-it": "^14.1.2",
    "@types/markdown-it-attrs": "^4.1.3",
    "@types/markdown-it-container": "^2.0.10",
    "@types/node": "24.10.0",
    "@types/workbox-sw": "^4.3.7",
    "eslint": "9.39.1",
    "eslint-plugin-format": "1.0.2",
    "jiti": "2.6.1",
    "jsdom": "27.1.0",
    "nuxt": "4.2.0",
    "sass": "1.93.3",
    "simple-git-hooks": "2.13.1",
    "typescript": "5.9.3",
    "vitest": "4.0.7",
    "vue-tsc": "3.1.3",
    "vuetify": "3.10.8",
    "vuetify-nuxt-module": "0.18.8",
    "workbox-cacheable-response": "^7.3.0",
    "workbox-core": "7.3.0",
    "workbox-expiration": "^7.3.0",
    "workbox-precaching": "7.3.0",
    "workbox-routing": "^7.3.0",
    "workbox-strategies": "^7.3.0"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm dlx lint-staged && pnpm run typecheck",
    "post-commit": "git status",
    "post-merge": "pnpm i"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}

--- File: prompt-gen.config.json ---

{
  "extensions": "ts,vue,scss,json,yaml,yml",
  "directory": "./",
  "output": "project_prompt.md",
  "format": "structured",
  "maxSize": "35",
  "excludePaths": "pnpm-lock.yaml,**/main/**,**/preload/**,**/theme-manager/**,**/stories/**,**/configs/**,**/public/**,**/test/**,**/*.spec.ts,version.json,bun.lock,**/.vscode/**,**/data/**,**/auto-imports.d.ts/**,**/mock/**,**/assets/**,**/.storybook/**"
}

--- File: server/api/v1/cms/description/[sysname].get.ts ---

export default defineEventHandler((event) => {
  const sysname = getRouterParam(event, 'sysname') as keyof typeof mockCms

  return mockCms[sysname]
})

--- File: server/api/v1/keys/index.get.ts ---

export default defineEventHandler(() => {
  return mockHieroglyphKeys
})

--- File: server/api/v1/pinyin/index.get.ts ---

export default defineEventHandler(() => {
  return {
    initials: mockInitials,
    finals: mockFinals,
    initialWithFinal: mockInitialWithFinal,
  }
})

--- File: server/tsconfig.json ---

{
  "extends": "../.nuxt/tsconfig.server.json"
}

--- File: server/utils/handler.ts ---

import type { EventHandler, EventHandlerRequest } from 'h3'

export function defineDevEventHandler<T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> {
  return defineEventHandler<T>(async (event) => {
    try {
      if (!import.meta.dev) {
        throw createError({ statusCode: 404, message: 'Not found' })
      }

      await sleepRequest()
      const response = await handler(event)
      return response
    }
    catch (err) {
      return { err }
    }
  })
}

--- File: server/utils/index.ts ---

export * from './handler'
export * from './sleep'

--- File: server/utils/sleep.ts ---

export async function sleepRequest(time: number = 500) {
  await new Promise(r => setTimeout(r, time))
}

--- File: tsconfig.json ---

{
  "$schema": "https://json.schemastore.org/tsconfig.json",
  "extends": "./.nuxt/tsconfig.json"
}

=====================
