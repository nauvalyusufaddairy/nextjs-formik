// client props only backend not affected

/**
 *  @var userPost is Omitted then modified for blogcard only
 */
type BlogProps = Omit<
  User,
  "userPost" | "email" | "userCredential" | "password"
> & {
  showImage: boolean;
  userPost: string;
  date: string;
  imgUrl?: string;
};

// default record for user data. blog data included
type User = {
  email: string;
  password: string;
  userImage: string;
  userName: string;
  userId: string;
  userCredential?: string;

  userPost: Array<{
    blogId: string;
    content: string;
    time: String;
    img: Array<{ id: string; imgUrl: string }>;
    title: string;
  }>;
  organization: Pick<Organization, "orgName" | "orgId">;
};
type UserCollection = Array<User>;

type UserPost = Pick<User, "userPost">;

// default record for organization user
type Organization = {
  orgName: string;
  orgEmail: string;
  orgPassword: string;
  orgId: string;
  member: Array<Omit<User, "password" | "userCredential">>;
};

type Category = {
  color: string;
  category: string;
};
export interface UserLogin {
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface ConfirmRegistration {
  code: string;
  email: string;
}

interface RegisterValues {
  email: string;
  password: string;
  confirm_password: string;
}
type ErrorHandling = {
  name: string;
  message: string;
};
