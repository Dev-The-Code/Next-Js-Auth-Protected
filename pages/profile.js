import Layout from "../components/Layout/layOut";
import { getUserProfile, authInitialProps } from "../lib/auth";
import React from 'react'

export default class Profile extends React.Component {
    state = {
        user: "Loading profile..."
    };

    componentDidMount() {
        getUserProfile().then(user => this.setState({ user }));
    }

    render() {
        return (
            <Layout title="Profile" {...this.props}>
                <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
            </Layout>
        );
    }
}

Profile.getInitialProps = authInitialProps();

//protected route pass value
// Profile.getInitialProps = authInitialProps(true);
