// const supabaseUrl = meta.process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = meta.process.env.REACT_APP_SUPABASE_ANON_KEY;

import { createClient } from "@supabase/supabase-js";

//When using Vite, need to use import.meta.env to acces env variables
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
