import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { VocabularyDefinition } from './vocab-definition';

const supabaseUrl = 'https://fuekajjwvylrbmrjuqqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZWthamp3dnlscmJtcmp1cXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4NjAwMjgsImV4cCI6MjAzOTQzNjAyOH0.GZlkJocod6F6hRUDbVqFsrZKXaruG6FaJ4lZguMHBGI';
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  async getVocabularySubset(numArray: number[]): Promise<VocabularyDefinition[]> {
    const vocabArray: any = [];
    for (let i = 0; i < numArray.length; i++) {
      const { data, error } = await supabase
        .from('Vocabulary')
        .select('*')
        .eq('id', numArray[i])
      vocabArray.push(data);
      if (error) {
        console.error('Error fetching vocabulary:', error);
        return [];
      }
    }

    return vocabArray;
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
