import { taskConig } from 'ecs-ge/lib/configs/TaskConig'
import TaskManager from 'ecs-ge/lib/managers/task/implemet/TaskManager'
import { ManagerInfo } from 'ecs-ge/lib/core/interface/InitConfigInterface'

export const TASK_CONFIG: ManagerInfo<any> = 	{
	manager: TaskManager,
	config: taskConig,
}
