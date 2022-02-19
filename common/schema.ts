import * as yup from 'yup';
import { pick } from "lodash"

const full = {
  // step 1
  firstName: yup.string().required(),
  middleName: yup.string().notRequired(),
  lastName: yup.string().required(),
  mobileNumber: yup
    .string()
    .required()
    .matches(
      /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
      "Must be australian mobile format"
    ),
  email: yup.string().email().required(),
  // step 2
  relationshipStatus: yup.string().oneOf([
    'Single',
    'Married',
    'Divorced',
    'Widowed',
  ]),
  afterTaxIncome: yup.number().required().positive().integer(),
  afterTaxIncomeFrequency: yup.string().required().oneOf([
    "Annually",
    "Monthly"
  ]),
  occupation: yup.string().required(),
  currentEmployer: yup.string().required(),
  timeInCurrentEmployment: yup.object({
    year: yup.number().positive().integer().required().min(0).max(100),
    month: yup.number().positive().integer().required().min(0).max(11),
  }).required(),
  dependants: yup.number().positive().integer().required().min(0).max(10),
}


const step1Fields = [
  'firstName',
  'middleName',
  'lastName',
  'mobileNumber',
  'email',
];


const step2Fields = [
  'relationshipStatus',
  'afterTaxIncome',
  'afterTaxIncomeFrequency',
  'occupation',
  'currentEmployer',
  'timeInCurrentEmployment',
  'dependants',
];

export const schema = yup.object(full).required();
export const schemaStep1 = yup.object(pick(full, step1Fields)).required();
export const schemaStep2 = yup.object(pick(full, step2Fields)).required();
