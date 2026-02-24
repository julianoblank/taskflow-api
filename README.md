# Laravel Codex Orchestrator

Orquestrador em **Node.js** para executar **agentes de IA (Codex CLI)** em sequência e gerar/estruturar um projeto **Laravel** passo a passo.

O objetivo deste projeto é **automatizar tarefas repetitivas** (planejamento, migration, model, repository, service, requests, controller, testes, docs e revisão), mantendo uma arquitetura organizada e fácil de evoluir.

---

## O que este projeto faz

Este projeto:

- Lê um arquivo de configuração (`tasks/*.json`)
- Define um **pipeline de etapas** (ex.: `planner -> database -> model -> ...`)
- Chama agentes `.js` (um por responsabilidade)
- Cada agente monta um prompt e executa o **Codex CLI** (`codex exec`)
- Salva logs por etapa em `.logs/`
- Interrompe a execução se alguma etapa falhar

### Exemplo de pipeline (Laravel API de tarefas)
- `planner`
- `database`
- `model`
- `repository`
- `service`
- `request`
- `controller`
- `tests`
- `docs`
- `review`

---

## Para que serve na prática

Esse projeto ajuda a:

- Criar projetos Laravel com padrão consistente
- Separar responsabilidades (camadas e etapas)
- Reaproveitar prompts e pipelines
- Aprender arquitetura + automação com IA
- Escalar para múltiplos projetos trocando só o `task.json`

---

## Arquitetura resumida

- **`src/index.js`** → Orquestrador principal (lê task, executa pipeline, salva logs)
- **`src/utils/codexRunner.js`** → Executa `codex exec` via terminal
- **`src/utils/fs.js`** → Leitura de JSON/texto
- **`src/utils/logger.js`** → Logs no terminal e arquivos `.logs`
- **`src/agents/*.js`** → Agentes especializados por etapa
- **`prompts/**/*.md`** → Prompts reutilizáveis por tipo de etapa
- **`tasks/*.json`** → Configuração do pipeline/projeto alvo

---

## Requisitos

Node.js 18+

Codex CLI instalado e autenticado

Projeto Laravel de destino já criado (ex.: taskflow-api)

Acesso ao terminal (Linux/macOS/WSL)

---

## Estrutura de diretórios

```text
laravel-codex-orchestrator/
├─ package.json
├─ README.md
├─ src/
│  ├─ index.js
│  ├─ utils/
│  │  ├─ codexRunner.js
│  │  ├─ fs.js
│  │  └─ logger.js
|  └─ utils/
|      ├─ codexRunner.js
|      ├─ fs.js
|      └─ logger.js
│  └─ agents/
│     ├─ baseAgent.js
│     ├─ plannerAgent.js
│     ├─ databaseAgent.js
│     ├─ modelAgent.js
│     ├─ repositoryAgent.js
│     ├─ serviceAgent.js
│     ├─ requestAgent.js
│     ├─ controllerAgent.js
│     ├─ testAgent.js
│     ├─ docsAgent.js
|     ├─ httpAgent.js
│     └─ reviewAgent.js
├─ tasks/
│  └─ taskflow-laravel.json
└─ prompts/
   ├─ shared/
   │  ├─ architectureRules.md
   │  └─ codingStyle.md
   └─ laravel/
      ├─ planner.md
      ├─ database.md
      ├─ model.md
      ├─ repository.md
      ├─ service.md
      ├─ request.md
      ├─ controller.md
      ├─ tests.md
      ├─ docs.md
      ├─ http.md
      └─ review.md
