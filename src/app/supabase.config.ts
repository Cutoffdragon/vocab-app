import { createClient } from'@supabase/supabase-js';

const SUPABASE_URL = 'https://fuekajjwvylrbmrjuqqn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZWthamp3dnlscmJtcmp1cXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4NjAwMjgsImV4cCI6MjAzOTQzNjAyOH0.GZlkJocod6F6hRUDbVqFsrZKXaruG6FaJ4lZguMHBGI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
