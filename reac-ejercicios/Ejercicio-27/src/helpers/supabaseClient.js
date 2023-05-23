
import { createClient } from '@supabase/supabase-js'

//Create a single supabase client for interacting with your database
const URL = 'https://ybiazmnthzsrpxtdvzbs.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliaWF6bW50aHpzcnB4dGR2emJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NzIzNTUsImV4cCI6MjAwMDQ0ODM1NX0.mOM_oNBXjcIo2zfgbhaeiKUyR6sD_kiayFFyUxaUvnc'
export const supabase = createClient(URL,KEY)