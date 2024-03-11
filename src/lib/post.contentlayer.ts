import { defineDocumentType } from 'contentlayer/source-files'
import { WEBSITE_HOST_URL } from './constants'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    url: {
      type: 'string',
      resolve: (doc) =>
        `/posts/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    // absoluteURL: {
    //   type: 'string',
    //   resolve: (doc) =>
    //     `${WEBSITE_HOST_URL}/posts/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    // },
    // ogImageURL: {
    //   type: 'string',
    //   resolve: (doc) =>
    //     `/posts/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}/og-image.png`,
    // },
  },
}))

export default Post
