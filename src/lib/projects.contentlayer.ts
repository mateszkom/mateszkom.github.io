import { defineDocumentType } from 'contentlayer/source-files'
import { WEBSITE_HOST_URL } from './constants'

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the project',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
    },
    absoluteURL: {
      type: 'string',
      resolve: (doc) =>
        `${WEBSITE_HOST_URL}/projects/${doc._raw.flattenedPath}`,
    },
  },
}))

export default Project
