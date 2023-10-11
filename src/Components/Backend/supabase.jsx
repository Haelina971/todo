// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = meta.process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = meta.process.env.REACT_APP_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default supabase;

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://udfncdkjnejgvrokutqq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZm5jZGtqbmVqZ3Zyb2t1dHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3Mjg2OTEsImV4cCI6MTk5MzMwNDY5MX0.1kz9_ATMQ7h8AX5CRy7ZK-9AE8tBEOyPjYISZpsXlPU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;