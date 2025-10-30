import { createClient } from '@/utils/supabase/server';
import Header from '@/components/Header';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();

  // Fetch dati dal database
  const { data: ragazzi, error: ragazziError } = await supabase
    .from('ragazzi')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  const { data: obiettivi, error: obiettiviError } = await supabase
    .from('obiettivi')
    .select('*')
    .eq('stato', 'in_corso')
    .limit(5);

  const { data: eventi, error: eventiError } = await supabase
    .from('eventi_aperti')
    .select('*')
    .eq('stato', 'programmato')
    .order('data_evento', { ascending: true })
    .limit(5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dashboard P.A.S.S.O.
          </h1>
          <p className="text-gray-600">
            Panoramica generale del progetto
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Ragazzi Attivi
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {ragazzi?.length || 0}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Obiettivi in Corso
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {obiettivi?.length || 0}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Prossimi Eventi
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {eventi?.length || 0}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ragazzi Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Ragazzi Recenti
              </h2>
            </div>
            <div className="p-6">
              {ragazziError ? (
                <div className="text-red-600">
                  Errore: {ragazziError.message}
                </div>
              ) : ragazzi && ragazzi.length > 0 ? (
                <div className="space-y-4">
                  {ragazzi.map((ragazzo) => (
                    <div 
                      key={ragazzo.id} 
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {ragazzo.nome} {ragazzo.cognome}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Fascia: {ragazzo.fascia_eta}
                          </p>
                        </div>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                          {ragazzo.stato}
                        </span>
                      </div>
                      {ragazzo.provenienza && (
                        <p className="text-sm text-gray-500 mt-2">
                          {ragazzo.provenienza}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Nessun ragazzo registrato. Crea le tabelle nel database Supabase.
                </p>
              )}
            </div>
          </div>

          {/* Eventi Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Prossimi Eventi
              </h2>
            </div>
            <div className="p-6">
              {eventiError ? (
                <div className="text-red-600">
                  Errore: {eventiError.message}
                </div>
              ) : eventi && eventi.length > 0 ? (
                <div className="space-y-4">
                  {eventi.map((evento) => (
                    <div 
                      key={evento.id} 
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {evento.titolo}
                      </h3>
                      <p className="text-sm text-gray-600">
                        📅 {new Date(evento.data_evento).toLocaleDateString('it-IT')}
                      </p>
                      {evento.luogo && (
                        <p className="text-sm text-gray-500 mt-1">
                          📍 {evento.luogo}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Nessun evento programmato
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            📊 Database Configurato
          </h3>
          <p className="text-blue-600 mb-4">
            Il database Supabase è connesso correttamente! Se non vedi dati, esegui lo script SQL 
            in <code className="bg-blue-100 px-2 py-1 rounded">database/schema.sql</code>
          </p>
          <div className="flex gap-4">
            <a 
              href="https://supabase.com/dashboard/project/yilozwmdpgypovaoxbty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-600 underline"
            >
              Vai al Dashboard Supabase →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
