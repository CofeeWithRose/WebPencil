import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense, ReactElement } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'
import {routeConfig, RouteConfig} from '../config/route.config'
import './index.less'
import { Spin } from 'antd'

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

export const App: React.FC = hot(({ }) => {
	return <Suspense fallback={<Spin style={{ top:'50%', left:'50%', position: 'absolute', transform: 'translate3d(-50%, -50%, 0)' }}/>} >
		<Router history={history}>
			<Switch>
				{getRoute(routeConfig, '', []) }
				<Redirect to="/paint"></Redirect>
			</Switch>
		</Router>
	</Suspense>
})
