import Item from "../Item/Item";

const ItemGrid = ({ items, title, imgClassName = "" }) => {
  if (!(items.length > 0)) return null;

  return (
    <div>
      <h2 className="mb-2 font-medium">{title}</h2>

      <ul className="grid items-grid">
        {items.map((item) => (
          <li className="mb-2" key={item.id}>
            <Item
              img={item.img}
              name={item.name}
              type={item.type}
              height={50}
              width={50}
              url={item.url}
              price={item.price}
              imgClassName={`w-16 h-16 rounded-full ${imgClassName}`}
              className="items-center"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGrid;
