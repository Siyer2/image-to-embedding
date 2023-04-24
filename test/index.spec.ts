import { readFileSync } from 'fs';
import { convertFromBuffer } from '../src';

describe(convertFromBuffer, () => {
  jest.setTimeout(7000);
  const testImage = readFileSync('test/test_stitch.jpg');
  it('should return an embedding from the image', async () => {
    const embedding = await convertFromBuffer(testImage);

    expect(Array.isArray(embedding)).toBeTruthy();
    expect(Array.isArray(embedding[0])).toBeTruthy();
  });
});
