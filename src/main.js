import * as React from 'react';
import {SafeAreaView} from 'react-native';
import HomeNavigate from './navigation/HomeNavigate';
import {useDispatch} from 'react-redux';
import {getCategoriesAction, getWordsAction, initTeams} from './store/actions';

function Main() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(initTeams());
    dispatch(getWordsAction());
    dispatch(getCategoriesAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#456ff4" /> */}
      <HomeNavigate />
    </SafeAreaView>
  );
}

export default Main;
