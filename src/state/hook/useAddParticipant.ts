import { useSetRecoilState } from 'recoil';
import { participantList } from '../atom';

export const useAddParticipant = () => {
  const setParticipantList = useSetRecoilState(participantList);

  return (participantName: string) => {
    setParticipantList(
      (oldParticipantList) => [...oldParticipantList, participantName]
    )
  }
}