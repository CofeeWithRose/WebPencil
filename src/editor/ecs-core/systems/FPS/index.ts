import Fps from 'ecs-ge/lib/managers/Fps'
import { ManagerInfo } from 'ecs-ge/lib/core/interface/InitConfigInterface'

export const FPS_CONFIG:ManagerInfo<any> = {
	manager: Fps,
	config: {}
}