Implemente a camada de repositório para Task.

Crie/ajuste:
- app/Repositories/Contracts/TaskRepositoryInterface.php
- app/Repositories/EloquentTaskRepository.php
- bind no AppServiceProvider

Métodos esperados:
- paginate(int $perPage = 15)
- findByIdOrFail(int $id)
- create(array $data)
- update(Task $task, array $data)
- delete(Task $task)

Mantenha código simples, idiomático em Laravel e pronto para uso por Service.