import { useEffect } from "react";
import SubCat from "./SubCat";

export default function Categories({
  filtered,
  value,
  subfiltered,
  setSubFiltered,
  subValue,
  setSubValue,
  product
}) {
  useEffect(() => {
    setSubFiltered(filtered[0]?.categories.filter((e) => e.name === subValue));
  }, [subValue]);
  return (
    <>
      <div>
        <div>
          <h5>{value ? `По категории ${value}` : ""}</h5>
          {filtered[0]?.categories.map((e) => (
            <div
              className="currentValue"
              key={e.id}
              onClick={(e) => setSubValue(e.target.innerText)}
            >
              {e.name}
            </div>
          ))}
        </div>
      </div>
      <SubCat
        value={value}
        filtered={filtered}
        subfiltered={subfiltered}
        subValue={subValue}
        product={product}
      />
    </>
  );
}
