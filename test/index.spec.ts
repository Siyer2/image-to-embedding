import { readFileSync } from 'fs';
import { convertFromBuffer } from '../src';

describe(convertFromBuffer, () => {
  const testImage = readFileSync('./test_stitch.jpg');
  it('should return an embedding from the image', async () => {
    const embedding = await convertFromBuffer(testImage);
    console.log(embedding);
    expect(embedding);
  });
});
