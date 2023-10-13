import { initTRPC } from "@trpc/server";
import { init } from "next/dist/compiled/webpack/webpack";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
