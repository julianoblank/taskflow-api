# Laravel Codex Orchestrator

Orquestrador em Node.js para executar agentes JS que chamam `codex exec` em um projeto Laravel.

## Requisitos
- Node.js 18+
- Codex CLI instalado e autenticado
- Projeto Laravel já criado (ex.: ../taskflow-api)

## Rodar
npm install
npm run start

## Rodar com outro task file
node src/index.js tasks/taskflow-laravel.json

## Observações
- Logs são salvos em `.logs/`
- O orquestrador usa `--skip-git-repo-check` por padrão