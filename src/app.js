import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// Parse JSON request bodies
app.use(
    express.json({
        limit: "16kb",
    })
);

// Parse URL-encoded form data
app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

// Serve static files from public folder
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

export { app };