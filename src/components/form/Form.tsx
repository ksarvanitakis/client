import './Form.scss';

interface Formprops {
    header: string,
    formType: string
}

function Form({ header, formType }: Formprops) {
    return (
        <div className="form-container">
            <h1>{header}</h1>
            <form
                id={formType}
                className='form' >
                <input
                    type="text"
                    placeholder="Email address" />
                <input
                    type="password"
                    placeholder="Your password" />
            </form>
        </div>
    );
}

export default Form;