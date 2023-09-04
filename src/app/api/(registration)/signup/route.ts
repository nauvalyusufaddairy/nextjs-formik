import { NextRequest, NextResponse } from "next/server";
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(req: NextRequest, res: NextResponse) {
  const { REGION, COGNITO_CLIENT_ID } = process.env;
  const { password, email } = await req.json();

  const client = new CognitoIdentityProviderClient({ region: REGION });

  const signupCommand = new SignUpCommand({
    ClientId: COGNITO_CLIENT_ID!,
    Password: password,
    Username: email,
  });

  try {
    const response = await client.send(signupCommand);

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e: any) {
    console.log("error >> ", e);
    return NextResponse.json({ data: e }, { status: 400 });
  }
}
