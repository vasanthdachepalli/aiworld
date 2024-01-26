import { connectToDB } from "@utils/database"
import Prompt from "@models/PromptSchema";




export const GET = async (request,{params}) => {
   try{
    await connectToDB();

    const prompts = await Prompt.findById(params.id)
    .populate('creator')

    if(!prompts) return new Response("no post existed",{status: 404})
   return new Response(JSON.stringify(prompts),
   {status: 200})

}
catch{
    return new Response('Failed',{status:500})
}

}

export const PATCH = async (request,{params}) =>{
    const {prompt,tag} = await request.json();
    try{
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt) return new Response("no post existed",{status: 404});
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt),{status:200})
    }
    catch{
        return new Response('Failed',{status:500})
    }

}

export const DELETE = async (request,{params}) =>{
    try{
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id)
        return new Response('deleted the post',{status:200})
    }
    catch{
        return new Response('Failed',{status:500})
    }

}