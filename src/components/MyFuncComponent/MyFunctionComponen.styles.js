import styled from 'styled-components';

/**
 * The benefit of using styled-components is that we are writing actual CSS and not some 
 * camelCased JS adapted version like we do in material-UI
 */
const Button = styled.button`
    color: brown;
    height: 2rem;
    width: 20rem;
    border: 1px;
    margin: 1rem
`

export {Button}