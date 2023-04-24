import { convertBufferToEmbedding } from './main';
import { Embedding } from './types';

export const convertFromBuffer = (imageToConvert: Buffer): Promise<Embedding> =>
  convertBufferToEmbedding(imageToConvert);
