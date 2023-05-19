import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Radio, Select, message } from "antd";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label}必填!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} 请输入有效的数值!",
  },
  number: {
    range: "${label} 必须在 ${min} 和 ${max} 之间",
  },
};

const tagOptions = [
  {
    value: "cool",
    label: "cool",
  },
  {
    value: "teacher",
    label: "teacher",
  },
  {
    value: "songwriter",
    label: "songwriter",
  },
  {
    value: "engineer",
    label: "engineer",
  },
  {
    value: "happy",
    label: "happy",
  },
];

const UserModal = ({
  dialogType,
  isModalOpen,
  handleCancel,
  handleOk,
  currentRow,
  handleFormEdit,
}) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    // console.log(values);
    if (dialogType === "add") {
      handleOk(values);
      message.success("新增成功");
    } else if (dialogType === "edit") {
      handleFormEdit({ key: currentRow.key, ...values });
      message.success("编辑成功");
    }
  };

  const handleFormCancel = () => {
    form.resetFields();
    handleCancel();
  };

  useEffect(() => {
    if (currentRow) {
      form.setFieldsValue(currentRow);
    }
  }, [form, currentRow]);

  return (
    <>
      <Modal
        title={dialogType === "add" ? "新增" : "编辑"}
        open={isModalOpen}
        onCancel={handleFormCancel}
        okText="确认"
        cancelText="取消"
        onOk={form.submit}
        getContainer={false}
      >
        <Form
          {...layout}
          form={form}
          onFinish={handleFormSubmit}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label="姓名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input autoComplete="on" />
          </Form.Item>

          <Form.Item
            name={"age"}
            label="年龄"
            rules={[
              {
                type: "number",
                min: 1,
                max: 120,
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name={"sex"}
            label="性别"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group initialValues={"girl"}>
              <Radio name="girl" value="girl">
                girl
              </Radio>
              <Radio name="boy" value="boy">
                boy
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name={"address"} label="地址">
            <Input autoComplete="on" />
          </Form.Item>

          <Form.Item name={"tags"} label="标签">
            <Select
              mode="tags"
              style={{
                width: "100%",
              }}
              placeholder="选择标签"
              options={tagOptions}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
