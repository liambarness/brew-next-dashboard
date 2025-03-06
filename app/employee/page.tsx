import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { goHome, signOutAction } from "../actions";

export default async function Employee() {
  const supabase = await createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: userAuth } = await supabase.from("user").select("*").single();

  if (userAuth?.role !== "employee") {
    return redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Report Sales</h1>
        
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
        <form action={signOutAction}>
            <Button variant="outline" className="text-amber-700 border-amber-700 hover:bg-amber-50">
                        Sign Out
                      </Button>
                    </form>
      </div>
    </div>
  );
} 