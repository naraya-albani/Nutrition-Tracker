import { createClient } from "../lib/supabase/server";
import LandingPage from "./_components/landing-client";

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <LandingPage isLoggedIn={!!user} />;
}
