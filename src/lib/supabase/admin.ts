import "server-only"
import { createClient } from "@supabase/supabase-js"
import { getSupabasePublicEnv } from "@/lib/supabase/env"

export function createAdminClient() {
  const { url, publishableKey } = getSupabasePublicEnv()
  const secretKey =
    process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!secretKey) {
    throw new Error("Falta SUPABASE_SECRET_KEY")
  }
  if (
    secretKey === publishableKey ||
    secretKey.startsWith("sb_publishable_")
  ) {
    throw new Error("SUPABASE_SECRET_KEY no puede ser la clave pública")
  }

  return createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
