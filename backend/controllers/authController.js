import UserServices from "../utils/userServices.js";
import { CustomApiError } from "../utils/Errors.js";
import TokenServices from "../utils/tokenServices.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    console.log({ email, password });

    // Validation
    if (!email || !password) {
      throw new CustomApiError(400, "Something is Missing");
    }

    if ([email, password].some((data) => data?.trim() === "")) {
      throw new CustomApiError(400, "All Fields are Requird Please Fill Them");
    }
  }

  async register(req, res) {
    let user;
    try {
      const { email, password, username, fullname } = req.body;
      if (!email || !password || !username || !fullname) {
        throw new CustomApiError(400, "Something is Missing");
      }

     user = await UserServices.findUser({email});
      if (!user) {
        user = await UserServices.createUser({
          email,
          password,
          username,
          fullname,
        });
      }
    } catch (error) {
      console.log(error + "wete");
      throw new CustomApiError(500, "Server Error!");
    }
    const { accessToken, refreshToken } = TokenServices.generateToken({
      _id: user._id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
    });
    await TokenServices.storingRefreshToken(refreshToken, user._id);
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    }); 
  }
}

export default new AuthController();