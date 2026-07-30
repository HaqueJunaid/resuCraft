fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'test2@test.com', password: 'password', name: 'Test' })
})
.then(res => res.json().then(data => ({status: res.status, body: data})))
.then(console.log)
.catch(console.error);
