-- Query di Esempio per P.A.S.S.O.
-- Esempi di query utili per gestire il database

-- ============================================
-- INSERIMENTO DATI DI ESEMPIO
-- ============================================

-- Inserimento ragazzi
INSERT INTO ragazzi (nome, cognome, data_nascita, email, telefono, fascia_eta, provenienza)
VALUES 
    ('Marco', 'Rossi', '2005-03-15', 'marco.rossi@example.com', '3331234567', '18-24', 'Casa Famiglia Aurora'),
    ('Giulia', 'Bianchi', '2007-07-22', 'giulia.bianchi@example.com', '3337654321', '16-18', 'Comunità San Giuseppe');

-- Inserimento volontari
INSERT INTO volontari (nome, cognome, email, telefono, ruolo, competenze)
VALUES 
    ('Laura', 'Verdi', 'laura.verdi@example.com', '3339876543', 'Psicologa', ARRAY['Supporto psicologico', 'Ascolto attivo']),
    ('Paolo', 'Neri', 'paolo.neri@example.com', '3335551234', 'Consulente fiscale', ARRAY['Tasse', 'Dichiarazione redditi', 'Gestione economica']);

-- Inserimento obiettivi
INSERT INTO obiettivi (ragazzo_id, titolo, descrizione, categoria, priorita, data_inizio)
VALUES 
    ((SELECT id FROM ragazzi WHERE nome = 'Marco' LIMIT 1), 
     'Apertura conto corrente', 
     'Aprire un conto corrente e imparare a gestirlo', 
     'Gestione denaro', 
     'alta', 
     CURRENT_DATE);

-- Inserimento evento aperto
INSERT INTO eventi_aperti (titolo, descrizione, categoria, data_evento, durata_minuti, luogo, max_partecipanti)
VALUES 
    ('Come gestire il primo stipendio', 
     'Incontro pratico su come pianificare le spese e risparmiare', 
     'Gestione denaro', 
     NOW() + INTERVAL '7 days', 
     90, 
     'Centro Giovani - Via Roma 123', 
     20);

-- ============================================
-- QUERY DI CONSULTAZIONE
-- ============================================

-- 1. Elenco ragazzi attivi con la loro fascia d'età
SELECT nome, cognome, data_nascita, fascia_eta, provenienza
FROM ragazzi
WHERE stato = 'attivo'
ORDER BY cognome, nome;

-- 2. Ragazzi con i loro volontari di riferimento
SELECT 
    r.nome || ' ' || r.cognome AS ragazzo,
    v.nome || ' ' || v.cognome AS volontario,
    v.ruolo,
    e.ruolo_equipe,
    e.data_inizio
FROM ragazzi r
JOIN equipe e ON r.id = e.ragazzo_id
JOIN volontari v ON e.volontario_id = v.id
WHERE e.attivo = true
ORDER BY r.cognome, r.nome;

-- 3. Obiettivi in corso per ragazzo
SELECT 
    r.nome || ' ' || r.cognome AS ragazzo,
    o.titolo,
    o.categoria,
    o.priorita,
    o.data_inizio,
    o.data_scadenza,
    CASE 
        WHEN o.data_scadenza < CURRENT_DATE THEN 'Scaduto'
        WHEN o.data_scadenza < CURRENT_DATE + INTERVAL '7 days' THEN 'In scadenza'
        ELSE 'Nei tempi'
    END AS urgenza
FROM ragazzi r
JOIN obiettivi o ON r.id = o.ragazzo_id
WHERE o.stato = 'in_corso'
ORDER BY o.data_scadenza NULLS LAST;

-- 4. Prossimi eventi aperti
SELECT 
    titolo,
    categoria,
    TO_CHAR(data_evento, 'DD/MM/YYYY HH24:MI') AS data_ora,
    luogo,
    max_partecipanti,
    iscritti_count,
    (max_partecipanti - iscritti_count) AS posti_disponibili
FROM eventi_aperti
WHERE stato = 'programmato' 
    AND data_evento > NOW()
ORDER BY data_evento;

-- 5. Statistiche incontri per ragazzo (ultimi 3 mesi)
SELECT 
    r.nome || ' ' || r.cognome AS ragazzo,
    COUNT(*) AS numero_incontri,
    STRING_AGG(DISTINCT i.tipo, ', ') AS tipi_incontro,
    MIN(i.data_incontro) AS primo_incontro,
    MAX(i.data_incontro) AS ultimo_incontro
FROM ragazzi r
JOIN incontri i ON r.id = i.ragazzo_id
WHERE i.data_incontro > NOW() - INTERVAL '3 months'
GROUP BY r.id, r.nome, r.cognome
ORDER BY numero_incontri DESC;

-- 6. Volontari più attivi (per numero di incontri)
SELECT 
    v.nome || ' ' || v.cognome AS volontario,
    v.ruolo,
    COUNT(i.id) AS numero_incontri,
    COUNT(DISTINCT i.ragazzo_id) AS ragazzi_seguiti
FROM volontari v
JOIN incontri i ON v.id = i.volontario_id
WHERE i.data_incontro > NOW() - INTERVAL '6 months'
GROUP BY v.id, v.nome, v.cognome, v.ruolo
ORDER BY numero_incontri DESC;

-- 7. Obiettivi completati nell'ultimo mese
SELECT 
    r.nome || ' ' || r.cognome AS ragazzo,
    o.titolo,
    o.categoria,
    TO_CHAR(o.data_completamento, 'DD/MM/YYYY') AS data_completamento
FROM ragazzi r
JOIN obiettivi o ON r.id = o.ragazzo_id
WHERE o.stato = 'completato'
    AND o.data_completamento > NOW() - INTERVAL '1 month'
ORDER BY o.data_completamento DESC;

-- 8. Risorse più visualizzate per categoria
SELECT 
    categoria,
    titolo,
    tipo,
    visualizzazioni
FROM risorse
WHERE pubblicato = true
ORDER BY categoria, visualizzazioni DESC;

-- 9. Età media dei ragazzi per fascia
SELECT 
    fascia_eta,
    COUNT(*) AS numero_ragazzi,
    ROUND(AVG(EXTRACT(YEAR FROM AGE(data_nascita)))::numeric, 1) AS eta_media
FROM ragazzi
WHERE stato = 'attivo'
GROUP BY fascia_eta
ORDER BY fascia_eta;

-- 10. Partner attivi con numero di collaborazioni
SELECT 
    p.nome,
    p.tipo,
    p.contatto_email,
    p.contatto_telefono
FROM partner p
WHERE p.attivo = true
ORDER BY p.tipo, p.nome;

-- ============================================
-- QUERY DI AGGIORNAMENTO
-- ============================================

-- Completare un obiettivo
UPDATE obiettivi 
SET stato = 'completato', 
    data_completamento = CURRENT_DATE
WHERE id = 'UUID_OBIETTIVO_QUI';

-- Aggiornare il conteggio iscritti a un evento
UPDATE eventi_aperti
SET iscritti_count = iscritti_count + 1
WHERE id = 'UUID_EVENTO_QUI' 
    AND iscritti_count < max_partecipanti;

-- Chiudere un'equipe
UPDATE equipe
SET attivo = false,
    data_fine = CURRENT_DATE
WHERE ragazzo_id = 'UUID_RAGAZZO_QUI'
    AND volontario_id = 'UUID_VOLONTARIO_QUI';

-- ============================================
-- QUERY DI REPORTISTICA
-- ============================================

-- Dashboard generale
SELECT 
    (SELECT COUNT(*) FROM ragazzi WHERE stato = 'attivo') AS ragazzi_attivi,
    (SELECT COUNT(*) FROM volontari) AS volontari_totali,
    (SELECT COUNT(*) FROM obiettivi WHERE stato = 'in_corso') AS obiettivi_in_corso,
    (SELECT COUNT(*) FROM eventi_aperti WHERE stato = 'programmato' AND data_evento > NOW()) AS prossimi_eventi,
    (SELECT COUNT(*) FROM incontri WHERE data_incontro > NOW() - INTERVAL '1 month') AS incontri_ultimo_mese;

-- Report mensile obiettivi
SELECT 
    TO_CHAR(DATE_TRUNC('month', data_completamento), 'Month YYYY') AS mese,
    categoria,
    COUNT(*) AS obiettivi_completati
FROM obiettivi
WHERE stato = 'completato'
    AND data_completamento > NOW() - INTERVAL '6 months'
GROUP BY DATE_TRUNC('month', data_completamento), categoria
ORDER BY DATE_TRUNC('month', data_completamento) DESC, categoria;

-- Tasso di completamento obiettivi per categoria
SELECT 
    categoria,
    COUNT(*) AS totale_obiettivi,
    COUNT(*) FILTER (WHERE stato = 'completato') AS completati,
    COUNT(*) FILTER (WHERE stato = 'in_corso') AS in_corso,
    ROUND(
        (COUNT(*) FILTER (WHERE stato = 'completato')::numeric / COUNT(*)::numeric * 100), 
        1
    ) AS percentuale_completamento
FROM obiettivi
GROUP BY categoria
ORDER BY percentuale_completamento DESC;
