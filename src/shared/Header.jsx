import { hot } from 'react-hot-loader/root'
import React from 'react'

function HeaderComponent() {
    return (
        <header>
            <h1>Hello world</h1>
        </header>
    )
}

export const Header = hot(HeaderComponent)