import React, { useState } from "react"
import axios from "axios"
import { Button } from 'antd';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router";
import { schemaStep2 } from "@starter/common/schema";
import { Input, Err, Select } from "../components/Input";

const Step2 = ({ formFull, submitPartialForm, setFormFull }: any) => {
    const [error, setError] = useState('');
    const history = useHistory()
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        resolver: yupResolver(schemaStep2),
        defaultValues: formFull
    });

    const onSubmit = async (partialForm: unknown) => {
        const result = submitPartialForm(partialForm)
        try {
            await axios.post("http://localhost:4000/quote/", result)
            setFormFull({})
            history.push('/success')
        } catch (e: any) {
            setError(e?.response?.data?.message || "something went wrong")
        }
    };

    const onBack = (e: any) => {
        e.preventDefault();
        submitPartialForm(getValues())
        history.push("/")
    };

    return (
        <form name="extended" onSubmit={handleSubmit(onSubmit)}>
            {error && <ErrorBox>{error}</ErrorBox>}
            <label>Relationship status</label>
            <Select {...register("relationshipStatus")}>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
            </Select>
            <Err>{errors.relationshipStatus?.message}</Err>

            {/* left and right input */}
            <label>Your after tax income</label>

            <InputGroup>
                <Input {...register("afterTaxIncome")} placeholder="$" type="number" />
                <Select {...register("afterTaxIncomeFrequency")}>
                    <option value="Annually">Annually</option>
                    <option value="Monthly">Monthly</option>
                </Select>
            </InputGroup>
            <Err>{errors.afterTaxIncome?.message}</Err>
            <Err>{errors.afterTaxIncomeFrequency?.message}</Err>

            <label>Occupation</label>
            <Input {...register("occupation")} placeholder="Enter your occupation" />
            <Err>{errors.occupation?.message}</Err>

            <label>Current employer</label>
            <Input {...register("currentEmployer")} placeholder="Enter your employer's name" />
            <Err>{errors.currentEmployer?.message}</Err>

            <label>Time in current employment</label>
            <InputGroup>
                <Input {...register("timeInCurrentEmployment.year")} type="number" />
                <Input {...register("timeInCurrentEmployment.month")} type="number" />
            </InputGroup>
            <Err>{errors.timeInCurrentEmployment?.year?.message}</Err>
            <Err>{errors.timeInCurrentEmployment?.month?.message}</Err>

            <label>Dependants</label>
            <Input {...register("dependants")} type="number" />
            <Err>{errors.dependants?.message}</Err>

            <Button onClick={onBack}>
                Back
            </Button>
            <Button type="primary" htmlType="submit">
                Next
            </Button>
        </form>
    )
}

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ErrorBox = styled.div`
    background-color: #ff2600;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export default Step2
