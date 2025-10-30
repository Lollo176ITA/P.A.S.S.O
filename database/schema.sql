-- Schema del Database P.A.S.S.O.
-- Esegui questi comandi nel SQL Editor di Supabase

-- ============================================
-- TABELLA: ragazzi
-- Gestisce le informazioni sui giovani assistiti
-- ============================================
CREATE TABLE IF NOT EXISTS ragazzi (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    data_nascita DATE NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(20),
    fascia_eta VARCHAR(10) CHECK (fascia_eta IN ('16-18', '18-24')),
    stato VARCHAR(50) DEFAULT 'attivo' CHECK (stato IN ('attivo', 'completato', 'sospeso')),
    provenienza TEXT, -- Es: "Casa famiglia X", "Comunità Y"
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: volontari
-- Gestisce le informazioni sui volontari e professionisti
-- ============================================
CREATE TABLE IF NOT EXISTS volontari (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    ruolo VARCHAR(100), -- Es: "Psicologo", "Educatore", "Consulente fiscale"
    competenze TEXT[], -- Array di competenze
    disponibilita TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: equipe
-- Mette in relazione ragazzi e volontari nelle equipe
-- ============================================
CREATE TABLE IF NOT EXISTS equipe (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ragazzo_id UUID REFERENCES ragazzi(id) ON DELETE CASCADE,
    volontario_id UUID REFERENCES volontari(id) ON DELETE CASCADE,
    ruolo_equipe VARCHAR(100), -- Es: "Referente principale", "Supporto economico"
    data_inizio DATE DEFAULT CURRENT_DATE,
    data_fine DATE,
    attivo BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(ragazzo_id, volontario_id)
);

-- ============================================
-- TABELLA: incontri
-- Registra gli incontri tra ragazzi ed equipe
-- ============================================
CREATE TABLE IF NOT EXISTS incontri (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ragazzo_id UUID REFERENCES ragazzi(id) ON DELETE CASCADE,
    volontario_id UUID REFERENCES volontari(id),
    tipo VARCHAR(50) CHECK (tipo IN ('individuale', 'gruppo', 'telefonico', 'online')),
    data_incontro TIMESTAMP WITH TIME ZONE NOT NULL,
    durata_minuti INTEGER,
    argomenti TEXT,
    note TEXT,
    obiettivi_raggiunti TEXT[],
    prossimi_passi TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: obiettivi
-- Traccia gli obiettivi di autonomia per ogni ragazzo
-- ============================================
CREATE TABLE IF NOT EXISTS obiettivi (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ragazzo_id UUID REFERENCES ragazzi(id) ON DELETE CASCADE,
    titolo VARCHAR(255) NOT NULL,
    descrizione TEXT,
    categoria VARCHAR(100), -- Es: "Gestione denaro", "Casa", "Lavoro"
    stato VARCHAR(50) DEFAULT 'in_corso' CHECK (stato IN ('da_iniziare', 'in_corso', 'completato', 'sospeso')),
    priorita VARCHAR(20) CHECK (priorita IN ('bassa', 'media', 'alta')),
    data_inizio DATE,
    data_scadenza DATE,
    data_completamento DATE,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: eventi_aperti
-- Gestisce gli incontri aperti al pubblico
-- ============================================
CREATE TABLE IF NOT EXISTS eventi_aperti (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titolo VARCHAR(255) NOT NULL,
    descrizione TEXT,
    categoria VARCHAR(100), -- Es: "Gestione denaro", "Salute", "Lavoro"
    data_evento TIMESTAMP WITH TIME ZONE NOT NULL,
    durata_minuti INTEGER,
    luogo VARCHAR(255),
    indirizzo TEXT,
    max_partecipanti INTEGER,
    iscritti_count INTEGER DEFAULT 0,
    stato VARCHAR(50) DEFAULT 'programmato' CHECK (stato IN ('programmato', 'in_corso', 'completato', 'annullato')),
    organizzatori UUID[] REFERENCES volontari(id),
    materiali_url TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: risorse
-- Gestisce guide, tutorial e materiali
-- ============================================
CREATE TABLE IF NOT EXISTS risorse (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titolo VARCHAR(255) NOT NULL,
    descrizione TEXT,
    tipo VARCHAR(50) CHECK (tipo IN ('guida', 'video', 'pdf', 'link', 'checklist')),
    categoria VARCHAR(100),
    url TEXT,
    file_path TEXT,
    tags TEXT[],
    visualizzazioni INTEGER DEFAULT 0,
    pubblicato BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABELLA: partner
-- Gestisce enti e partner del progetto
-- ============================================
CREATE TABLE IF NOT EXISTS partner (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(100), -- Es: "Comune", "Associazione", "Azienda"
    descrizione TEXT,
    contatto_nome VARCHAR(255),
    contatto_email VARCHAR(255),
    contatto_telefono VARCHAR(20),
    indirizzo TEXT,
    accordi TEXT,
    attivo BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDICI per migliorare le performance
-- ============================================
CREATE INDEX idx_ragazzi_fascia_eta ON ragazzi(fascia_eta);
CREATE INDEX idx_ragazzi_stato ON ragazzi(stato);
CREATE INDEX idx_equipe_ragazzo ON equipe(ragazzo_id);
CREATE INDEX idx_equipe_volontario ON equipe(volontario_id);
CREATE INDEX idx_incontri_ragazzo ON incontri(ragazzo_id);
CREATE INDEX idx_incontri_data ON incontri(data_incontro);
CREATE INDEX idx_obiettivi_ragazzo ON obiettivi(ragazzo_id);
CREATE INDEX idx_obiettivi_stato ON obiettivi(stato);
CREATE INDEX idx_eventi_data ON eventi_aperti(data_evento);
CREATE INDEX idx_risorse_categoria ON risorse(categoria);

-- ============================================
-- TRIGGER per aggiornare updated_at automaticamente
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_ragazzi_updated_at BEFORE UPDATE ON ragazzi
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_volontari_updated_at BEFORE UPDATE ON volontari
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_obiettivi_updated_at BEFORE UPDATE ON obiettivi
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_eventi_updated_at BEFORE UPDATE ON eventi_aperti
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_risorse_updated_at BEFORE UPDATE ON risorse
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partner_updated_at BEFORE UPDATE ON partner
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- Per ora disabilitato - da configurare in base alle esigenze
-- ============================================
-- ALTER TABLE ragazzi ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE volontari ENABLE ROW LEVEL SECURITY;
-- etc...

-- ============================================
-- COMMENTI
-- ============================================
COMMENT ON TABLE ragazzi IS 'Giovani assistiti dal progetto P.A.S.S.O.';
COMMENT ON TABLE volontari IS 'Volontari e professionisti del progetto';
COMMENT ON TABLE equipe IS 'Relazioni tra ragazzi e volontari nelle equipe';
COMMENT ON TABLE incontri IS 'Registro degli incontri';
COMMENT ON TABLE obiettivi IS 'Obiettivi di autonomia per ogni ragazzo';
COMMENT ON TABLE eventi_aperti IS 'Eventi e incontri aperti al pubblico';
COMMENT ON TABLE risorse IS 'Guide, tutorial e materiali didattici';
COMMENT ON TABLE partner IS 'Enti e partner del progetto';
