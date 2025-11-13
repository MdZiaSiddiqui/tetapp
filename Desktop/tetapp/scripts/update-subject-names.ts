/**
 * Script to update all subject names to include "& Pedagogy"
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const subjects = [
  { id: 'child-development', name: 'Child Development & Pedagogy' },
  { id: 'mathematics', name: 'Mathematics & Pedagogy' },
  { id: 'science', name: 'Science & Pedagogy' },
  { id: 'social', name: 'Social Studies & Pedagogy' },
  { id: 'english', name: 'English & Pedagogy' },
  { id: 'environmental', name: 'Environmental Studies & Pedagogy' },
  { id: 'hindi', name: 'Hindi & Pedagogy' },
  { id: 'urdu', name: 'Urdu & Pedagogy' },
];

async function updateSubjectNames() {
  console.log('🔄 Updating subject names to include "& Pedagogy"...\n');

  for (const subject of subjects) {
    const { data, error } = await supabase
      .from('subjects')
      .update({ name: subject.name })
      .eq('id', subject.id)
      .select();

    if (error) {
      console.error(`❌ Error updating ${subject.id}:`, error.message);
    } else {
      console.log(`✅ Updated: ${subject.id} → ${subject.name}`);
    }
  }

  console.log('\n✅ All subject names updated successfully!');
}

updateSubjectNames().catch(console.error);
