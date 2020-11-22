import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import utilities from '../../../../helpers/utilities';
import { agesRange, validMail } from '../../../../config/constants';
import TextField from '../textField';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
import { Buttons } from '../../../commons';
import PickerField, { IOption } from '../picker/index';
interface ILogin {
    name: string;
    lastName: string;
    email: string;
    ages: string;
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
    },
    ages: {
        type: FieldTypes.PICKER,
        label: 'Ages',
        errorLabel: 'Must pick your age'
    }
}
const formValues: ILogin = {
    name: '',
    lastName: '',
    email: '',
    ages: ''
};
const [start, stop] = [...agesRange];
const step = 1;
const ages = utilities.range(start, stop, step);
const agesOptions: IOption[] = ages.map((el: number) => ({ label: `${el} years`, value: el.toString() }));
const inputHandler =
    (type = 'DEFAULT', handleChange = Function, handleBlur: Function,
        values = {}, fieldId = '', handlerErrors: Function, label = '',
        setFieldValue: Function) => {
        const value = (values as any)[fieldId] || '';
        const handler: any = {
            [FieldTypes.TEXT]: <TextField
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                fieldId={fieldId}
                handlerErrors={handlerErrors} label={label} />,
            [FieldTypes.PICKER]: <PickerField
                fieldId={fieldId}
                label={label}
                options={agesOptions}
                setFieldValue={setFieldValue}
                value={value}
            />,
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
    const renderInputFields = (handleChange: any, handleBlur: any, values: any, setFieldValue: Function) => {
        const _values: string[] = Object.keys(values);
        return (
            <>
                {
                    utilities.arrayHasItems(_values) && _values.map((fieldId: string, index: number) => {
                        const { type = 'DEFAULT', label = '' } = { ...formFieldsProps[fieldId] };
                        const validationError = formErrors[fieldId] || null
                        return (
                            <View key={index} style={_styles.containerInput}>
                                {inputHandler(type, handleChange, handleBlur, values, fieldId, setErrors, label, setFieldValue)}
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
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }: any) =>
                (
                    <>
                        {renderInputFields(handleChange, handleBlur, values, setFieldValue)}
                        <Buttons.Raised action={handleSubmit} >
                            <Text>{'Login'}</Text>
                        </Buttons.Raised>
                    </>
                )}
        </Formik >

    )
}
export default Form;