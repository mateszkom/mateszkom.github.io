import { defineDocumentType } from 'contentlayer/source-files'
import { WEBSITE_HOST_URL } from './constants'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
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
    url: {
      type: 'string',
      resolve: (doc) => `posts/${doc._raw.flattenedPath}`,
    },
    absoluteURL: {
      type: 'string',
      resolve: (doc) => `${WEBSITE_HOST_URL}/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default Post
