import { convertBufferToEmbedding } from './main';
import { Embedding } from './types';

export const convertFromBuffer = async (
  imageToConvert: Buffer
): Promise<Embedding> => await convertBufferToEmbedding(imageToConvert);
