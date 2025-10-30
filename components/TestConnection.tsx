'use client';

import { createClient } from '@/utils/supabase/client';
import { useState, useEffect } from 'react';

export default function TestConnection() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('ragazzi').select('count').limit(1);
        
        if (error) {
          console.error('Errore connessione:', error);
          setError(error.message);
          setStatus('error');
        } else {
          setStatus('connected');
        }
      } catch (err) {
        console.error('Errore:', err);
        setError(err instanceof Error ? err.message : 'Errore sconosciuto');
        setStatus('error');
      }
    };

    checkConnection();
  }, []);

  if (status === 'loading') {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        🔄 Connessione al database...
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
        ❌ Errore: {error}
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
      ✅ Database connesso!
    </div>
  );
}
