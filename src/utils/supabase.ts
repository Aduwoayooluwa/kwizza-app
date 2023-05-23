import { createClient } from '@supabase/supabase-js'

const supabaseUrl: any = 'https://vpvuidexsulheayoeixm.supabase.co' || process.env.supabaseUrl
const supabaseKey: any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdnVpZGV4c3VsaGVheW9laXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MTM3ODUsImV4cCI6MTk5ODI4OTc4NX0.S2V2gkh3c-rdQfsDPcPkPX6nJdZzWFXVmUewAuXGVRI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase