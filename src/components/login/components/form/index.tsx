import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import utilities from '../../../../helpers/utilities';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { validMail } from '../../../../config/constants';
import TextField from '../textField';
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
const formFieldsProps: any = {
    name: {
        type: FieldTypes.TEXT,
        validation: (data: string) => data.length > 2,
        label: 'Name'
    },
    lastName: {
        type: FieldTypes.TEXT,
        validation: (data: string) => data.length > 3,
        label: 'Lastname'
    },
    email: {
        type: FieldTypes.TEXT,
        validation: (data: string | any) => {
            return validMail.test(data)
        },
        label: 'Mail'
    }
}
const formValues: ILogin = {
    name: '',
    lastName: '',
    email: ''
};
const inputHandler = (type = 'DEFAULT', handleChange = Function, handleBlur: Function, values = null, fieldId = '') => {
    const handler: any = {
        [FieldTypes.TEXT]: <TextField
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            fieldId={fieldId} />,
        ['DEFAULT']: <TextField
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            fieldId={fieldId} />
    }
    return handler[type];
}
const renderInputFields = (handleChange: any, handleBlur: any, values: any) => {
    const _values: string[] = Object.keys(values);
    const [formErrors, setFormErrors] = useState({});
    return (
        <>
            {
                utilities.arrayHasItems(_values) && _values.map((fieldId: string, index: number) => {
                    const { type = 'DEFAULT' } = { ...formFieldsProps[fieldId] }
                    return (
                        <View key={index}>
                            {inputHandler(type, handleChange, handleBlur, values, fieldId)}
                        </View>
                    )
                })
            }
        </>);
}
const Form = () => {
    return (
        <Formik
            initialValues={formValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }: any) =>
                (
                    <>
                        {renderInputFields(handleChange, handleBlur, values)}
                        < TouchableOpacity onPress={() => handleSubmit()}>
                            <Text>{'Login'}</Text>
                        </TouchableOpacity>
                    </>
                )}
        </Formik >

    )
}
export default Form;