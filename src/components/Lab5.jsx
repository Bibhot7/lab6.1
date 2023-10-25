import React, { useState } from 'react';

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

  const addCat = (newCat) => {
    setCatList([...catList, newCat]);
  };

  const deleteCat = (catToDelete) => {
    const updatedList = catList.filter(cat => cat !== catToDelete);
    setCatList(updatedList);
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
      <AddCatForm onAddCat={addCat} />
      {catList.map((cat, index) => (
        <SingleCat key={index} cat={cat} onDelete={deleteCat} />
      ))}
    </div>
  );
};

const AddCatForm = ({ onAddCat }) => {
  const [newCat, setNewCat] = useState({ name: '', latinName: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCat({ ...newCat, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(newCat);
    setNewCat({ name: '', latinName: '', image: '' });
  };

  return (
    <div className="add-cat-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCat.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="latinName"
          placeholder="Latin Name"
          value={newCat.latinName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newCat.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
};

const SingleCat = ({ cat, onDelete }) => {
  const handleDelete = () => {
    onDelete(cat);
  };

  return (
    <div className="cat-item">
      <h2>{cat.name}</h2>
      <p>Latin Name: {cat.latinName}</p>
      <img src={cat.image} alt={`${cat.name} Image`} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BigCats;
