import { View, Dimensions } from 'react-native';

const window = Dimensions.get("window");

export function getWidth(){
    return window.width
}

export function getHeight(){
    return window.height
}

export function getHalfWidth(){
    return window.width/2
}