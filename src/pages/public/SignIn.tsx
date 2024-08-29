import { FormEvent } from "react";
import { useCreateUserMutation } from "../../redux/api/auth/authApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
} from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type TModalProps = {
  my_modal_5: string;
};

const SignIn = ({ my_modal_5 }: TModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name, email, phone, address, password, role } = useAppSelector(
    (state) => state.auth
  );
  const [createUser] = useCreateUserMutation();

  const handleSubmitForRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toasterId = toast.loading("User creating....");
    const registerData = { name, email, phone, address, password, role };

    try {
      const register = await createUser(registerData).unwrap();
      navigate("/");

      toast.success("Account created successfully!!!");
      console.log(register);
    } catch (e) {
      toast.error("something went wrong", { id: toasterId, duration: 2000 });
      console.log(e);
    }

    // const form = e.target;
    // const name = form?.name.value;
    // const email = form?.email.value;
    // const role = form?.role.value;
    // const phone = form?.phone.value;
    // const address = form?.address.value;

    // const registerInfo = { name, email, role, phone, address };
    // createUser(registerInfo);
  };
  return (
    <>
      <dialog
        id={my_modal_5}
        className="p-10 modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {/* <h3 className="text-lg font-bold">Hello!</h3> */}

          <div role="tablist" className="tabs tabs-bordered">
            {/* for login */}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Login"
            />
            <div role="tabpanel" className="p-10 tab-content">
              <form method="dialog">
                <div className="mb-5">
                  <label
                    htmlFor="login_email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="login_email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="login_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="login_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent form submission
                      (
                        document.getElementById(my_modal_5) as HTMLDialogElement
                      ).close();
                    }}
                    className="btn"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>

            {/* for register */}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Register"
              defaultChecked
            />
            <div role="tabpanel" className="p-10 tab-content">
              <form method="dialog" onSubmit={handleSubmitForRegistration}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => dispatch(setPhone(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="phone"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => dispatch(setAddress(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="phone"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={role}
                    className="bg-gray-50 hidden border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="role"
                    required
                    readOnly
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent form submission
                      (
                        document.getElementById(my_modal_5) as HTMLDialogElement
                      ).close();
                    }}
                    className="btn"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SignIn;
