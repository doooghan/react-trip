import { UserLayout } from "@/layouts/UserLayout";
import styles from "./RegisterPage.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const RegisterPage: React.FC = (props) => {
  console.log(props);
  const history = useHistory();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      await axios.post("auth/register", {
        email: values.username,
        password: values.password,
      });
      history.push("/signIn/");
    } catch (error) {
      console.error(error);
      alert("注册失败");
    }
  };

  return (
    <UserLayout>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["register-form"]}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          hasFeedback
          rules={[
            { required: true, message: "Please input your confirm password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("密码确认不一致！");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </UserLayout>
  );
};
