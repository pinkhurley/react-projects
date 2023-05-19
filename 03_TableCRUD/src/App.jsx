import { useState } from "react";
import { Button, Input, Space } from "antd";
import Users from "./components/Users";
import UserModal from "./components/UserModal";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    sex: "boy",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    sex: "boy",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    sex: "girl",
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function App() {
  const { Search } = Input;
  const [users, setUser] = useState(data);
  const [dialogType, setDialogType] = useState("add");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [rowSelected, setRowSelected] = useState([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showAddModal = () => {
    setDialogType("add");
    setIsModalOpen(true);
  };

  const handleOk = (inputs) => {
    setUser([{ key: users.length + 1, ...inputs }, ...users]);
    setIsModalOpen(false);
  };

  const handleFormRemove = (id) => {
    setUser((prevUsers) => prevUsers.filter((user) => id !== user.key));
  };

  const handleFormRemoveSelected = () => {
    console.log(rowSelected);
    rowSelected.map((item) => handleFormRemove(item));
  };

  const showEditModal = (data) => {
    setDialogType("edit");
    setIsModalOpen(true);
    setCurrentRow(data);
  };

  const handleFormEdit = (data) => {
    setUser((prevUsers) =>
      prevUsers.map((t) => (t.key === data.key ? { key: t.key, ...data } : t))
    );
    setIsModalOpen(false);
  };

  const onSearch = (value) => {
    if (value.length < 1) setUser(data);

    setUser((prevUsers) =>
      prevUsers.filter((t) => {
        let tname = t.name;
        return tname.toLowerCase().includes(value.toLowerCase());
      })
    );

    value = "";
  };

  return (
    <>
      <div className="table_box">
        <div className="title">
          <h2>表单demo</h2>
        </div>
        <div className="search">
          <Search
            name="userSearch"
            placeholder="输入姓名"
            style={{ width: 200 }}
            onSearch={onSearch}
            enterButton
          />
          <div className="btns">
            <Space wrap>
              <Button type="primary" onClick={showAddModal}>
                新增
              </Button>
              <Button onClick={handleFormRemoveSelected}>删除所选</Button>
            </Space>
            <UserModal
              dialogType={dialogType}
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              handleOk={handleOk}
              currentRow={currentRow}
              handleFormEdit={handleFormEdit}
            />
          </div>
        </div>
        <div className="main">
          <Users
            data={users}
            handleFormRemove={handleFormRemove}
            showEditModal={showEditModal}
            setRowSelected={setRowSelected}
          />
        </div>
      </div>
    </>
  );
}

export default App;
