Implemente a camada HTTP principal da Task API.

Crie/ajuste:
- app/Http/Resources/TaskResource.php
- app/Http/Controllers/Api/TaskController.php
- routes/api.php

Endpoints:
- GET /api/tasks
- POST /api/tasks
- GET /api/tasks/{id}
- PUT /api/tasks/{id}
- PATCH /api/tasks/{id}/toggle
- DELETE /api/tasks/{id}

Requisitos:
- usar TaskService por injeção de dependência
- usar StoreTaskRequest e UpdateTaskRequest
- resposta JSON com TaskResource
- controller fino

Ao final, resuma o que foi implementado.