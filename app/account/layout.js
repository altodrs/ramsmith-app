import { redirect } from "next/navigation";
import { auth } from "@/auth";

// Guards everything under /account/* — colocated with the route rather than
// a middleware.js, matching this codebase's existing pattern (see /success,
// /api/download) of verifying access at the route itself.
export default async function AccountLayout({ children }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return children;
}
