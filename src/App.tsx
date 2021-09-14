import React from 'react';
import './app.scss'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {DataPage} from './components/DataPage/DataPage';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import {ContactPage} from "./components/ContactPage/ContactPage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {RegistrationPage} from "./components/RegistrationPage/RegistrationPage";
import {Footer} from "./components/Footer/Footer";
import {AuthProvider} from "./components/firebase/firebaseAuth";
import {AlertState} from "./components/alert/alertState";
import {Alert} from './components/alert/alert';

function App() {

    return (
        <div>
            <AlertState>
                <AuthProvider>
                    <HashRouter>
                        <Header/>
                        <Alert/>
                        <Switch>
                            <Route exact path='/aboutMe' component={MainPage}/>
                            <Route exact path='/data' component={DataPage}/>
                            <Route exact path='/contact' component={ContactPage}/>
                            <Route exact path='/login' component={LoginPage}/>
                            <Route exact path='/registration' component={RegistrationPage}/>
                            <Redirect to={"/aboutMe"}/>
                        </Switch>
                        <Footer/>
                    </HashRouter>
                </AuthProvider>
            </AlertState>
        </div>
    );
}

export default App;
