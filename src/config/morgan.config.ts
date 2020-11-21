import { Chalk, hex } from 'chalk';
import * as morgan from 'morgan';

const colors: Record<string, Chalk> = {
  red: hex('#e06c75'),
  green: hex('#98c379'),
  yellow: hex('#e5c07b'),
  blue: hex('#61aefef'),
  magenta: hex('#c678dd'),
  cyan: hex('#56b6c2'),
  gray: hex('#abb2bf'),
};

export const morganMiddleware = morgan((tokens, req, res): string => {
  const parts = [
    '\n',
    colors.cyan.bold(tokens.method(req, res)),
    colors.yellow(tokens.status(req, res)),
    colors.red.bold(tokens.url(req, res)),
    colors.green(tokens['response-time'](req, res) + ' ms'),
    colors.red('@ ' + tokens.date(req, res)),
    colors.yellow(tokens['remote-addr'](req, res)),
  ];

  const referrer = tokens.referrer(req, res);
  if (referrer) {
    parts.push(colors.gray('from'), colors.magenta(referrer));
  }

  parts.push(colors.blue(tokens['user-agent'](req, res)), '\n');
  return parts.join(' ');
});
