import React, { useState } from "react";
import { Space, Table, Tag, Popconfirm } from "antd";

const Users = ({ data, handleFormRemove, showEditModal, setRowSelected }) => {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showEditModal(record)}>编辑</a>

          <a onClick={() => handleFormRemove(record.key)}>删除</a>
        </Space>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   `selectedRows: ${selectedRows}`
      //   // selectedRows
      // );
      setRowSelected(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};

export default Users;
