/* eslint-disable react/prop-types */
const Item = ({listOfItems}) => {

    // const {listOfItems} = props
  return (
    <li className="list-group-item">
      {listOfItems}
    </li>
  );
};

export default Item;
