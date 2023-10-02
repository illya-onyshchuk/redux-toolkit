import { useSelector } from "react-redux";


export const CakeView = () => {
  const nummerOfCakes = useSelector((state) => state.cake.numOfCake);
  
  return (
    <div>
      <h2>Number of cakes - {nummerOfCakes}</h2>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
}

// export default CakeView;
