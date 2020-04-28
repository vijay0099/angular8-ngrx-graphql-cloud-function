# Nx Monorepo

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

---

## Nx workspace

- **_Firebase multi-site hosting configuration_**

- **_Multi environment deployment configuration_**

- **_Google Cloud Functions support_**

- **_Electron support_**

---

### Installation

```bash
npm run setup
```

### Usage

#### Working with Angular

```bash
npm run serve:admin-app                             # developer server on port 4201
npm run serve:client-app                            # developer server on port 4202
npm run serve:all
```

```bash
npm run build:admin-app                             # build dist/apps/admin/
npm run build:client-app                            # build dist/apps/client/
npm run build:all
```

```bash
ng test admin-app                                   # Jest unit tests
ng test client-app                                  # Jest unit tests
ng test                                             # test all

ng e2e admin-e2e-app                                # Cypress e2e tests
ng e2e client-e2e-app                               # Cypress e2e tests
ng e2e                                              # 2e2 tests all
```

```bash
ng lint admin-app
ng lint client-app
ng lint                                             # lint all
```

#### Working with Firebase Functions Locally

```bash
npm run build:functions                     # build dist/apps/functions/
npm run firebase:serve                      # developer server on port 5000
npm run firebase:shell                      # firebase shell
```

#### Working with Dependency graph

```bash
# dependency graph:
nx dep-graph
```

#### Working with Affected

```bash
# scripts for affected apps
nx affected:dep-graph
nx affected:apps
nx affected:libs
nx affected:build
nx affected:e2e
nx affected:test
nx affected:lint
```

---

#### Deployment Scripts

##### Firebase Setup

```bash
# Install firebase cli globally
> npm i -g firebase-tools
```

##### Make sure that you are logged in corresponding Firebase project

```bash
# Check status and list projects
> firebase projects:list

# or
> firebase login

```

##### Firebase Staging Environment

```bash
# Staging/development environment = "ngo"
# Login into "ngo" project in order to deploy stuff.

npm run firebase.deploy.hosting.staging.admin-app                     # deploy admin-app
npm run firebase.deploy.hosting.staging.client-app                    # deploy client-app
npm run firebase.deploy.hosting.staging.functions                     # deploy Google Cloud Functions
npm run firebase.deploy.staging.all                                   # deploy all
```

##### Firebase Production Environment

```bash
# Production environment = "littledragon-47e49"
# Login into "littledragon-47e49" project in order to deploy stuff.

npm run firebase.deploy.hosting.production.admin-app                  # deploy admin-app
npm run firebase.deploy.hosting.production.client-app                 # deploy client-app
npm run firebase.deploy.hosting.production.functions                  # deploy Google Cloud Functions
npm run firebase.deploy.production.all                                # deploy all
```

---

#### Shared libraries

The goal of a code-sharing strategy is to support the architecture where a single codebase can be utilized by multiple applications.

1. **Organize libraries into shallow folder structure**

2. **Code sharing rules:**

   - Ask the question: Can this code be shared between apps?
   - To boost productivity utilize **Angular Console** (VSCode addon).

---

#### Code scaffolding examples

```bash
# Generate Angular component
ng generate @nrwl/angular:component --help
ng generate @nrwl/angular:component example --project=admin-app --export --dryRun
```

```bash
# Generate Angular library
ng g @nrwl/angular:library users --unit-test-runner=jest --directory=navigation --routing --lazy --parent-module=apps/admin/src/app/app.module.ts --style=none --prefix=common --dryRun
```

```bash
# Generate Typescript library
ng g @nrwl/workspace:library models --unit-test-runner=none --directory=shared-data-access --dryRun
```

```bash
# Generate shareable library
ng generate @nrwl/workspace:library --name=services --no-interactive --dryRun

# Generate Angular service
ng generate @nrwl/angular:service --name=children --project=services --dryRun
```

_Explore examples from_ "**/tools/scaffolding/**" _directory_ **or** _use_ [Angular Console](https://angularconsole.com/) _for Visual Studio Code as a code scaffolding tool_.

---

### Nx Resources

#### Official Documentation

- [Getting Started](https://nx.dev/angular/getting-started/what-is-nx)

- [Nx](https://nx.dev/angular)

- [Nx Playbook](https://nxplaybook.com/)

- [NPM @nrwl/nx](https://www.npmjs.com/package/@nrwl/nx)

#### Articles & Guides & Tutorials

- [How to organize and name applications and libraries in an Nx monorepo for immediate team-wide benefits](https://medium.com/showpad-engineering/how-to-organize-and-name-applications-and-libraries-in-an-nx-monorepo-for-immediate-team-wide-9876510dbe28)

#### Videos

- [Nx - Extensible Dev Tools for Monorepos](https://www.youtube.com/watch?v=XZpp52IqD2A&t=1s)

- [Build enterprise applications with angular](https://www.youtube.com/watch?v=jltB_H2aNK8)

#### Community / Forums

- [Nx/comunity](https://gitter.im/nrwl-nx/community?at=5d9bfa123220922ffb49d07f)

---

##### Fixes

- **serialize-javascript**
  Problem with dependency resolution. Use this temporary solution prior to installing dependencies.

  - [x] solved

  https://github.com/angular/angular-cli/issues/16414

- **firebase deploy functions failure**

  - [x] solved

  Package.json field "engines": 10

- **ng test failure**

  - [x] solved

  Downgraded "jest-preset-angular": "^8.0.0" > "jest-preset-angular": "^7.1.1".

- **tsconfig path resolution**

  - [x] solved

  https://stackoverflow.com/questions/52092618/how-to-find-the-reason-of-cannot-find-module-for-nrwl-modules
