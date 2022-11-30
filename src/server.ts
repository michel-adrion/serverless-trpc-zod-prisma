import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { createContext, mergeRouters } from './util/trpc';
import { postRouter } from './post';
import { userRouter } from './user';
import middy from '@middy/core';
import { injectLambdaContext } from '@aws-lambda-powertools/logger';
import { logger } from './util/logger';

const appRouter = mergeRouters(postRouter, userRouter);

export type AppRouter = typeof appRouter;

export const handler = middy(
  awsLambdaRequestHandler({
    router: appRouter,
    createContext,
  }),
).use(injectLambdaContext(logger));
