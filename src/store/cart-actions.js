import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://react-http-e9205-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error", // required since setting css classes using status
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const putCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const putRequest = async () => {
      const response = await fetch(
        "https://react-http-e9205-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        } // choose what to store in firebase db
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await putRequest();

      dispatch(
        uiActions.showNotification({
          status: "success", // required since setting css classes using status
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error", // required since setting css classes using status
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
