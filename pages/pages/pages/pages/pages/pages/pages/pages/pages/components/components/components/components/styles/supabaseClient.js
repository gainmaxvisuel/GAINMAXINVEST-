// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mzaotfhgnvmshyatmyog.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16YW90ZmhnbnZtc2h5YXRteW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3OTE0MjgsImV4cCI6MjA4ODM2NzQyOH0.7ffzlj6OQG2l55o2-3-rSoMY_oEWZLPJGLcY-yjRko8'
);
