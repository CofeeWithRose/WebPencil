import {GE, InitConfigInterface} from 'ecs-ge'
import { FPS_CONFIG } from './systems/FPS'
import { GAME_OBJ_CONFIG } from './systems/game-obj'
import { TASK_CONFIG } from './systems/Task/TaskConfig'

const createConfig = (): InitConfigInterface => ({
	managerInfoArray: [
		TASK_CONFIG,
		GAME_OBJ_CONFIG,
		FPS_CONFIG,
	],
})
export const ecs = new GE(createConfig()) 
ecs.start()