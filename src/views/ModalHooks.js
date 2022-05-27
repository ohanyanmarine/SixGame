import React, {useState} from 'react';

export default function ModalHooks() {
  const [isModalVisibleAddTeam, setModalVisibleAddTeam] = useState(false);
  const [isModalVisibleAddMember, setModalVisibleAddMember] = useState(false);
  const [isModalVisibleChangeTeamName, setModalVisibleChangeTeamName] =
    useState(false);

  const toggleModalAddTeam = () => {
    setModalVisibleAddTeam(!isModalVisibleAddTeam);
  };

  const toggleModalAddMember = () => {
    setModalVisibleAddMember(!isModalVisibleAddMember);
  };
  const toggleModalChangeTeamName = () => {
    setModalVisibleChangeTeamName(!isModalVisibleChangeTeamName);
  };
  const [isModalVisibleReg, setModalVisibleReg] = useState(false);
  const [isModalVisibleLog, setModalVisibleLog] = useState(false);

  const toggleModalReg = () => {
    setModalVisibleReg(!isModalVisibleReg);
  };
  const toggleModalLog = () => {
    setModalVisibleLog(!isModalVisibleLog);
  };
  return {
    isModalVisibleAddTeam,
    setModalVisibleAddTeam,
    toggleModalAddTeam,
    isModalVisibleAddMember,
    isModalVisibleChangeTeamName,
    setModalVisibleAddMember,
    toggleModalAddMember,
    setModalVisibleChangeTeamName,
    toggleModalChangeTeamName,
    toggleModalReg,
    setModalVisibleReg,
    isModalVisibleReg,
    toggleModalLog,
    setModalVisibleLog,
    isModalVisibleLog,
  };
}
