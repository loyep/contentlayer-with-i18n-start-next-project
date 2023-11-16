import { makeSource } from 'contentlayer/source-files';
import { documentTypes } from './interop/config/blog/documentTypes';
import { validateContentLayerConfig } from './validators/contentLayer';

const contentDirPath = 'posts';

validateContentLayerConfig(documentTypes);

export default makeSource({
  contentDirPath,
  documentTypes
});
