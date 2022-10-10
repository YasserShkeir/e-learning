import AdminUserCard from "./AdminUserCard";

const AdminGetUsers = ({ option, data }) => {
  if (option) {
    return (
      <>
        {console.log(data.Data)}
        {data.Data.length > 1 ? (
          data.Data.map((user) => {
            // console.log(user.email);
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
          <p>{data.Data.name}</p>
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
