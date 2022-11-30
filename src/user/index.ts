import {} from '../util/logger';
import { publicProcedure, router } from '../util/trpc';

export const userRouter = router({
  user: publicProcedure.query(async () => {
    return 'user router tRPC v10!';
  }),
});
