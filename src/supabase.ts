import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://aadeszeglfbiiahmtqsb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZGVzemVnbGZiaWlhaG10cXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4NDIyNTEsImV4cCI6MTk4OTQxODI1MX0.7zHlL_sLo1RnIyTpG54OtYsvSs-7vfcPmRqQ7FO-plQ"
);

