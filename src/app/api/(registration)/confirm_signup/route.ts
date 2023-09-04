import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { NextRequest, NextResponse } from "next/server";

const { REGION, COGNITO_CLIENT_ID, AWS_ACCESS_ID, AWS_SECRET_ACCESS_KEY } =
  process.env;

export async function POST(req: NextRequest, res: Response) {
  const { code, email } = await req.json();

  const client = new CognitoIdentityProviderClient({
    region: REGION,
  });

  const confirm = new ConfirmSignUpCommand({
    ClientId: COGNITO_CLIENT_ID!,
    ConfirmationCode: code,
    Username: email,
  });
  try {
    const result = await client.send(confirm);

    return NextResponse.json({ result }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ e }, { status: 401 });
  }
}
