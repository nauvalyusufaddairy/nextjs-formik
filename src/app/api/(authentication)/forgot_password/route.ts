import {
  ForgotPasswordCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

import { NextRequest, NextResponse } from "next/server";
const { REGION, COGNITO_CLIENT_ID } = process.env;
export async function POST(req: NextRequest, res: NextResponse) {
  const { email } = await req.json();
  const client = new CognitoIdentityProviderClient({
    region: REGION,
  });
  const forgotPasswordCommand = new ForgotPasswordCommand({
    ClientId: COGNITO_CLIENT_ID,
    Username: email,
  });

  try {
    const result = await client.send(forgotPasswordCommand);
    return NextResponse.json({ result }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
