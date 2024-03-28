import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: '#ffffff', // background color
  },
  container: {
    
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    top: '40%',
    marginLeft: -150,
    marginTop: -100,
    elevation: 7,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  ageText: {
    color: '#000',
    fontSize: 18,
  },
  datetoday: {
    color: '#000',
    fontSize: 15,
    padding: 5,
  },
});

export default styles;
