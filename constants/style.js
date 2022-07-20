import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
primary: '#ffffff',
secondary: '#E5E7EB',
tertiary: '#1F2937',
darkLight: '#9CA3AF',
brand: '#6D28D9',
green: '#10B981',
red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.view`
flex: 1;
padding: 25px;
padding-top: ${StatusBarHeight + 10}px;
background-color: ${primary};
`;

export const InnerContainer = styled.view`
flex: 1;
align-items: center;
width: 100%
`;

export const WelcomeContainer = styled(InnerContainer)`
padding: 25px;
padding-top: 10px;
justify-content: center;
`;

export const PageLogo = styled.image`
height: 200px;
width: 250px;
`;

export const Avatar = styled.image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;

`;

export const WelcomeImage = styled.image`
height: 50%;
min-width: 100%;
`;


export const PageTitle = styled.text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10x;

    ${(props) => props.welcome && `
    font-size: 35px;
    `}

`;
export const SubTitle = styled.text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    color: ${tertiary};
    font-weight: bold;
   
 ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    `}
`;

export const StyledFormArea = styled.view`
width: 90%;
`;

export const StyledTextInput = styled.TextInput`

padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 5px;
font-size: 16px:
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
background-color: ${tertiary};
`;

export const StyledInputLabel = styled.text`
    font-size: 13px;
    text-align: left;
    color: ${tertiary};
    `;

export const LeftIcon = styled.view`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    `;
export const RigthIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    `;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
     `}
    `;

export const ButtonText = styled.text`
    font-size: 16px;
    color: ${primary};

    ${(props) => props.google == true && `
       padding: 25px;
     `}
    `;

    export const MsgBox = styled.text`
    font-size: 13px;
    text-align: center;
    `;
    
    export const Line = styled.view`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px:
    `;

    export const ExtraView = styled.view`
        justify-content: center;
        flex-direction: row;
        align-items: center;
        padding: 10px;
    `;

    export const ExtraText = styled.text`
    justify-content: center;
    color: ${tertiary};
    align-content: center;
    font-size: 15px;
`;
       export const TextLink = styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
     
    `;

    export const TextLinkContent = styled.text`
    color: ${brand};
    font-size: 15px;
    `;

