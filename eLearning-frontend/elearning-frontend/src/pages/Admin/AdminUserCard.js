import classes from "./Admin.module.css";

const AdminUserCard = (name) => {
  return (
    <div className={classes.userCard}>
      <div className={classes.userCardCol}>
        <div className={classes.userCardLabel}>{name.name}</div>
        <div className={classes.userCardText}>Email: {name.email}</div>
      </div>
      <div className={classes.userCardCol}>
        <div className={classes.userCardText}>ID: {name.id}</div>
        <div className={classes.userCardText}>
          User Type:{" "}
          {name.userType == 1 ? (
            <>Admin</>
          ) : name.userType == 2 ? (
            <>Instructor</>
          ) : name.userType == 3 ? (
            <>Student</>
          ) : (
            <>Unassigned</>
          )}
        </div>
        <div className={classes.userCardText}>
          Created At: {name.created_at.substring(0, 19)}
        </div>
      </div>
    </div>
  );
};

export default AdminUserCard;
