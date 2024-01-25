import { ref, watch } from 'vue';
import { O as OrdersStatus, g as getOrdersInfoById } from './index-DNDo83-k.mjs';
import { v as defineStore, u as useUserStore, S as StatusCode } from '../server.mjs';
import currency from 'currency.js';

const useOrderStore = defineStore("order", () => {
  const orderInfo = ref({
    id: "",
    userId: "",
    status: OrdersStatus.READY,
    name: "",
    province: "",
    city: "",
    county: "",
    address: "",
    postalCode: "",
    phone: "",
    remark: "",
    spendPrice: 0,
    totalPrice: 0,
    paidTime: "",
    createTime: "",
    updateTime: "",
    ordersItems: []
  });
  const orderId = ref("");
  const addressId = ref("");
  const unPaidVO = ref({});
  const status = ref(OrdersStatus.READY);
  const pushOrderItems = ref([]);
  const clearOrderItems = () => {
    orderId.value = "";
    addressId.value = "";
    status.value = OrdersStatus.READY;
    orderInfo.value = {
      id: "",
      userId: "",
      status: OrdersStatus.READY,
      name: "",
      province: "",
      city: "",
      county: "",
      address: "",
      postalCode: "",
      phone: "",
      remark: "",
      spendPrice: 0,
      totalPrice: 0,
      paidTime: "",
      createTime: "",
      updateTime: "",
      ordersItems: []
    };
    unPaidVO.value = {};
    pushOrderItems.value.splice(0);
  };
  const reloadOrderInfo = async (id) => {
    if (!id && orderId.value === "")
      return;
    const { data, code } = await getOrdersInfoById(id || orderId.value, useUserStore().getToken);
    if (code === StatusCode.SUCCESS) {
      orderInfo.value = data;
      orderId.value = data == null ? void 0 : data.id;
      status.value = data.status;
      unPaidVO.value.reducePrice = currency(data.totalPrice).subtract(data.spendPrice).value;
      unPaidVO.value.finalPrice = data.spendPrice;
    } else {
      clearOrderItems();
    }
  };
  watch(orderId, async (val) => {
    if (!val)
      return;
    await reloadOrderInfo();
  }, { immediate: true, deep: true });
  return {
    // state
    orderInfo,
    orderId,
    status,
    addressId,
    pushOrderItems,
    unPaidVO,
    // actions
    clearOrderItems,
    reloadOrderInfo
    // getter
  };
}, {
  persist: true
});

export { useOrderStore as u };
//# sourceMappingURL=useOrderStore-KiN84DL2.mjs.map
