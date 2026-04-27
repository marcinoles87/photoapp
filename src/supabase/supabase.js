import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = 'process.env.REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY'

// /'https://sttdevzmdstzhlralfyn.supabase.co'/
// 'sb_publishable_pABpURHMdGrZkneaQujZFQ_d3zDzvxt' 


export const supabase = createClient(supabaseUrl, supabaseKey);