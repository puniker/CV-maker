import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";

enum SocialTypes {
    GOOGLE = "Google",
    FACEBOOK = "Facebook"
}
interface Props {
    type: "Google" | "Facebook";
    text?: string;
    onClick: () => void;
}

export const SocialButton = ({type, text, onClick}: Props) => {
    const buttonText = (text) ? text : `Iniciar sesión con ${type}`
    switch(type){
        case SocialTypes.GOOGLE:
            return <GoogleLoginButton onClick={onClick}>{buttonText}</GoogleLoginButton>
        case SocialTypes.FACEBOOK:
            return <FacebookLoginButton onClick={onClick}>{buttonText}</FacebookLoginButton>  
        default:
            return <FacebookLoginButton onClick={onClick}>{buttonText}</FacebookLoginButton>  
    }
}