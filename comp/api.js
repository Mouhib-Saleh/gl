import { StylesProvider } from '@material-ui/core';
import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';







export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          isLoading: true,
          dataSource: null,
    
    };
    }
    /*  proxyUrl = 'https://api.pluralsight.com:8000';
      url= '/localhost:3000/api/list';  */
componentDidMount(){
    return fetch( 'http://localhost:3000/api/User/list',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        'Content-Type': 'application/json',
        } } 
    )
     .then((response)=>response.json())
     .then((responseJson)=>{
         this.setState({
             isLoading: false,
             dataSource: responseJson, 
    
    })
     })
     .catch((error) => {
     console.log(error)
     });
}


  render() {
      if(this.state.isLoading){
          return(
              <View style={styles.container}>
           <ActivityIndicator />
            </View>   

  )
      } else {
       
        let users = this.state.dataSource.map((val,key)=>{
            return <View key ={key} style={styles.item}  >
<View style={{flex: 1, flexDirection: 'row'}}>
   <Text> {val.name} :</Text>
   <Text> {val.mail}</Text>
   </View>
   

            </View>
        });
        return(
          
           
            <View style={styles.container} >
           <ScrollView>
             {users}
             </ScrollView>
            </View>
            
             )

      }
        
      }
  }




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





 