//always use on___ naming convention for props that should be set to a function based on an event
export default function TabButton({children, isSelected, ...rest}) { 

    

    return <li><button className={isSelected ? 'active' : undefined} {...rest}>{children}</button></li>; //outputs content from props (must include props). Do not include () for onClick={} prop in the function name. The DOM handles executing the function when the button itself is clicked
    //className is used in JSX instead of class to add styling
}