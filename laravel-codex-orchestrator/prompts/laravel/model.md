Implemente a camada de modelo para {{projectName}} (Laravel API de tarefas).

Crie/ajuste:
- app/Models/Task.php
- database/factories/TaskFactory.php

Regras do model:
- fillable: title, description, status, due_date
- casts: due_date => date

Regras da factory:
- gerar title válido
- description opcional
- status padrão pending (ou alternar entre pending/done se útil para testes)
- due_date opcional

Ao final:
- resuma o que foi criado
- não altere controllers, requests ou services