import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, useState } from "react";
import { Auth } from "../../models/Auth";
import { postLogin } from "../../services/postLogin";
import { login } from "../../store/auth-sclice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import TextInput from "../TextInput/TextInput";

interface ILoginProps {
  closePopup: () => void;
}

const Login = ({ closePopup }: ILoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await postLogin(username, password);
      dispatch(login(response as Auth));
      closePopup();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("مشکلی پیش آمد مجددا امتحان کنید");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-40 md:py-32">
      <h4 className="font-medium text-3xl mb-6 md:mb-12">
        ورود به حساب کاربری
      </h4>
      <form
        onSubmit={formSubmitHandler}
        className="w-full h-full flex flex-col items-center justify-center gap-6"
      >
        <TextInput
          label="نام کاربری"
          value={username}
          name="username"
          type="text"
          perfixIcon={faUser}
          onChange={(value: string) => setUsername(value)}
        />
        <TextInput
          label="رمز عبور"
          value={password}
          name="password"
          type="password"
          perfixIcon={faLock}
          onChange={(value: string) => setPassowrd(value)}
        />
        {error && <span className="text-red-500">{error}</span>}
        <Button
          disabled={loading}
          buttonType="submit"
          type="secondary"
          className="w-8/12 md:w-6/12 mt-12"
        >
          <div className="flex items-center justify-center gap-3">
            <span>ورود</span>
            {loading && <Spinner />}
          </div>
        </Button>
      </form>
    </div>
  );
};

export default Login;
