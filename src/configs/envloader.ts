import dotenv from 'dotenv';
dotenv.config();

export function getValue(property: string, defaultValue?: any) {
  return process.env[property] || defaultValue;
}
