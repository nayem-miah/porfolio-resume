import { auth } from "@/auth";
import AdminPanel from "@/components/auth/Deshboard";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin");
  }
  return (
    <>
      <AdminPanel />
    </>
  );
}
