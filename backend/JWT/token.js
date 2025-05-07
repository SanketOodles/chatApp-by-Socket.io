import jwt from 'jsonwebtoken'

const createToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_TOKEN,{expiresIn: '5d',})
    res.cookie("jwt",token,{
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    })
}
export default createToken;