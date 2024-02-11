import useAuth from "@root/hooks/useAuth";
import { useLoginMutation } from "@root/services/authApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

export const useLoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [loginTrigger, { isLoading }] = useLoginMutation();
    const { login } = useAuth();
    const [isErrorMsg, setIsErrorMsg] = useState("")
    const router: any = useRouter();

    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleConfirmShowPassword = () => {
        setConfirmPassword((show) => !show);
    };

    // const onSubmit = (credentials: any) => {
    //   router.push("/auth/verification");
    // };


    const business_name = "Foster App"
    const onSubmit = async (formValues: any) => {
        formValues.business_name = business_name;
        try {
            const response = await fetch(
                "https://jobs.orcaloholding.co.uk/api/sale-site/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        accept: "application/json",
                    },
                    body: JSON.stringify(formValues),
                }
            );


            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.data.token || null
                localStorage.setItem('loginToken', token)
                if (responseData.status) {
                    router.replace("/under-construction");
                } else {
                    setIsErrorMsg(responseData.msg);
                }

            } else if (response.status === 452) {
                const responseData = await response.json();
                setIsErrorMsg(responseData.msg);
            }

        } catch (error) {
            setIsErrorMsg("Something went wrong. Please try again!");
        }
    };


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsErrorMsg('');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isErrorMsg]);
    return {
        showPassword,
        methods,
        handleShowPassword,
        handleSubmit,
        onSubmit,
        isSubmitting,
        isValid,
        handleConfirmShowPassword,
        confirmPassword,
        isErrorMsg
    };
};
