import React, { FC, useEffect, useState } from 'react';
import VoteService from '../API/VoteService';
import { useFetching } from '../hooks/useFetching';

const VoteList: FC = () => {
  const defaultVotesArray: any[] = [];
  const [votes, setVotes] = useState(defaultVotesArray);

  const [fetchVotes, isVotesLoading, votesError] = useFetching(async () => {
    const votes = await VoteService.getAll();
    setVotes(votes);
  });

  useEffect(() => {
    fetchVotes();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(votes);

  return <div></div>;
};

export default VoteList;
