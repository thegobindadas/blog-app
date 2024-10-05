import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, ImgInput, Select, RTE, Button } from "../index"

function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm()

    const createPost = (data) => {
        try {
            console.log("hello");
            console.log(data);
        } catch (error) {
            console.log(error);
            throw error
        }
    }

  return (
    <div className="mx-auto flex w-full items-stretch justify-between gap-10">
        <div className="mx-auto mt-28 flex w-full flex-col items-start justify-start p-6 sm:max-w-4xl">
            <div className="w-full text-center">
                <h1 className="mb-3 text-5xl font-extrabold text-white">{post ? "Update Post" : "Create Post"}</h1>
                <p className="text-xs text-slate-400"></p>
            </div>
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
                
                <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                    <form onSubmit={handleSubmit(createPost)} className="flex flex-wrap">
                        <div className="w-2/3 px-2 space-y-5">
                            <Input
                            label="Title :"
                            placeholder="Title"
                            {...register("title", { required: true })}
                            />
                            <Input
                            label="Slug :"
                            placeholder="Slug"
                            {...register("slug", { required: true })}
                            />
                            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                        </div>
                        <div className="w-1/3 px-2 space-y-5">
                            <ImgInput
                            label="Featured Image :"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", { required: !post })}
                            />
                            {post && (
                                <div className="w-full mb-4">
                                    <img
                                        src={databaseService.getFilePreview(post.featuredImage)}
                                        alt={post.title}
                                        className="rounded-lg"
                                    />
                                </div>
                            )}
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-4"
                                {...register("status", { required: true })}
                            />

                            <Button 
                            type="submit" 
                            bgColor={post ? "bg-green-500" : undefined} 
                            >
                                {post ? "Update" : "Submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
  )
}

export default PostForm
