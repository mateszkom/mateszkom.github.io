// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  // Change path pattern for posts
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  // Path pattern for projects
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  content: [
    {
      contentDirPath: "posts",
      documentTypes: [Post],
      mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "one-dark-pro",
              onVisitLine(node) {
                if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }];
                }
              },
              onVisitHighlightedLine(node) {
                node.properties.className.push("line--highlighted");
              },
              onVisitHighlightedWord(node) {
                node.properties.className = ["word--highlighted"];
              }
            }
          ],
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"]
              }
            }
          ]
        ]
      }
    },
    {
      contentDirPath: "projects",
      documentTypes: [Project],
      mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "one-dark-pro",
              onVisitLine(node) {
                if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }];
                }
              },
              onVisitHighlightedLine(node) {
                node.properties.className.push("line--highlighted");
              },
              onVisitHighlightedWord(node) {
                node.properties.className = ["word--highlighted"];
              }
            }
          ],
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"]
              }
            }
          ]
        ]
      }
    }
  ]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NYN277A4.mjs.map
