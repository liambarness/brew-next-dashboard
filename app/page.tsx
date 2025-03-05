import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOutAction } from "./actions";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: userAuth } = await supabase.from("user").select("*").single();

  if (userAuth?.role !== "admin") {
    return redirect("/employee");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">Admin Dashboard</h1>
          <form action={signOutAction}>
            <Button variant="outline" className="text-amber-700 border-amber-700 hover:bg-amber-50">
              Sign Out
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin">
            <Button className="w-full h-32 bg-amber-600 hover:bg-amber-700 text-white text-lg">
              Access Dashboard
            </Button>
          </Link>
          
          <Link href="/report">
            <Button className="w-full h-32 bg-amber-600 hover:bg-amber-700 text-white text-lg">
              Report Workers
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-amber-700">
          <p>Signed in as: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
