export class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;  
    }

    get() {
        return fetch(`${this.baseUrl}/api/posts`)  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Posts not found: ' + response.statusText);
                }
               
                return response.json() ;
            })
            .catch(error => {
                console.error('Error in GET request for posts:', error);
                throw error;
            });
    }

   

    delete(id) {
        if (id){
            return fetch(`${this.baseUrl}/api/posts/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete: ' + response.statusText);
                }
    
                if (response.status === 204) {
                    return ; 
                }
    
            })
            .catch(error => {
                console.error('Error in DELETE request:', error);
                throw error;
            });
        } else {
            throw new Error("ID not provided");
        }

    }


    post(postData){
        return fetch(`${this.baseUrl}/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,
            },
            body: JSON.stringify(postData), 
        })
        .then(response =>{
            if (!response.ok) {
                throw new Error('Failed to create post: ' + response.statusText);
            }
            return response.json() ;
        })
        .catch(error => {
            console.error('Error : ',  error);
            throw error ;
        }) ;
    }

    update(postId, updatedPost) {
        return fetch(`${this.baseUrl}/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost ) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update post: ' + response.statusText);
            }
            return response.json() ;
        })
        .catch(error => {
            console.error('Error  :', error);
            throw error;
        });
    }
    
    
}


