import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { VocabularyDefinition } from './vocab-definition';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  async getVocabularySubset(count: number): Promise<VocabularyDefinition[]> {
    const { data, error } = await supabase
      .from('vocabulary')
      .select('*')
      .limit(count)
      .order('random()'); 
    if (error) {
      console.error('Error fetching vocabulary:', error);
      return [];
    }

    return data;
  }

  async getAllVocabulary(): Promise<VocabularyDefinition[]> {
    const { data, error } = await supabase
      .from('vocabulary')
      .select('*');

    if (error) {
      console.error('Error fetching all vocabulary:', error);
      return [];
    }

    return data;
  }
}
