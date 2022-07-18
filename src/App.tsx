import React from 'react';
import { Text, View , StyleSheet, Image, ImageBackground,TouchableOpacity} from 'react-native';
import { images,icons } from './constants';
import { sumNumber, subNumber, PI } from './utils/Calculation';
import Icon from 'react-native-vector-icons/FontAwesome5';
/// action 1
// interface IAppProps{
//     products: {
//         productName: string;
//         year:number,
//     }[]
//     person: {
//         name:string,
//         age:number,
//         email:string,
//     }
//     x: number;
//     y: number;
//     z: number;
// }
//  const App : React.FC<IAppProps> =(props)=>{
   
     // const nếu biến k thay đổi
     // let khai báo biến local
     //
    // debugger
    //   alert(props.z);
 
//      const {person,x,y,products} = props
//       console.log(products);
      
//     return <View>
//         <Text>Value of x ={x}, Value of y = {y} , person {person.name} {person.age} {person.email}  </Text>
//         <Text> person {person.name} {person.age} {person.email}  </Text>
//         {products.map((product,index) =>  <Text key={index}> products {product.productName}   </Text>)}

//         <Text>Sum x,y ={sumNumber(x,y)}   </Text>
//         <Text>Sum x,y ={subNumber(x,y)}   </Text>
//         <Text>Sum x,y ={PI}   </Text>
           
       
        
//     </View>
//  }
interface IAppProps{
  
}
function App(props: IAppProps)  {
    
    return <View style={styles.container}>
        <ImageBackground source={images.background  } resizeMode='cover' style={styles.imageBackgroud}>
        <View style={styles.viewHeader}>
            <View style={styles.headerLeft}>
                <Image source={icons.ic_fire } style={styles.imageIcon}></Image> 
                 <Text style={styles.textStyle}> MinDecor99</Text>
            </View>
            <View style={styles.headerRight}>
                <Image source={icons.ic_question  } style={styles.iconRightHeader} ></Image> 
            </View>
        </View>
        <View style={styles.viewBody}>
                <Text style={styles.textStyleP}> Welcome</Text>
                <Text style={styles.textStyleH1}> MinDecor</Text>
                <Text style={styles.textStyleP}> Please select your account type</Text>
    
        </View>
        <View style={styles.viewForm}>
                <TouchableOpacity style={styles.buttonStyle} >
                    <View>
                     <Text style={styles.textStyle}> Influcencer</Text>
                        <Icon name={'check-circle'}></Icon>
                    </View>
            </TouchableOpacity>
    
        </View>
        <View style={styles.viewBottom}>
            
    
        </View>
            
       </ImageBackground>
     </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 100,
        width: '100%',
        height: '100%'
        
    },
    imageBackgroud: {
        flex: 100,
        alignSelf: 'stretch',
        width: '100%', 
        height: '100%'
    },
    viewHeader: {
        paddingHorizontal: 8 ,
        flexDirection: 'row',
        flex:15,
        justifyContent:'space-between',
        backgroundColor: 'transparent',
        

    },
    viewBody: {
        flex: 15,
        alignItems: 'center',
        justifyContent:'center'
    },
    textStyleP: {
        marginBottom: 7,
        color: 'black',
        fontSize:14,
    },
    textStyleH1: {
        marginBottom: 7,
        color: 'black',
        fontSize: 16,
        fontWeight:'bold'
    },
    viewForm: {flex:60, backgroundColor:"blue",},
    
    viewBottom:{flex:10,},
    headerLeft: {
        flexDirection: 'row',
        height: 50,
        // main
        justifyContent:'flex-start',
        backgroundColor: 'transparent',
        // cross row ra center dùng alignItem
        alignItems:'center',
    },
    headerRight: {
        // colomn dùng justify 
        justifyContent: 'center',
        height: 50,
    },
    imageIcon: {
        width: 30,
        height: 30,
        marginRight:5,
    },
    iconRightHeader: {
        width: 30,
        height: 30,
        tintColor: 'white',
        justifyContent: "center"
    
        
    },
    
    textStyle: {
        color: 'white',
        alignItems:'center',
    },
    buttonStyle: {
        borderColor: 'white',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        marginHorizontal:15,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems:'center',
       
     }
  
});
  
export default App;