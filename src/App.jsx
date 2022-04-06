import { useState } from "react";
import "./App.scss";
import "antd/dist/antd.css";
import Computes from "./Computes/Computes";
function App() {
  const [state, updateState] = useState();
  function handleDetails() {
    window.open(
      "http://gjj.wuhan.gov.cn/wsbsdt/bszn/dkyw/202112/t20211214_1873303.html"
    );
  }
  function handleCompute(value) {
    if (value === 0) {
      updateState(0);
    }
    const { monthlyBaseValue, balenceValue } = value;
    updateState({
      monthlyBaseValue,
      balenceValue,
      current: Math.min(Number(monthlyBaseValue), Number(balenceValue), 700000),
    });
  }
  return (
    <div className="all">
      <div className="title">
        本站数据来源：
        <span style={{ color: "#f4364c" }}>武汉住房公积金管理中心</span>
        <span className="details" onClick={handleDetails}>
          查看详情
        </span>
      </div>
      <Computes onCompute={handleCompute}></Computes>

      <div>
        {state === 0 ? (
          "当前缴纳社保时间不足6个月，无法办理公积金贷款吗"
        ) : state ? (
          <div>
            <div>
              当前月缴存额可贷款：
              <span style={{ color: "#096dd9" }}>
                {state.monthlyBaseValue}
              </span>{" "}
            </div>
            <div>
              当前缴存余额可贷款：
              <span style={{ color: "#096dd9" }}>
                {state.balenceValue}
              </span>{" "}
            </div>
            <div>
              按首套房计算可贷款：
              <span style={{ color: "#f4364c" }}>{state.current}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
