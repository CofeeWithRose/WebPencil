
export type RouteConfig = { path: string,  children?:RouteConfig[] }
export const routeConfig: RouteConfig[] =  [
	{
		path: 'paint',
	},
	{
		path: 'home',
	}

]