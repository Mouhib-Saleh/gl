import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../comp/api';
import Add from '../comp/Add';
import { FAB } from 'react-native-paper';
import Modal from 'modal-enhanced-react-native-web';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const width_proportion = '100%';

export default function Dash({navigation}) {
  

  const [val, setval] = useState(false);


  const [id, setid] = useState();
  const [pwd, setpwd] = useState();
  const [mail, setmail] = useState();
  const [addd, setaddd] = useState();
  const [test, settest] = useState(true);

  const classes = useStyles();
 
 

  const pressH = () =>{   
   setval(true) ;
   settest(false)
    }
    
  
  
 
    

   const pressH1 = () =>{   
    setval(false) ;
    setaddd(false) ;
    settest(true)
    
     }
     const pressadd = () =>{   
      setaddd(true) ;
  
    
      
       }
      
     
      


  return (
   
    


   <View  style={styles.c}  >
    <View  style={styles.b} >
   <Text  style={styles.b}>Welcome {navigation.getParam('id')}</Text>
   <Text >Users Data</Text>
   </View>
   <View >
   { addd &&  <Add name={id} mail={mail} password={pwd} />  }
  
     {test && <Api />}




        <StatusBar style="auto" />
        <Modal
        
        isVisible={val}
        onBackdropPress={() => setval(false)}
      >
        
        <View style={{flex: 1, justifyContent: 'center'}}>
     <Card >
  <Card.Title>Add User</Card.Title>
  <Card.Divider/>
 <View style={{flexDirection: 'row'}}>
    <Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
     User 
    </Text>
    <TextInput style={styles.input}

placeholder='e.g HG45'
onChangeText={(val) => setid(val)}
/>


</View>
<View style={{ flexDirection: 'row'}}>
<Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
      Mail
    </Text>
<TextInput style={styles.input}
placeholder='xyz@gmail.com'
onChangeText={(val) => setmail(val)}

/>

</View>
<View style={{ flexDirection: 'row'}}>
<Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
      Pass
    </Text>
<TextInput style={styles.input}

placeholder='*****'
onChangeText={(val) => setpwd(val)}
/>

</View>


    <Button
    
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:20}}
      title='Add' onPress={pressadd} />
  
</Card>
     
      <Button
    
    buttonStyle={{borderRadius: 0,width:50, marginLeft: 20, marginBottom: 0,marginTop:20,backgroundColor:'none'}}
    title='close' onPress={pressH1} />
    </View>






      </Modal>

       
      
      <View style={styles.t}> 

      <AppBar position="fixed" color="primary" className={classes.appBar}>

        
       <Toolbar>
         <IconButton edge="start" color="inherit" aria-label="open drawer" >
           <MenuIcon />
         </IconButton >
       
         <FAB   style={styles.fab} icon="plus" onPress={pressH} >
          
         </FAB>
        
        
       </Toolbar>
     </AppBar>
     
      </View>

      </View>
      </View>

      


  );
}

const styles = StyleSheet.create({
  b: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
    fontWeight: "bold" ,
    fontSize:30
   
  },
  c :{
    backgroundColor: '#fff',
  },
 fab:{
  position: 'absolute',
  margin: 20,
  right: 0,
  
  bottom: 0,
   
 },
input:{
borderWidth:1,
borderColor: '#777',
padding:8,
margin:10,
width:200,
borderRadius:10,

},
t: {
  
  width : width_proportion,
  marginLeft:0,
  padding:0
}



});
