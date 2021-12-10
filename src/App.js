import "./index.css";
import data from "./data.json";
import Categories from "./Categories";
import { useEffect, useState } from "react";
export default function App() {
  const [product, setProduct] = useState(data);
  const [value, setValue] = useState("");
  const [subValue, setSubValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [subfiltered, setSubFiltered] = useState([]);
  useEffect(() => {
    setFiltered(product["hydra:member"].filter((e) => e.name === value));
  }, [value]);

  return (
    <div className="container">
      <div>
        <h5>Категории</h5>{" "}
        {product["hydra:member"].map((e) => (
          <div
            className="currentValue"
            key={e.id}
            onClick={(e) => setValue(e.target.innerText)}
          >
            {e.name}
          </div>
        ))}
      </div>
      <Categories
        subValue={subValue}
        setSubValue={setSubValue}
        filtered={filtered}
        value={value}
        subfiltered={subfiltered}
        setSubFiltered={setSubFiltered}
        product={product}
      />
    </div>
  );
}
