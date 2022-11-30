import { publicProcedure, router } from '../util/trpc';

export const postRouter = router({
  post: publicProcedure.query(async () => {
    return 'post router tRPC v10!';
  }),
});
