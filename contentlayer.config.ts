import type { DocumentType } from 'contentlayer/source-files';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import {
  DOCUMENTS_CONTENT_EXTENSION as EXT,
  POST_SCHEMA_CONFIG,
  DOCUMENTS_COMPUTED_FIELDS as computedFields,
  DOCUMENTS_CONTENT_TYPE as contentType,
  DOCUMENTS_FIELDS as fields
} from './interop/types/contentlayerConfigTweakers';
import type { AtomicContentLayerDocumentConfig, DocumentsTypesMetadatas } from './interop/types/hell/contentlayerConfig';
import { validateContentLayerConfig } from './validators/contentLayer';

const contentDirPath = 'posts';

const documentsTypesMetadatas: DocumentsTypesMetadatas = {
  CategoryOnePost: {
    name: 'CategoryOnePost',
    filePathPattern: `category-one/**/*.${EXT}`
  },
  CategoryTwoPost: {
    name: 'CategoryTwoPost',
    filePathPattern: `category-two/**/*.${EXT}`
  }
} as const;

const documentTypes: DocumentType<string>[] = Object.values(documentsTypesMetadatas).reduce(
  (acc, documentTypeMetadatas) => {
    const { name, filePathPattern } = documentTypeMetadatas;
    acc.push(
      defineDocumentType(() => ({ name, filePathPattern, contentType, fields, computedFields }) as const satisfies AtomicContentLayerDocumentConfig)
    );
    return acc;
  },
  [defineDocumentType(() => POST_SCHEMA_CONFIG)]
);

validateContentLayerConfig(documentTypes);

export default makeSource({
  contentDirPath,
  documentTypes
});
