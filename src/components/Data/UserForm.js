const UserForm = ({ user, handleSumbit, handleChange }) => (
    <form onSubmit={ handleSumbit }>
        <input
            placeholder="Full Name"
            value= { user.name }
            name="name"

    </form>
);

export default UserForm;