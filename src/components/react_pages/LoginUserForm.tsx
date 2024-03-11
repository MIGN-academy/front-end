import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import React from "react";
import axios from "axios";
import {useStore} from "@nanostores/react";
import {client} from "@/lib/stores.ts";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button.tsx";

export const LoginUserForm = () => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.withCredentials = false;
    const $client = useStore(client)

    const formSchema = z.object({
        email: z.string(),
        password: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await $client.post(`/users/login/`, {
            email: values.email,
            password: values.password
        }).then(res => {
            localStorage.setItem('token', res.data['token'])
        }).catch(err => {
            console.log(JSON.stringify(err))
        })
    }

    return (
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name='email' render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='Email address' {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name='password' render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder='Password' {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <Button type='submit'>Login</Button>
                </form>
            </Form>
        </main>
)
}