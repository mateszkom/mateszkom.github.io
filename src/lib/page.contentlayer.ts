import { defineDocumentType } from 'contentlayer/source-files'
import { WEBSITE_HOST_URL } from './constants'

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/*.mdx`,
  contentType: 'mdx',
}))

export default Page
