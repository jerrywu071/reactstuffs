export default function Section({title, children, ...rest}) { 
    
    //for prop forwarding, rest is a catch all for any additional props passed to the component, which can be spread onto the element to allow for more flexibility and reusability of the component. This allows us to pass any additional props we want to the section component without having to explicitly define them in the component's parameters, making it more versatile and adaptable to different use cases.


    return (
        <section {...rest} /*spread the rest of the props onto the section element for prop forwarding*/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}