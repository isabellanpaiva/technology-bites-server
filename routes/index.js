module.exports = app => {

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const userRoutes = require("./user.routes")
    app.use("/api/user", userRoutes)

    const cardRoutes = require("./card.routes")
    app.use("/api/card", cardRoutes)


}
