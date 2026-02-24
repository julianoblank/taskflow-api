# AGENTS.md — Regras do projeto TaskFlow API

## Objetivo
Este repositório contém uma API Laravel simples para CRUD de tarefas.

## Padrões obrigatórios
- Controllers devem ser finos (sem regra de negócio pesada)
- Validação deve ficar em FormRequest
- Regra de negócio em Service
- Acesso a dados via Repository (interface + implementação)
- Respostas JSON devem usar API Resource
- Criar testes de feature para novos endpoints

## Estilo
- Código claro e simples
- Nomes em inglês no código
- Comentários apenas quando agregarem
- Evitar "smart code" desnecessário

## Fluxo de trabalho
1. Mostrar plano antes de editar
2. Criar alterações pequenas por etapa
3. Rodar testes relevantes
4. Resumir alterações e pontos de atenção

## Restrições
- Não adicionar autenticação neste MVP
- Não adicionar pacotes externos sem justificar