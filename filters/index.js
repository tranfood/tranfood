import moment from 'moment';

export function stringReverse(value) {
  if (!value) {
    return '';
  }

  return value.split('').reverse().join('');
}
