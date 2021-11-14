import React, { FC, useEffect, useState } from 'react';
import VoteService from '../API/VoteService';
import { useFetching } from '../hooks/useFetching';
import { IVote } from '../models/IVote';
import CircularProgress from '@mui/material/CircularProgress';
import VoteRow from './VoteRow/VoteRow';
import LanguageSelect from './UI/LanguageSelect';
import classes from './VoteList.module.css';

const VoteList: FC = () => {
  const defaultVotesArray: IVote[] = [];
  const [votes, setVotes] = useState(defaultVotesArray);
  const [selectedSort, setSelectedSort] = useState('');
  const defaultOptions: string[] = [];
  const [options, setOptions] = useState(defaultOptions);

  const [fetchVotes, isVotesLoading, votesError] = useFetching(async () => {
    const votes = await VoteService.getAll();
    setVotes(votes);
    const optionsSet: Set<string> = new Set();
    votes.forEach((vote) => {
      optionsSet.add(vote.language);
    });
    setOptions(Array.from(optionsSet));
  });

  useEffect(() => {
    fetchVotes();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSortedVotes = () => {
    if (selectedSort) {
      return [...votes].filter((vote) => {
        return vote.language === selectedSort;
      });
    }
    return votes;
  };

  const sortedVotes = getSortedVotes();

  const sortVotes = (sort: string) => {
    setSelectedSort(sort);
    console.log(sort);
  };

  return (
    <div className={classes.Votes}>
      <LanguageSelect
        className={classes.Select}
        value={selectedSort}
        onChange={sortVotes}
        options={options}
      ></LanguageSelect>
      {isVotesLoading ? (
        <div className='VoteList__leader-wrapper'>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.VoteList}>
          {votesError && <h2>{votesError}</h2>}
          {sortedVotes.map((vote) => {
            return (
              <VoteRow key={vote.id} row={vote}>
                {' '}
              </VoteRow>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VoteList;
