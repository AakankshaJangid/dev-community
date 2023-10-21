import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("user: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
        return NextResponse.error(error); // You may want to return an error response
    }
}
