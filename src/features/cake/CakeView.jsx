import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const nummerOfCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {nummerOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(4))}>Restock cakes</button>
    </div>
  );
}

// export default CakeView;
