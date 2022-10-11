import AdminCourseCard from "./AdminCourseCard";

const AdminGetCourses = ({ option, data }) => {
  if (option) {
    return (
      <>
        {data.Data.length > 1 ? (
          data.Data.map((course) => {
            return (
              <div key={course._id}>
                <AdminCourseCard
                  code={course.code}
                  name={course.name}
                  id={course._id}
                  credits={course.credits}
                  created_at={course.created_at}
                />
              </div>
            );
          })
        ) : (
          <div key={data.Data._id}>
            <AdminCourseCard
              code={data.Data.code}
              name={data.Data.name}
              id={data.Data._id}
              credits={data.Data.credits}
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

export default AdminGetCourses;
