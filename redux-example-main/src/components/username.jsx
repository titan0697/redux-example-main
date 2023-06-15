import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from "../redux/userSlice";

export function Username() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  return (
    <input
      type="username"
      value={username}
      onChange={(event) => dispatch(changeUsername(event.target.value))}
    />
  );
}
