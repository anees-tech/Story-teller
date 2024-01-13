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
    const { email, password, username, fullname } = req.body;
    try {
      // console.log(req.body);
      if (!email || !password || !username || !fullname) {
        throw new CustomApiError(400, "Something is Missing");
      }
      user = await UserServices.findUser({ email });
      if (user) {
        throw new CustomApiError(400, "User Already Exist!");
      }
      // console.log(user);

      try {
        if (!user) {
          user = await UserServices.createUser({
            email,
            password,
            username,
            fullname,
            activated:true,
          });
        }
        // console.log(user);
      } catch (error) {
        console.log(error + " USer Cannot be created");
      }
    } catch (error) {
      // console.log(error + "");
      throw new CustomApiError(500, `Server Error! ${error}`);
    }
    const { accessToken, refreshToken } = TokenServices.generateToken({
      _id: user._id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
    });
    await TokenServices.storingRefreshToken(refreshToken, user._id);
 
    user.activated = true;

    
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      secure: true,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30, 
      secure: true,
      httpOnly: true, 
    });
    await user.save();
    res.json({ success: true, message: "User registered successfully", user:{
      email:email,
      username:username,
      fullname:fullname,
      refreshToken:refreshToken,
      isAuth:true,
    }}); 
    // res.send("<h2>User Created</h2>")
  }
}

export default new AuthController();
