import { formatPrice } from '../utils/helpers';
import BookImage from './BookImage';

/**
 * Una fila del carrito: portada, título, precio, controles de cantidad
 * y botón para eliminar el producto completo.
 */
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <BookImage src={item.image} title={item.title} className="cart-item-thumb" />

      <div className="flex-grow-1">
        <strong className="d-block small">{item.title}</strong>
        <small className="text-white-50">{formatPrice(item.price)} c/u</small>
        <button type="button" className="btn btn-link btn-sm p-0 d-block cart-remove-link" onClick={onRemove}>
          Eliminar
        </button>
      </div>

      <div className="d-flex align-items-center gap-1">
        <button className="btn btn-sm btn-outline-light qty-btn" onClick={onDecrease} aria-label="Quitar una unidad">−</button>
        <span className="px-1">{item.quantity}</span>
        <button className="btn btn-sm btn-outline-light qty-btn" onClick={onIncrease} aria-label="Agregar una unidad">+</button>
      </div>

      <span className="fw-semibold small">{formatPrice(item.price * item.quantity)}</span>
    </li>
  );
}

export default CartItem;
