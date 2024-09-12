import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default CartWidget;
