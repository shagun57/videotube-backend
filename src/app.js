import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//middleware to accept json data.
app.use(express.json({limit: "16kb"}))

//middleware to accept url data, extended: true help us to add objects within objects
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//middleware for static files to store image, pdf etc.
app.use(express.static("public"));

//to use cookie parser which helps us to access cookies of client from server side to perform CRUD.
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js"
import videoRouter from "./routes/video.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import tweetRouter from "./routes/tweet.router.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration

app.use("/api/v1/users", userRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/dashboard", dashboardRouter)


export {app}