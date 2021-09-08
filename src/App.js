import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import News from './views/News';
import NotFound from './views/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/news/:new_id" component={News} />
                <Route exact path="/news" component={News} />
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;