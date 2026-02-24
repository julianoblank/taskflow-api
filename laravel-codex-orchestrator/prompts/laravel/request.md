Implemente a validação HTTP da Task API.

Crie:
- app/Http/Requests/StoreTaskRequest.php
- app/Http/Requests/UpdateTaskRequest.php

Regras:
- title: obrigatório no store, string, min 3, max 120
- description: nullable|string
- status: nullable|in:pending,done (ou sometimes no update)
- due_date: nullable|date

Objetivo:
- manter controller fino
- centralizar validação em FormRequest

Ao final, resuma os arquivos criados.