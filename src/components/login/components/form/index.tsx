import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Formik } from 'formik';
import utilities from '../../../../helpers/utilities';
import { agesRange, validMail } from '../../../../config/constants';
import { CheckBox, TextField, PickerField } from '../inputs'
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
import { Buttons } from '../../../commons';
import { IOption } from '../inputs/picker/index';
import I18n from 'i18n-js';
interface IForm {
    onLogin: Function
}
interface ILogin {
    name: string;
    lastName: string;
    email: string;
    ages: string;
    terms: boolean;
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
        label: 'login.name',
        errorLabel: 'login.errors.name'
    },
    lastName: {
        type: FieldTypes.TEXT,
        validation: (data: string) => data.length > 3,
        label: 'login.lastname',
        errorLabel: 'login.errors.lastname'
    },
    email: {
        type: FieldTypes.TEXT,
        validation: (data: string | any) => {
            return validMail.test(data)
        },
        label: 'login.mail',
        errorLabel: 'login.errors.mail'
    },
    ages: {
        type: FieldTypes.PICKER,
        label: 'login.age',
        errorLabel: 'Must pick your age'
    },
    terms: {
        type: FieldTypes.CHECKBOX,
        label: 'login.terms',
        errorLabel: 'Must accept terms and conditions'
    }
}
const formValues: ILogin = {
    name: '',
    lastName: '',
    email: '',
    ages: '',
    terms: false
};
const [start, stop] = [...agesRange];
const step = 1;
const ages = utilities.range(start, stop, step);
const years = I18n.t('global.years');
const agesOptions: IOption[] = ages.map((el: number) => ({ label: `${el} years`, value: el.toString() }));
const inputHandler =
    (type = 'DEFAULT', handleChange = Function, handleBlur: Function,
        values = {}, fieldId = '', handlerErrors: Function, label = '',
        setFieldValue: Function) => {
        const value = (values as any)[fieldId];
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
            [FieldTypes.CHECKBOX]: <CheckBox
                fieldId={fieldId}
                label={label}
                onChangeValue={setFieldValue}
                value={value} />,
            ['DEFAULT']: <TextField
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                fieldId={fieldId}
                handlerErrors={handlerErrors} />
        }
        return handler[type];
    }

const Form = ({ onLogin }: IForm) => {
    const initialFormErrors: { [key: string]: string } = {};
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const setErrors = (values: any, fieldId: string) => {
        const { validation = null, errorLabel = null } = { ...formFieldsProps[fieldId] };
        const validate: boolean = !!validation ? validation(values[fieldId] || '') : false;
        const errorValue = !validate ? errorLabel : null;
        setFormErrors({ ...formErrors, [fieldId]: errorValue })
    }
    const validateForm = (values: { [key: string]: any }) => {
        const validate = Object.keys(values).filter((el: string) => !!values[el]);
        const formErrorValidate = Object.keys(formErrors).filter((el: string) => !!formErrors[el]);
        const validationFilledForm = !Boolean(validate.length === Object.keys(values).length);
        return validationFilledForm || utilities.arrayHasItems(formErrorValidate);
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
                                {!!validationError && <Text style={_styles.error}>
                                    {I18n.t(validationError)}
                                </Text>}
                            </View>
                        )
                    })
                }
            </>);
    }
    return (
        <Formik
            initialValues={formValues}
            onSubmit={values => {
                onLogin(values)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }: any) =>
                (
                    <>
                        {renderInputFields(handleChange, handleBlur, values, setFieldValue)}
                        <Buttons.Raised action={handleSubmit} disabled={validateForm(values)}
                        >
                            <Text style={_styles.loginText}>{I18n.t('login.login')}</Text>
                        </Buttons.Raised>
                    </>
                )}
        </Formik >

    )
}
export default Form;