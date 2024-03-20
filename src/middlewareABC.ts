// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionStatus } from './app/utils/session';

export function middleware(request: NextRequest) {
  const session = getSessionStatus();
    console.log(session);
  if (!session) {
    // Redirect to the home page
    return NextResponse.redirect(new URL('/', request.url));
  } else {
    // Redirect to the landing page
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/landingpage',
};
