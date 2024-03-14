import {
    Form, FormControl, FormField, FormItem, FormLabel
} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import {Input} from '@/components/ui/input.tsx'
import Tiptap from "@/components/Tiptap.tsx";
import {useStore} from "@nanostores/react";
import {$client} from '@/lib/stores'
import {useState} from 'react'

import axios from 'axios'
import {Button} from "@/components/ui/button.tsx";

export const NewArticleForm = () => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.withCredentials = false;

    const client = useStore($client)

    const formSchema = z.object({
        title: z.string().max(100, {message: 'Title is too long'}),
        content: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            title: '',
            content: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(`values: ${JSON.stringify(values)}`)
        await client.post(`/articles/`, {
            title: values.title,
            content: values.content
        }, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
    }

    return (
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name='title' render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder='Article title' {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name='content' render={({field}) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Tiptap description={field.value} onChange={field.onChange}/>
                            </FormControl>
                        </FormItem>
                    )}/>
                    <Button className='mt-4' variant='outline' type='submit'>Post</Button>
                </form>
            </Form>
        </main>
    )
}