import { uiActions } from "./ui-slice";

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
        { method: "PUT", body: JSON.stringify(cart) }
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
