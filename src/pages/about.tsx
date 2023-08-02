import * as React from 'react';
import { Link } from 'gatsby'

const About = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site</p>
            <Link to='/'>Home</Link>
        </main>
    );
}

export const Head = () => <title>About Me</title>

export default About
