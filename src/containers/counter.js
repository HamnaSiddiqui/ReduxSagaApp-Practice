import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import { store } from '../store/store';

const Counter = () => {
  const count = useSelector(state => state.count);
  const action = type => store.dispatch({type});

  return (
    <View>
      <Text style={{fontSize: 22, color: 'white'}}>counter: {count}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.incrementBtn}
          onPress={() => action('INCREMENT')}>
          <Text style={styles.textBtns}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.decrementBtn}
          onPress={() => action('DECREMENT')}>
          <Text style={styles.textBtns}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  incrementBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 100,
    margin: 5,
  },
  decrementBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 100,
    margin: 5,
  },
  textBtns: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
});
