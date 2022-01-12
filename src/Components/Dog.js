const Dogs = ({ dogName }) => {
  return (
    <div>{dogName && dogName.map((res, i) => <div key={i}>{res} </div>)}</div>
  );
};

export default Dogs;
