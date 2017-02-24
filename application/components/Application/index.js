import React, { Component } from 'react';
import styles from './styles';
import replaceWhere from '../../utils/replaceWhere';
import {
  Text,
  View,
  Button,
  TextInput,
  ListView
} from 'react-native';

export default class Application extends Component {
  state = {
    newTaskText: '',
    tasks: []
  };
  tasksDataSource = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
  handleUpdateNewTaskText = (newTaskText) => {
    this.setState({newTaskText});
  };
  handleCreateTask = () => {
    const {newTaskText, tasks} = this.state;
    const task = {
      id: tasks.length,
      text: newTaskText,
      complete: false
    };
    this.setState({
      newTaskText: '',
      tasks: [task, ...tasks]
    });
  };
  handleToggleTask = (taskId) => {
    const {tasks} = this.state;
    this.setState({
      tasks: replaceWhere(tasks,
        (task) => task.id === taskId,
        (task) => ({
          ...task,
          complete: !task.complete
        })
      )
    })
  };
  render() {
    const {newTaskText, tasks} = this.state;
    const {tasksDataSource} = this;
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.newTaskInput}
            placeholder="New task"
            value={newTaskText}
            onChangeText={this.handleUpdateNewTaskText}
            onSubmitEditing={this.handleCreateTask}
          />
          <ListView
            dataSource={tasksDataSource.cloneWithRows(tasks)}
            renderRow={(task) =>
              <Text
                key={task.id}
                style={[styles.task, task.complete ? styles.completeTask : styles.incompleteTask]}
                onPress={this.handleToggleTask.bind(null, task.id)}
              >
                {task.text}
              </Text>
            }
          />
      </View>
    );
  }
}
