import styled from "styled-components/native";
import { colors } from "../../styles/colors.styles";

const StyledView = styled.View`
    align-items: center;
    align-content: center;
    justify-content: center;
`
const Header = styled.Text`
    align-self: center;
    color: black;
    font-size: 20px;
`
const InfoContainer = styled.View`
    flex: 1;
    align-content: center;
    margin-top: 5%;
`
const AccountImage = styled.Image`
    height: 200px;
    width: 200px;
    border-radius: 200px;
    align-self: center;
    margin: 20px;
`
const ImagePressable = styled.TouchableOpacity`
    height: 200px;
    width: 200px;
    border-radius: 200px;
    align-items: center;
    align-self: center;
    margin: 20px;
`
const LogoutButton = styled.TouchableOpacity`
    margin-top: 5%;
    align-items: center;
    background-color: ${colors.success};
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 15px;
    justify-content: center;
    height: 50px;
`
const TextButton = styled.Text`
    align-self: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

const DrawerText = styled.Text`
    font-size: 18px;
    margin: 20px;
`
const DrawerButton = styled.TouchableOpacity`
    flex: 1;
    align-content: center;
`


export { StyledView, Header, InfoContainer, AccountImage, LogoutButton, TextButton, DrawerText, DrawerButton, ImagePressable }