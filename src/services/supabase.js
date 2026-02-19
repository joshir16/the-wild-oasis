import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://szqznbhqjzucfhyrlmej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6cXpuYmhxanp1Y2ZoeXJsbWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MjIyODMsImV4cCI6MjA4MzQ5ODI4M30.-637wqoWfK9YgTN9LvCtMAdaPrFoWmA0sWFT8ViJREo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
