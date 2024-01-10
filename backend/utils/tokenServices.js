import RefreshTokenModel from "../models/tokenModel.js";
import jwt from "jsonwebtoken";
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

class TokenServices {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });
    return { accessToken, refreshToken };
  }
  async storingRefreshToken(token, userID) {
    try {
      await RefreshTokenModel.create({
        token,
        user: userID,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, refreshTokenSecret);
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
