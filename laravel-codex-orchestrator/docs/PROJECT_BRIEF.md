# Project Brief — TaskFlow API

## Objetivo
Criar uma API REST simples para gerenciamento de tarefas (CRUD) em Laravel.

## Escopo inicial (MVP)
- Criar tarefa
- Listar tarefas
- Ver tarefa por ID
- Atualizar tarefa
- Alternar status (pending/done)
- Excluir tarefa

## Regras de negócio
- `title` é obrigatório e deve ter entre 3 e 120 caracteres
- `description` é opcional
- `status` inicia como `pending`
- `due_date` é opcional e deve ser uma data válida
- Endpoint de toggle deve alternar entre `pending` e `done`

## Critérios de aceitação
- API responde JSON padronizado
- Validação com FormRequest
- Testes de feature para CRUD
- Código organizado em Controller + Service + Repository