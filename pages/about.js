import React from 'react';
// functional component
// When to use:
// 1. for smaller componets
// 2. reusable components
// 3. presentational components, partially right, as we can use HOOKS and specify state.
// const About = () => {
//     const message = 'Hello World'
//     return (
//         <h1>Hello About Page - {message}</h1>
//     )
// }



// class component
//

class About extends React.Component{

    render() {
        return (<h1>About page from class component</h1>)
    }

}




export default About