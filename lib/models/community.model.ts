import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    id:{ type:String,required:true},
    username:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    image:String,
    bio:String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    threads:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Threads'
        }
    ],
    
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});
const community = mongoose.models.community || mongoose.model('community', communitySchema);

export default community;