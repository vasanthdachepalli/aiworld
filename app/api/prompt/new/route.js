import { connectToDB } from "@utils/database"
import Prompt from "@models/PromptSchema";
export const POST = async (req,res)=>{
   
    try{
        await connectToDB();
    const {userId ,prompt,tag} = await req.json()
    
      
    
    
    var newPrompt =Prompt.create({
        creator: userId,
        tag,
        prompt


    })
   

    
    return new Response(JSON.stringify(newPrompt),{
        status:201
    })

}
catch(error){
return new Response('failed to',{status:500})
}

}