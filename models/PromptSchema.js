import { Schema, model, models } from 'mongoose';
const promptschema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    }
})

const Prompt = models.Prompt || model('Prompt',promptschema);
export default Prompt;