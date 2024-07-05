import { convertCsvToJson } from './csvToJson';
import { convertXmlToJson } from './xmlToJson';

const run = async () => {
  convertCsvToJson('./files/data.csv', './files/dataCsv.json');
  convertXmlToJson('./files/data.xml', './files/dataXml.json');
};

run().catch(err => console.error(err));