const functions = {
    add: (num1, num2) => num1+ num2,
    isNull: ()=> null,
    checkvalue: (x)=> x,
    createUser: ()=>{
        const user = {firstName: 'Brad'};
        user['lastName'] = 'Travercy';
        return user;
    }
}

module.exports = functions;