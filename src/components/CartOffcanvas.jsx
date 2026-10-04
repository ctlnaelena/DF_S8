import CartItem from './CartItem';
import { formatPrice } from '../utils/helpers';

/**
 * Panel lateral (offcanvas de Bootstrap) con el contenido del carrito.
 * Usa renderizado condicional para mostrar un mensaje cuando está vacío.
 */
function CartOffcanvas({ cart }) {
  const { cart: items, totalItems, totalPrice, addToCart, decreaseQuantity, removeFromCart, clearCart } = cart;
  const isEmpty = items.length === 0;

  return (
    <div
      className="offcanvas offcanvas-end offcanvas-ataraxia"
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartOffcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartOffcanvasLabel">
          Tu carrito {!isEmpty && <small className="cart-count">({totalItems})</small>}
        </h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
      </div>

      <div className="offcanvas-body d-flex flex-column">
        {/* Renderizado condicional: carrito vacío vs. listado de productos */}
        {isEmpty ? (
          <div className="cart-empty text-center my-auto">
            <p className="cart-empty-icon" aria-hidden="true">📚</p>
            <p className="mb-1">Tu carrito está vacío por ahora.</p>
            <p className="text-white-50 small mb-3">Explora el catálogo y encuentra tu próxima lectura.</p>
            <a href="#catalogo" className="btn btn-primary btn-sm" data-bs-dismiss="offcanvas">
              Ver catálogo
            </a>
          </div>
        ) : (
          <>
            <ul className="list-group list-group-flush mb-3">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() => addToCart(item)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </ul>

            <div className="mt-auto">
              <div className="d-flex justify-content-between border-top pt-3 mb-3">
                <strong>Total</strong>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <button className="btn btn-outline-light w-100" type="button" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartOffcanvas;
