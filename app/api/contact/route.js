import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyztgGbDzYF2NzMIUDHdrZwR98ofS61O-kdOY1OZTJlWhQT0qYnT1S37ZSHBhQ1eELxuw/exec";

export async function POST(request) {
    try {
        const { name, email, phone, message, source } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, Email, and Message are required" },
                { status: 400 }
            );
        }

        const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
                source: source || "contact_page",
            }),
        });

        const text = await googleResponse.text();

        let result;
        try {
            result = JSON.parse(text);
        } catch {
            throw new Error("Invalid response from Google Script");
        }

        if (!result.success) {
            throw new Error(result.error || "Google Sheets error");
        }

        return NextResponse.json(
            { success: true, message: "Message sent" },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
