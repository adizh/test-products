export default function SubCat({
  subValue,
  filtered,
  value,
  subfiltered,
  product
}) {
  console.log(subValue);
  console.log(subfiltered);
  const c =
    subfiltered &&
    subfiltered[0]?.categories
      .filter((e) => e.name === subValue)
      .map((e) => e.name);
  console.log(c);
  return (
    <div>
      <h5> {subValue ? ` По категории ${subValue}` : ""}</h5>
      <div>
        {subfiltered
          ? subfiltered[0]?.categories.map((e) => (
              <div key={e.id} className="currentValue">
                {e.name}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
