import { CustomButtonContainer } from "./custom-button.styles";

export const CustomButton = ({ children, ...otherProps }) =>
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
