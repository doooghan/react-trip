import { UserLayout } from "@/layouts/UserLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage: React.FC = (props) => {
  console.log(props);
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  );
};
