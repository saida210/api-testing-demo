
import supertest from "supertest";
const request = supertest("https://jsonplaceholder.typicode.com");
import { expect } from "chai";


describe('Users API', () => {
    it('GET /users',() =>{
    // Make a GET request to the users
        request.get('/users').end((err, res) => {
            console.log(err);
            console.log(res.body);
            //return request.get("/users").then((res) => {
            //expect(res.body).to.not.be.empty;
 
        });
    });

    it('GET /users/:id',() =>{
        // Make a GET request to the specific user by id 
        return request.get('/users/1/').then((res) => {
            expect(res.body.id).to.be.eq(1);
        });
    });

        it('GET /users with query parameters',() =>{
            // Make a GET request to the user by specifying parameters 
            return request.get('/users&username=Samantha').then((res) => {
                expect(res.body.username).to.not.be.null;
                
          
            });
        });


        it('POST /users',() =>{
            //Make a post request to the user to add new data
            const data= {
                name: "Johny Simkoe",
                email: "johnytest210@gmail.com",
                username: "johnydeb",

            };

            return request
                .post('/users')
                .send(data)
                .then((res) =>{
                    console.log(res.body);
                    //expect(res.body).to.deep.include(data);
                    //expect(res.body.email).to.eq(data.email);
                    //expect(res.body.username).to.eq(data.username);
                
          
                });

        
        });


        it('PUT /users/:id',() =>{
            //Make a put request to update the existing user data
            const data= {
                
                username: "Malavika",
                email:   "malvikaayyr239@gmail.com",
            };

            return request
                .put('/users/3')
                .send(data)
                .then((res) =>{
                    console.log(res.body);
                    //expect(res.body).to.deep.include(data);
                
          
                });

        
        });
    });

    