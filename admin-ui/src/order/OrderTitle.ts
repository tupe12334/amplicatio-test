import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "test";

export const OrderTitle = (record: TOrder): string => {
  return record.test || record.id;
};
