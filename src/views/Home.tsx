import NewsEntry from "../components/NewsEntry";

function Dashboard() {
  return (
    <>
      {[...new Array(10)].map(() => (
        <NewsEntry entryId={1} />
      ))}
    </>
  );
}

export default Dashboard;
