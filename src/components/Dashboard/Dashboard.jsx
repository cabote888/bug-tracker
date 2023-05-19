import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import Header from "../Header/Header";
import WrapperHeader from "../Header/WrapperHeader";

export default function Dashboard(props) {
  return (
    <div>
      <WrapperHeader>
        <h1 className="text-2xl font-brandon-bold text-dark-blue">Dashboard</h1>
        <Header>
          Welcome to the Dashboard of our Bug Tracker application! This page
          serves as a central hub where you can gain a comprehensive overview of
          your bug tracking activities and monitor the progress of your
          projects.
        </Header>
      </WrapperHeader>
      <div className="flex mt-10 gap-5">
        <p className="text-sm border-2 border-blue-200 p-3 rounded-lg shadow-lg">TOTAL ISSUES: {props.bugs.length}</p>
        <p className="text-sm border-2 border-blue-200 p-3 rounded-lg shadow-lg">TOTAL TEAM MEMBERS: {props.members.length}</p>
      </div>

      <div className="flex flex-wrap gap-5 h-80 mt-5">
        <div className="border-2 w-3/5 border-blue-200 p-3 rounded-lg shadow-lg">
          <BarChart bugs={props.bugs} />
        </div>
        <div className="border-2 border-blue-200 p-3 rounded-lg shadow-lg">
          <DoughnutChart bugs={props.bugs} />
        </div>
      </div>
    </div>
  );
}
