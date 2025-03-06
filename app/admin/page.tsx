import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { goHome } from "../actions";
import Dashboard from "@/components/dashboard";

export default async function ReportPage() {
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
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Sales Dashboard</h1>
        



      </div>

      <Dashboard />

      <div className="mt-6">
          <form action={goHome}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Back to Dashboard
            </Button>
          </form>
        </div>
    </div>
  );
} 