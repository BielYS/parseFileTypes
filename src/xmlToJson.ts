import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';
import { parseString } from './modules/stringParser';
import { parseNumber } from './modules/numberParser';

// export const convertXmlToJson = async (inputPath: string, outputPath: string): Promise<void> => {
//   const xmlData = fs.readFileSync(path.resolve(__dirname, inputPath), 'utf8');

//   try {
//     const result = await parseStringPromise(xmlData);
//     const filteredResult = JSON.parse(JSON.stringify(result), (key, value) => {
//       if (typeof value === 'string') {
//         return parseString(value);
//       }
//       if (typeof value === 'number') {
//         return parseNumber(value);
//       }
//       return value;
//     });

//     const jsonResult = JSON.stringify(filteredResult, null, 2);
//     fs.writeFileSync(path.resolve(__dirname, outputPath), jsonResult, 'utf8');
//     console.log('File JSON created with success:', outputPath);
//   } catch (err) {
//     console.error('Error by converting XML to JSON: ', err);
//   }
// };

export function convertXmlToJson(inputPath: string, outputPath: string) {
  const xmlData = fs.readFileSync(path.resolve(__dirname, inputPath), 'utf8');

  try {
    const result = parseStringPromise(xmlData);
    const filteredResult = JSON.parse(JSON.stringify(result), (key, value) => {
      if (typeof value === 'string') {
        return parseString(value);
      }
      if (typeof value === 'number') {
        return parseNumber(value);
      }
      return value;
    });

    const jsonResult = JSON.stringify(filteredResult, null, 2);
    fs.writeFileSync(path.resolve(__dirname, outputPath), jsonResult, 'utf8');
    console.log('File JSON created with success:', outputPath);
  } catch (err) {
    console.error('Error by converting XML to JSON: ', err);
  }
};