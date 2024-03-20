<script lang="ts" setup>
import {Form, FormControl, FormField, FormItem, FormLabel} from '@/components/ui/vue/form'
import {Input} from '@/components/ui/vue/input'
import {useForm} from 'vee-validate'
import axios from 'axios'
import {useStore} from '@nanostores/vue'
import {$client} from '@/lib/stores.ts'
import * as z from "zod"
import {toTypedSchema} from '@vee-validate/zod'
// import Editor from "@/components/text_editor/Editor.vue"
import Editor from '@/components/new_text_editor/Editor.vue'

const {handleSubmit} = useForm()

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = false

const client = useStore($client)

const formSchema = z.object({
  title: z.string().max(100, {message: 'Title is too long'}),
  content: z.string(),
})

const form = useForm<z.infer<typeof formSchema>>({
  validationSchema: toTypedSchema(formSchema),
  initialValues: {
    title: '',
    content: '',
  }
})

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

// const onSubmit = async (values: z.infer<typeof formSchema>) => {
//   console.log(`values: ${JSON.stringify(values)}`)
//   await client.post(`/articles/`, {
//     title: values.title,
//     content: values.content
//   }, {
//     headers: {
//       'Authorization': `Token ${localStorage.getItem('token')}`
//     }
//   })
// }
</script>

<template>
  <main>
    <Form @submit="onSubmit">
      <FormField name="title" v-slot="{componentField}">
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Article title" v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="content" v-slot="{componentField}">
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Editor />
          </FormControl>
        </FormItem>
      </FormField>
      <Button type="submit">
        Post
      </Button>
    </Form>
  </main>
</template>