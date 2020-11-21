import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import utilities from '../../../../helpers/utilities';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { validMail } from '../../../../config/constants';
import TextField from '../textField';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
import { Buttons } from '../../../commons';
interface ILogin {
    name: string;
    lastName: string;
    email: string;
}
enum FieldTypes {
    TEXT = 'TEXT',
    PICKER = 'PICKER',
    CHECKBOX = 'CHECKBOX'
}
const _styles = getComponentStyle(styles);
const formFieldsProps: any = {
    name: {
        type: FieldTypes.TEXT,
        validation: (data: string) => data.length > 2,
        label: 'Name',
        errorLabel: 'Place a valid name'
    },
    lastName: {
        type: FieldTypes.TEXT,
        validation: (data: string) => data.length > 3,
        label: 'Lastname',
        errorLabel: 'Place a valid lastname'
    },
    email: {
        type: FieldTypes.TEXT,
        validation: (data: string | any) => {
            return validMail.test(data)
        },
        label: 'Mail',
        errorLabel: 'Place a valid mail'
    }
}
const formValues: ILogin = {
    name: '',
    lastName: '',
    email: ''
};
const inputHandler =
    (type = 'DEFAULT', handleChange = Function, handleBlur: Function,
        values = null, fieldId = '', handlerErrors: Function, label = '') => {
        const handler: any = {
            [FieldTypes.TEXT]: <TextField
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                fieldId={fieldId}
                handlerErrors={handlerErrors} label={label} />,
            ['DEFAULT']: <TextField
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                fieldId={fieldId}
                handlerErrors={handlerErrors} />
        }
        return handler[type];
    }

const Form = () => {
    const initialFormErrors: { [key: string]: string } = {};
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const setErrors = (values: any, fieldId: string) => {
        const { validation = null, errorLabel = null } = { ...formFieldsProps[fieldId] };
        const validate: boolean = !!validation ? validation(values[fieldId] || '') : false;
        const errorValue = !validate ? errorLabel : null;
        setFormErrors({ ...formErrors, [fieldId]: errorValue })
    }
    const renderInputFields = (handleChange: any, handleBlur: any, values: any) => {
        const _values: string[] = Object.keys(values);
        return (
            <>
                {
                    utilities.arrayHasItems(_values) && _values.map((fieldId: string, index: number) => {
                        const { type = 'DEFAULT', label = '' } = { ...formFieldsProps[fieldId] };
                        const validationError = formErrors[fieldId] || null

                        return (
                            <View key={index} style={_styles.containerInput}>
                                {inputHandler(type, handleChange, handleBlur, values, fieldId, setErrors, label)}
                                {!!validationError && <Text>{validationError}</Text>}
                            </View>
                        )
                    })
                }
            </>);
    }
    return (
        <Formik
            initialValues={formValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }: any) =>
                (
                    <>
                        {renderInputFields(handleChange, handleBlur, values)}
                        <Buttons.Raised action={handleSubmit} >
                            <Text>{'Login'}</Text>
                        </Buttons.Raised>
                    </>
                )}
        </Formik >

    )
}
export default Form;