const jwt = require("jsonwebtoken")

const check = (req, res, next) => {
    if ("authorization" in req.headers) {
        const authHeader = req.headers.authorization.split(" ")
        if (authHeader.length > 1) {
            const token = authHeader[1]
            const key = process.env.JWT_KEY

            try {
                const statusToken = jwt.verify(token, key)
                return next(statusToken)
            } catch (err) {
                return res.status(401).send({
                    error: "Invalid token!!"
                })
            }
        }
    }
    return res.status(401).send({
        error: "Invalid authentication!!"
    })
}

module.exports = check

/**
 * expired: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA0Mzg0MTQyLCJleHAiOjE2MDQzODQ0NDJ9.VlPf7nTdAnezAJXq27cEWTAAwkStOegdbrbl8iVlPTU
 *
 */