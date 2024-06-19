import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem';
import Alphabet from './Alphabet';
import { CiSearch } from "react-icons/ci";
function Meal() {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [dishes, setDishes] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [filteredItem, setFilteredItem] = useState();
  async function fetchDishes(url) {
    try {
      setLoading(true);
      const raw = await fetch(url);
      const response = await raw.json();
      if (response) {
        setLoading(false);
        setDishes(response.meals);
      }
    }
    catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    if (url !== '') {
      fetchDishes(url);
    }
  }, [url]);
  const changeUrl = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  }
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerms = e.target.value;
    fetchDishes(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerms}`);
    console.log(dishes);
    const filtered = dishes.filter((dish) => {
      return (dish.strMeal).toLowerCase().includes(searchTerms.toLowerCase())
    });
    setFilteredItem(filtered);
  }

  if (loading) {
    return <div>Loading Please Wait!!</div>
  }
  if (errorMsg) {
    return <div>Error Occured!!{errorMsg}</div>
  }
  return (
    <>
      <div className='h-30 bg-[#353755] h-16 flex justify-center items-center'>
        <h1 className='text-center text-4xl font-semibold font-serif text-pink-100' onClick={() => Navigate('/')}>Food Recipe App</h1>
      </div>
      <div className='flex justify-center m-2'>
        <div className='w-52 h-9 relative flex justify-center'>
          <input type="text" className="border border-black hover:border-2 p-1 pr-9  pl-2 rounded-xl h-full outline-none  focus:border-blue-500" placeholder="Search any dish..." onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} value={search}>
          </input>
          <CiSearch className='absolute right-1 top-[7px] size-6' />
        </div>
      </div>
      <div className='flex flex-wrap items-center space-x-3 space-y-2  bg-slate-200 p-4 justify-center'>
        {
          filteredItem?filteredItem.map((val) => {
            return <FoodItem name={val.strMeal} image={val.strMealThumb} key={val.idMeal} id={val.idMeal} />}
            ):(dishes && dishes.length ? dishes.map((val) => {
            return dishes && dishes.length > 0 ? <FoodItem name={val.strMeal} image={val.strMealThumb} key={val.idMeal} id={val.idMeal} /> : <div>Not Found</div>
          }) : <div>Not Found</div>)
        }
      </div>
      <Alphabet change={(alpha) => changeUrl(alpha)} />

    </>
  )
}

export default Meal