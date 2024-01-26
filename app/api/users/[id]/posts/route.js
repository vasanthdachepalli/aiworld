import { connectToDB } from "@utils/database"
import Prompt from "@models/PromptSchema";
import { request } from "http";

export const GET = async (request,{params}) => {
   try{
    await connectToDB();
   
    const prompts = await Prompt.find({creator: params.id}).populate('creator')
   return new Response(JSON.stringify(prompts),{status: 200})

}
catch{
    return new Response('Failed',{status:500})
}

}