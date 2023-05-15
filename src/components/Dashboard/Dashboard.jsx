import BarChart from "./Charts/BarChart";

export default function Dashboard(props) {
  return (
    <div>
      <div className="flex justify-center gap-10 text-center mb-10">
        <div>
          <p>Total Tickets</p>
          <div>{props.bugs.length}</div>
        </div>
        <div>
          <p>Team Members</p>
          <div>{props.members.length}</div>
        </div>
      </div>
      <BarChart bugs={props.bugs} />
    </div>
  );
}
