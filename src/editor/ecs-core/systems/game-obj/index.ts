import GameObjectManager from 'ecs-ge/lib/managers/gameobject/implement/GameObjectManager'
import { ManagerInfo } from 'ecs-ge/lib/core/interface/InitConfigInterface'

export const GAME_OBJ_CONFIG: ManagerInfo<any> = {
	manager: GameObjectManager,
	config: {},
}
