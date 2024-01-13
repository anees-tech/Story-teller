import RefreshTokenModel from "../models/tokenModel.js";
import jwt from "jsonwebtoken";


const accessTokenSecret = `${process.env.ACCESS_TOKEN_SECRET}`;
const refreshTokenSecret = `${process.env.REFRESH_TOKEN_SECRET}`;


class TokenServices {
  generateToken(payload) {
    // console.log("Your Tokens are" + accessTokenSecret +" "+ refreshTokenSecret);
    try {
      const accessToken = jwt.sign(payload, accessTokenSecret, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      });
      const refreshToken = jwt.sign(payload, refreshTokenSecret, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      });
      return { accessToken, refreshToken };
    } catch (error) {
      console.log({message:`Token Generation Error!! ${error}`})
    }
  } 
  async storingRefreshToken(token, userID) {
    try {
      await RefreshTokenModel.create({
        token,
        userID,
      });
    } catch (error) { 
      console.log(error);
    }
  }

  async verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, accessTokenSecret);
  }

  async findRefreshToken(token) {
    return await RefreshTokenModel.findOne({ token });
  }
  
  async updateRefreshToken(token, userID) { 
    return await RefreshTokenModel.updateOne(
      { user: userID },
      { token: token }
    );
  }
}

export default new TokenServices();