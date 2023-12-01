import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const loginRouter = createTRPCRouter({
    login: publicProcedure
    .input(z.object({ username: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // Check if the user already exists
      let user = await ctx.db.user.findFirst({
        where: {
          username: input.username,
        },
      });

      if (!user) {
        user = await ctx.db.user.create({
          data: {
              username: input.username,
          }
        })
      }
      return { success: true, message: "User logged in successfully", user };
    }),
});
