import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1 className='font-bold'>Flow Linktree Docs</h1>,
  project: {
    link: 'https://flowlink.tree',
  },
  chat: {
    link: 'https://discord.gg/flowland',
  },
  docsRepositoryBase: 'https://github.com/fagnersales/flow-linktree-docs',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config