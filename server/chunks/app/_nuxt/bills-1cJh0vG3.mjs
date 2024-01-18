import { p as useHttp } from '../server.mjs';

function getBillsPage(page, size, dto, token) {
  return useHttp.post(`/user/bills/list/${page}/${size}`, {}, {
    headers: {
      Authorization: token
    },
    body: {
      ...dto
    }
  });
}
function getBillsTotal(dto, token) {
  return useHttp.post("/user/bills/total/detail", {}, {
    headers: {
      Authorization: token
    },
    body: {
      ...dto
    }
  });
}
function getBillsTotalTable(dto, token) {
  return useHttp.post("/user/bills/total", {}, {
    headers: {
      Authorization: token
    },
    body: {
      ...dto
    }
  });
}
var TimeType = /* @__PURE__ */ ((TimeType2) => {
  TimeType2["Day"] = "DAY";
  TimeType2["Month"] = "MONTH";
  TimeType2["Year"] = "YEAR";
  return TimeType2;
})(TimeType || {});
var BillsType = /* @__PURE__ */ ((BillsType2) => {
  BillsType2[BillsType2["OUT"] = 0] = "OUT";
  BillsType2[BillsType2["IN"] = 1] = "IN";
  return BillsType2;
})(BillsType || {});
var CurrencyType = /* @__PURE__ */ ((CurrencyType2) => {
  CurrencyType2[CurrencyType2["BALANCE"] = 0] = "BALANCE";
  CurrencyType2[CurrencyType2["POINT"] = 1] = "POINT";
  return CurrencyType2;
})(CurrencyType || {});

export { BillsType as B, CurrencyType as C, TimeType as T, getBillsTotalTable as a, getBillsTotal as b, getBillsPage as g };
//# sourceMappingURL=bills-1cJh0vG3.mjs.map
