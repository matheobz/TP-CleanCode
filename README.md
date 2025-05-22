````markdown
# TP Clean Code – Java + JUnit 5 + Maven + JaCoCo

Projet Java réalisé dans le cadre du TP d'évaluation sur le Clean Code et les tests unitaires.

## Objectifs

- Structuration du code selon les bonnes pratiques Clean Code
- Mise en place de tests unitaires avec JUnit 5
- Organisation des tests avec les tags `@Tag("regression")`, `@Tag("validation")`
- Intégration de JaCoCo pour la couverture de tests
- CI/CD via GitHub Actions ou GitLab CI

## Setup

### 1. Installer les dépendances

```bash
mvn clean install
````

### 2. Lancer les tests avec les tags

* Tests de régression uniquement :

```bash
mvn test -Djunit.jupiter.tags=regression
```

* Tous les tests :

```bash
mvn test -Djunit.jupiter.tags=regression,validation
```

## Générer le rapport JaCoCo

```bash
mvn verify
```

Le rapport sera disponible ici :
`target/site/jacoco/index.html`

## Rapport de couverture

[Voir le rapport JaCoCo](./target/site/jacoco/index.html)

## Badge de couverture (optionnel avec GitHub Actions + Codecov)

```markdown
[![codecov](https://codecov.io/gh/TON_ORG/TON_REPO/branch/main/graph/badge.svg)](https://codecov.io/gh/TON_ORG/TON_REPO)
```

## Structure du projet

```
src/
  ├── main/java/com/codesafe/...
  └── test/java/com/codesafe/...

.github/
  └── workflows/sonarcloud.yml
```

## Réalisé par

Imane Zaki & Mathéo Berrez

