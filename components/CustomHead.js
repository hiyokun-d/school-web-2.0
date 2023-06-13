import Head from 'next/head'
import React from 'react'

function CustomHead({title}) {
  return (
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* {title ? <title>⎝{title}⎠ ➤&gt; ❨Smansa Bantaeng❩</title> : <title>❨Smansa Bantaeng❩</title>} */}
      <title>{title ? `⎝${title}⎠ ➤> ❨Smansa Bantaeng❩` : `❨Smansa Bantaeng❩`}</title>
      </Head>
  )
}

export default CustomHead