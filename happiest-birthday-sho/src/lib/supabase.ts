import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://crnqkftjrdywfpsohtwh.supabase.co';
const supabaseKey = 'sb_publishable_sM4IuY_xerR79YP8AdE7eQ_kqYQc5a9';

export const supabase = createClient(supabaseUrl, supabaseKey);
