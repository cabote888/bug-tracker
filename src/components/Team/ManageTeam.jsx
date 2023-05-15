import WrapperHeader from "../Header/WrapperHeader";
import Header from "../Header/Header";
import TeamMember from "./TeamMember";
import TeamForm from "./TeamForm";

export default function ManageTeam(props) {
  function onAddNewMemberHandler(enteredMember) {
    props.onAddNewMember(enteredMember);
  }

  return (
    <div>
      <WrapperHeader>
        <h1 className="text-2xl font-brandon-bold text-dark-blue">
          Manage team
        </h1>
        <Header>
          "Manage Team" is a feature on our website that enables you to
          efficiently manage your team members. With this tool, you can add,
          edit or remove team members, assign roles and permissions, and track
          progress. It streamlines communication and collaboration, helping you
          achieve your shared goals.
        </Header>
      </WrapperHeader>
      <TeamForm onAddNewMember={onAddNewMemberHandler} />
      <div className="mt-14 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-4 bg-blue-100 text-gray-400 rounded-t-lg p-3 text-xs">
          <p>MEMBER</p>
          <p className="place-self-center">POSITION</p>
          <p className="self-center text-center">DATE ADDED</p>
        </div>
        {props.members.map((member) => (
          <TeamMember
            name={member.name}
            mail={member.mail}
            position={member.position}
            date={member.date}
            key={member.id}
            id={member.id}
            onDeleteMember={props.onDeleteMember}
          />
        ))}
      </div>
    </div>
  );
}
