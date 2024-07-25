import Item from "./Item";

const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
       <Item key={items} listOfItems={items}/>
      ))}
    </ul>
  );
};

export default FoodItems;
