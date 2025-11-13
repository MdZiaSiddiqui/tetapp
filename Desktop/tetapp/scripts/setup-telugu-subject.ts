/**
 * Setup Telugu Subject and Chapters
 * Creates Telugu subject with Paper 1 and Paper 2 chapters in Supabase
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Set EXPO_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupTeluguSubject() {
  console.log('🌱 Setting up Telugu Subject and Chapters...\n');

  try {
    // 1. Create/Update Telugu Subject
    console.log('📚 Creating Telugu subject...');
    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .upsert({
        id: 'telugu',
        name: 'Telugu',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' })
      .select()
      .single();

    if (subjectError) {
      console.error('❌ Error creating Telugu subject:', subjectError.message);
      process.exit(1);
    }

    console.log('✅ Telugu subject created/updated:', subject);

    // 2. Create Paper 1 Chapter
    console.log('\n📖 Creating Paper 1 chapter...');

    // Check if Paper 1 chapter already exists
    const { data: existingPaper1 } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', 'telugu')
      .eq('name', 'Paper 1')
      .single();

    let paper1;
    if (existingPaper1) {
      console.log('✅ Paper 1 chapter already exists:', existingPaper1);
      paper1 = existingPaper1;
    } else {
      const { data, error: paper1Error } = await supabase
        .from('chapters')
        .insert({
          subject_id: 'telugu',
          name: 'Paper 1',
          description: 'Telugu Paper 1 - TSTET Questions',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (paper1Error) {
        console.error('❌ Error creating Paper 1 chapter:', paper1Error.message);
        process.exit(1);
      }

      console.log('✅ Paper 1 chapter created:', data);
      paper1 = data;
    }

    // 3. Create Paper 2 Chapter
    console.log('\n📖 Creating Paper 2 chapter...');

    // Check if Paper 2 chapter already exists
    const { data: existingPaper2 } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', 'telugu')
      .eq('name', 'Paper 2')
      .single();

    let paper2;
    if (existingPaper2) {
      console.log('✅ Paper 2 chapter already exists:', existingPaper2);
      paper2 = existingPaper2;
    } else {
      const { data, error: paper2Error } = await supabase
        .from('chapters')
        .insert({
          subject_id: 'telugu',
          name: 'Paper 2',
          description: 'Telugu Paper 2 - TSTET Questions',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (paper2Error) {
        console.error('❌ Error creating Paper 2 chapter:', paper2Error.message);
        process.exit(1);
      }

      console.log('✅ Paper 2 chapter created:', data);
      paper2 = data;
    }

    // 4. Verify Setup
    console.log('\n🔍 Verifying setup...');
    const { data: chapters, error: verifyError } = await supabase
      .from('chapters')
      .select('*')
      .eq('subject_id', 'telugu')
      .order('name');

    if (verifyError) {
      console.error('❌ Error verifying chapters:', verifyError.message);
      process.exit(1);
    }

    console.log('\n✅ Telugu subject and chapters setup complete!');
    console.log('═══════════════════════════════════════');
    console.log(`📚 Subject: Telugu (ID: telugu)`);
    console.log(`📖 Chapters: ${chapters?.length || 0}`);
    chapters?.forEach(ch => {
      console.log(`   - ${ch.name} (ID: ${ch.id})`);
    });
    console.log('═══════════════════════════════════════\n');

  } catch (error) {
    console.error('\n❌ FATAL ERROR:', error);
    process.exit(1);
  }
}

// Run setup
setupTeluguSubject();
