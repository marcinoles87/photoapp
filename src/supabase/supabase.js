import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://sttdevzmdstzhlralfyn.supabase.co'

const supabaseKey = 'sb_publishable_pABpURHMdGrZkneaQujZFQ_d3zDzvxt'

//  


export const supabase = createClient(supabaseUrl, supabaseKey);