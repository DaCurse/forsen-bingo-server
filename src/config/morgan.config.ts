import { blue, cyan, green, hex, magenta, red, white, yellow } from 'chalk';
import * as morgan from 'morgan';

export const morganMiddleware = morgan((tokens, req, res) => {
	return [
		'\n',
		cyan(tokens.method(req, res)),
		yellow(tokens.status(req, res)),
		hex('#ff5252').bold(tokens.url(req, res)),
		green(tokens['response-time'](req, res) + ' ms'),
		red('@ ' + tokens.date(req, res)),
		yellow(tokens['remote-addr'](req, res)),
		white('from'),
		magenta(tokens.referrer(req, res)),
		blue(tokens['user-agent'](req, res)),
		'\n',
	].join(' ');
});
