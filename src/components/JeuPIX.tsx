import { useState, useEffect } from "react";

const questions = [
  { id: 1, cours: "Cours 1 – La Certification PIX", question: "Qu'est-ce que la certification PIX ?", options: ["Un diplôme privé délivré par des entreprises tech", "Un service public évaluant les compétences numériques, reconnu par l'État", "Une certification uniquement pour les informaticiens", "Un brevet scolaire obligatoire dès la 6ème"], answer: 1, explication: "PIX est un service public (avec prestataire privé), mis en place par les ministères de l'Éducation et de l'Enseignement supérieur. Il atteste des compétences numériques et est reconnu par l'État." },
  { id: 2, cours: "Cours 1 – La Certification PIX", question: "Combien de domaines sont évalués dans la certification PIX ?", options: ["3 domaines", "5 domaines", "8 domaines", "16 domaines"], answer: 1, explication: "PIX évalue 5 domaines : Informations et données, Communication et collaboration, Création de contenu, Protection et sécurité, Environnement numérique." },
  { id: 3, cours: "Cours 1 – La Certification PIX", question: "Combien de niveaux comporte la certification PIX ?", options: ["5 niveaux", "6 niveaux", "8 niveaux", "10 niveaux"], answer: 2, explication: "PIX comporte 8 niveaux : 1-2 (les bases), 3-4 (la connaissance), 5-6 (la maîtrise), 7-8 (l'expertise)." },
  { id: 4, cours: "Cours 1 – La Certification PIX", question: "Que se passe-t-il si vous obtenez moins de 50% de bonnes réponses à la certification ?", options: ["Seules les compétences échouées sont invalidées", "Vous repassez uniquement les questions ratées", "Toutes les compétences sont invalidées", "Le niveau précédent est automatiquement validé"], answer: 2, explication: "Si moins de 50% de bonnes réponses globalement, TOUTES les compétences sont invalidées, peu importe les résultats par compétence." },
  { id: 5, cours: "Cours 1 – La Certification PIX", question: "Combien de temps est valable l'attestation PIX certifiée ?", options: ["1 an", "2 ans", "3 ans", "5 ans"], answer: 2, explication: "L'attestation PIX certifiée est valable 3 ans." },
  { id: 6, cours: "Cours 2 – Recherche d'information", question: "Qu'est-ce qu'un moteur de recherche ?", options: ["Un logiciel de création de sites web", "Un service en ligne pour trouver des pages web grâce à des mots-clés", "Un protocole de communication entre serveurs", "Un outil de stockage en ligne"], answer: 1, explication: "Un moteur de recherche est un service en ligne qui permet de trouver des pages web via des mots-clés ou une requête." },
  { id: 7, cours: "Cours 2 – Recherche d'information", question: "Que permet l'utilisation des guillemets (« ») dans une requête ?", options: ["Exclure un mot de la recherche", "Élargir la recherche aux synonymes", "Rechercher une expression exacte dans cet ordre précis", "Chercher dans une plage de nombres"], answer: 2, explication: "Les guillemets recherchent une expression exacte. Ex : « éducatrice jeune enfant » retourne des sites où ces mots apparaissent strictement dans cet ordre." },
  { id: 8, cours: "Cours 2 – Recherche d'information", question: "À quoi sert le tilde (~) dans une requête Google ?", options: ["Exclure un terme", "Chercher dans une plage numérique", "Effectuer une recherche élargie sur les mots proches et synonymes", "Chercher une expression exacte"], answer: 2, explication: "Le tilde (~) élargit la recherche aux mots proches. Ex : ~voyage peut retourner aussi « séjour », « avion » ou « vacances »." },
  { id: 9, cours: "Cours 2 – Recherche d'information", question: "Lequel NE fait PAS partie de la méthode pour valider une info en ligne ?", options: ["Identifier la source (nom de domaine, https)", "Croiser l'information avec d'autres sources", "Se fier uniquement au nombre de likes", "Évaluer la qualité : qui, quand, références ?"], answer: 2, explication: "Le nombre de likes n'est pas un critère de fiabilité. Il faut identifier la source, évaluer sa qualité, croiser les informations et utiliser des outils comme OSINT." },
  { id: 10, cours: "Cours 2 – Recherche d'information", question: "Quelles sont les principales limites des IAs génératives ?", options: ["Elles sont trop lentes et inutilisables", "Qualité des données, éthique, propriété intellectuelle, qualité des réponses", "Elles ne peuvent produire que du texte", "Elles nécessitent une connexion physique à un serveur local"], answer: 1, explication: "Les IAs génératives ont des limites liées à la qualité des données d'entraînement, l'éthique, la propriété intellectuelle et la fiabilité des réponses." },
  { id: 11, cours: "Cours 3 – Travail collaboratif", question: "Lequel de ces protocoles est utilisé pour l'ENVOI de mails ?", options: ["IMAP", "POP3", "SMTP", "FTP"], answer: 2, explication: "SMTP (Simple Mail Transfer Protocol) est le protocole utilisé pour envoyer des emails depuis un client de messagerie vers un serveur." },
  { id: 12, cours: "Cours 3 – Travail collaboratif", question: "Quelle est la différence principale entre IMAP et POP3 ?", options: ["IMAP envoie les mails, POP3 les reçoit", "IMAP garde les mails sur le serveur (accès partout), POP3 les télécharge et les supprime", "POP3 est plus sécurisé qu'IMAP", "Il n'y a aucune différence"], answer: 1, explication: "IMAP conserve les mails sur le serveur (accessible partout). POP3 télécharge les mails localement et les supprime du serveur." },
  { id: 13, cours: "Cours 3 – Travail collaboratif", question: "Dans un email, à quoi sert le champ 'Cci' ?", options: ["Envoyer aux destinataires principaux", "Mettre en copie visible tous les destinataires", "Mettre en copie cachée, l'adresse reste invisible des autres", "Transférer automatiquement le mail"], answer: 2, explication: "Le champ Cci (BCC) permet d'envoyer une copie à quelqu'un sans que les autres destinataires voient son adresse email." },
  { id: 14, cours: "Cours 3 – Travail collaboratif", question: "Quelles sont les 4 caractéristiques clés du travail collaboratif ?", options: ["Compétition, vitesse, autonomie, isolement", "Communication, coopération, coordination, interdépendance", "Hiérarchie, contrôle, délégation, évaluation", "Planification, exécution, vérification, clôture"], answer: 1, explication: "Le travail collaboratif repose sur : la communication, la coopération, la coordination et l'interdépendance entre les membres." },
  { id: 15, cours: "Cours 4 – Sécurité & RGPD", question: "Quand le RGPD est-il entré en application ?", options: ["25 mai 2016", "25 mai 2018", "1er janvier 2020", "25 mai 2022"], answer: 1, explication: "Le RGPD est entré en application le 25 mai 2018 dans toute l'Union Européenne." },
  { id: 16, cours: "Cours 4 – Sécurité & RGPD", question: "Lequel de ces éléments EST une donnée personnelle au sens du RGPD ?", options: ["La couleur préférée d'un inconnu", "Une adresse IP", "Le chiffre d'affaires d'une entreprise", "La météo d'une ville"], answer: 1, explication: "Une adresse IP est une donnée personnelle car elle peut permettre d'identifier une personne physique. Même une donnée pseudonymisée peut rester personnelle." },
  { id: 17, cours: "Cours 4 – Sécurité & RGPD", question: "Quel est le rôle du DPO ?", options: ["Développer des logiciels de sécurité", "Délégué à la Protection des Données, il veille à la conformité RGPD", "Responsable du marketing digital", "Directeur des achats informatiques"], answer: 1, explication: "Le DPO (Délégué à la Protection des Données) s'assure que l'organisation respecte le RGPD dans tous ses traitements de données." },
  { id: 18, cours: "Cours 4 – Sécurité & RGPD", question: "Délai maximum pour notifier la CNIL en cas de violation de données ?", options: ["24 heures", "48 heures", "72 heures", "7 jours"], answer: 2, explication: "En cas de violation présentant un risque, le responsable de traitement doit notifier la CNIL dans un délai de 72 heures." },
  { id: 19, cours: "Cours 4 – Sécurité & RGPD", question: "Quelle est la sanction maximale prévue par le RGPD ?", options: ["1M€ ou 1% du CA mondial", "10M€ ou 2% du CA mondial", "20M€ ou 4% du CA mondial", "50M€ ou 10% du CA mondial"], answer: 2, explication: "Le RGPD prévoit des sanctions jusqu'à 20 000 000€ ou 4% du chiffre d'affaires mondial annuel (le montant le plus élevé)." },
  { id: 20, cours: "Cours 4 – Sécurité & RGPD", question: "Laquelle de ces pratiques est NON conforme au RGPD ?", options: ["Chiffrer les données avec AES-256", "Activer le MFA pour les administrateurs", "Stocker les mots de passe en clair", "Signer un contrat avec un prestataire cloud certifié"], answer: 2, explication: "Stocker des mots de passe en clair est une grave violation du principe d'intégrité et confidentialité du RGPD." },
  { id: 21, cours: "Cours 4 – Sécurité & RGPD", question: "Que dit le principe de 'minimisation des données' ?", options: ["Supprimer les données après 1 an", "Collecter le maximum pour mieux cibler", "Ne collecter que les données strictement nécessaires", "Anonymiser toutes les données avant traitement"], answer: 2, explication: "La minimisation impose de ne collecter que le strict nécessaire. Si seule l'année de naissance est utile, inutile de collecter le jour et le mois." },
  { id: 22, cours: "Cours 4 – Sécurité & RGPD", question: "Combien de principes fondamentaux compose le RGPD ?", options: ["5", "6", "7", "9"], answer: 2, explication: "Le RGPD repose sur 7 principes : Licéité/loyauté/transparence, Limitation des finalités, Minimisation, Exactitude, Limitation de conservation, Intégrité/confidentialité, Accountability." },
  { id: 23, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "Quelle part des émissions mondiales de CO₂ le numérique représente-t-il ?", options: ["1%", "2%", "4%", "10%"], answer: 2, explication: "Le numérique représente environ 4% des émissions mondiales de CO₂. Les data centers et l'entraînement de grands modèles d'IA sont particulièrement énergivores." },
  { id: 24, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "Quel type de système IA est INTERDIT en Europe selon l'AI Act ?", options: ["Les chatbots", "La recommandation musicale", "La notation sociale à la chinoise et la reconnaissance faciale en temps réel dans l'espace public", "L'attribution automatique de crédits bancaires"], answer: 2, explication: "L'AI Act interdit : notation sociale, manipulation cognitive subliminale, exploitation de populations vulnérables, reconnaissance faciale en temps réel dans l'espace public." },
  { id: 25, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "Un système IA de recrutement automatisé est classé dans quelle catégorie de risque ?", options: ["Risque minimal", "Risque limité", "Risque élevé", "Risque inacceptable"], answer: 2, explication: "Le recrutement automatisé est 'risque élevé' : autorisé mais fortement réglementé (audit, documentation, traçabilité, supervision humaine)." },
  { id: 26, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "Quelle est l'obligation principale pour les IA à 'risque limité' (chatbots, deepfakes) ?", options: ["Être interdit dans l'UE", "Obtenir un audit annuel", "Informer l'utilisateur qu'il interagit avec une IA", "Aucune obligation"], answer: 2, explication: "Pour les systèmes à risque limité, l'obligation est la transparence : informer que l'on interagit avec une IA ou que le contenu est généré artificiellement." },
  { id: 27, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "Qu'est-ce qu'un biais algorithmique ?", options: ["Une erreur de programmation dans le code", "Une distorsion systématique dans les données conduisant à des résultats inéquitables", "Un manque de puissance de calcul", "Une fonctionnalité d'accélération du traitement"], answer: 1, explication: "Un biais est une distorsion systématique dans les données ou le modèle. Ex : recrutement favorisant un genre, reconnaissance faciale moins précise selon la couleur de peau." },
  { id: 28, cours: "Cours 5 – IA Éthique & Numérique Responsable", question: "L'AI Act européen a été adopté en quelle année ?", options: ["2022", "2023", "2024", "2025"], answer: 2, explication: "L'AI Act a été adopté par l'UE en 2024. C'est le premier cadre juridique complet sur l'IA, basé sur une approche par niveau de risque." }
];

const COURS_META = {
  "Cours 1 – La Certification PIX": { emoji: "🏆", color: "#6366f1" },
  "Cours 2 – Recherche d'information": { emoji: "🔍", color: "#06b6d4" },
  "Cours 3 – Travail collaboratif": { emoji: "🤝", color: "#10b981" },
  "Cours 4 – Sécurité & RGPD": { emoji: "🔒", color: "#f59e0b" },
  "Cours 5 – IA Éthique & Numérique Responsable": { emoji: "🤖", color: "#ec4899" }
};

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

export default function Quiz() {
  const [qs, setQs] = useState([]);
  const [cur, setCur] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongs, setWrongs] = useState([]);
  const [done, setDone] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(null);
  const [anim, setAnim] = useState(true);

  useEffect(() => { setQs(shuffle(questions)); }, []);

  if (!qs.length) return null;

  const q = qs[cur];
  const meta = COURS_META[q?.cours] || { emoji: "📚", color: "#6366f1" };
  const pct = Math.round((score / qs.length) * 100);

  function pick(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore(s => s + 1);
    else setWrongs(w => [...w, { ...q, chosen: i }]);
  }

  function next() {
    if (cur + 1 >= qs.length) { setDone(true); return; }
    setAnim(false);
    setTimeout(() => { setCur(c => c + 1); setSelected(null); setAnim(true); }, 200);
  }

  function restart() {
    setQs(shuffle(questions)); setCur(0); setSelected(null);
    setScore(0); setWrongs([]); setDone(false); setReviewIdx(null); setAnim(true);
  }

  // REVIEW MODE
  if (done && reviewIdx !== null) {
    const rq = wrongs[reviewIdx];
    const rm = COURS_META[rq.cours] || { emoji: "📚", color: "#6366f1" };
    return (
      <div style={S.page}>
        <div style={S.card}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
            <span style={{ ...S.badge, background:"#450a0a", color:"#fca5a5" }}>📝 Révision erreurs</span>
            <span style={{ color:"#64748b", fontSize:13, fontWeight:700 }}>{reviewIdx+1} / {wrongs.length}</span>
          </div>
          <div style={{ ...S.badge, background: rm.color+"22", color: rm.color, marginBottom:16 }}>{rm.emoji} {rq.cours}</div>
          <div style={S.qtext}>{rq.question}</div>
          {rq.options.map((opt, i) => {
            let st = { ...S.opt };
            if (i === rq.answer) st = { ...st, background:"#14532d", border:"1.5px solid #22c55e", color:"#86efac" };
            else if (i === rq.chosen) st = { ...st, background:"#450a0a", border:"1.5px solid #ef4444", color:"#fca5a5" };
            return (
              <div key={i} style={st}>
                <span style={S.letter}>{["A","B","C","D"][i]}</span>
                <span style={{ flex:1 }}>{opt}</span>
                {i === rq.answer && <span>✅</span>}
                {i === rq.chosen && i !== rq.answer && <span>❌</span>}
              </div>
            );
          })}
          <div style={S.explainer}>💡 {rq.explication}</div>
          <div style={{ display:"flex", gap:10, marginTop:16 }}>
            {reviewIdx > 0 && <button style={S.btnSec} onClick={() => setReviewIdx(r => r-1)}>← Préc.</button>}
            {reviewIdx+1 < wrongs.length
              ? <button style={S.btn} onClick={() => setReviewIdx(r => r+1)}>Suivant →</button>
              : <button style={S.btn} onClick={() => setReviewIdx(null)}>← Résultats</button>}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS
  if (done) {
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📖";
    const msg = pct >= 80 ? "Excellent !" : pct >= 60 ? "Bien joué !" : "Continue à réviser !";
    const col = pct >= 80 ? "#22c55e" : pct >= 60 ? "#f59e0b" : "#ef4444";
    return (
      <div style={S.page}>
        <div style={{ ...S.card, textAlign:"center" }}>
          <div style={{ fontSize:60, marginBottom:8 }}>{emoji}</div>
          <div style={{ fontSize:24, fontWeight:900, color:"#f1f5f9" }}>Quiz terminé !</div>
          <div style={{ fontSize:64, fontWeight:900, color:col, margin:"12px 0 4px" }}>{pct}%</div>
          <div style={{ fontSize:18, fontWeight:700, color:col, marginBottom:6 }}>{msg}</div>
          <div style={{ fontSize:14, color:"#64748b", marginBottom:24 }}>{score} / {qs.length} bonnes réponses</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:24 }}>
            {Object.entries(COURS_META).map(([cours, m]) => {
              const total = qs.filter(q => q.cours === cours).length;
              const ok = total - wrongs.filter(w => w.cours === cours).length;
              const c = ok === total ? "#22c55e" : ok >= total/2 ? "#f59e0b" : "#ef4444";
              return (
                <div key={cours} style={{ background:"#1e293b", borderRadius:12, padding:"10px 12px", textAlign:"left" }}>
                  <div style={{ fontSize:13, color:"#64748b" }}>{m.emoji} {cours.replace(/Cours \d+ – /, "")}</div>
                  <div style={{ fontSize:20, fontWeight:900, color:c, marginTop:4 }}>{ok}/{total}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <button style={{ ...S.btn, flex:1 }} onClick={restart}>🔄 Recommencer</button>
            {wrongs.length > 0 && (
              <button style={{ ...S.btnSec, flex:1 }} onClick={() => setReviewIdx(0)}>
                📝 Revoir {wrongs.length} erreur{wrongs.length > 1 ? "s" : ""}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // QUIZ
  const progress = (cur / qs.length) * 100;
  return (
    <div style={S.page}>
      <div style={{ ...S.card, opacity: anim ? 1 : 0, transform: anim ? "translateY(0)" : "translateY(12px)", transition:"all 0.2s ease" }}>
        {/* Progress */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <div style={{ flex:1, height:6, background:"#1e293b", borderRadius:99, overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${progress}%`, background:`linear-gradient(90deg, ${meta.color}, ${meta.color}99)`, borderRadius:99, transition:"width 0.4s ease" }} />
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:meta.color, whiteSpace:"nowrap" }}>{cur+1}/{qs.length}</span>
          <span style={{ fontSize:12, fontWeight:700, color:"#a78bfa", background:"#1e293b", padding:"3px 10px", borderRadius:99 }}>⭐ {score}</span>
        </div>
        {/* Cours badge */}
        <div style={{ ...S.badge, background: meta.color+"22", color: meta.color, marginBottom:14 }}>
          {meta.emoji} {q.cours}
        </div>
        {/* Question */}
        <div style={S.qtext}>{q.question}</div>
        {/* Options */}
        <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
          {q.options.map((opt, i) => {
            let st = { ...S.opt, cursor: selected === null ? "pointer" : "default" };
            if (selected !== null) {
              if (i === q.answer) st = { ...st, background:"#14532d", border:"1.5px solid #22c55e", color:"#86efac" };
              else if (i === selected) st = { ...st, background:"#450a0a", border:"1.5px solid #ef4444", color:"#fca5a5" };
            } else {
              st = { ...st, ":hover": { background:"#1e293b" } };
            }
            return (
              <div key={i} style={st} onClick={() => pick(i)}
                onMouseEnter={e => { if (selected === null) e.currentTarget.style.background="#1e293b"; e.currentTarget.style.borderColor=meta.color+"66"; }}
                onMouseLeave={e => { if (selected === null) { e.currentTarget.style.background="#16213e"; e.currentTarget.style.borderColor="#334155"; }}}
              >
                <span style={{ ...S.letter, background: selected !== null && i === q.answer ? "#22c55e22" : "#0f172a", color: selected !== null && i === q.answer ? "#22c55e" : "#64748b" }}>{["A","B","C","D"][i]}</span>
                <span style={{ flex:1 }}>{opt}</span>
                {selected !== null && i === q.answer && <span>✅</span>}
                {selected !== null && i === selected && i !== q.answer && <span>❌</span>}
              </div>
            );
          })}
        </div>
        {/* Explication */}
        {selected !== null && (
          <div style={{ ...S.explainer, borderColor: selected === q.answer ? "#22c55e44" : "#ef444444" }}>
            {selected === q.answer ? "✅ Bonne réponse ! " : "❌ Raté. "}
            💡 {q.explication}
          </div>
        )}
        {selected !== null && (
          <button style={{ ...S.btn, marginTop:14, background:`linear-gradient(135deg, ${meta.color}, ${meta.color}99)` }} onClick={next}>
            {cur+1 >= qs.length ? "Voir les résultats 🏁" : "Question suivante →"}
          </button>
        )}
      </div>
    </div>
  );
}

const S = {
  page: { minHeight:"100vh", background:"linear-gradient(135deg,#0a0f1e,#0f172a,#0a0f1e)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px 16px", fontFamily:"'Georgia',serif" },
  card: { background:"#0d1526", border:"1px solid #1e293b", borderRadius:20, padding:"28px 24px", maxWidth:620, width:"100%", boxShadow:"0 30px 80px rgba(0,0,0,0.7)" },
  badge: { display:"inline-block", fontSize:11, fontWeight:800, padding:"5px 14px", borderRadius:99, letterSpacing:"0.04em" },
  qtext: { color:"#f1f5f9", fontSize:17, fontWeight:700, lineHeight:1.55, margin:"0 0 18px" },
  opt: { display:"flex", alignItems:"center", gap:12, padding:"13px 15px", borderRadius:12, fontSize:14, lineHeight:1.4, background:"#16213e", border:"1.5px solid #334155", color:"#cbd5e1", transition:"all 0.15s ease" },
  letter: { minWidth:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:900, flexShrink:0 },
  explainer: { marginTop:14, background:"#1e293b", border:"1px solid #334155", borderRadius:12, padding:"13px 15px", color:"#94a3b8", fontSize:13, lineHeight:1.6 },
  btn: { background:"linear-gradient(135deg,#6366f1,#8b5cf6)", color:"#fff", border:"none", borderRadius:12, padding:"13px 20px", fontSize:14, fontWeight:700, cursor:"pointer", width:"100%", fontFamily:"Georgia,serif" },
  btnSec: { background:"#1e293b", color:"#a78bfa", border:"1px solid #334155", borderRadius:12, padding:"13px 20px", fontSize:14, fontWeight:700, cursor:"pointer", flex:1, fontFamily:"Georgia,serif" }
};