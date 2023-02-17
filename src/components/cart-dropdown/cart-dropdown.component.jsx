import { Button } from '../button/button.component.jsx';

import './cart-dropdown.styles.scss';


export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}