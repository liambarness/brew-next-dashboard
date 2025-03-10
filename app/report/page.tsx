import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { goHome } from "../actions";

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
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Worker Reports</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-amber-800 mb-4">Report Overview</h2>
          {/* Add your report content here */}
        </div>

        <div className="mt-6">
          <form action={goHome}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Back to Dashboard
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 