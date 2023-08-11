import * as React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {
    container,
    siteTitle,
} from '/src/components/layout.module.css';

const Layout = (props: any) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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