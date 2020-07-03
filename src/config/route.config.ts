
export type RouteConfig = { path: string,  children?:RouteConfig[] }
export const routeConfig: RouteConfig[] =  [
	{
		path: 'paint',
	},
	{
		path: 'home',
	},
  
	

]
if(process.env.BUILD_ENV === 'development'){
	routeConfig.push({
		path: 'brushtest',
	})
}
