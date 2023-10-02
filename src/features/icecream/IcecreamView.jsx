import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const icecream = useSelector(state => state.icecream.icecream)

  return (
    <div>
      <h2>Number of Ice cream - {icecream}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice creams</button>
    </div>
  );
}

// export default IcecreamView;
