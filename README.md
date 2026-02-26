# MyEngineerRoadMap

> *L’ingénierie logicielle exige plus qu’une accumulation de technologies : elle demande une vision structurée du développement, de la qualité et de la performance.

C’est dans cette logique que j’ai développé MyEngineerRoadMap, un outil interactif conçu pour piloter mon évolution vers ce métier.

Il me permet de planifier, suivre et optimiser mon apprentissage comme un projet à part entière.*

---

## Fonctionnalités

- **Arbre de compétences** organisé par domaine — Fondamentaux, Web, Mobile, DevOps, IA/Data
- **Cases à cocher** pour valider chaque compétence acquise
- **Progression globale et par domaine** mise à jour en temps réel
- **Système de niveaux** — Novice → Apprenti → Intermédiaire → Confirmé → Expert
- **Sauvegarde automatique** de la progression
- **Interface responsive** — utilisable sur desktop et mobile

---

## Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| React | Framework UI |
| TypeScript | Typage statique |
| Tailwind CSS | Styles |
| React Router | Navigation |
| Vite | Bundler |

---

## Installation et lancement

### Prérequis
- Node.js >= 18
- npm ou yarn

### Étapes

```bash
# 1. Cloner le projet
git clone https://github.com/ton-username/MyEngineerRoadMap-.git

# 2. Se placer dans le dossier
cd MyEngineerRoadMap-

# 3. Installer les dépendances
npm install

# 4. Lancer en développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

---

## Structure du projet

```
src/
├── components/
│   ├─ Header/
│   ├── SkillCategory/
│   └── SkillItem/
├── data/
│   └── skills.ts
├── context/
│   └── SkillContext.tsx
├── App.tsx
└── main.tsx
```

---

## Fonctionnalités actuelles

- [x] Arbre de compétences interactif
- [x] Système de progression par domaine
- [x] Sauvegarde de la progression

## Fonctionnalités futures
- [ ] Mode sombre / clair
- [ ] Export PDF de la progression
- [ ] Ajout de ressources (liens, cours) par compétence
- [ ] Version mobile améliorée

---

## Auteure

Développé avec ambition et méthode par **Zéïnab Aly Camara**

*Ce projet est autant un outil qu'une déclaration d'intention.*

---

## Licence

Open source — libre d'utilisation et de contribution.