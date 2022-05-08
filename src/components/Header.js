import Nav from "./Nav";
import LoginForm from "./login-form";

const Header = ({links}) =>{
    
    return (
        <header>
            <Nav links={links} />
            <LoginForm />
        </header>
    );
}

export default Header;