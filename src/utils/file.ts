import { promises } from 'fs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deleteFile = async (filename: string) => {
  try {
    await promises.stat(filename);
  } catch {
    return;
  }

  await promises.unlink(filename);
};
