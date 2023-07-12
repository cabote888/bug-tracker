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
          Members & Teams
        </h1>
        <Header>
          With this tool, you can add, edit or remove team members, assign roles
          and permissions, and track progress.
        </Header>
      </WrapperHeader>
      <TeamForm members={props.members} onAddNewMember={onAddNewMemberHandler} />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:block justify-items-center gap-y-12 mt-14">
        <div className="hidden md:grid md:grid-cols-5 bg-blue-500 text-white rounded-t-lg p-3 text-xs font-medium">
          <p className="col-span-2">MEMBER</p>
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
