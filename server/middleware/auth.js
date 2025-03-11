const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization;

    if(!authToken && !authToken.startsWith("bearer")) {
        return res.status().json({
            msg: "Authorization Token is Missing"
        });
    }
    const Token = authToken.split(" ")[1];
    console.log("token is recived from headers: ", Token)

    try {
        const decode = jwt.verify(Token, JWT_SECRET);
        console.log("decode userid: ", decode.userId);
        req.userId = decode.userId
        console.log("hi", req.userId);
        next()
    }
    catch (error) {
        console.log(`Token verification failed: ${error.message}`)
        return res.status(403).json({
            msg: "Authorization failed"
        })
    }
}
module.exports = authMiddleware;