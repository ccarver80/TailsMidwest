/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TestPost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestPostUpdateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type TestPostUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestPostUpdateFormOverridesProps = {
    TestPostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestPostUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestPostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testPost?: TestPost;
    onSubmit?: (fields: TestPostUpdateFormInputValues) => TestPostUpdateFormInputValues;
    onSuccess?: (fields: TestPostUpdateFormInputValues) => void;
    onError?: (fields: TestPostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestPostUpdateFormInputValues) => TestPostUpdateFormInputValues;
    onValidate?: TestPostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestPostUpdateForm(props: TestPostUpdateFormProps): React.ReactElement;
