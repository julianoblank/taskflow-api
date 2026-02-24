Crie app/Services/TaskService.php usando TaskRepositoryInterface por injeção de dependência.

Métodos:
- list(int $perPage = 15)
- show(int $id)
- create(array $data)
- update(int $id, array $data)
- toggleStatus(int $id)
- delete(int $id)

Regra:
- toggleStatus alterna pending/done

Objetivo:
- manter controller fino
- centralizar regra de negócio no service