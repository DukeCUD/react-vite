import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
const UsersPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserForm />
      <UserTable />
    </div>
  );
};
export default UsersPage;
