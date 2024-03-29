import Layout from "../components/Layout/layOut";
import LoginForm from "../components/LoginForm/loginForm";
import { authInitialProps } from "../lib/auth";

export default function Login(props) {
    return (
        <Layout title="Login" {...props}>
            <LoginForm />
        </Layout>
    );
}

Login.getInitialProps = authInitialProps();
