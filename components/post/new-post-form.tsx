"use client"

import { useForm } from "react-hook-form";
import { PostSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useRouter } from "next/navigation";
import axios from "axios";
import TextareaAutosize from 'react-textarea-autosize';
import { ImageUpload } from "@/components/ui/image-upload";


export const NewPostForm = () => {
  const router = useRouter()

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      image: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof PostSchema>) => {
    startTransition(async () => {
      setError("")
      setSuccess("")

      try {
        const response = await axios.post('api/posts', values);

        if (response.status === 200) {
          router.push(`post/${response.data.newPost.id}`);
        }
      } catch (error) {
        console.error(error);
      }
    })
  }

  return (
    <>

      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="image"
            render={({field}) => (
              <FormItem className="form__item">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                    disabled={isPending}
                    value={field.value ? [field.value] : []}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem className="form__item">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({field}) => (
              <FormItem className="form__item">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <TextareaAutosize
                    className="w-full rounded-md border border-border-primary bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                    disabled={isPending}
                    minRows={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button>Create post</Button>
        </form>
      </Form>
    </>

  )
}