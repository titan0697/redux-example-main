import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/userSlice";

export function Name() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <input
      type="name"
      value={name}
      onChange={(event) => dispatch(changeName(event.target.value))}
    />
  );
}
