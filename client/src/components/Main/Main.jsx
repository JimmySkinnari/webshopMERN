import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../Login/Login'
import ProductList from '../Product/ProductList'
import MyAccount from '../MyAccount/MyAccouint'
import Purchase from '../Purchase/Purchase'
import SignUp from '../SignUp/SignUp'
import { LoginContext } from '../../contexts/LoginContextProvider'

const Main = () => {

    const { isUserLoggedIn } = useContext(LoginContext)

    return (
        <Switch>
            {isUserLoggedIn ? (<Route exact path='/' component={ProductList}></Route>) : (
                <Route exact path='/' component={Login}></Route>
            )}
            <Route path='/account' component={MyAccount}></Route>
            <Route path='/purchase' component={Purchase}></Route>
            <Route path='/signup' component={SignUp}></Route>
        </Switch>
    )
}

export default Main
