# Cocktails Odyssey

Projet Nuxt réalisé dans le cadre du TP "Clean Code & Qualité logicielle" — EPSI Nantes.

## Équipe

- Mathéo Berrez
- Imane Zaki
- M. Sylla Séga (encadrant)

## Objectif du projet

Ce projet a pour objectif de mettre en place une chaîne CI/CD complète permettant de garantir la qualité et la maintenabilité du code source à travers :

- Compilation automatisée via Maven
- Analyse statique du code avec SonarCloud
- Protection de la branche `main` par Pull Request
- Ajout automatique de commentaires en cas d’échec de l’analyse
- Notification via Microsoft Teams
- Respect des conventions de code (conventional commits, clean code)

## Étapes d’installation du projet

### Prérequis

- Java 17
- Maven
- Git
- Un compte GitHub

### Installation

1. Cloner le projet :

   git clone https://github.com/ton-utilisateur/ton-repo.git  
   cd ton-repo

2. Lancer la compilation :

   mvn clean install

3. Lancer manuellement une analyse SonarCloud (optionnel) :

   mvn clean verify sonar:sonar \
    -Dsonar.projectKey=matheobz_TP-CleanCode \
    -Dsonar.organization=matheobz \
    -Dsonar.host.url=https://sonarcloud.io \
    -Dsonar.login=matheobz

## Lien vers l’analyse SonarCloud

https://sonarcloud.io/project/overview?id=matheobz_TP-CleanCode

## Intégration continue (CI/CD)

Le projet utilise GitHub Actions pour automatiser les étapes suivantes à chaque Pull Request vers `main` :

- Compilation avec Maven
- Analyse de qualité avec SonarCloud
- Commentaire automatique dans la Pull Request en cas d’échec de l’analyse
- Notification dans Microsoft Teams

Le fichier de configuration se trouve dans :  
.github/workflows/sonarcloud.yml

## Notifications Microsoft Teams

Les notifications Microsoft Teams sont activées. En cas d'échec de l'analyse SonarCloud, un message est automatiquement envoyé dans un canal Teams.

### Étapes de mise en place :

1. Ouvrir Microsoft Teams
2. Aller dans le canal souhaité > cliquer sur `...` > Connecteurs
3. Ajouter un Webhook entrant
4. Donner un nom (ex : SonarBot) et copier l'URL générée
5. Aller dans GitHub > Settings > Secrets and variables > Actions
6. Ajouter un secret :
   - Nom : TEAMS_WEBHOOK_URL
   - Valeur : l'URL du webhook Teams

### Bloc à intégrer dans le fichier `.github/workflows/sonarcloud.yml` :

```yaml
- name: Notifier Teams si échec
  if: failure()
  run: |
    curl -H 'Content-Type: application/json' -d '{
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      "summary": "Analyse SonarCloud échouée",
      "themeColor": "FF0000",
      "title": "SonarCloud",
      "text": "L’analyse a échoué sur la branche ${{ github.ref_name }}."
    }' ${{ secrets.TEAMS_WEBHOOK_URL }}
```
