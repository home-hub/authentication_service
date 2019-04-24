import jwt from 'jsonwebtoken';

export const generateNewTokenPair = async (ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET) => {
    const alg = "HS512"
    const iss = "imtheissuerforallthetokens"
    const aud = "someclientid"

    const newAccessToken = jwt.sign({
            roles: ['ADMIN', 'EDITOR']
        }, 
        ACCESS_TOKEN_SECRET,
        {
            algorithm: alg,
            issuer: iss,
            audience: aud,
            expiresIn: "1d",
            subject: "12398hbjf8hf3uf9"

        })
    
    const newRefreshToken = jwt.sign({}, 
        REFRESH_TOKEN_SECRET,
        {
            algorithm: alg,
            issuer: iss,
            audience: aud,
            expiresIn: "5d",
        })

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  };