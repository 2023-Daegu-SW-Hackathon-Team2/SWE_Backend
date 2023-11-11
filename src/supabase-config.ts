import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jgxndypbxmibvlbktfea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneG5keXBieG1pYnZsYmt0ZmVhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTQ0NDI1OCwiZXhwIjoyMDE1MDIwMjU4fQ.w7WIgBX6uQLw3WT8mtGW3ydBpKe9Z8qkoVa8c3wU8jc';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;