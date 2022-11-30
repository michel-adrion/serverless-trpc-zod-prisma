import { Logger } from '@aws-lambda-powertools/logger';

export const logger = new Logger({
  logLevel: 'INFO',
  serviceName: 'shopping-cart-api',
});
