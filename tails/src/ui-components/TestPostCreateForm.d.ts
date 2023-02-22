/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestPostCreateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type TestPostCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestPostCreateFormOverridesProps = {
    TestPostCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestPostCreateFormProps = React.PropsWithChildren<{
    overrides?: TestPostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestPostCreateFormInputValues) => TestPostCreateFormInputValues;
    onSuccess?: (fields: TestPostCreateFormInputValues) => void;
    onError?: (fields: TestPostCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestPostCreateFormInputValues) => TestPostCreateFormInputValues;
    onValidate?: TestPostCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestPostCreateForm(props: TestPostCreateFormProps): React.ReactElement;
