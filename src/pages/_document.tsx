import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt_BR">
        <Head />
        <body>
          <script
            type="text/javascript"
            src="https://widget.freshworks.com/widgets/151000001150.js"
            async
            defer
          ></script>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
