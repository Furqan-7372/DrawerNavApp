import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} 
        options={{
          drawerLabel: 'Welcome',
          drawerIcon: ({color, size}) => (
            <Text style={{backgroundColor: color}} >Hi</Text>
          )
        }}
        />
        <Drawer.Screen name='User' component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
