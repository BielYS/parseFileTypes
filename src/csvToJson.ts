import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';
import { parseString } from './modules/stringParser';
import { parseNumber } from './modules/numberParser';

export const convertCsvToJson = (inputPath: string, outputPath: string): void => {
  const results: any[] = [];

  fs.createReadStream(path.resolve(__dirname, inputPath))
    .pipe(csv())
    .on('data', (data) => {
      const filteredData: any = {};
      for (const key in data) {
        const value = data[key];
        if (key.includes('age') || key.includes('id')) {
          filteredData[key] = parseNumber(value);
        } else {
          filteredData[key] = parseString(value);
        }
      }
      results.push(filteredData);
    })
    .on('end', () => {
      const jsonResult = JSON.stringify(results, null, 2);
      fs.writeFileSync(path.resolve(__dirname, outputPath), jsonResult, 'utf8');
      console.log('File JSON created with success:', outputPath);
    });
};
