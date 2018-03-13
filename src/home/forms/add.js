import React from 'react'
import { Field, reduxForm } from 'redux-form'
import selectControl from "../../common/select";
import { FormattedMessage } from "react-intl";
import './add.sass';


const AddForm = props => {
    const { handleSubmit, pristine, submitting, cmbData } = props
    return (
        <form onSubmit={handleSubmit} className='addForm'>
            <div>
                <label> <FormattedMessage id='33name'  values='name'/></label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name here"
                    />
                </div>
            </div>
            <div>
                <label>Surname</label>
                <div>
                    <Field
                        name="surname"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div>
                <label>Country</label>
                <div>
                    <Field name='country'
                        component={selectControl}
                        options={cmbData}
                        dataindex={{ id: 'name', name: 'name' }}
                    />
                </div>
            </div>

            <div>
                <label>Birthday</label>
                <div>
                    <Field name="birthdate"
                        component="input"
                        placeholder='dd/mm/yyyy'
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Save
                </button>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'AddForm'
})(AddForm)