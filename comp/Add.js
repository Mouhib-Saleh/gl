import { StylesProvider } from '@material-ui/core';
import React, { useState,useEffect  } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';




 export default function Add (props) {
 
    const [name, setname] = useState(props.name);
    const [password, setpwd] = useState(props.password);
    const [mail, setmail] = useState(props.mail);
    const [dataSource, setData] = useState();
    const [vall, setvall] = useState(props.vall);
 
    useEffect(() => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name,
          password: password,
          mail: mail,})
    };
    fetch('http://localhost:3000/api/user/register', requestOptions)
    .then(response => response.json())
    .then(responseJson => setData(responseJson));
   
   
}, [vall]);


    
    if (dataSource) {
      alert('user Created')
      return ( null
      )
      }
      alert('Try Agian')
      return (null)
     
      

  
    };


    
   
    


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30,
        alignItems: 'center',
        paddingTop:15,
        backgroundColor:'#fff',
    },
    item:{
        flex:1,
        marginTop:10,
        padding: 15,
        alignSelf:'stretch',
        margin:10,
        alignItems:'left',
        justifyContent:'center',
        borderBottomWidth:1,
        backgroundColor:'steelblue',
        borderBottomColor:'#eee',

    }
});
