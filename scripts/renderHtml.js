import minimist from 'minimist';
import renderHtml from '../src/mailer/letter.js';

const argv = minimist(process.argv.slice(2));
console.log(argv);

renderHtml('update', { name: 'Shashank', body: 'Hi There' });
