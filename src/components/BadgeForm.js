import React from 'react';

class BadgeForm extends React.Component {
    render() {

        const handleChange = e => {
            console.log({
                name: e.target.name,
                value: e.target.value});
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log('btn as click');
        }

        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={handleChange} className="form-control" type="text" name="firstName" />
                    </div>

                    <button className="btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm