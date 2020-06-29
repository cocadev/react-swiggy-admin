import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export class FormSelect extends Component {
  render() {
    const { name, options } = this.props
    const { formik } = this.context
    const { setFieldTouched, setFieldValue } = formik

    const error = formik.errors[name]
    const touched = formik.touched[name]
    const value = formik.values[name]

    return (
      <div>
        <Select
          autoBlur
          labelKey="name"
          name={name}
          onBlur={() => setFieldTouched(name, true)}
          onChange={value => setFieldValue(name, value)}
          options={options}
          valueKey="taxonomy_path"
          value={value}
        />
        {error && touched && <div>{error}</div>}
      </div>
    )
  }
}

FormSelect.contextTypes = {
  formik: PropTypes.object
}
