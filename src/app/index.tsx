import React, { lazy, Suspense, ReactElement } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'
import {routeConfig, RouteConfig} from '../config/route.config'
import './index.less'
import 'antd/dist/antd.css'

export const history = createHashHistory()


const getRoute = ( config: RouteConfig[], parentPath: string, res: ReactElement<Route>[] ) => {
	config.map( config => {
		const {children, path} = config
		const curPath = `${parentPath}/${path}`
		if(children&&children.length){
			getRoute(children, curPath, res)
		}else{
			res.push(<Route key={curPath} path={curPath} component={lazy(() => import(`../pages${curPath}`))} ></Route>)
		}
	})
	return res
}

export const App: React.FC = ({ }) => {
	return <Suspense fallback={'...'} >
		<Router history={history}>
			<Switch>
				{getRoute(routeConfig, '', []) }
				<Redirect to="/paint"></Redirect>
			</Switch>
		</Router>
	</Suspense>
}
