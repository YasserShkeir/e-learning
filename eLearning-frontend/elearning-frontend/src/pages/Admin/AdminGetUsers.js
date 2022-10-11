import AdminUserCard from "./AdminUserCard";

const AdminGetUsers = ({ option, data }) => {
  if (option && option != 0) {
    return (
      <>
        {data.Data.length > 1 ? (
          data.Data.map((user) => {
            return (
              <div key={user._id}>
                <AdminUserCard
                  name={user.name}
                  email={user.email}
                  id={user._id}
                  userType={user.userType}
                  created_at={user.created_at}
                />
              </div>
            );
          })
        ) : (
          <div key={data.Data._id}>
            <AdminUserCard
              name={data.Data.name}
              email={data.Data.email}
              id={data.Data._id}
              userType={data.Data.userType}
              created_at={data.Data.created_at}
            />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1>Waiting For Input...</h1>
      </>
    );
  }
};

export default AdminGetUsers;
