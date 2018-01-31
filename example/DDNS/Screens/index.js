import React from "react";
import {TabNavigator} from 'react-navigation';
import DDNS from './DDNS';
import DDND from './DDND';
import DDNH from './DDNH';

export default TabNavigator({
    DDNS:{
        screen:DDNS
    },
    DDND:{
        screen:DDND
    },
    DDNH:{
        screen:DDNH
    }
    },{
      tabBarPosition: 'bottom',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 18,
          fontWeight:"bold"
        },
        style: {
          //backgroundColor: 'blue',
        },
      }
      
    });
    

//AppRegistry.registerComponent("UCLFantasy", () => App);
