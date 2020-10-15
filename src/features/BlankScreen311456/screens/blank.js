import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content123</Text>
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Button_2: {},
  Text_4: { color: "#df0707" },
  View_1: {},
  Button_2: {},
  Text_4: { color: "#df0707" },
  View_1: {},
  Button_2: {},
  Text_4: {},
  Text_6: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
