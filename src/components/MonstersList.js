import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMonsters } from '../actions';
import Monster from './Monster';

const MonsterList = (props) => {
  const { monsters, isFetching, error, getMonsters } = props;

  useEffect(() => {
    getMonsters();
  }, []);

  if(error) {
    return <h2>There is an error: {error}</h2>;
  };

  if(isFetching) {
    return <h2>Loading monsters!</h2>;
  };

  return(
    <div>
      <h1>List of Monsters</h1>
      {
        monsters.map(monster => {
          return(
            <Monster key={monster.id} props={monster} />
          )
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return({
    monsters: state.monsters,
    isFetching: state.isFetching,
    error: state.error
  });
};

export default connect(mapStateToProps, { getMonsters })(MonsterList);