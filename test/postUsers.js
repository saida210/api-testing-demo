it('POST /users', () => {
    const data = {
        name:'Test user',
        email:'test_user@digitalonus.com',
     };
    return request
     .post ('/users')
     .send(data) // send payload data
     .then((res) => {
       assert.hasAnyKeys(res.body, 'id');
       assert.equal(res.body.name, data.name);
       assert.equal(res.body.email, data.email);
 
       });
 });