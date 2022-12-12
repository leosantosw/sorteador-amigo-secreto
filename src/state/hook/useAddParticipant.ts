import { useRecoilValue, useSetRecoilState } from 'recoil';
import { participantList, erroState } from '../atom';

export const useAddParticipant = () => {
  const setParticipantList = useSetRecoilState(participantList);
  const listParticipants = useRecoilValue(participantList);
  const setErroState = useSetRecoilState(erroState);
  return (participantName: string) => {
    if(listParticipants.includes(participantName)) {
      setErroState('Nomes duplicados não são permitidos!');
      return;
    }

    return setParticipantList(
      (oldParticipantList) => [...oldParticipantList, participantName]    
    )
  }
}