import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [coupon, setCoupon] = useState('');

  const applyDiscount = (price, quantity) => {
    const discountPercentage = 0.1;
    const discountedPrice = price * quantity * (1 - discountPercentage);
    return discountedPrice.toFixed(2);
  };

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onApplyCoupon = () => {
    // Lógica para aplicar el cupón de descuento al total
    const discountPercentage = 0.2;
    const discountedTotal = total * (1 - discountPercentage);
    setTotal(discountedTotal.toFixed(2));
  };

  const onPurchase = () => {
    // Lógica para realizar la compra
    alert('¡Compra realizada con éxito!');
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1>Tienda</h1>

      <div className='container-icon'>
        <div className='container-cart-icon' onClick={() => setActive(!active)}>
          <RiDeleteBinLine className='icon-cart' />
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>

        <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
          {allProducts.length ? (
            <>
              <div className='row-product'>
                {allProducts.map((product) => (
                  <div className='cart-product' key={product.id}>
                    <div className='info-cart-product'>
                      <span className='cantidad-producto-carrito'>{product.quantity}</span>
                      <p className='titulo-producto-carrito'>{product.nameProduct}</p>
                      <span className='precio-producto-carrito'>
                        ${applyDiscount(product.price, product.quantity)}
                      </span>
                    </div>
                    <RiDeleteBinLine className='icon-close' onClick={() => onDeleteProduct(product)} />
                  </div>
                ))}
              </div>

              <div className='cart-total'>
                <h3>Total:</h3>
                <span className='total-pagar'>${total}</span>
              </div>

              <div className='coupon-input'>
                <input
                  type='text'
                  placeholder='Ingrese el cupón de descuento'
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button onClick={onApplyCoupon}>Aplicar Cupón</button>
              </div>

              <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button>

              <button className='btn-purchase' onClick={onPurchase}>
                Comprar
              </button>
            </>
          ) : (
            <p className='cart-empty'>El carrito está vacío</p>
          )}
        </div>
      </div>
      </header>
  );
};