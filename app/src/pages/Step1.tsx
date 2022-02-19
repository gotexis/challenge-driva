import React, { useEffect, useState } from "react"
import { Form, Button, Checkbox } from 'antd';
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStep1 } from "@starter/common/schema";
import { Input, Err } from "../components/Input";

const Step1 = ({ formFull, submitPartialForm }: any) => {
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaStep1),
    defaultValues: formFull
  });

  const onSubmit = (data: any) => {
    submitPartialForm(data)
    history.push('/step2')
  }

  return (
    <form name="basic" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <b>Tell us about yourself</b>
      </div>

      <label>First name</label>
      <Input {...register("firstName")} placeholder={"As it appears on your license"} />
      <Err>{errors.firstName?.message}</Err>

      <label>Middle name</label>
      <Input {...register("middleName")} placeholder="optional" />
      <Err>{errors.middleName?.message}</Err>

      <label>Last name</label>
      <Input {...register("lastName")} placeholder={"As it appears on your license"} />
      <Err>{errors.lastName?.message}</Err>

      <label>Mobile number</label>
      <Input {...register("mobileNumber")} placeholder={"+61"} />
      <Err>{errors.mobileNumber?.message}</Err>

      <label>Email</label>
      <Input {...register("email")} placeholder={"Please enter a valid email"} />
      <Err>{errors.email?.message}</Err>

      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </form>
  )
}

export default Step1
