import React, { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppStyle, AppTheme } from './themesAndStyles'
import FocusLock from 'react-focus-lock'
import { useOnClickOutside } from './hooks/Hooks'
import { Burger } from './components/molecules'
import { Menu } from './components/compounds'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { Home, AmazingWorldOfVi, Shell  } from './components/organisms'

function App() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    useOnClickOutside(node, () => setOpen(false));
    return (
        <Router>
            <ThemeProvider theme={AppTheme}>
                <>
                    <AppStyle />
                    <div ref={node}>
                        <FocusLock disabled={!open}>
                            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                            <Menu open={open} setOpen={setOpen} id={menuId} />
                        </FocusLock>
                    </div>
                </>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/shell">
                        <Shell/>
                    </Route>
                    <Route exact path="/vim">
                        <AmazingWorldOfVi />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
