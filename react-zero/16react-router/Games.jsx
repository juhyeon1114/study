import React, { memo } from 'react';
import { BrowserRouter, HashRouter, Link, Route} from 'react-router-dom';
import Hello from './Hello';
import World from './World';
import DynamicRouter from './DynamicRouter';

const Games = memo(() => {

    return (
        <div>
            <h1>hello</h1>
            
            <HashRouter>
                <div>
                    <Link to="/hello">Hello</Link>
                    &nbsp;
                    <Link to="/world">World</Link>
                    &nbsp;
                    <Link to="/dynamic-router/hi">DynamicRouter1</Link>
                    &nbsp;
                    <Link to="/dynamic-router/hello">DynamicRouter2</Link>
                </div>
                <div>
                    <Route path="/hello" component={Hello} />
                    <Route path="/world" component={World} />
                    <Route path="/dynamic-router/:name" component={DynamicRouter} />
                </div>
            </HashRouter>
        </div>
    )
});

export default Games;