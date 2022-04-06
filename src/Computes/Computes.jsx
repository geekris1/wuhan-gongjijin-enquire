import "./Computes.scss";
import { InputNumber, Form, Button } from "antd";
function Computes(props) {
  const { onCompute } = props;
  function handleFinish(values) {
    const {
      monthlyBase = 5000,
      personalPaymentRatio = 10,
      companyPaymentRatio = 10,
      loanTerm = 20,
      balance = 5000,
      time = 13,
    } = values;
    let coefficient = handleTimeCoefficient(time);
    if (coefficient === 0) {
      // :TODO
      onCompute(0);
    }
    let monthlyBaseValue =
      (monthlyBase / ((personalPaymentRatio + companyPaymentRatio) / 100)) *
      0.35 *
      12 *
      loanTerm;
    let balenceValue = balance * 20 * coefficient;
    onCompute({
      monthlyBaseValue: monthlyBaseValue.toFixed(),
      balenceValue: balenceValue.toFixed(),
    });
  }

  function handleTimeCoefficient(value) {
    if (value >= 6 && value <= 12) {
      return 0.5;
    }
    if (value > 12 && value <= 24) {
      return 0.8;
    }
    if ((value = 24 && value <= 36)) {
      return 1;
    }
    if ((value = 36 && value <= 60)) {
      return 1.2;
    }
    if (value > 60) {
      return 1.5;
    }
    return 0;
  }
  return (
    <div className="computers">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <h3>月缴存额</h3>
        <Form.Item
          label="月缴存额基数:"
          name="monthlyBase"
          rules={[
            {
              required: true,
              message: "请输入月缴存额基数",
            },
          ]}
        >
          <InputNumber
            addonAfter="元"
            placeholder="如公司按照5000基数缴纳,请输入5000"
          />
        </Form.Item>

        <Form.Item
          label="个人缴纳比例："
          name="personalPaymentRatio"
          rules={[{ required: true, message: "请输入个人缴纳比例!" }]}
        >
          <InputNumber addonAfter="%" placeholder="如个人缴纳10%，请输入10" />
        </Form.Item>

        <Form.Item
          label="公司缴纳比例："
          name="companyPaymentRatio"
          rules={[{ required: true, message: "请输入公司缴纳比例!" }]}
        >
          <InputNumber addonAfter="%" placeholder="如公司缴纳10%，请输入10" />
        </Form.Item>
        <Form.Item
          label="贷款期限："
          name="loanTerm"
          rules={[{ required: true, message: "请输入贷款期限!" }]}
        >
          <InputNumber addonAfter="年" placeholder="如20年，请输入20" />
        </Form.Item>
        <h3>缴存余额</h3>

        <Form.Item
          label="缴存余额:"
          name="balance"
          rules={[
            {
              required: true,
              message: "请输入缴存余额",
            },
          ]}
        >
          <InputNumber
            addonAfter="元"
            placeholder="如公司按照5000基数缴纳,请输入5000"
          />
        </Form.Item>
        <Form.Item
          label="社保缴纳时间:"
          name="time"
          rules={[
            {
              required: true,
              message: "请输入社保缴纳时间",
            },
          ]}
        >
          <InputNumber
            addonAfter="月"
            placeholder="如公司按照5000基数缴纳,请输入5000"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            计算
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Computes;
