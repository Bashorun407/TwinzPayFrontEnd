import { NextResponse, type NextRequest } from "next/server";

import type { HttpRequest } from "@/types";

async function handleRequest({ method, path, request }: HttpRequest) {
  try {
    const authorization = request.headers.get("authorization");

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${path.join("/")}`;
    const headers: Record<string, string> = {};

    if (authorization) headers["Authorization"] = authorization;

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      headers["Content-Type"] = "application/json";
    }

    const options: RequestInit = { method, headers };

    if (method !== "GET" && method !== "HEAD") {
      if (contentType.includes("multipart/form-data")) {
        options.body = await request.arrayBuffer();
        headers["Content-Type"] = contentType;
      } else {
        const body = await request.text();
        if (body) options.body = body;
      }
    }

    const searchParams = request.nextUrl.searchParams.toString();
    const urlWithParams = searchParams ? `${apiUrl}?${searchParams}` : apiUrl;

    const response = await fetch(urlWithParams, options);
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("proxy error:", error);
    }
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Proxy request failed",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest, context: { param: Promise<{ path: string[] }> }) {
  const params = await context.param;
  return handleRequest({ request, path: params.path, method: "GET" });
}

export async function POST(request: NextRequest, context: { param: Promise<{ path: string[] }> }) {
  const params = await context.param;
  return handleRequest({ request, path: params.path, method: "POST" });
}

export async function PUT(request: NextRequest, context: { param: Promise<{ path: string[] }> }) {
  const params = await context.param;
  return handleRequest({ request, path: params.path, method: "PUT" });
}

export async function PATCH(request: NextRequest, context: { param: Promise<{ path: string[] }> }) {
  const params = await context.param;
  return handleRequest({ request, path: params.path, method: "PATCH" });
}

export async function DELETE(request: NextRequest, context: { param: Promise<{ path: string[] }> }) {
  const params = await context.param;
  return handleRequest({ request, path: params.path, method: "DELETE" });
}
