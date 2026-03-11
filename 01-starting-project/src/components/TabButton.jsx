//always use on___ naming convention for props that should be set to a function based on an event
export default function TabButton({children, onSelect}) { 

    

    return <li><button onClick={onSelect}>{children}</button></li>; //outputs content from props (must include props). Do not include () for onClick={} prop in the function name. The DOM handles executing the function when the button itself is clicked
}