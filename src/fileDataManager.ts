import * as fs from 'fs';
import * as path from 'path';

export const readFile = (filePath: string): string => {
  return fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
};

export const writeFile = (filePath: string, data: string): void => {
  fs.writeFileSync(path.resolve(__dirname, filePath), data, 'utf-8');
};