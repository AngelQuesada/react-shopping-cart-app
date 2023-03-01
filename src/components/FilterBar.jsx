import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export const FilterBar = () => {

  const { 
    priceFilter,
    setPriceFilter,
    categories,
    activeCategory,
    setActiveCategory
  } = useContext(ProductContext);

  const onChangeCategoryFilter = ({currentTarget:{value}}) => {
    setActiveCategory(value);
  }

  const clickPriceFilter = () => {
    switch (priceFilter) {
      case 'no':
        setPriceFilter('asc');
        break;
      case 'asc':
        setPriceFilter('desc');
        break;
      default:
        setPriceFilter('no');
        break;
    }
  }

  return (
    <div className="container mt-3 d-flex justify-content-between">
      <div 
        onClick={clickPriceFilter} 
        className={`btn ${ priceFilter ? 'btn-primary' : 'btn-outline-primary'} `}>
          Por precio: {priceFilter}
      </div>

      <select 
        style={{width: '250px'}} 
        defaultValue={activeCategory} 
        onChange={onChangeCategoryFilter} 
        className="form-select" >

        {
          categories.map( (category) => {
            return <option 
            key={category} 
            value={category}
            defaultValue={true}
            >  
            {category}
            </option>
          })
        }
      
      </select>

    </div>
  )
}
