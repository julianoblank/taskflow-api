Implemente a camada HTTP da Task API.

Crie/ajuste:
- app/Http/Requests/StoreTaskRequest.php
- app/Http/Requests/UpdateTaskRequest.php
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
- validação em FormRequest
- resposta JSON via TaskResource
- controller fino