import { createTRPCRouter } from "@/server/api/trpc";
import { loginRouter } from "@/server/api/routers/login";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    loginRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
