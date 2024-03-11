import { defineDocumentType } from 'contentlayer/source-files'
import { WEBSITE_HOST_URL } from './constants'

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
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
        `/projects/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    // absoluteURL: {
    //   type: 'string',
    //   resolve: (doc) =>
    //     `${WEBSITE_HOST_URL}/projects/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    // },
    // ogImageURL: {
    //   type: 'string',
    //   resolve: (doc) =>
    //     `/projects/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}/og-image.png`,
    // },
  },
}))

export default Project
