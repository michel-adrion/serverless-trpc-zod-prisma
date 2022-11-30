import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';

export function createContext({
  event,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  return {
    event: event,
    apiVersion: (event as { version?: string }).version || '1.0',
    user: event.headers['x-user'],
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();

// t.middleware(async ({ ctx, next }) => {
//   return next({
//     ctx: {},
//   });
// });

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
