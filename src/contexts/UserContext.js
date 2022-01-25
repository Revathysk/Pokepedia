import React,{createContext} from 'react';


const object = {character: 'pokemaon',
                color: 'Yellow'
            }
// const action =()=> { const act ='funny'}
// const UserContext = createContext(object,action())
const UserContext = createContext(object)
export default UserContext;

