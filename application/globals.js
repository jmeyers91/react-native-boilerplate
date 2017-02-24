import {noop} from 'lodash';
import config from './config';

global.log = config.production ? noop : console.log.bind(console);
global.log.error = console.error.bind(console);
