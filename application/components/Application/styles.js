import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  newTaskInput: {
    height: 40
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  task: {
    fontSize: 30
  },
  completeTask: {
    textDecorationLine: 'line-through'
  },
  incompleteTask: {}
});
