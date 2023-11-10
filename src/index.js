import testData from '../data/testData_unsorted.js';
import Otter from './core/Otter.js';

const testOtter = new Otter();

testOtter.init(testData, {
  sortBy : 'category'
});


