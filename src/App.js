import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import Today from './components/Today'
import Tomorrow from './components/Tomorrow'
import Week from './components/Week'
import City from './components/City'
import { useScript } from './hooks/useScript'

const App = () => {
    const status = useScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
    )

    return (
        <div className='App'>
            {status === 'ready' && (
                <Router>
                    <Switch>
                        <Route path='/today' exact>
                            <Today />
                        </Route>
                        <Route path='/tomorrow' exact>
                            <Tomorrow />
                        </Route>
                        <Route path='/week' exact>
                            <Week />
                        </Route>
                        <Route path='/location/:city?'>
                            <City />
                        </Route>
                        <Route path='/' exact>
                            <Main />
                        </Route>
                    </Switch>
                </Router>
            )}
        </div>
    )
}

export default App
