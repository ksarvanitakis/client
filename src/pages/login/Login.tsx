import Form from "../../components/form/Form";

function LogIn() {
    return (
        <div style={{height: '70vh'}}>      
            <Form header='Login' buttonTxt='Log in' formType='signin-form' />
        </div>
    );
}

export default LogIn;