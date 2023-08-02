import * as React from 'react';
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout pageTitle='About Me'>
            <p>I made this!!!</p>
        </Layout>
    );
}

export const Head = () => <title>About Me</title>

export default About
