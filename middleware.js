import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();

    // Check if the hostname is 'kwsindia.in' (without www)
    if (url.hostname === 'kwsindia.in') {
        url.hostname = 'www.kwsindia.in';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
