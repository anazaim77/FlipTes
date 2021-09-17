import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import MainContainers from '../../../templates/MainContainers';

class DetailTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainContainers>
        <Card>
          <Card.Content>
            <Text>Test</Text>
          </Card.Content>
        </Card>
      </MainContainers>
    );
  }
}

export default DetailTxnPage;
