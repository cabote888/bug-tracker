import { useState, useEffect } from "react";
import WrapperHeader from "./WrapperHeader";
import Header from "./Header";
import TeamMember from "./TeamMember";
import TeamForm from "./TeamForm";
import { v4 as uuidv4 } from "uuid";

export default function ManageTeam(props) {
  const [team, setTeam] = useState(() => {
    const teamData = localStorage.getItem("team");
    return teamData ? JSON.parse(teamData) : [];
  });

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  function newMemberHandler(member) {
    setTeam((prevMember) => {
      return [{ ...member, id: uuidv4() }, ...prevMember];
    });
  }

  function deleteMemberHandler(id) {
    setTeam((prevTeam) => {
      return prevTeam.filter((member) => member.id !== id);
    });
  }

  props.newMembers(team)
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
      <TeamForm
        onNewMember={newMemberHandler}
        // onNewMemberName={newMemberNameHandler}
      />
      <div className="flex flex-wrap gap-10 mt-14">
        {team.map((member) => (
          <TeamMember
            name={member.name}
            age={member.age}
            role={member.role}
            key={member.id}
            onDeleteMember={() => deleteMemberHandler(member.id)}
          />
        ))}
      </div>
    </div>
  );
}
