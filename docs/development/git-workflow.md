# Git Workflow

This document defines the Git branching strategy, commit conventions, and basic development workflow for the IT Management System.

<details>
<summary>Table of Contents</summary>

- [Overview](#overview)
- [Branches](#branches)
  - [`main`](#main)
  - [Feature Branches](#feature-branches)
  - [Fix Branches](#fix-branches)
  - [Refactor Branches](#refactor-branches)
  - [Documentation Branches](#documentation-branches)
  - [Chore Branches](#chore-branches)
- [Branch Naming Rules](#branch-naming-rules)
- [Commit Convention](#commit-convention)
- [Commit Types](#commit-types)
- [Commit Examples](#commit-examples)
- [Scope](#scope)
- [Development Workflow](#development-workflow)
- [Keeping Branches Up to Date](#keeping-branches-up-to-date)
- [Merge Rules](#merge-rules)
- [Commit Guidelines](#commit-guidelines)
- [Protected Files and Sensitive Data](#protected-files-and-sensitive-data)
- [Recommended Git Commands](#recommended-git-commands)
- [Quick Reference](#quick-reference)

</details>

## Overview

The project uses a simple feature-branch workflow.

```text
main
 │
 ├── feature/*
 ├── fix/*
 ├── refactor/*
 ├── docs/*
 └── chore/*
```

The `main` branch represents the stable version of the project.

Development work should be performed in short-lived branches and merged into `main` after the changes are reviewed and verified.

---

## Branches

### `main`

The `main` branch contains stable, reviewed, and working code.

Rules:

- Do not develop directly on `main`.
- Do not commit directly to `main`.
- Changes should come through a feature, fix, or other appropriate branch.
- `main` should remain in a deployable state.

### Feature Branches

Use `feature/*` for new functionality.

Format:

```text
feature/<description>
```

Examples:

```text
feature/backend-auth
feature/asset-management
feature/inventory-management
feature/reporting
```

Example:

```bash
git checkout main
git pull
git checkout -b feature/backend-auth
```

### Fix Branches

Use `fix/*` for bug fixes.

Format:

```text
fix/<description>
```

Examples:

```text
fix/login-redirect
fix/asset-validation
fix/inventory-stock-calculation
```

### Refactor Branches

Use `refactor/*` for code restructuring that does not intentionally change functionality.

Examples:

```text
refactor/auth-store
refactor/api-client
refactor/asset-module
```

### Documentation Branches

Use `docs/*` for documentation-only changes.

Examples:

```text
docs/git-workflow
docs/auth-architecture
docs/api-documentation
```

### Chore Branches

Use `chore/*` for maintenance, tooling, configuration, and dependency-related work.

Examples:

```text
chore/update-dependencies
chore/setup-eslint
chore/setup-ci
```

---

## Branch Naming Rules

Use:

- lowercase
- hyphens between words
- a clear and concise description
- the appropriate branch prefix

Good:

```text
feature/backend-auth
feature/asset-management
fix/login-redirect
docs/git-workflow
chore/update-dependencies
```

Avoid:

```text
feature/MyNewFeature
feature/test
my-branch
john-work
changes
```

---

## Commit Convention

The project follows the Conventional Commits format:

```text
<type>(<scope>): <description>
```

Example:

```text
feat(auth): add login endpoint
```

## Commit Types

| Type | Purpose |
|---|---|
| `feat` | Add new functionality |
| `fix` | Fix a bug |
| `refactor` | Restructure code without changing behavior |
| `docs` | Documentation changes |
| `test` | Add or modify tests |
| `chore` | Maintenance and tooling |
| `perf` | Performance improvements |
| `build` | Build or dependency changes |
| `ci` | CI/CD changes |

---

## Commit Examples

### Feature

```bash
git commit -m "feat(auth): add login endpoint"
```

### Bug Fix

```bash
git commit -m "fix(auth): prevent invalid session redirect"
```

### Refactoring

```bash
git commit -m "refactor(auth): simplify session handling"
```

### Documentation

```bash
git commit -m "docs(auth): document authentication flow"
```

### Tests

```bash
git commit -m "test(auth): add login tests"
```

### Dependencies

```bash
git commit -m "chore(deps): update project dependencies"
```

---

## Scope

The scope identifies the area affected by the commit.

Common scopes include:

```text
auth
asset
inventory
employee
organization
location
category
report
user
rbac
api
ui
docs
deps
```

Example:

```text
feat(asset): add asset status history
fix(inventory): prevent stock from going below zero
feat(rbac): add permission guard
```

The scope should be concise and relevant to the change.

---

## Development Workflow

### 1. Start from `main`

Make sure the local `main` branch is up to date.

```bash
git checkout main
git pull
```

### 2. Create a Branch

Create a branch based on the type of work.

```bash
git checkout -b feature/backend-auth
```

### 3. Make Changes

Implement and test the changes locally.

Check the working tree:

```bash
git status
```

Review the changes:

```bash
git diff
```

### 4. Stage Changes

```bash
git add .
```

Review staged changes when necessary:

```bash
git diff --cached
```

### 5. Commit

Create a meaningful Conventional Commit.

```bash
git commit -m "feat(auth): add login endpoint"
```

Avoid vague commits such as:

```text
update
changes
fix
test
asdf
```

### 6. Push the Branch

```bash
git push -u origin feature/backend-auth
```

### 7. Merge into `main`

After the changes are complete and verified:

```text
feature/backend-auth
        │
        │ Pull Request / Review
        ▼
      main
```

After merging, switch back to `main`:

```bash
git checkout main
git pull
```

---

## Keeping Branches Up to Date

Before starting new work, update `main`:

```bash
git checkout main
git pull
```

Then create a new branch:

```bash
git checkout -b feature/<description>
```

For an existing branch, update it from `main` when necessary:

```bash
git checkout main
git pull

git checkout feature/<description>
git merge main
```

Resolve any conflicts, test the application, and continue development.

---

## Merge Rules

Before merging a branch into `main`:

- The feature or fix should be complete.
- The application should build successfully.
- Relevant tests should pass.
- No known breaking issues should remain.
- Commit messages should follow the project convention.
- Changes should be reviewed when working with other developers.

Avoid merging incomplete work into `main`.

---

## Commit Guidelines

A good commit should:

- represent one logical change
- use a clear description
- follow Conventional Commits
- avoid unrelated changes
- avoid committing secrets or environment files

Good:

```text
feat(asset): add asset creation form
fix(inventory): prevent stock from going below zero
docs(api): document authentication endpoints
```

Avoid combining unrelated changes:

```text
feat(asset): add asset form, update auth, fix inventory, change styling
```

Instead, separate them into logical commits.

---

## Protected Files and Sensitive Data

Never commit sensitive information such as:

```text
.env
.env.local
.env.production
```

or:

- passwords
- API keys
- access tokens
- database credentials
- private certificates
- production secrets

Use environment variables and appropriate secret-management mechanisms instead.

---

## Recommended Git Commands

### Check Status

```bash
git status
```

### View Branches

```bash
git branch
```

### Create a Branch

```bash
git checkout -b feature/<name>
```

### Switch Branch

```bash
git checkout <branch>
```

### Update `main`

```bash
git checkout main
git pull
```

### Stage Changes

```bash
git add .
```

### Commit

```bash
git commit -m "type(scope): description"
```

### Push

```bash
git push -u origin <branch>
```

### View Commit History

```bash
git log --oneline --decorate --graph
```

---

## Quick Reference

### Branches

```text
main                    Stable code

feature/<name>          New functionality
fix/<name>              Bug fixes
refactor/<name>         Code restructuring
docs/<name>             Documentation
chore/<name>            Maintenance/tooling
```

### Commits

```text
feat(scope): description
fix(scope): description
refactor(scope): description
docs(scope): description
test(scope): description
chore(scope): description
perf(scope): description
build(scope): description
ci(scope): description
```

### Standard Flow

```text
main
 ↓
Create branch
 ↓
Develop
 ↓
Test
 ↓
Commit
 ↓
Push
 ↓
Review
 ↓
Merge
 ↓
main
```
