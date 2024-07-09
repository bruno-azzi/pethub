import Item from "../Item/Item";

const ItemList = ({ items, title, imgClassName = "" }) => {
  if (!(items.length > 0)) return null;

  return (
    <div>
      <h2 className="mb-2 font-medium">{title}</h2>

      <ul>
        {items.map((item) => (
          <li className="mb-2" key={item.id}>
            <Item
              img={item.img}
              name={item.name}
              rating={item.rating}
              distance={item.distance}
              type={item.type}
              height={50}
              width={50}
              url={item.url}
              date={item.date}
              imgClassName={`w-16 h-16 rounded-full ${imgClassName}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
