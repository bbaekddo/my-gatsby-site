import * as React from 'react';
import { Link } from 'gatsby';

const Layout = (props: any) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout