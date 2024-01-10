import mongoose from "mongoose";
import { Schema } from "mongoose";


const RefreshTokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userID:{
            type:Schema.Types.ObjectId,
            ref:'User',
        }
    },
    {
        timestamps: true,
    }
)

const RefreshTokenModel = mongoose.model("RefreshToken", RefreshTokenSchema);

export default RefreshTokenModel;