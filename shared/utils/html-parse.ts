// import htmlToDOM from 'html-dom-parser'

// export { Comment, Element, ProcessingInstruction, Text } from 'domhandler'
// export type { DOMNode } from 'html-dom-parser'

// export type { HTMLReactParserOptions }
// export { attributesToProps, domToReact, htmlToDOM }

// const domParserOptions = { lowerCaseAttributeNames: false } as const

// export default function HTMLParser(
//   html: string,
//   options?: DOM,
// ): ReturnType<typeof domToReact> {
//   if (typeof html !== 'string') {
//     throw new TypeError('First argument must be a string')
//   }

//   if (!html) {
//     return []
//   }

//   return domToReact(
//     htmlToDOM(html, options?.htmlparser2 || domParserOptions),
//     options,
//   )
// }
