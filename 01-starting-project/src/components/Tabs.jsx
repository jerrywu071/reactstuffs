export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) { 
    //destructure children and buttons from props, which are passed in as arguments to the component function. This allows us to access the children and buttons props directly without having to reference them as properties of the props object. We also default ButtonsContainer to menu if it is not provided as a prop when rendering the Tabs component. This allows us to use the Tabs component without having to specify a ButtonsContainer prop every time, while still allowing for flexibility in case we want to use a different container element for the buttons in certain instances of the Tabs component.

    //buttonsContainer will be a value that is passed in as a prop to determine what kind of wrapper element we want to contain the buttons in rather than just having it be a menu all the time. This lets future uses of Tabs be more flexible and reusable by allowing the user to specify the container element for the buttons. For example, if we wanted to use Tabs in a different section of the app where we want the buttons to be contained in a div instead of a menu, we could simply pass in "div" as the value for the buttonsContainer prop when rendering the Tabs component in that section. This also works with custom components made by the developer.

    //const ButtonsContainer = buttonsContainer || "menu"; //if buttonsContainer prop is not provided, default to menu. It  can also be set when defining the props.

    return(
        <>
            <ButtonsContainer>
                {buttons /*render the buttons prop, which is passed in as an argument to the component function. This allows us to render the buttons prop directly without having to reference it as a property of the props object.*/}
            </ButtonsContainer>
            {children}
        </>
    );
}