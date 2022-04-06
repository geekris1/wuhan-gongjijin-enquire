import "./App.scss";
import "antd/dist/antd.css";
function App() {
  function handleDetails() {
    window.open(
      "http://gjj.wuhan.gov.cn/wsbsdt/bszn/dkyw/202112/t20211214_1873303.html"
    );
  }
  return (
    <div className="all">
      <div className="title">
        本站数据来源：
        <span style={{ color: "#f4364c" }}>武汉住房公积金管理中心</span>{" "}
        <span className="details" onClick={handleDetails}>
          查看详情
        </span>
      </div>
    </div>
  );
}

export default App;
