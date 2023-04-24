import jimp from 'jimp';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs-node';
import { Embedding } from './types';

let model: mobilenet.MobileNet;

export async function convertBufferToEmbedding(
  imageToConvert: Buffer
): Promise<Embedding> {
  const processedImage = await preprocessBuffer(imageToConvert);
  const embedding = await convertToEmbedding(processedImage);

  return embedding;
}

async function preprocessBuffer(imageToConvert: Buffer): Promise<Buffer> {
  const processedImage = await jimp.read(imageToConvert);
  processedImage.resize(224, 224);

  return await processedImage.getBufferAsync(jimp.MIME_JPEG);
}

async function convertToEmbedding(processedImage: Buffer) {
  const tensorInput = tf.node.decodeImage(processedImage).expandDims();

  model = model || (await mobilenet.load());
  const embedding = model.infer(tensorInput, true);
  return embedding.arraySync() as Embedding;
}
