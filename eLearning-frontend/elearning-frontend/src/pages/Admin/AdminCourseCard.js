import classes from "./Admin.module.css";

const AdminCourseCard = (course) => {
  return (
    <div className={classes.userCard}>
      <div className={classes.userCardCol}>
        <div className={classes.userCardLabel}>{course.code}</div>
        <div className={classes.userCardText}>Name: {course.name}</div>
      </div>
      <div className={classes.userCardCol}>
        <div className={classes.userCardText}>ID: {course.id}</div>
        <div className={classes.userCardText}>Credits: {course.credits}</div>
        <div className={classes.userCardText}>
          Created At: {course.created_at.substring(0, 19)}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseCard;
