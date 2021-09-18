import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 5,
    // margin: 5,
    // paddingHorizontal: 3,
    paddingRight: 8,
  },
  input: {
    ...fonts.reg_14,
    marginLeft: 3,
    flex: 1,
  },
  boxFilter: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  textFilter: {
    ...fonts.bold_12,
    color: colour.PRIMARY,
  },

  modalCont: {
    backgroundColor: 'white',
    marginHorizontal: 21,
  },
});

export default styles;
