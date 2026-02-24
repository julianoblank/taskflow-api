Implemente a camada de banco para {{projectName}}.

Crie/ajuste:
- migration create_tasks_table

Regras da tabela tasks:
- id
- title string(120) obrigatório
- description nullable text
- status string default 'pending'
- due_date nullable date
- timestamps

Ao final:
- resuma o que foi criado
- liste comando para rodar migration
- não altere model, requests, controller ou service