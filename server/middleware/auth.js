const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization;

    if(!authToken && !authToken.startsWith("bearer")) {
        return res.status(401).json({
            msg: "Authorization Token is Missing"
        });
    }
    const Token = authToken.split(" ")[1];
    console.log("token is recived from headers: ", Token);

    try {
        const decode = jwt.verify(Token, JWT_SECRET);
        console.log("decode userid: ", decode.userId);
        req.user = decode
        console.log('decode',decode)
        next()
    }
    catch (error) {
        console.log(`Token verification failed: ${error.message}`)
        return res.status(403).json({
            msg: "Authorization failed",
            error: error.message
        })
    }
}
module.exports = authMiddleware;