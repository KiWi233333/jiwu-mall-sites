import { j as useHttp } from '../server.mjs';

function getOrderPageByDTO(status, page, size, dto, token) {
  return useHttp.post(`/orders/${status}/${page}/${size}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function getAllOrderPage(page, size, dto, token) {
  return useHttp.post(`/orders/${page}/${size}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
var OrdersStatus = /* @__PURE__ */ ((OrdersStatus2) => {
  OrdersStatus2[OrdersStatus2["DELETED"] = -2] = "DELETED";
  OrdersStatus2[OrdersStatus2["READY"] = -1] = "READY";
  OrdersStatus2[OrdersStatus2["UN_PAID"] = 0] = "UN_PAID";
  OrdersStatus2[OrdersStatus2["PAID"] = 1] = "PAID";
  OrdersStatus2[OrdersStatus2["DELIVERED"] = 2] = "DELIVERED";
  OrdersStatus2[OrdersStatus2["RECEIVED"] = 3] = "RECEIVED";
  OrdersStatus2[OrdersStatus2["COMMENTED"] = 4] = "COMMENTED";
  OrdersStatus2[OrdersStatus2["CANCELED"] = 5] = "CANCELED";
  OrdersStatus2[OrdersStatus2["DELAY_CANCELED"] = 6] = "DELAY_CANCELED";
  OrdersStatus2[OrdersStatus2["REFUND"] = 7] = "REFUND";
  OrdersStatus2[OrdersStatus2["REFUND_SUCCESS"] = 8] = "REFUND_SUCCESS";
  return OrdersStatus2;
})(OrdersStatus || {});
function getOrdersInfoById(id, token) {
  return useHttp.get(`/orders/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function pushOrdersItems(addressId, items, remark, token) {
  return useHttp.post("/orders/", {
    addressId,
    items: [...items],
    remark
  }, {
    headers: {
      Authorization: token
    }
  });
}
function updateOrders(orderId, addressId, remark, token) {
  return useHttp.put(`/orders/${orderId}`, {
    addressId,
    remark
  }, {
    headers: {
      Authorization: token
    }
  });
}
function payOrders(orderId, type, points, voucherId, token) {
  return useHttp.put(`/orders/pay/${orderId}`, {
    type,
    points,
    voucherId
  }, {
    headers: {
      Authorization: token
    }
  });
}
var PayType = /* @__PURE__ */ ((PayType2) => {
  PayType2["WEALLET"] = "WALLET";
  PayType2["WECHAT"] = "WECHAT";
  PayType2["ALIPAY"] = "ALIPAY";
  return PayType2;
})(PayType || {});
function cancelOrders(id, token) {
  return useHttp.put(`/orders/cancel/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function refundOrders(id, token) {
  return useHttp.put(`/orders/refund/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function getDelivertOrders(id, token) {
  return useHttp.get(`/orders/delivery/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function checkDeliveryOrders(id, token) {
  return useHttp.put(`/orders/delivered/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function deleteOrders(id, token) {
  return useHttp.deleted(`/orders/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function toOrdersComment(orderId, dtoList, token) {
  return useHttp.post(`/orders/comment/${orderId}`, {
    list: dtoList.map((dto) => {
      dto.isAnonymous = +dto.isAnonymous;
      dto.isRecommend = +dto.isRecommend;
      return dto;
    })
  }, {
    headers: {
      Authorization: token
    }
  });
}

export { OrdersStatus as O, PayType as P, getDelivertOrders as a, payOrders as b, cancelOrders as c, checkDeliveryOrders as d, deleteOrders as e, getAllOrderPage as f, getOrdersInfoById as g, getOrderPageByDTO as h, pushOrdersItems as p, refundOrders as r, toOrdersComment as t, updateOrders as u };
//# sourceMappingURL=index-DNDo83-k.mjs.map
