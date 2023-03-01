import { useProductList } from '../hooks/useProductList';
import { FilterBar } from './FilterBar'
import { Product } from './Product';


export const ProductList = () => {

  const {products} = useProductList();

  return (
    <>
      <FilterBar />
      <div className='container mt-5 product-list'>
        {
          products.map( product => {
            return <Product key={product.id} {...product} />
          })
        }
      </div>
    </>
  )
}
