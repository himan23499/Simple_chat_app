import { SlLogout } from "react-icons/sl";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading?(<SlLogout className="w-6 h-6 text-white cursor-pointer" onClick={logout}></SlLogout>):(
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
