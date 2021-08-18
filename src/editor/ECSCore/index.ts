import {GE, InitConfigInterface} from 'ecs-ge'
import TaskManager from 'ecs-ge/lib/managers/task/implemet/TaskManager'
import { taskConig } from './TaskConfig'
import GameObjectManager from 'ecs-ge/lib/managers/gameobject/implement/GameObjectManager'
import Fps from 'ecs-ge/lib/managers/Fps'
import { ManagerInfo } from 'ecs-ge/lib/core/interface/InitConfigInterface'

export const createConfig = (): InitConfigInterface => ({
	managerInfoArray: [
		{
			manager: TaskManager,
			config: taskConig,
		},
		// {
		//     manager: TimerManager,
		//     config: {},
		// },
		// {
		// 	manager: InputManager,
		// 	config: {},
		// },
		{
			manager: GameObjectManager,
			config: {},
		},
		// {
		// 	manager: HitTester,
		// 	config: hitGroup,
		// },
		// {
		// 	manager: Renderer,
		// 	config: { canvas, maxSize: 25000 },
		// },
		{
			manager: Fps,
			config: {}
		} as ManagerInfo<typeof Fps>
	],
})
export const system = new GE(createConfig()) 