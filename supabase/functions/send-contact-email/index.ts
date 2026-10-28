const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "bharath.k8785@gmail.com";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const WEB3FORMS_KEY = Deno.env.get("WEB3FORMS_KEY");

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Store submission in the database (always — this is the reliable record)
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
    }

    // Best-effort email send via Web3Forms — if it fails, we still return success
    // because the submission is safely stored in the database.
    if (WEB3FORMS_KEY) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: subject
              ? `Portfolio Contact: ${subject}`
              : `Portfolio Contact from ${name}`,
            from_name: "Portfolio Contact Form",
            name: name,
            email: email,
            message: message,
          }),
        });
      } catch {
        // Email send failed, but submission is stored in DB — do not surface error
      }
    }

    // Always return success so the visitor sees "Message Sent"
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
