import helloName from './modules/helloName';
import { hello } from './sub';

// from helloName module
const name = 'okutani';
helloName(name);

// from sub
hello();
