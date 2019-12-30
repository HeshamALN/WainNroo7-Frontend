import React, {Component} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePickerr extends Component {

  render() {
    return (
      <View>
       <DateTimePicker value={new Date(Date.now())}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
      </View>
    );
  }
}