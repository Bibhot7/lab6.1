

const initialCats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
  { name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [catList, setCatList] = useState(initialCats);
  const [filter, setFilter] = useState('');

  const sortAlphabetically = () => {
    const sortedList = [...catList].sort((a, b) => a.name.localeCompare(b.name));
    setCatList(sortedList);
  };

  const reverseList = () => {
    const reversedList = [...catList].reverse();
    setCatList(reversedList);
  };

  const filterPanthera = () => {
    const pantheraCats = initialCats.filter(cat => cat.latinName.includes('Panthera'));
    setCatList(pantheraCats);
    setFilter('Panthera');
  };

  const resetList = () => {
    setCatList(initialCats);
    setFilter('');
  };

  return (
    <div className="big-cats-list">
      <div className="buttons">
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera Family</button>
        <button onClick={resetList}>Reset List</button>
      </div>
      <p>Filtered by: {filter}</p>
      {catList.map((cat, index) => (
        <SingleCat key={index} cat={cat} />
      ))}
    </div>
  );
};

export default BigCats;
